"use client";
import React from "react";

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  id,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <textarea
      rows={7}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="py-2 px-4 border-none outline-none rounded-lg bg-neutral-800 text-neutral-200 placeholder:text-neutral-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 w-full resize-none"
    />
  );
};

export default TextArea;
