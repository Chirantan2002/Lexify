import React, { useEffect, useState } from "react";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: 'Ukrg2uCFNKMr8WRxOsk5ScIBaFRP9GccwN6icdE57iyGB3IfirwqtMFSsLzBRiwKK1NT3BlbkFJDuV9Mduvdr8eD2875x6XL4X-jTWHU4qnyKAQVkp5a6vAGD6XO-62WNRQt-1fXA-uJueN0XR_MA',
  dangerouslyAllowBrowser: true,
});

const useTranslate = (source: string, selectedLanguage: string) => {
  const [targetText, setTargetText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const translateText = async () => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          store: true,
          messages: [
            {
              role: "system",
              content: `Translate the following text to ${selectedLanguage}, do not return anything else other than the translated text.`,
            },
            { role: "user", content: source },
          ],
        });
        const data = response.choices[0].message.content;
        setTargetText(data);
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
