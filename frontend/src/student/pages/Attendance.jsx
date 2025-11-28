export default function StudentAttendance() {
  const stats = [
    { subject: "Maths", present: 42, total: 45 },
    { subject: "Science", present: 38, total: 45 },
    { subject: "English", present: 40, total: 45 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Attendance</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {stats.map((s, i) => {
          const percent = Math.round((s.present / s.total) * 100);
          return (
            <div key={i}>
              <div className="flex justify-between">
                <span>{s.subject}</span>
                <span className="font-semibold text-blue-700">{percent}%</span>
              </div>

              <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
