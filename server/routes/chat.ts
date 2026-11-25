
import { Router } from 'express';
import { createChatReply } from '../services/ai.js';

const router = Router();

interface ChatTurn {
  role: 'user' | 'ai';
  text: string;
}

type ChatLanguage = 'ko' | 'en' | 'ja' | 'zh';

const supportedLanguages: ChatLanguage[] = ['ko', 'en', 'ja', 'zh'];

router.post('/chat', async (req, res) => {
  try {
    const { message, history, language } = req.body as {
      message?: string;
      history?: ChatTurn[];
      language?: string;
    };

    if (typeof message !== 'string' || !message.trim()) {
      res.status(400).json({
        error: '메시지가 비어있습니다.',
      });
      return;
    }

    if (message.length > 1000) {
      res.status(400).json({
        error: '메시지는 1000자 이하로 입력해 주세요.',
      });
      return;
    }

    // 지원하는 언어인지 확인
    const safeLanguage: ChatLanguage = supportedLanguages.includes(
      language as ChatLanguage,
    )
      ? (language as ChatLanguage)
      : 'ko';

    // 최근 대화 기록 10개만 전달
    const safeHistory = Array.isArray(history)
      ? history
          .filter(
            (item) =>
              (item.role === 'user' || item.role === 'ai') &&
              typeof item.text === 'string',
          )
          .slice(-10)
          .map((item) => ({
            role: item.role === 'ai' ? 'assistant' as const : 'user' as const,
            content: item.text.slice(0, 2000),
          }))
      : [];

    // 선택한 언어와 함께 AI 답변 요청
    const reply = await createChatReply(
      message.trim(),
      safeHistory,
      safeLanguage,
    );

    res.status(200).json({
      reply: reply || '답변을 생성하지 못했습니다.',
    });
  } catch (error) {
    console.error('Gemini API 에러:', error);

    res.status(500).json({
      error: 'AI 응답을 가져오는 중 오류가 발생했습니다.',
    });
  }
});

export default router;
