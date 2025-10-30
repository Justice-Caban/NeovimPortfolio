"use client";

import { Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
  };
}

const PROJECTS: Project[] = [
  {
    title: "HostDiffTool",
    description:
      "A web-based application for tracking and comparing host configuration snapshots over time. Features automatic deduplication, historical record viewing, and precise configuration change detection across services, ports, CVEs, and TLS configurations. Includes 67+ comprehensive tests covering unit, end-to-end gRPC, and browser automation testing.",
    technologies: ["Go", "gRPC", "React", "TypeScript", "SQLite", "Docker", "Nginx"],
    links: {
      github: "https://github.com/Justice-Caban/HostDiffTool",
    },
  },
  {
    title: "Neovim Portfolio",
    description:
      "This is where you are right now! A NeoVim-inspired portfolio website featuring a LazyVim-like dashboard, theme switcher with 4 beautiful color schemes, and markdown-rendered modals.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "https://github.com/Justice-Caban/NeovimPortfolio",
    },
  },
  {
    title: "Automated Timesheet Integration Tool",
    description:
      "A React application that efficiently retrieves all issues worked on within a specified time frame, parses Jira worklogs to calculate time spent, and seamlessly logs this data into a 3rd party timesheet service.",
    technologies: ["React", "Jira Forge", "Jira API"],
  },
  {
    title: "Secure Webhook Processing Service",
    description:
      "Engineered a webhook-driven service in Go to securely process events from third-party APIs (e.g., Zoom). The Go application, deployed on AWS Lambda, authenticates requests using OAuth2, handles API challenge-response checks, parses incoming data payloads, and automatically creates structured issues in Jira.",
    technologies: ["Go", "AWS Lambda", "OAuth2", "Jira API"],
  },
  {
    title: "SIEM Alert to Jira Ticket Pipeline",
    description:
      "An event-driven service that receives security alerts from a SIEM via an AWS SNS topic. The Go-based AWS Lambda function consumes these alerts, performs ETL to structure the data, and creates formatted, human-readable tickets in Jira. The system includes a robust suite of unit tests written with Go's standard testing library.",
    technologies: ["Go", "AWS Lambda", "AWS SNS", "Jira API"],
  },
  {
    title: "Automated Patch Tag Management",
    description:
      "Spearheaded the development of an automated system in XSOAR for the addition and removal of patch tags in Tanium, collaborating with multiple teams and coordinating with third-party vendors to ensure successful project execution.",
    technologies: ["Python", "XSOAR", "Tanium", "GraphQL"],
  },
];

export function ProjectsContent() {
  return (
    <div className="space-y-6 text-foreground">
      {PROJECTS.map((project, index) => (
        <div
          key={index}
          className="group p-5 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all space-y-4"
        >
          {/* Project Title */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <span className="text-primary">▸</span>
              {project.title}
            </h3>
            <div className="flex gap-2">
              {project.links?.github ? (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                  title="View on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              ) : (
                <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border/50">
                  Private
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="text-sm text-muted-foreground leading-relaxed pl-4">
            {project.description}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pl-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 text-xs font-medium bg-muted text-foreground rounded border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
