// src/student/pages/Assignments.jsx

export default function StudentAssignments() {
  const assignments = [
    { title: "Math Assignment 1", due: "2025-11-30", status: "Pending" },
    { title: "English Essay", due: "2025-12-01", status: "Completed" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Assignments</h2>

      {assignments.map((a, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl shadow mb-2 flex justify-between"
        >
          <div>
            <p className="font-semibold">{a.title}</p>
            <p className="text-gray-600 text-sm">Due: {a.due}</p>
          </div>

          <span
            className={`px-3 py-1 rounded-lg text-sm ${
              a.status === "Completed"
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-600"
            }`}
          >
            {a.status}
          </span>
        </div>
      ))}
    </div>
  );
}
