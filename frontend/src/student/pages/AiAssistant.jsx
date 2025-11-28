import { useState } from "react";

export default function StudentAiAssistant() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: "student", text: input }]);
    setInput("");

    // Fake AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Your question has been received." }
      ]);
    }, 600);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">AI Assistant</h2>

      <div className="bg-white p-6 rounded-xl shadow h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-xs p-3 rounded-lg ${
                m.sender === "student"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex gap-2 mt-4">
          <input
            className="p-3 border rounded-lg w-full"
            placeholder="Ask AI..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-3 rounded-lg">Send</button>
        </form>
      </div>
    </div>
  );
}
