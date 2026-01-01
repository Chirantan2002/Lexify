"use client";
import "regenerator-runtime/runtime";
import FileUploadComponent from "@/components/Inputs/FileUploadComponent";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import TextArea from "@/components/Inputs/TextArea";
import VolumeComponent from "@/components/SpeechRecognition/VolumeComponent";
import { ChangeEvent, memo, useState } from "react";

interface InputComponentProps {
  sourceText: string;
  setSourceText: (text: string) => void;
}

const InputComponent = ({ sourceText, setSourceText }: InputComponentProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleAudioPlayback = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="relative flex flex-col space-x-3 gap-4 border rounded-lg shadow-lg bg-neutral-800 border-neutral-700 shadow-gray-800">
      <div className="w-full">
        <TextArea
          id="source-language"
          height={220}
          value={sourceText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setSourceText(e.target.value);
          }}
          placeholder="Enter text to translate"
        />
      </div>
      <div className="flex flex-row justify-between w-full px-3 py-3 bg-transparent border-2 rounded-lg border-neutral-400/30">
        <span className="cursor-pointer flex flex-row space-x-2">
          <SpeechRecognitionComponent setSourceText={setSourceText} />
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
    </div>
  );
};

export default memo(InputComponent);
