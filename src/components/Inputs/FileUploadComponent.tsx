"use client";
import React from "react";
import { IconPaperclip } from "@tabler/icons-react";

interface FileUploadProps {
  handleFileUpload: (file: File) => void;
}

const FileUploadComponent: React.FC<FileUploadProps> = ({
  handleFileUpload,
}) => {
  return (
    <label htmlFor="file-upload" className="cursor-pointer">
      <IconPaperclip size={22} />
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            handleFileUpload(file);
          }
        }}
      />
    </label>
  );
};

export default FileUploadComponent;
