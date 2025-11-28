import { useState } from "react";

export default function CommunicationFaculty() {
  const [messages, setMessages] = useState([
    { sender: "student", text: "Sir, when is the next test?" },
    { sender: "teacher", text: "Next week, prepare well." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { sender: "teacher", text: input }]);
    setInput("");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Communication Panel</h2>

      <div className="bg-white p-6 rounded-xl shadow h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto space-y-3">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-xs ${
                m.sender === "teacher"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
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
            className="w-full p-3 border rounded-lg"
            placeholder="Message student..."
          />
          <button className="bg-blue-600 text-white px-4 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
