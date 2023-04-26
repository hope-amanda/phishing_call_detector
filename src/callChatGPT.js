const { Configuration, OpenAIApi } = require("openai");
const React = require('react');

var seen = new Set();

async function CallChatGPTAPI(stt_result) {
    console.log("stt_result has changed", stt_result);
    console.log("logging api key", process.env.REACT_APP_OPENAI_API_KEY);
    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `This is the speech-to-text transcription I am having with an unknown caller right now: ${stt_result} Could you tell me if this is "good" or a "scam"? Please ONLY respond with either "good" or "scam". Thanks.`,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
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
        if (!seen.has(stt_result)) {
          seen.add(stt_result);
          CallChatGPTAPI(stt_result).then((ret) => {
              console.log(ret);
            setResponse(ret);
        });
        }
      }, [stt_result]);

    return (
        <ul>
            <li>
                {stt_result}
            </li>
            <li>
                {response}
            </li>
        </ul>
    )
}