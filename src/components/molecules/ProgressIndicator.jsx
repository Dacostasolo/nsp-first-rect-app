export function ProgressIndicator({ completed = 0, total = 0 }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div>
      <div className="mb-6">
        <div className="flex justify-end  items-baseline mb-2">
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">
              {percentage}%
            </div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Completed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
