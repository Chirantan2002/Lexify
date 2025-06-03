import { useEffect, useState } from "react";

const useTranslate = (source: string, selectedLanguage: string) => {
  const [targetText, setTargetText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const translateText = async () => {
      try {
        const res = await fetch("/api/translate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ source, selectedLanguage }),
        });
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setTargetText(data.translatedText);
      } catch (err) {
        setError("Translation failed! Please try again.");
      }
    };

    if (source.trim()) {
      const timeoutId = setTimeout(() => {
        translateText();
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [source, selectedLanguage]);

  return { targetText, error };
};

export default useTranslate;
