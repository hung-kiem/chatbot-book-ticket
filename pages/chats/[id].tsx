import { useRouter } from "next/router";
import { ChatInput } from "../../components/chat/chat-input";
import { Sidebar } from "../../components/chat/sidebar";
import { getFakeChats, formatDate } from "../../lib/fake-data";

export default function ChatDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  const allChats = getFakeChats();
  const currentChat = allChats.find(chat => chat.id === id);

  const handleNewChat = () => {
    router.push("/");
  };

  const handleSelectChat = (chatId: string) => {
    router.push(`/chats/${chatId}`);
  };

  const handleGoToHistory = () => {
    router.push("/chats");
  };

  const handleSendMessage = (message: string) => {
    console.log("Message sent in chat", id, ":", message);
    // TODO: Implement actual message sending logic
  };

  return (
    <div className="h-screen bg-gray-900 flex">
      <Sidebar 
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        onGoToHistory={handleGoToHistory}
        currentChatId={id as string}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-900">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700">
          <div>
            <h1 className="text-lg font-semibold text-white">
              {currentChat ? currentChat.title : `Chat ${id}`}
            </h1>
            {currentChat && (
              <p className="text-sm text-gray-400 mt-1">
                {formatDate(currentChat.createdAt)} • {currentChat.messageCount} tin nhắn
              </p>
            )}
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Chi tiết cuộc trò chuyện</h2>
            <p className="text-gray-300">
              {currentChat ? `Đây là nơi hiển thị tin nhắn cho: ${currentChat.title}` : `Chat ID: ${id}`}
            </p>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4">
          <ChatInput 
            onSendMessage={handleSendMessage}
            placeholder="Nhập tin nhắn phản hồi cho Vnticket..."
          />
        </div>
      </div>
    </div>
  );
} 