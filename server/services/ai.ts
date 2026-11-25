
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

type ChatLanguage = 'ko' | 'en' | 'ja' | 'zh';

const languageNames: Record<ChatLanguage, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '简体中文',
};

export async function createChatReply(
  message: string,
  history: ChatTurn[] = [],
  language: ChatLanguage = 'ko',
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

        [답변 언어 설정]
        사용자가 현재 선택한 언어는 ${languageNames[language]}입니다.
        반드시 ${languageNames[language]}로 답변해 주세요.
        사용자가 다른 언어로 질문하더라도 답변은 ${languageNames[language]}로 작성해 주세요.
        단, 기술 용어, 라이브러리 이름, 프레임워크 이름, 코드 등은 원래 표기를 유지해 주세요.
      `,
      temperature: 0.3,
      maxOutputTokens: 8192,
    },
  });

  return response.text;
}