export default function StudentAssessments() {
  const tests = [
    { subject: "Maths", date: "2025-12-05", syllabus: "Algebra" },
    { subject: "Science", date: "2025-12-07", syllabus: "Atoms" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Assessments</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        {tests.map((t, i) => (
          <div key={i} className="p-4 border rounded-lg">
            <p className="font-semibold">{t.subject}</p>
            <p className="text-gray-600 text-sm">Date: {t.date}</p>
            <p className="text-gray-600 text-sm">Syllabus: {t.syllabus}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
