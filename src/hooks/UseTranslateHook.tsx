import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

const useTranslate = (source: string, selectedLanguage: string) => {
  const [targetText, setTargetText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const translateText = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
        const prompt = `Translate ONLY the following text to ${selectedLanguage}. Return only the translated text. Do not add explanations, comments, alternatives, or quotes. Preserve the original meaning, tone, formatting, grammar and punctuation.
        
        Text: "${source}"`;
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash-lite",
          contents: [{ parts: [{ text: prompt }] }],
        });
        setTargetText(response.text || "");
        setError(null); // Clear error on success
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

  const clearTargetText = () => setTargetText("");

  return { targetText, error, clearTargetText };
};

export default useTranslate;
