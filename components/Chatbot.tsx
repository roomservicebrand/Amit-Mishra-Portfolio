import React, { useState, useEffect, useRef } from 'react';
import { chatWithAmitAI } from '../services/geminiService';
import Spinner from './Spinner';

interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi there! I'm an AI assistant. How can I help you with information about Amit Mishra's expertise or achievements?" }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: messageText };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const responseText = await chatWithAmitAI(messageText);
      const modelMessage: Message = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMessage]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setMessages(prev => [...prev, { role: 'model', text: `Sorry, I encountered an error: ${errorMessage}` }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(userInput);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };
  
  const suggestions = [
    "What is his experience with UR?",
    "Tell me about his achievements.",
    "What are his key areas of expertise?"
  ];
  
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-[calc(100%-3rem)] max-w-md h-[70vh] max-h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-[60] border border-gray-200 dark:border-gray-700 animate-fade-in-up">
      <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white flex items-center gap-2">
          <i className="fas fa-robot text-blue-500"></i>
          Chat with Amit's AI
        </h3>
        <button onClick={onClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full w-8 h-8 flex items-center justify-center" aria-label="Close chat">&times;</button>
      </div>

      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-xl ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}>
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
            </div>
          </div>
        ))}

        {messages.length === 1 && !isLoading && (
            <div className="flex flex-col items-start gap-2 animate-fade-in-up">
                <p className="text-sm text-gray-500 dark:text-gray-400 px-2">Or try one of these:</p>
                {suggestions.map((s, i) => (
                <button
                    key={i}
                    onClick={() => handleSuggestionClick(s)}
                    disabled={isLoading}
                    className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 text-sm px-3 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                    {s}
                </button>
                ))}
            </div>
        )}

        {isLoading && (
          <div className="flex justify-start">
             <div className="max-w-[80%] p-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Ask me a question..."
            disabled={isLoading}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
          <button type="submit" disabled={isLoading || !userInput.trim()} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center w-12">
            {isLoading ? <Spinner /> : <i className="fas fa-paper-plane"></i>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
