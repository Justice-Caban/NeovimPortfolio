"use client";

import * as React from "react";

interface NeovimModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function NeovimModal({ isOpen, onClose, title, children }: NeovimModalProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      // Close with Escape or 'q' (vim-style)
      if (e.key === "Escape" || (e.key === "q" && !e.ctrlKey && !e.metaKey && !e.altKey)) {
        e.preventDefault();
        e.stopPropagation();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown, { capture: true });
    }

    return () => document.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal Window - LazyVim floating window style */}
      <div
        className="w-full max-w-5xl max-h-[85vh] bg-background shadow-2xl overflow-hidden flex flex-col border border-primary/30 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar - LazyVim style */}
        <div className="bg-primary/10 border-b border-primary/20 px-4 py-2">
          <div className="flex items-center justify-between">
            <span className="text-primary font-semibold text-sm">
              {title}
            </span>
            <span className="text-xs text-muted-foreground">
              ESC / q to close
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 font-mono text-sm leading-relaxed">
          {children}
        </div>

        {/* Footer - LazyVim style status line with powerline separators */}
        <div className="bg-muted px-4 py-1.5 flex items-center justify-between text-xs border-t border-border/50">
          <div className="flex items-center gap-3">
            <span className="text-primary">●</span>
            <span className="text-muted-foreground">{title.replace(".md", "")}</span>
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span>UTF-8</span>
            <span>│</span>
            <span>1:1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
