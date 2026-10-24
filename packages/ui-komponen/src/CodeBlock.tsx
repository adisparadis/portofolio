'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  caption?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  filename,
  caption
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full my-4 border border-[#2A2A2A]/40 dark:border-neutral-800 bg-[#161616] text-neutral-100 rounded-none shadow-sm overflow-hidden">
      {/* Terminal Header: Sudut Tajam (rounded-none), Aksen Teknis Abu-abu Tua */}
      <div className="flex items-center justify-between px-3.5 py-2 border-b border-neutral-800 bg-[#1E1E1E] text-xs font-mono">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#4CAF50]" />
          <span className="text-neutral-300 font-medium">{filename || language}</span>
          <span className="text-[10px] uppercase text-neutral-500 px-1 py-0.5 bg-neutral-800 border border-neutral-700 rounded-none">
            {language}
          </span>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          aria-label="Salin baris kode"
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-none text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors text-xs"
        >
          {copied ? (
            <>
              <Check size={12} className="text-[#4CAF50]" />
              <span className="text-[#4CAF50]">Tersalin</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Salin</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto font-mono text-[13px] leading-relaxed text-neutral-200">
        <pre className="whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>

      {caption && (
        <div className="px-3.5 py-1.5 bg-[#121212] border-t border-neutral-800 text-[11px] text-neutral-400 font-mono">
          // {caption}
        </div>
      )}
    </div>
  );
};

