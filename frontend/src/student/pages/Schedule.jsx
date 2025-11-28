export default function StudentSchedule() {
  const schedule = [
    { period: 1, subject: "Maths", time: "9:00 - 9:45" },
    { period: 2, subject: "English", time: "9:45 - 10:30" },
    { period: 3, subject: "Science", time: "10:30 - 11:15" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">My Schedule</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {schedule.map((s, i) => (
          <div key={i} className="border p-4 rounded-lg flex justify-between">
            <span className="font-semibold">Period {s.period}</span>
            <span>{s.subject}</span>
            <span className="text-gray-600">{s.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
