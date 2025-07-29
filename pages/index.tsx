import { useRouter } from "next/router";
import { WelcomeScreen } from "../components/chat/welcome-screen";
import { Sidebar } from "../components/chat/sidebar";

export default function Home() {
  const router = useRouter();

  const handleSendMessage = (message: string) => {
    console.log("Message sent from welcome:", message);
    // TODO: Navigate to chat detail page
  };

  const handleNewChat = () => {
    // Already on welcome page, no need to navigate
  };

  const handleSelectChat = (chatId: string) => {
    router.push(`/chats/${chatId}`);
  };

  return (
    <div className="h-screen bg-gray-900 flex">
      <Sidebar 
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <WelcomeScreen onSendMessage={handleSendMessage} disabled={false} />
      </div>
    </div>
  );
}
