import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import RenderChatGPT from './callChatGPT';

//https://github.com/Riley-Brown/react-speech-to-text
export default function AnyComponent() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    googleApiKey: '9d3eda7871a426914b3a1042b35f9d63583c7241',
    useLegacyResults: false
});

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result) => (
          // <li key={result.timestamp}>asdf{result.transcript}</li>
          <RenderChatGPT stt_result={result.transcript}/>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}
