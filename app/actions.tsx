"use server";
import { createStreamableValue } from "ai/rsc";
import ui from "@/data/ui.json";
import { createOpenAI } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function continueConversation() {
  const stream = createStreamableValue<string, string>();
  const render = ui[0];
  stream.done(render);
  return stream.value;
}

export async function getPackageNames(code: string) {
  try {
    const openrouter = createOpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY_1 as string,
    });

    const result = await generateText({
      model: openrouter("mistralai/mistral-7b-instruct:free"),
      prompt: `Extract package names from the following code snippet:\n\n${code}
    The response should a JSON parsable array of package names. If no package names are found, return an empty array.
    `,
    });
    const finalArr = `[${result.text.split("[").pop()?.split("]").shift()}]`;
    if (finalArr.startsWith("[")) {
      return JSON.parse(finalArr);
    } else {
      return finalArr.split(",");
    }
  } catch (e) {
    console.error(e);
  }
}
