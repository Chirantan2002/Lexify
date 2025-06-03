import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";

const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [listening, transcript]);

  const handlingVoiceRecognition = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  return (
    <div>
      <IconMicrophone
        size={22}
        color={listening ? "#70e000" : "lightgray"}
        onClick={handlingVoiceRecognition}
        stroke={2}
      />
    </div>
  );
};

export default SpeechRecognitionComponent;
