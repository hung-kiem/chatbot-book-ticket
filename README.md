# ChatBot - Book Ticket

A ChatGPT-like interface built with Next.js (Pages Router) for booking tickets and general chat functionality.

## Features

- 🎨 **ChatGPT-like Interface**: Clean, modern UI similar to ChatGPT
- 💬 **Real-time Chat**: Interactive chat interface with user and assistant messages
- 📚 **Chat History**: Sidebar with chat history and conversation management
- 🔄 **New Chat**: Create new conversations with a single click
- ⌨️ **Keyboard Support**: Send messages with Enter key or click button
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🌙 **Dark Mode Support**: Automatic dark/light mode based on system preference

## Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Components**: Custom UI components

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd chatbot-book-ticket
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Start a New Chat**: Click the "New Chat" button in the sidebar
2. **Send Messages**: Type your message and press Enter or click the send button
3. **View History**: Click on any previous chat in the sidebar to continue
4. **Delete Chats**: Hover over a chat in the sidebar and click the trash icon

## Project Structure

```
├── pages/                 # Next.js pages directory
│   ├── _app.tsx          # App wrapper
│   ├── _document.tsx     # Document wrapper
│   └── index.tsx         # Home page
├── components/           # React components
│   ├── chat/            # Chat-related components
│   │   ├── chat-container.tsx
│   │   ├── chat-input.tsx
│   │   ├── chat-message.tsx
│   │   └── sidebar.tsx
│   └── ui/              # Reusable UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── textarea.tsx
├── styles/              # Global styles
│   └── globals.css
├── lib/                 # Utility functions
│   └── utils.ts
└── public/              # Static assets
```

## Customization

### Styling

The app uses CSS variables for theming. You can customize colors in `styles/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --primary: #2563eb;
  /* ... more variables */
}
```

### Adding AI Integration

To integrate with a real AI service, modify the `sendMessage` function in `components/chat/chat-container.tsx`:

```typescript
const sendMessage = async (content: string) => {
  // ... existing code ...

  // Replace the setTimeout with actual API call
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: content }),
  });

  const data = await response.json();
  // ... handle response ...
};
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
