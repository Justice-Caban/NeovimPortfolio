"use client";

import * as React from "react";
import { Dashboard } from "./components/Dashboard";
import { NeovimModal } from "./components/NeovimModal";
import { AboutContent } from "./components/AboutContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { ResumeContent } from "./components/ResumeContent";
import { ThemeContent } from "./components/ThemeContent";
import { WhichKeyPopover } from "./components/WhichKeyPopover";

export default function Home() {
  const [aboutModalOpen, setAboutModalOpen] = React.useState(false);
  const [projectsModalOpen, setProjectsModalOpen] = React.useState(false);
  const [resumeModalOpen, setResumeModalOpen] = React.useState(false);
  const [themeModalOpen, setThemeModalOpen] = React.useState(false);
  const [whichKeyOpen, setWhichKeyOpen] = React.useState(false);

  const isAnyModalOpen = aboutModalOpen || projectsModalOpen || resumeModalOpen || themeModalOpen || whichKeyOpen;

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Don't handle shortcuts if any modal is open
      if (isAnyModalOpen) return;

      if (e.key === "a" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setAboutModalOpen(true);
      }
      if (e.key === "p" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setProjectsModalOpen(true);
      }
      if (e.key === "r" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setResumeModalOpen(true);
      }
      if (e.key === "t" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setThemeModalOpen(true);
      }
    };

    document.addEventListener("keydown", down, { capture: true });
    return () => document.removeEventListener("keydown", down, { capture: true });
  }, [isAnyModalOpen]);

  return (
    <>
      <Dashboard
        onAboutClick={() => setAboutModalOpen(true)}
        onProjectsClick={() => setProjectsModalOpen(true)}
        onResumeClick={() => setResumeModalOpen(true)}
        onThemeClick={() => setThemeModalOpen(true)}
        isDisabled={isAnyModalOpen}
      />
      <NeovimModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        title="about.md"
      >
        <AboutContent />
      </NeovimModal>
      <NeovimModal
        isOpen={projectsModalOpen}
        onClose={() => setProjectsModalOpen(false)}
        title="projects.md"
      >
        <ProjectsContent />
      </NeovimModal>
      <NeovimModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        title="resume.md"
      >
        <ResumeContent />
      </NeovimModal>
      <NeovimModal
        isOpen={themeModalOpen}
        onClose={() => setThemeModalOpen(false)}
        title="theme.md"
      >
        <ThemeContent onThemeSelect={() => setThemeModalOpen(false)} />
      </NeovimModal>
      <WhichKeyPopover onOpenChange={setWhichKeyOpen} />
    </>
  );
}
