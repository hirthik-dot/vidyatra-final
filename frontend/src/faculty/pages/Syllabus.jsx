export default function FacultySyllabus() {
  const syllabus = [
    { subject: "Math", completed: 70 },
    { subject: "Science", completed: 55 },
    { subject: "English", completed: 80 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Syllabus Tracking</h2>

      <div className="space-y-4 bg-white p-6 rounded-xl shadow">
        {syllabus.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{s.subject}</span>
              <span className="font-semibold text-blue-700">{s.completed}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{ width: `${s.completed}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Syllabus */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Update Syllabus</h3>

        <select className="p-3 border rounded-lg w-full">
          <option>Select Subject</option>
          <option>Math</option>
          <option>Science</option>
          <option>English</option>
        </select>

        <input type="number" placeholder="Completion %" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg">
          Save Progress
        </button>
      </div>
    </div>
  );
}
