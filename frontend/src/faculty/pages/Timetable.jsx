export default function FacultyTimetable() {
  const timetable = [
    { period: 1, subject: "Maths", time: "9:00 - 9:45" },
    { period: 2, subject: "Science", time: "9:45 - 10:30" },
    { period: 3, subject: "English", time: "10:30 - 11:15" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Timetable</h2>

      <div className="bg-white p-6 rounded-xl shadow">
        {timetable.map((t) => (
          <div
            key={t.period}
            className="p-4 border rounded-lg mb-3 flex justify-between"
          >
            <span className="font-semibold">Period {t.period}</span>
            <span>{t.subject}</span>
            <span className="text-gray-600">{t.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
