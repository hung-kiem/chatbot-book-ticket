"use client";

import { ChatMessage as ChatMessageType } from "@/lib/fake-data";
import { FlightResults } from "./flight-results";

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
            
            {/* Flight Results Component */}
            {!isUser && message.content.includes('Tôi đã tìm thấy các chuyến bay') && (
              <div className="mt-4">
                <FlightResults
                  from="Hà Nội (HAN)"
                  to="TP.HCM (SGN)"
                  date="20/01/2024"
                  flights={[
                    {
                      airline: "Vietnam Airlines",
                      flightNumber: "VN213",
                      departure: "06:30",
                      arrival: "08:45",
                      duration: "2h 15m",
                      aircraft: "Airbus A321",
                      economyPrice: "Phổ thông: 2.890.000₫",
                      businessPrice: "Thương gia: 8.590.000₫"
                    },
                    {
                      airline: "VietJet Air",
                      flightNumber: "VJ133",
                      departure: "07:15",
                      arrival: "09:20",
                      duration: "2h 5m",
                      aircraft: "Airbus A320",
                      economyPrice: "Eco: 2.450.000₫",
                      businessPrice: "SkyBoss: 4.290.000₫"
                    },
                    {
                      airline: "Bamboo Airways",
                      flightNumber: "QH1523",
                      departure: "08:00",
                      arrival: "10:10",
                      duration: "2h 10m",
                      aircraft: "Airbus A320neo",
                      economyPrice: "Phổ thông: 2.650.000₫",
                      businessPrice: "Thương gia: 7.890.000₫"
                    }
                  ]}
                />
              </div>
            )}
            
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