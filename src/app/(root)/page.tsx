"use client";
import { cn } from "../../../lib/utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CategoryLinks from "@/components/CategoryLinks";
import InputComponent from "./_components/InputComponent";
import OutputPanelComponent from "./_components/OutputPanelComponent";
import { useState } from "react";

export default function Home() {
  const [sourceText, setSourceText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("hi");

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

        <div className="flex flex-col md:overflow-hidden items-center justify-center min-h-screen sm:px-8 p-8 gap-8 font-[family-name:var(--font-geist-sans)] mx-auto">
          <div className="absolute">
            <div className="text-center">
              <div className="mt-50 md:mt-0">
                <h1 className="font-bold text-neutral-300 text-4xl sm:text-6xl tracking-wide">
                  Lex<span className="text-green-400">ify</span>
                </h1>
                <p className="mt-3 text-neutral-400 hover:text-green-400 transition-colors duration-300 ease-in-out font-semibold tracking-wide">
                  Lexify: Bridging Voices, Connecting Worlds
                </p>
                <div className="mt-7 mx-auto max-w-3xl relative">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                    {/* Source Language */}
                    <InputComponent
                      sourceText={sourceText}
                      setSourceText={setSourceText}
                    />
                    {/* Target Language */}
                    <OutputPanelComponent
                      sourceText={sourceText}
                      selectedLanguage={selectedLanguage}
                      setSelectedLanguage={setSelectedLanguage}
                    />
                  </div>
                </div>
                <CategoryLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
