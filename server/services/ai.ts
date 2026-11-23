import { GoogleGenAI } from '@google/genai';
import {
  DEV_RESUME_CONTEXT,
  SYSTEM_INSTRUCTION,
} from '../data/portfolioContext.js';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('GEMINI_API_KEY가 설정되지 않았습니다.');
}

// const ai = new GoogleGenAI({ apiKey });
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    apiVersion: 'v1beta',
  },
});

interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

export async function createChatReply(
  message: string,
  history: ChatTurn[] = []
) {
  const contents = [
    ...history.map((item) => ({
      role: item.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: item.content }],
    })),
    { role: 'user', parts: [{ text: message }] },
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents,
    config: {
      systemInstruction: `
        ${SYSTEM_INSTRUCTION}

        [개발자 이력서 정보]
        ${DEV_RESUME_CONTEXT}
      `,
      temperature: 0.3,
      maxOutputTokens: 8192,
    },
  });

  return response.text;
}
