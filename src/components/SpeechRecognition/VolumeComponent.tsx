"use client";
import React from "react";
import { IconVolume } from "@tabler/icons-react";

// Fix: Remove the colon after sourceText and add proper typing
const VolumeComponent = ({
  sourceText,
  handleAudioPlayback,
  isActive = false,
}: {
  sourceText: string;
  handleAudioPlayback: (text: string) => void;
  isActive?: boolean;
}) => {
  return (
    <div>
      <IconVolume
        size={22}
        onClick={() => handleAudioPlayback(sourceText)}
        color={isActive ? "#70e000" : "lightgray"}
        stroke={2}
      />
    </div>
  );
};

export default VolumeComponent;
