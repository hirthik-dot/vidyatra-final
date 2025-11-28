import { useState } from "react";

export default function StudentCommunication() {
  const [messages, setMessages] = useState([
    { from: "teacher", text: "Submit your homework." },
    { from: "student", text: "Okay sir!" },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { from: "student", text: input }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "teacher", text: "Received!" },
      ]);
    }, 700);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Communication</h2>

      <div className="bg-white p-6 rounded-xl shadow h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-xs p-3 rounded-lg ${
                m.from === "student"
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-3 border rounded-lg w-full"
            placeholder="Type message..."
          />
          <button className="bg-blue-600 text-white px-3 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
