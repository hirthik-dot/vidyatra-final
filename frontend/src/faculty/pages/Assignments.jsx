export default function FacultyAssignments() {
  const assignments = [
    { title: "Math Assignment 1", class: "10A", due: "2025-12-01" },
    { title: "Physics Lab Report", class: "10B", due: "2025-12-03" },
    { title: "History Essay", class: "9A", due: "2025-12-04" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Assignments Manager</h2>

      {/* Create Assignment */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold text-gray-700">Create New Assignment</h3>

        <input type="text" placeholder="Assignment Title" className="w-full p-3 border rounded-lg" />
        <select className="w-full p-3 border rounded-lg">
          <option>Select Class</option>
          <option>10A</option>
          <option>10B</option>
          <option>9A</option>
        </select>
        <input type="date" className="w-full p-3 border rounded-lg" />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg font-semibold">
          Create Assignment
        </button>
      </div>

      {/* Assignment List */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Existing Assignments</h3>

        <div className="space-y-3">
          {assignments.map((a, i) => (
            <div key={i} className="p-4 border rounded-lg flex justify-between">
              <div>
                <p className="font-semibold">{a.title}</p>
                <p className="text-sm text-gray-600">{a.class} • Due {a.due}</p>
              </div>

              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                View Submissions
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
