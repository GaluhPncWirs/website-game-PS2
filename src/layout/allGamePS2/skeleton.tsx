export default function Skeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="min-w-40 md:min-w-60 flex flex-col">
            {/* Image Placeholder */}
            <div className="w-full h-56 bg-slate-300 rounded-t-lg" />

            {/* Card Body */}
            <div className="border border-slate-300 p-3 flex flex-col flex-1 rounded-b-lg">
              {/* Title */}
              <div className="h-6 w-3/4 bg-slate-300 rounded" />

              {/* Subtitle Section */}
              <div className="flex flex-col gap-y-2 mt-3">
                <div className="h-4 w-1/2 bg-slate-300 rounded" />

                <div className="flex items-center gap-x-2">
                  <div className="h-4 w-12 bg-slate-300 rounded" />
                  <div className="h-4 w-8 bg-slate-300 rounded" />
                </div>
              </div>

              {/* Button Placeholder */}
              <div className="w-full mt-4 h-10 bg-slate-400 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
