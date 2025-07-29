import fakeChatsData from '../fake-chats.json';

export interface ChatRecord {
  id: string;
  title: string;
  createdAt: string;
  messageCount: number;
}

export function getFakeChats(): ChatRecord[] {
  return fakeChatsData as ChatRecord[];
}

export function searchChats(query: string): ChatRecord[] {
  const chats = getFakeChats();
  if (!query.trim()) return chats;
  
  return chats.filter(chat => 
    chat.title.toLowerCase().includes(query.toLowerCase())
  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return 'Vừa xong';
  } else if (diffInHours < 24) {
    return `${diffInHours} giờ trước`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} ngày trước`;
  }
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface ChatDetail {
  id: string;
  title: string;
  createdAt: string;
  messageCount: number;
  messages: ChatMessage[];
}

export function getChatDetail(chatId: string): ChatDetail | null {
  try {
    if (chatId === 'chat_001') {
      const chatData = require('../fake-chat-001.json');
      return chatData as ChatDetail;
    }
    return null;
  } catch (error) {
    console.error('Error loading chat detail:', error);
    return null;
  }
} 