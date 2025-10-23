
import React from 'react';

interface ChatWidgetProps {
  onClick: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-blue-300 animate-fade-in"
      aria-label="Open AI chat"
    >
      <i className="fas fa-robot text-2xl"></i>
    </button>
  );
};

export default ChatWidget;