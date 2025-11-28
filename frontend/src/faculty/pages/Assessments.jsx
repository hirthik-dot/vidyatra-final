export default function FacultyAssessments() {
  const tests = [
    { title: "Math Unit Test", class: "10A", date: "2025-12-05" },
    { title: "Physics Quiz", class: "10B", date: "2025-12-07" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Assessments</h2>

      {/* Create Test */}
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <h3 className="text-xl font-semibold">Create New Assessment</h3>

        <input type="text" placeholder="Test Title" className="p-3 border rounded-lg w-full" />
        <select className="p-3 border rounded-lg w-full">
          <option>Select Class</option>
          <option>10A</option>
          <option>10B</option>
        </select>
        <input type="date" className="p-3 border rounded-lg w-full" />

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg">
          Create Assessment
        </button>
      </div>

      {/* Existing Tests */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-xl font-semibold mb-4">Upcoming Tests</h3>
        <div className="space-y-3">
          {tests.map((t, i) => (
            <div key={i} className="p-4 border rounded-lg flex justify-between">
              <div>
                <p className="font-bold">{t.title}</p>
                <p className="text-sm text-gray-600">{t.class} • {t.date}</p>
              </div>

              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Upload Marks
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
