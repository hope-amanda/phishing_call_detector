import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import RenderChatGPT from './callChatGPT';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';


import NavBar from './NavBar.js'

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

  const StyledHeader = styled('body')({
    backgroundColor: 'lightblue',
    paddingLeft: '80px',
    paddingTop: '50px',
    paddingBottom: '50px',
    fontFamily: 'Open Sans, sans-serif',
  });

  const StyledBody = styled('body')({
    paddingLeft: '80px',
    paddingTop: '50px',
    fontFamily: 'Open Sans, sans-serif',
  });


  return (
    <div >
      <NavBar />
      <StyledHeader>
        <h1>{isRecording ? 'Recording Has Started' : 'Ready To Record Phone Call'} </h1>
        <Button onClick={isRecording ? stopSpeechToText : startSpeechToText} variant="contained">
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>

      </StyledHeader>
      <StyledBody>
        <h2>Call Transcript:</h2>
        <ul>
          {results.map((result) => (
            // <li key={result.timestamp}>asdf{result.transcript}</li>
            <RenderChatGPT stt_result={result.transcript} />
          ))}
          {interimResult && <li>{interimResult}</li>}
        </ul>
      </StyledBody>
    </div>
  );
}
