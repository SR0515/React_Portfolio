
import { useEffect, useRef, useState } from 'react';
import {
  X,
  Send,
  MessageCircle,
  Bot,
  Sparkles,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
} from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'ai';
  text: string;
}

const suggestions = [
  {
    icon: BriefcaseBusiness,
    title: '주요 프로젝트',
    description: '어떤 프로젝트를 진행했나요?',
    message: '포트폴리오에 어떤 프로젝트들이 있어?',
  },
  {
    icon: Code2,
    title: '기술 스택',
    description: '사용할 수 있는 기술이 궁금해요.',
    message: '김수린 개발자의 핵심 기술 스택은 뭐야?',
  },
  {
    icon: FolderKanban,
    title: '프로젝트별 담당 업무',
    description: '8개 프로젝트의 주요 업무와 기술 스택을 알아봐요.',
    message: '프로젝트들에서 어떤 업무를 담당했어?',
  },
  {
    icon: Sparkles,
    title: 'AI 챗봇 구현 방식',
    description: '이 포트폴리오 챗봇은 어떻게 만들었나요?',
    message: '이 포트폴리오의 AI 챗봇은 어떤 기술을 사용했고, 어떻게 구현했어?',
  },
];

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 메시지 추가 또는 채팅창 열림 상태 변경 시 최하단으로 스크롤
  useEffect(() => {
    if (isOpen && chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading, isOpen]);

  // 채팅창 열기 / 닫기
  const toggleChat = () => {
    setIsOpen((prev) => {
      if (!prev) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      return !prev;
    });
  };

  // 메시지 전송
  const sendMessage = async (message?: string) => {
    const userText = (message ?? inputMessage).trim();

    if (!userText || isLoading) return;

    const currentHistory = messages;

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: userText },
    ]);

    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userText,
          history: currentHistory,
        }),
      });

      const responseText = await response.text();

      if (!responseText) {
        throw new Error('서버에서 빈 응답을 반환했습니다.');
      }

      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error('서버 응답이 JSON 형식이 아닙니다.');
      }

      if (!response.ok) {
        throw new Error(data.error || 'AI 응답을 가져오지 못했습니다.');
      }

      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: data.reply || '답변을 생성하지 못했습니다.',
        },
      ]);
    } catch (error) {
      console.error('Chatbot API Error:', error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : '서버와 통신하는 중 오류가 발생했습니다.';

      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: `오류가 발생했어요.\n${errorMessage}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // 추천 질문 클릭
  const handleSuggestion = (message: string) => {
    if (isLoading) return;
    sendMessage(message);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 font-sans">

      {/* 챗봇 대화창 */}
      {isOpen && (
        <div
          className="
            flex h-[620px] max-h-[calc(100dvh-110px)]
            w-[calc(100vw-32px)] max-w-[410px]
            origin-bottom-right flex-col overflow-hidden
            rounded-[24px] border border-gray-200
            bg-white shadow-[0_12px_60px_rgba(15,23,42,0.16)]
            animate-[slideUp_0.25s_ease-out]
          "
        >

          {/* 헤더 */}
          <div className="flex shrink-0 items-center justify-between border-b border-gray-100 bg-white px-5 py-4">

            <div className="flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#346AFF] text-white shadow-[0_4px_12px_rgba(52,106,255,0.25)]">
                <Bot size={23} strokeWidth={1.8} />

                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
              </div>

              <div>
                <h3 className="text-[15px] font-bold tracking-tight text-[#191F28]">
                  수린 AI 어시스턴트
                </h3>

                <p className="mt-0.5 flex items-center gap-1 text-[11px] font-medium text-gray-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  온라인 · 무엇이든 물어보세요
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={toggleChat}
              aria-label="채팅창 닫기"
              className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <X size={19} />
            </button>
          </div>

          {/* 메시지 영역 */}
          <div
            ref={chatContainerRef}
            className="flex flex-1 flex-col gap-5 overflow-y-auto bg-[#F5F7FA] px-4 py-5 sm:px-5"
          >
            {/* 최초 인사말 */}
            {messages.length === 0 && (
                <div className="flex flex-1 flex-col justify-center">
                    <div className="mb-5 text-center">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#EAF0FF] text-[#346AFF]">
                            <Sparkles size={27} />
                        </div>

                        <h4 className="text-[19px] font-extrabold tracking-tight text-[#191F28]">
                            안녕하세요! 👋
                        </h4>

                        <p className="mt-2 text-[13px] leading-relaxed text-gray-500">
                            김수린 개발자의 포트폴리오에 오신 것을 환영해요.
                            <br />
                            궁금한 내용을 편하게 질문해 주세요!
                        </p>
                    </div>
                </div>
            )}

            {/* 사용자 및 AI 메시지 */}
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`flex w-full items-end gap-2 ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                    {msg.role === 'ai' && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#346AFF] text-white">
                            <Bot size={17} />
                        </div>
                    )}

                    <div
                        className={`max-w-[82%] whitespace-pre-wrap break-words rounded-[18px] px-4 py-3 text-[13px] leading-[1.7] ${
                        msg.role === 'user'
                            ? 'rounded-br-[5px] bg-[#346AFF] text-white'
                            : 'rounded-bl-[5px] border border-gray-100 bg-white text-[#333D4B]'
                        }`}
                    >
                        {msg.text}
                    </div>
                </div>
            ))}

            {/* 로딩 표시 */}
            {isLoading && (
                <div className="flex items-end gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#346AFF] text-white">
                        <Bot size={17} />
                    </div>

                    <div className="rounded-[18px] bg-white px-4 py-3 text-[12px] text-gray-400">
                        답변을 작성하고 있어요...
                    </div>
                </div>
            )}

            {/* 추천 질문: messages 조건문 밖에 배치 */}
            {!isLoading && (
                <div className="mt-2 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-[#346AFF]" />

                    <span className="text-[12px] font-bold text-gray-500">
                    {messages.length === 0
                        ? '이런 질문은 어떠세요?'
                        : '다른 질문도 해보세요'}
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    {suggestions.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                        key={item.title}
                        type="button"
                        onClick={() => handleSuggestion(item.message)}
                        className="group flex w-full items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 text-left transition-all hover:border-[#B8CBFF] hover:bg-[#F8FAFF]"
                        >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EFF4FF] text-[#346AFF] transition-colors group-hover:bg-[#346AFF] group-hover:text-white">
                            <Icon size={18} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-bold text-[#191F28]">
                            {item.title}
                            </p>

                            <p className="mt-0.5 text-[11px] text-gray-400">
                            {item.description}
                            </p>
                        </div>

                        <span className="text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-[#346AFF]">
                            →
                        </span>
                        </button>
                    );
                    })}
                </div>
                </div>
            )}
          </div>


          {/* 하단 입력 영역 */}
          <div className="shrink-0 border-t border-gray-100 bg-white px-4 pb-4 pt-3 sm:px-5">

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="
                flex items-center gap-2 rounded-2xl
                border border-gray-200 bg-[#F8FAFC]
                p-1.5 transition-all duration-200
                focus-within:border-[#346AFF]
                focus-within:bg-white
                focus-within:ring-4
                focus-within:ring-[#346AFF]/10
              "
            >
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="궁금한 내용을 입력해 주세요."
                disabled={isLoading}
                className="
                  min-w-0 flex-1 bg-transparent
                  px-3 py-2.5 text-[13px] text-[#191F28]
                  outline-none placeholder:text-gray-400
                  disabled:cursor-not-allowed
                "
              />

              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                aria-label="메시지 전송"
                className="
                  flex h-10 w-10 shrink-0 items-center
                  justify-center rounded-xl bg-[#346AFF]
                  text-white shadow-sm transition-all
                  hover:bg-[#2458E8] active:scale-95
                  disabled:cursor-not-allowed
                  disabled:bg-gray-200 disabled:text-gray-400
                  disabled:shadow-none
                "
              >
                <Send size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 플로팅 챗봇 버튼 */}
      <button
        type="button"
        onClick={toggleChat}
        aria-label={isOpen ? '챗봇 닫기' : 'AI 비서에게 물어보기'}
        aria-expanded={isOpen}
        className="
          group relative flex items-center justify-center gap-2.5
          rounded-full border border-white/20
          bg-[#346AFF] p-3.5 text-white
          shadow-[0_8px_25px_rgba(52,106,255,0.35)]
          transition-all duration-300
          hover:-translate-y-1 hover:bg-[#2458E8]
          hover:shadow-[0_12px_30px_rgba(52,106,255,0.4)]
          active:scale-95
          sm:px-5 sm:py-3.5
        "
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          {isOpen ? (
            <X size={19} />
          ) : (
            <MessageCircle size={19} />
          )}
        </div>

        {/* 모바일에서는 텍스트 숨김 */}
        <div className="hidden flex-col items-start sm:flex">
          <span className="text-[13px] font-bold tracking-tight">
            {isOpen ? '챗봇 닫기' : 'AI에게 물어보기'}
          </span>

          {!isOpen && (
            <span className="text-[10px] font-medium text-blue-100">
              포트폴리오 AI 어시스턴트
            </span>
          )}
        </div>

        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-400" />
        )}
      </button>
    </div>
  );
}
