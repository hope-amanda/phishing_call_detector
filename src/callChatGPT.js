import {v4 as uuidv4} from 'uuid';
const { Configuration, OpenAIApi } = require("openai");
const React = require('react');

async function CallChatGPTAPI(stt_result) {
    const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello. I am an elderly person. The following is the speech-to-text transcription I am having with an unknown caller right now. Could you alert me with a \"all good\" or \"potential danger\" if any parts of the call suggest malicious intent from the other person? ${stt_result}",
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });

    // Extract the first choice as a string
    const choice = response.data.choices[0];
    return choice.text;
}

export default function RenderChatGPT({stt_result}) {
    const [response, setResponse] = React.useState("");

    React.useEffect(() => {
        CallChatGPTAPI(stt_result).then((ret) => {
            console.log(ret);
          setResponse(ret);
        });
      }, [stt_result]);

    return (
        <ul>
            <li>
                {stt_result}
            </li>
            <li key={uuidv4()}>
                {response}
            </li>
        </ul>
    )
}