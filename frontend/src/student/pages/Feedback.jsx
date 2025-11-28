export default function StudentFeedback() {
  const subjects = ["Maths", "Science", "English"];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Give Feedback</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <select className="p-3 border rounded-lg w-full">
          <option>Select Subject</option>
          {subjects.map((s) => <option key={s}>{s}</option>)}
        </select>

        <textarea
          className="p-3 border rounded-lg w-full"
          rows="4"
          placeholder="Write feedback..."
        ></textarea>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Submit
        </button>
      </div>
    </div>
  );
}
