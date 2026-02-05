export default function TagsGames() {
  const alphabeth = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  );
  return (
    <div className="border border-slate-400 bg-slate-100">
      <h2 className="text-xl font-medium border-b border-b-slate-400 px-5 py-2 bg-slate-300">
        Tags
      </h2>
      <div className="grid grid-cols-5 gap-1.5 p-3">
        {alphabeth.map((item: string, i: number) => (
          <h2
            key={i}
            className="bg-slate-300 px-2 rounded-sm font-semibold text-lg text-center cursor-pointer"
          >
            {item}
          </h2>
        ))}
      </div>
    </div>
  );
}
