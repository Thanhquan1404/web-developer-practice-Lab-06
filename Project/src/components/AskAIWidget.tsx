'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, Loader } from 'lucide-react';

export default function AskAIWidget() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const responseEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new response arrives
  useEffect(() => {
    responseEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setResponse('');

    try {
      const responseStream = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      if (!responseStream.body) return;

      const reader = responseStream.body.getReader();
      const decoder = new TextDecoder();

      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          const chunk = decoder.decode(value);
          setResponse(prev => prev + chunk);
        }
      }
    } catch (error) {
      setResponse('Error: Failed to get a response from AI. Please try again.');
      console.error('API Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const clearResponse = () => {
    setResponse('');
    setQuestion('');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-2xl font-bold text-white text-xl transition-all duration-300 z-40 ${
          isOpen
            ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-110'
            : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:scale-110'
        }`}
      >
        💬
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border-4 border-gradient-to-b from-blue-400 to-purple-400">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 flex items-center justify-between">
            <div>
              <h3 className="text-white font-bold text-lg">AI Assistant</h3>
              <p className="text-blue-100 text-xs">Powered by OpenAI</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-500 p-2 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-slate-50 to-blue-50">
            {response ? (
              <div className="space-y-4">
                {/* User Question */}
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-lg max-w-xs text-sm rounded-br-none shadow-md">
                    {question}
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 text-black p-4 rounded-lg max-w-xs text-sm rounded-bl-none shadow-md">
                    <p className="whitespace-pre-wrap leading-relaxed">{response}</p>
                    {isLoading && (
                      <div className="mt-2 flex items-center gap-2 text-purple-600">
                        <Loader size={16} className="animate-spin" />
                        <span className="text-xs">Generating...</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-3">🤖</div>
                <p className="text-gray-600 font-semibold mb-2">Welcome to AI Assistant</p>
                <p className="text-gray-400 text-xs">Ask any question and get instant answers from our knowledge base</p>
              </div>
            )}
            <div ref={responseEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-gray-200 p-4 bg-white">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border-2 text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !question.trim()}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-2 rounded-lg hover:from-blue-700 hover:to-cyan-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isLoading ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
                </button>
              </div>
              {response && (
                <button
                  type="button"
                  onClick={clearResponse}
                  className="w-full text-xs py-1 text-black hover:text-gray-800 hover:bg-gray-100 rounded transition-colors"
                >
                  Clear conversation
                </button>
              )}
            </form>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}