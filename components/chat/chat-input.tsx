"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
  compact?: boolean;
}

export function ChatInput({ onSendMessage, disabled = false, placeholder = "Nhập tin nhắn của bạn...", compact = false }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full">
      <div className={`bg-gray-800 rounded-xl ${compact ? 'p-3' : 'p-6'}`}>
        {/* Placeholder Text */}
        <div className={`text-gray-300 ${compact ? 'text-base mb-1' : 'text-lg mb-4'}`}>
          {placeholder}
        </div>
        
        {/* Input Field */}
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder=""
          className={`${compact ? 'min-h-[28px] py-1' : 'min-h-[44px]'} max-h-48 resize-none bg-transparent border-none text-white text-base md:text-lg placeholder-transparent focus:outline-none focus:ring-0`}
          disabled={disabled}
        />

        {/* Controls */}
        <div className={`flex items-center justify-end border-t border-gray-700 ${compact ? 'pt-2' : 'pt-4'}`}>
          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Send Button */}
            <Button
              onClick={handleSend}
              disabled={!message.trim() || disabled}
              size="icon"
              className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 