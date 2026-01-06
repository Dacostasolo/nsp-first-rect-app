import { useState } from "react";

export function ProgressIndicator({ completed, total }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-6">
      <div className="flex justify-end items-baseline mb-2">
        <div className="text-right">
          <div className="text-4xl font-bold text-blue-600">{percentage}%</div>
          <div className="text-sm text-gray-400 uppercase tracking-wide">
            Completed
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
