import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createChatReply } from '../server/services/ai';

interface ChatTurn {
  role: 'user' | 'ai';
  text: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: '허용되지 않은 요청 방식입니다.',
    });
  }

  try {
    const { message, history } = req.body as {
      message?: string;
      history?: ChatTurn[];
    };

    // 메시지 유효성 검사
    if (typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({
        error: '메시지가 비어있습니다.',
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: '메시지는 1000자 이하로 입력해 주세요.',
      });
    }

    // 대화 이력 검증 및 정리
    const safeHistory = Array.isArray(history)
      ? history
          .filter(
            (item) =>
              item &&
              (item.role === 'user' || item.role === 'ai') &&
              typeof item.text === 'string',
          )
          .slice(-10)
          .map((item) => ({
            role: item.role === 'ai' ? 'assistant' as const : 'user' as const,
            content: item.text.slice(0, 2000),
          }))
      : [];

    // Gemini API 호출
    const reply = await createChatReply(
      message.trim(),
      safeHistory,
    );

    return res.status(200).json({
      reply: reply || '답변을 생성하지 못했습니다.',
    });
  } catch (error) {
    console.error('Gemini API 에러:', error);

    return res.status(500).json({
      error: 'AI 응답을 가져오는 중 오류가 발생했습니다.',
    });
  }
}
