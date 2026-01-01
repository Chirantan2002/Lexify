"use client";
import React, { memo, useState } from "react";
import "regenerator-runtime/runtime";
import LanguageSelector from "@/components/Inputs/LanguageSelector";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
} from "@tabler/icons-react";
import TextArea from "@/components/Inputs/TextArea";
import VolumeComponent from "@/components/SpeechRecognition/VolumeComponent";
import useTranslate from "@/hooks/UseTranslateHook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "../../../../lib/utils";

interface OutputPanelProps {
  sourceText: string;
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
}

const OutputPanelComponent = ({
  sourceText,
  selectedLanguage,
  setSelectedLanguage,
}: OutputPanelProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);

  const [languages] = useState([
    { code: "bn", name: "Bengali" },
    { code: "zh", name: "Chinese" },
    { code: "hi", name: "Hindi" },
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ]);

  const { targetText, error, clearTargetText } = useTranslate(
    sourceText,
    selectedLanguage
  );
  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
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
    <div className="relative flex flex-col space-x-3 gap-4 border rounded-lg shadow-lg bg-neutral-800 border-neutral-700 shadow-gray-800">
      <TextArea
        id="target-language"
        height={220}
        value={targetText || ""}
        onChange={() => {}}
        placeholder="Translated text will appear here..."
      />
      {/* Throw error if any... */}
      {error && <div className="text-red-500 text-xs px-2">{error}</div>}
      {/* If any error occurs during translation! */}
      <div className="absolute bottom-0 flex flex-row justify-between w-full px-3 py-2 bg-transparent border-2 rounded-lg border-neutral-400/30">
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
          {/* Clear output */}
          <button
            onClick={clearTargetText}
            className="px-2 py-1 text-sm rounded bg-red-700 text-neutral-300 hover:bg-red-600 font-semibold tracking-wide"
            title="Clear Output"
          >
            Clear
          </button>
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
  );
};

export default memo(OutputPanelComponent);
