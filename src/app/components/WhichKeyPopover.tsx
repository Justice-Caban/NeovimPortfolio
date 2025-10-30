"use client";

import * as React from "react";
import { Command, Home, Palette, HelpCircle, Zap } from "lucide-react";

interface KeyBind {
  key: string;
  label: string;
  description: string;
  category: string;
}

const KEYBINDS: KeyBind[] = [
  {
    key: "a",
    label: "About Me",
    description: "Learn about my background and experience",
    category: "Navigation",
  },
  {
    key: "p",
    label: "Projects",
    description: "View my portfolio projects",
    category: "Navigation",
  },
  {
    key: "r",
    label: "Resume",
    description: "View my resume",
    category: "Navigation",
  },
  {
    key: "t",
    label: "Theme",
    description: "Change the website theme",
    category: "Settings",
  },
  {
    key: "?",
    label: "Help",
    description: "Show this keybind menu",
    category: "Help",
  },
];

const categoryIcons: Record<string, React.ReactNode> = {
  Navigation: <Home className="h-4 w-4" />,
  Settings: <Palette className="h-4 w-4" />,
  Help: <HelpCircle className="h-4 w-4" />,
};

interface WhichKeyPopoverProps {
  onOpenChange?: (open: boolean) => void;
}

export function WhichKeyPopover({ onOpenChange }: WhichKeyPopoverProps = {}) {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    setOpen(newOpen);
    onOpenChange?.(newOpen);
  }, [onOpenChange]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "?" || e.shiftKey && e.key === "/") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        handleOpenChange(!open);
      }

      // Close on Escape
      if (e.key === "Escape" && open) {
        e.preventDefault();
        e.stopPropagation();
        handleOpenChange(false);
      }
    };

    document.addEventListener("keydown", down, { capture: true });
    return () => document.removeEventListener("keydown", down, { capture: true });
  }, [open, handleOpenChange]);

  if (!open) return null;

  const groupedKeybinds = KEYBINDS.reduce(
    (acc, kb) => {
      const category = kb.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(kb);
      return acc;
    },
    {} as Record<string, KeyBind[]>
  );

  return (
    <div className="fixed inset-0 bg-black/80 flex items-end justify-center z-50 p-4 backdrop-blur-sm">
      <div
        className="bg-background shadow-2xl max-w-4xl w-full max-h-[70vh] overflow-y-auto flex flex-col border border-primary/30 rounded-t-lg mb-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - LazyVim which-key style */}
        <div className="bg-primary/10 border-b border-primary/20 px-5 py-3 sticky top-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Zap className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold text-primary">Which Key</h2>
            </div>
            <span className="text-xs text-muted-foreground">Press ? or ESC to close</span>
          </div>
        </div>

        <div className="p-6 overflow-y-auto flex-1">
          <div className="space-y-8">
            {Object.entries(groupedKeybinds).map(([category, keybinds]) => (
              <div key={category}>
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/30">
                  <div className="text-primary">{categoryIcons[category]}</div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {category}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {keybinds.map((kb) => (
                    <div
                      key={kb.key}
                      className="flex items-center gap-3 p-3 rounded-md hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20"
                    >
                      <kbd className="px-2.5 py-1.5 text-xs font-bold bg-primary/20 text-primary rounded min-w-[2rem] text-center border border-primary/30">
                        {kb.key}
                      </kbd>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground">{kb.label}</p>
                        <p className="text-xs text-muted-foreground truncate">{kb.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border/50 px-5 py-2 bg-muted/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Command className="h-3 w-3" />
              <span>LazyVim Keybindings</span>
            </div>
            <span>{Object.values(groupedKeybinds).flat().length} keybinds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
