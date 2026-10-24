import React from 'react';
import { Skill } from '@porto/util-bersama';

export interface SkillTagProps {
  skill: Skill;
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill }) => {
  const levelStyles = {
    Menengah: 'border-l-2 border-l-[#0F3460] dark:border-l-[#165DFF]',
    Dasar: 'border-l-2 border-l-[#2E7D32] dark:border-l-[#4CAF50]',
    'Sedang Dipelajari': 'border-l-2 border-l-amber-600 dark:border-l-amber-500'
  }[skill.level];

  return (
    <div
      className={`p-3.5 bg-white dark:bg-[#1E1E1E] border border-neutral-200 dark:border-neutral-800 rounded-md shadow-sm transition-all hover:border-neutral-400 dark:hover:border-neutral-700 ${levelStyles}`}
    >
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <h4 className="font-semibold text-sm text-[#2A2A2A] dark:text-neutral-100 font-mono tracking-tight">
          {skill.name}
        </h4>
        <span className="text-[11px] font-mono uppercase px-1.5 py-0.5 rounded-none bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
          {skill.level}
        </span>
      </div>

      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
        {skill.practicalUse}
      </p>
    </div>
  );
};

