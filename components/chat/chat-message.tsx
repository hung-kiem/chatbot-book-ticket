"use client";

import { ChatMessage as ChatMessageType } from "@/lib/fake-data";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.type === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] ${isUser ? 'order-2 pr-2' : 'order-1'}`}>
        {/* Avatar */}
        <div className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0 ${
            isUser ? 'bg-gray-600' : 'bg-blue-600'
          }`}>
            {isUser ? 'U' : 'V'}
          </div>
          
          {/* Message Content */}
          <div className={`rounded-lg px-4 py-3 ${
            isUser 
              ? 'bg-gray-800 text-white' 
              : 'bg-transparent text-white'
          }`}>
            <div className="whitespace-pre-wrap text-sm leading-relaxed">
              {message.content}
            </div>
            <div className={`text-xs text-gray-400 mt-2 ${
              isUser ? 'text-right' : 'text-left'
            }`}>
              {new Date(message.timestamp).toLocaleTimeString('vi-VN', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 