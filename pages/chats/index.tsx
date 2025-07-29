import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Plus, Search } from "lucide-react";
import { Sidebar } from "../../components/chat/sidebar";
import { getFakeChats, searchChats } from "../../lib/fake-data";

export default function ChatHistory() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  
  const allChats = getFakeChats();
  const filteredChats = searchChats(searchQuery);

  const handleNewChat = () => {
    router.push("/");
  };

  const handleSelectChat = (chatId: string) => {
    router.push(`/chats/${chatId}`);
  };

  const handleGoToHistory = () => {
    // Already on history page, no need to navigate
  };

  return (
    <div className="h-screen bg-gray-900 flex">
      <Sidebar 
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onGoToHistory={handleGoToHistory}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-900">
        {/* Header */}
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-white">Lịch sử trò chuyện</h1>
          <Button
            onClick={handleNewChat}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            New chat
          </Button>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Tìm kiếm cuộc trò chuyện..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="space-y-3">
            {filteredChats.map((chat) => (
              <div
                key={chat.id}
                className="group p-4 rounded-lg border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-gray-600 cursor-pointer transition-all duration-200"
                onClick={() => handleSelectChat(chat.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-lg mb-1 truncate">
                      {chat.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Tin nhắn cuối {new Date(chat.createdAt).toLocaleDateString()} • {chat.messageCount} tin nhắn
                    </p>
                  </div>
                  <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="h-5 w-5 text-gray-400">💬</div>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredChats.length === 0 && (
              <div className="text-center py-12">
                <div className="h-12 w-12 text-gray-500 mx-auto mb-4 text-4xl">💬</div>
                <p className="text-gray-400 text-lg">
                  {searchQuery ? "Không tìm thấy cuộc trò chuyện nào" : "Chưa có cuộc trò chuyện nào"}
                </p>
                {searchQuery && (
                  <Button
                    onClick={() => setSearchQuery("")}
                    variant="ghost"
                    className="text-blue-500 hover:text-blue-400 mt-2"
                  >
                    Xóa bộ lọc tìm kiếm
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 