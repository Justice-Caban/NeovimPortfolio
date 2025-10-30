"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Check } from "lucide-react";

const THEMES = [
  { name: "Dracula", value: "dracula", key: "1", description: "Dark purple theme inspired by Dracula" },
  { name: "Catppuccin", value: "catppuccin", key: "2", description: "Soothing pastel theme for the high-spirited" },
  { name: "Gruvbox", value: "gruvbox", key: "3", description: "Retro groove color scheme" },
  { name: "Tokyo Night", value: "tokyonight", key: "4", description: "A clean dark theme inspired by Tokyo's night" },
];

interface ThemeContentProps {
  onThemeSelect?: () => void;
}

export function ThemeContent({ onThemeSelect }: ThemeContentProps) {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Numeric keybinds for themes (1-4)
      const themeIndex = THEMES.findIndex(t => t.key === e.key);
      if (themeIndex !== -1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        e.stopPropagation();
        setTheme(THEMES[themeIndex].value);
        onThemeSelect?.();
      }
    };

    document.addEventListener("keydown", down, { capture: true });
    return () => document.removeEventListener("keydown", down, { capture: true });
  }, [setTheme, onThemeSelect]);

  const handleThemeClick = (themeValue: string) => {
    setTheme(themeValue);
    onThemeSelect?.();
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Select Theme
        </h2>
        <p className="text-sm text-muted-foreground mb-6 pl-4">
          Choose your preferred color scheme. Press the number key or click to apply.
        </p>
      </div>

      <div className="space-y-2">
        {THEMES.map((t) => (
          <button
            key={t.value}
            onClick={() => handleThemeClick(t.value)}
            className={`
              w-full p-4 text-left transition-all rounded-lg
              flex items-center justify-between gap-4
              hover:bg-primary/5 cursor-pointer border
              ${theme === t.value
                ? "border-primary bg-primary/10 shadow-sm"
                : "border-border/50 hover:border-primary/30"
              }
            `}
          >
            <div className="flex items-center gap-4 flex-1">
              <span className={`
                px-2 py-1 rounded font-bold text-sm min-w-[2rem] text-center
                ${theme === t.value
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "bg-muted text-muted-foreground"
                }
              `}>
                {t.key}
              </span>
              <div className="flex-1">
                <div className={`font-semibold mb-1 ${theme === t.value ? "text-primary" : "text-foreground"}`}>
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.description}</div>
              </div>
            </div>
            {theme === t.value && (
              <div className="bg-primary/20 rounded-full p-1">
                <Check className="h-4 w-4 text-primary" />
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground pl-4">
        <p className="flex items-center gap-2">
          <span className="text-primary">●</span> Theme will be applied immediately
        </p>
      </div>
    </div>
  );
}
