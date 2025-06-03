import React, { useState } from "react";
import { IconLink } from "@tabler/icons-react";

interface LinkPasteProps {
  handleLinkPaste: (Link: string) => void;
  isLoading: boolean;
}

const LinkPaste: React.FC<LinkPasteProps> = ({
  handleLinkPaste,
  isLoading,
}) => {
  const [link, setLink] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (link.trim()) {
      handleLinkPaste(link.trim());
      setLink("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-evenly w-full rounded-lg border border-neutral-700 bg-neutral-800 p-2"
    >
      <IconLink size={22} />
      <input
        id="link-paste"
        type="url"
        placeholder="Paste a website URL"
        className="rounded px-3 py-2 text-black dark:text-white bg-neutral-100 dark:bg-neutral-800 focus:outline-none
        w-55"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
        pattern="https?://.+"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition disabled:opacity-50 cursor-pointer"
        disabled={isLoading}
      >
        {isLoading ? "Translating..." : "Translate"}
      </button>
    </form>
  );
};

export default LinkPaste;
