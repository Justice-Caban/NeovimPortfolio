"use client";

import * as React from "react";
import {
  User,
  Folder,
  FileText,
  Palette,
  HelpCircle,
} from "lucide-react";

interface MenuItem {
  key: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action?: () => void;
  href?: string;
}

interface DashboardProps {
  onAboutClick?: () => void;
  onProjectsClick?: () => void;
  onResumeClick?: () => void;
  onThemeClick?: () => void;
  isDisabled?: boolean;
}

export function Dashboard({ onAboutClick, onProjectsClick, onResumeClick, onThemeClick, isDisabled }: DashboardProps) {
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);

  const menuItems: MenuItem[] = React.useMemo(
    () => [
      {
        key: "a",
        label: "About Me",
        description: "Learn about my background and experience",
        icon: <User className="h-6 w-6" />,
        action: onAboutClick,
      },
      {
        key: "p",
        label: "Projects",
        description: "View my portfolio projects",
        icon: <Folder className="h-6 w-6" />,
        action: onProjectsClick,
      },
      {
        key: "r",
        label: "Resume",
        description: "Download or view my resume",
        icon: <FileText className="h-6 w-6" />,
        action: onResumeClick,
      },
      {
        key: "t",
        label: "Theme",
        description: "Change the website theme",
        icon: <Palette className="h-6 w-6" />,
        action: onThemeClick,
      },
      {
        key: "?",
        label: "Keybinds",
        description: "Show available keyboard shortcuts",
        icon: <HelpCircle className="h-6 w-6" />,
        action: () => {
          const event = new KeyboardEvent("keydown", { key: "?" });
          document.dispatchEvent(event);
        },
      },
    ],
    [onAboutClick, onProjectsClick, onResumeClick, onThemeClick]
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Don't handle keyboard events if disabled
      if (isDisabled) return;

      const key = e.key.toLowerCase();

      // Vim-style navigation (j/k) and arrow keys
      if (e.key === "ArrowDown" || key === "j") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % menuItems.length);
      } else if (e.key === "ArrowUp" || key === "k") {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const item = menuItems[highlightedIndex];
        handleMenuItemClick(item);
      }

      // Direct key presses
      const itemIndex = menuItems.findIndex((item) => item.key === key);
      if (itemIndex !== -1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (key !== "t" && key !== "?") {
          // Only handle these if no modifiers
          e.preventDefault();
          handleMenuItemClick(menuItems[itemIndex]);
        }
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [menuItems, highlightedIndex, isDisabled]);

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 font-mono bg-background">
      {/* ASCII Art Title */}
      <div className="mb-8 text-center">
        <div className="overflow-x-auto">
          <pre className="text-[0.5rem] sm:text-xs md:text-sm font-mono whitespace-pre text-primary/80 mb-4 inline-block scale-75 sm:scale-90 md:scale-100 origin-center">
            {`░░░░░██╗██╗░░░██╗░██████╗████████╗██╗░█████╗░███████╗  ░█████╗░░█████╗░██████╗░░█████╗░███╗░░██╗
░░░░░██║██║░░░██║██╔════╝╚══██╔══╝██║██╔══██╗██╔════╝  ██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗░██║
░░░░░██║██║░░░██║╚█████╗░░░░██║░░░██║██║░░╚═╝█████╗░░  ██║░░╚═╝███████║██████╦╝███████║██╔██╗██║
██╗░░██║██║░░░██║░╚═══██╗░░░██║░░░██║██║░░██╗██╔══╝░░  ██║░░██╗██╔══██║██╔══██╗██╔══██║██║╚████║
╚█████╔╝╚██████╔╝██████╔╝░░░██║░░░██║╚█████╔╝███████╗  ╚█████╔╝██║░░██║██████╦╝██║░░██║██║░╚███║
░╚════╝░░╚═════╝░╚═════╝░░░░╚═╝░░░╚═╝░╚════╝░╚══════╝  ░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝`}
          </pre>
        </div>
        <div className="text-sm text-muted-foreground">
          Portfolio Dashboard
        </div>
      </div>

      {/* Recent Items section - LazyVim style */}
      <div className="max-w-3xl w-full mb-8">
        <div className="mb-3 px-2">
          <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Recent
          </h2>
        </div>

        <div className="rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-lg">
          {menuItems.map((item, index) => (
            <button
              key={item.key}
              onClick={() => handleMenuItemClick(item)}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`
                w-full px-5 py-3.5 text-left transition-all
                flex items-center gap-4 cursor-pointer group
                ${index < menuItems.length - 1 ? "border-b border-border/30" : ""
                }
                ${index === highlightedIndex
                  ? "bg-primary/10 border-l-2 border-l-primary"
                  : "hover:bg-muted/30 border-l-2 border-l-transparent"
                }
              `}
            >
              {/* Icon */}
              <div className={`${index === highlightedIndex ? "text-primary" : "text-muted-foreground"}`}>
                {item.icon}
              </div>

              {/* Item content */}
              <div className="flex-1 min-w-0">
                <div className={`font-medium ${index === highlightedIndex ? "text-primary" : "text-foreground"}`}>
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {item.description}
                </div>
              </div>

              {/* Keybind hint */}
              <div className={`
                px-2 py-1 rounded text-xs font-semibold
                ${index === highlightedIndex
                  ? "bg-primary/20 text-primary"
                  : "bg-muted text-muted-foreground"
                }
              `}>
                {item.key}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Help hint - LazyVim style */}
      <div className="text-xs text-muted-foreground text-center space-y-1">
        <div>
          <kbd className="px-2 py-1 bg-muted rounded text-sm">j</kbd>
          <kbd className="px-2 py-1 bg-muted rounded text-sm ml-1">k</kbd>
          <kbd className="px-2 py-1 bg-muted rounded text-sm ml-1">⬆</kbd>
          <kbd className="px-2 py-1 bg-muted rounded text-sm ml-1">⬇</kbd>
          <span className="ml-2">navigate</span>
          <span className="mx-2">•</span>
          <kbd className="px-2 py-1 bg-muted rounded text-xs">enter</kbd>
          <span className="ml-2">select</span>
          <span className="mx-2">•</span>
          <kbd className="px-2 py-1 bg-muted rounded text-xs">?</kbd>
          <span className="ml-2">help</span>
        </div>
      </div>
    </div>
  );
}
