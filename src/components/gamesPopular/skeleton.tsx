export default function Skeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="relative w-full min-w-40 md:min-w-60">
            <div className="w-full h-80 bg-slate-400 rounded-lg" />
            <div className="flex justify-between items-center absolute bottom-0 w-full px-3 py-2 bg-slate-500 rounded-b-lg">
              <div className="flex items-center gap-x-2">
                <div className="h-4 w-6 bg-slate-400 rounded" />
                <div className="h-4 w-10 bg-slate-400 rounded" />
              </div>
              <div className="h-4 w-8 bg-slate-400 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
