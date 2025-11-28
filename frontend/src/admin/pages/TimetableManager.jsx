export default function AdminTimetable() {
  const entries = [
    { class: "10A", subject: "Math", time: "9:00 - 9:45" },
    { class: "9A", subject: "Science", time: "10:00 - 10:45" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Manage Timetables</h2>

      {/* Add Timetable Entry */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Add Timetable Entry</h3>

        <input type="text" placeholder="Class" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Subject" className="p-3 border rounded-lg w-full" />
        <input type="text" placeholder="Time (e.g., 9:00 - 9:45)" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Add Entry
        </button>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl shadow">
        {entries.map((e, i) => (
          <div key={i} className="p-4 border rounded-lg flex justify-between mb-3">
            <div>
              <p className="font-semibold">{e.class}</p>
              <p className="text-gray-600 text-sm">{e.subject} • {e.time}</p>
            </div>

            <button className="px-3 py-1 bg-red-600 text-white rounded-lg">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
