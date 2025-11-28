export default function Topics() {
  const topics = [
    { subject: "Math", topic: "Quadratic Equations", status: "Completed" },
    { subject: "Science", topic: "Atoms & Molecules", status: "Pending" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Topic Management</h2>

      {/* Add Topic */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Add Topic</h3>

        <select className="p-3 border rounded-lg w-full">
          <option>Select Subject</option>
          <option>Math</option>
          <option>Science</option>
        </select>

        <input type="text" placeholder="Topic Name" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700">
          Add Topic
        </button>
      </div>

      {/* Topic List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">Topics</h3>

        {topics.map((t, i) => (
          <div key={i} className="p-4 border rounded-lg mb-2 flex justify-between">
            <div>
              <p className="font-semibold">{t.subject}</p>
              <p className="text-sm text-gray-600">{t.topic}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-lg text-sm ${
                t.status === "Completed" ? "bg-green-200 text-green-600" : "bg-yellow-200 text-yellow-600"
              }`}
            >
              {t.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
