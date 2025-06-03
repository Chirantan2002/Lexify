"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
import { cn } from "../../lib/utils";
import TextArea from "@/components/Inputs/TextArea";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import VolumeComponent from "@/components/SpeechRecognition/VolumeComponent";
import FileUploadComponent from "@/components/Inputs/FileUploadComponent";
import LinkPaste from "@/components/Inputs/LinkPaste";
import { rtfToText } from "@/utils/rtfToText";
import useTranslate from "@/hooks/UseTranslateHook";
import LanguageSelector from "@/components/Inputs/LanguageSelector";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryLinks from "@/components/CategoryLinks";

export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);

  {
    /* Fixed the bug with languages */
  }
  const [languages] = useState([
    { code: "bn", name: "Bengali" },
    { code: "zh", name: "Chinese" },
    { code: "hi", name: "Hindi" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ]);

  const [selectedLanguage, setSelectedLanguage] = useState<string>("hi");

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const { targetText, error } = useTranslate(sourceText, selectedLanguage); // Bug fixed here!

  const handleFavorite = () => {
    setFavorite(!favorite);
    toast.success(
      favorite ? "Removed from favorites!" : "Added to favorites!",
      {
        position: "top-right",
        autoClose: 1900,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
      }
    );
  };

  return (
    <>
      <ToastContainer />
      <div className="relative flex h-full w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] dark:bg-black"></div>

        <div className="flex flex-col mt-10 sm:mt-20 md:mt-0 md:overflow-hidden items-center justify-center min-h-screen sm:px-8 p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
          <div className="absolute">
            <div className="text-center">
              <h1 className="font-bold text-neutral-300 text-4xl sm:text-6xl tracking-wide">
                Lex<span className="text-blue-400">ify</span>
              </h1>
              <p className="mt-3 text-neutral-400">
                Lexify: Bridging Voices, Connecting Worlds
              </p>
              <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                  <div className="relative flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-800 border-neutral-700 shadow-gray-800">
                    <TextArea
                      id="source-language"
                      value={sourceText}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                        setSourceText(e.target.value);
                      }}
                      placeholder="Enter text to translate"
                    />
                    <div className="flex flex-row justify-between w-full px-3 py-2 bg-transparent">
                      <span className="cursor-pointer flex flex-row space-x-2">
                        <SpeechRecognitionComponent
                          setSourceText={setSourceText}
                        />
                        <VolumeComponent
                          sourceText={sourceText}
                          handleAudioPlayback={handleAudioPlayback}
                          isActive={isActive}
                        />
                        <FileUploadComponent handleFileUpload={(file) => {}} />
                      </span>
                      <span className="text-sm text-neutral-300">
                        {sourceText.length} / 2000
                      </span>
                    </div>
                    <div className="flex flex-row justify-between w-full px-1 py-2 bg-transparent">
                      <LinkPaste
                        handleLinkPaste={(link) => {}}
                        isLoading={false}
                      />
                    </div>
                  </div>

                  <div className="relative flex flex-col space-x-3 border rounded-lg shadow-lg bg-neutral-800 border-neutral-700 shadow-gray-800">
                    <TextArea
                      id="target-language"
                      value={targetText || ""}
                      onChange={() => {}}
                      placeholder={"Target Language"}
                    />
                    {/* Throw error if any... */}
                    {error && (
                      <div className="text-red-500 text-xs px-2">{error}</div>
                    )}
                    {/* If any error occurs during translation! */}
                    <div className="flex flex-row justify-between w-full px-3 py-2 bg-transparent">
                      <span className="cursor-pointer flex space-x-2 flex-row items-center justify-start">
                        <LanguageSelector
                          selectedLanguage={selectedLanguage}
                          setSelectedLanguage={setSelectedLanguage}
                          languages={languages}
                        />
                        <VolumeComponent
                          sourceText={targetText || ""}
                          handleAudioPlayback={handleAudioPlayback}
                          isActive={isActive}
                        />
                      </span>
                      <div className="flex flex-row items-center space-x-2">
                        <IconCopy
                          size={22}
                          onClick={() => {
                            navigator.clipboard.writeText(targetText || "");
                            setCopied(true);
                            toast.success("Copied to clipboard!", {
                              position: "top-right",
                              autoClose: 1900,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: false,
                              draggable: false,
                              theme: "dark",
                            });
                            setTimeout(() => setCopied(false), 1200);
                          }}
                          className={cn(
                            "cursor-pointer",
                            copied ? "text-blue-400" : "text-neutral-300"
                          )}
                          onMouseEnter={() => setCopied(true)}
                          onMouseLeave={() => setCopied(false)}
                        />
                        <IconThumbUp
                          size={22}
                          onClick={() => {}}
                          className="cursor-pointer text-neutral-300 hover:text-blue-400"
                        />
                        <IconThumbDown
                          size={22}
                          onClick={() => {}}
                          className="cursor-pointer text-neutral-300 hover:text-blue-400"
                        />
                        <IconStar
                          size={22}
                          onClick={handleFavorite}
                          onMouseEnter={() => setFavorite(true)}
                          className="cursor-pointer text-neutral-300 hover:text-yellow-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CategoryLinks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
