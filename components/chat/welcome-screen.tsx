"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Plus, Settings, Search } from "lucide-react";
import { getTimeOfDayGreeting } from "@/lib/utils";

interface WelcomeScreenProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function WelcomeScreen({ onSendMessage, disabled = false }: WelcomeScreenProps) {
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("Hỏi");
  const [showModelDropdown, setShowModelDropdown] = useState(false);

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

  const greeting = getTimeOfDayGreeting();

  const models = [
    {
      id: "hoi",
      name: "Hỏi",
      description: "Đặt các câu hỏi để tìm hiểu về dịch vụ đặt vé"
    },
    {
      id: "dat-ve", 
      name: "Đặt vé",
      description: "Sẽ được gợi ý những chuyến bay nổi bật"
    }
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gray-900">
      {/* Greeting */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <h1 className="text-2xl font-medium text-white">
            {greeting}
          </h1>
        </div>
      </div>

      {/* Main Input Area */}
      <div className="w-full max-w-4xl">
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          {/* Placeholder Text */}
          <div className="text-gray-300 text-lg mb-4">
            Bạn muốn đặt vé đi đâu hôm nay?
          </div>
          
          {/* Input Field */}
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder=""
            className="min-h-[120px] max-h-48 resize-none bg-transparent border-none text-white text-lg placeholder-transparent focus:outline-none focus:ring-0"
            disabled={disabled}
          />

          {/* Controls */}
          <div className="flex items-center justify-end pt-4 border-t border-gray-700">
            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Model Selector */}
              <div className="relative">
                <Button
                  variant="ghost"
                  className="h-8 px-3 text-gray-300 hover:text-white hover:bg-gray-700"
                  onClick={() => setShowModelDropdown(!showModelDropdown)}
                >
                  {selectedModel}
                  <svg className="h-4 w-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>

                {/* Dropdown */}
                {showModelDropdown && (
                  <div className="absolute bottom-full right-0 mb-2 bg-gray-700 rounded-lg shadow-lg border border-gray-600 min-w-64 z-50">
                    {models.map((model) => (
                      <div
                        key={model.id}
                        className="px-4 py-3 hover:bg-gray-600 cursor-pointer border-b border-gray-600 last:border-b-0"
                        onClick={() => {
                          setSelectedModel(model.name);
                          setShowModelDropdown(false);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">{model.name}</div>
                            {model.description && (
                              <div className="text-gray-400 text-sm">{model.description}</div>
                            )}
                          </div>
                          {model.id === "hoi" && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

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
    </div>
  );
} 