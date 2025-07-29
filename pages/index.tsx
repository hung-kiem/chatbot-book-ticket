import { useState } from "react";
import { useRouter } from "next/router";
import { WelcomeScreen } from "../components/chat/welcome-screen";
import { Button } from "../components/ui/button";
import { Plus, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
import { getFakeChats, formatDate } from "../lib/fake-data";

export default function Home() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const allChats = getFakeChats();

  const tooltips = {
    toggle: isCollapsed ? "Mở rộng sidebar" : "Thu nhỏ sidebar",
    newChat: "Tạo cuộc trò chuyện mới",
    chats: "Xem danh sách cuộc trò chuyện"
  };

  const handleSendMessage = (message: string) => {
    console.log("Message sent from welcome:", message);
    // TODO: Navigate to chat detail page
  };

  const handleGoToHistory = () => {
    router.push("/chats");
  };

  const handleSelectChat = (chatId: string) => {
    router.push(`/chats/${chatId}`);
  };

  return (
    <div className="h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div
        className={`flex flex-col h-full bg-gray-900 border-r border-gray-700 transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        {/* Header with Toggle Button */}
        <div className="p-4 border-b border-gray-700">
          <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
            {!isCollapsed && (
              <span className="text-white font-semibold">Vnticket</span>
            )}
            <div className="relative">
              <Button
                onClick={() => setIsCollapsed(!isCollapsed)}
                variant="ghost"
                size="icon"
                className={`text-gray-300 hover:text-white hover:bg-gray-800 ${
                  isCollapsed ? "w-10 h-10 rounded-full" : "h-8 w-8"
                }`}
                onMouseEnter={() => isCollapsed && setHoveredButton("toggle")}
                onMouseLeave={() => setHoveredButton(null)}
              >
                {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </Button>
              {/* Tooltip for toggle button */}
              {isCollapsed && hoveredButton === "toggle" && (
                <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                  {tooltips.toggle}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* New Chat Button */}
        <div className="p-4 flex justify-center">
          <div className={`relative ${!isCollapsed ? "w-full" : ""}`}>
            <Button
              className={`bg-blue-600 hover:bg-blue-700 text-white ${
                isCollapsed ? "w-10 h-10 rounded-full p-0" : "w-full justify-start gap-3"
              }`}
              size={isCollapsed ? "icon" : "default"}
              onMouseEnter={() => isCollapsed && setHoveredButton("newChat")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <Plus className="h-5 w-5" />
              {!isCollapsed && "New chat"}
            </Button>
            {/* Tooltip for new chat button */}
            {isCollapsed && hoveredButton === "newChat" && (
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                {tooltips.newChat}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        {/* Chats Button */}
        <div className="px-4 flex justify-center">
          <div className={`relative ${!isCollapsed ? "w-full" : ""}`}>
            <Button
              onClick={handleGoToHistory}
              variant="ghost"
              className={`text-white hover:bg-gray-800 ${
                isCollapsed ? "w-10 h-10 rounded-full p-0" : "w-full justify-start gap-3"
              }`}
              size={isCollapsed ? "icon" : "default"}
              onMouseEnter={() => isCollapsed && setHoveredButton("chats")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <MessageSquare className="h-5 w-5" />
              {!isCollapsed && "Chats"}
            </Button>
            {/* Tooltip for chats button */}
            {isCollapsed && hoveredButton === "chats" && (
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-2 py-1 rounded shadow-lg whitespace-nowrap z-50">
                {tooltips.chats}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            )}
          </div>
        </div>

        {/* Chat History - Only show when expanded */}
        {!isCollapsed && (
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-1">
              <h3 className="text-sm font-medium text-gray-400 mb-3">Recents</h3>
              {allChats.slice(0, 5).map((chat) => (
                <div
                  key={chat.id}
                  className="group flex items-center gap-2 p-2 rounded-md cursor-pointer transition-colors hover:bg-gray-800 text-gray-300"
                  onClick={() => handleSelectChat(chat.id)}
                >
                  <MessageSquare className="h-4 w-4 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{chat.title}</p>
                    <p className="text-xs text-gray-500">
                      {formatDate(chat.createdAt)} • {chat.messageCount} tin nhắn
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <WelcomeScreen onSendMessage={handleSendMessage} disabled={false} />
      </div>
    </div>
  );
}
