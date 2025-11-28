export default function StudentPerformance() {
  const subjects = [
    { name: "Maths", score: 85 },
    { name: "Science", score: 78 },
    { name: "English", score: 90 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Performance</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {subjects.map((s, i) => (
          <div key={i}>
            <div className="flex justify-between">
              <span>{s.name}</span>
              <span className="font-semibold text-blue-700">{s.score}%</span>
            </div>

            <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
              <div
                className="h-3 rounded-full bg-green-600"
                style={{ width: `${s.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
