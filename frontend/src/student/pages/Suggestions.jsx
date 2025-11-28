export default function Suggestions() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-700">Suggestions</h2>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <textarea
          className="p-3 border rounded-lg w-full"
          rows="4"
          placeholder="Suggest improvements..."
        ></textarea>

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
          Submit Suggestion
        </button>
      </div>
    </div>
  );
}
