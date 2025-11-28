export default function FacultyPerformance() {
  const students = [
    { name: "Aarav Sharma", progress: 78 },
    { name: "Kavya Singh", progress: 88 },
    { name: "Rohit Mehta", progress: 66 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Student Performance</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {students.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between mb-1">
              <span>{s.name}</span>
              <span className="font-semibold text-blue-700">{s.progress}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full">
              <div
                className="bg-green-600 h-3 rounded-full"
                style={{ width: `${s.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
