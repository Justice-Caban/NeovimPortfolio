"use client";

import Link from "next/link";

export function AboutContent() {
  return (
    <div className="space-y-8 text-foreground">
      {/* Intro section */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Who I Am
        </h2>
        <div className="space-y-3 text-sm leading-relaxed pl-4">
          <p>
            I am a full-stack developer passionate about creating intuitive,
            performant web applications. With expertise in modern JavaScript
            frameworks and a keen eye for design, I bridge the gap between
            beautiful UI and robust backend systems.
          </p>
          <p>
            When {"I'm"} not coding, {"you'll"} find me exploring new technologies, reading graphic novels or going on adventures with my beautiful family.
          </p>
        </div>
      </div>

      {/* Skills section */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> What I Do
        </h2>
        <div className="space-y-3 text-sm pl-4">
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[5rem]">Frontend</span>
            <span className="text-muted-foreground">React • Next.js • TypeScript • Tailwind CSS</span>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[5rem]">Backend</span>
            <span className="text-muted-foreground">Node.js • NextJS • REST APIs • Go • Python • Django</span>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[5rem]">Database</span>
            <span className="text-muted-foreground">PostgreSQL • SQLite • DuckDB</span>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[5rem]">Tools</span>
            <span className="text-muted-foreground">Git • Docker • Jest • VSCode • NeoVim • Ghostty</span>
          </div>
        </div>
      </div>

      {/* Approach section */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> My Approach
        </h2>
        <div className="space-y-3 text-sm leading-relaxed pl-4">
          <p>
            I believe in writing maintainable code {`that's`} a
            pleasure to work with. I am committed to continuous learning
            and staying current with industry best practices.
          </p>
          <p>
            Whether working independently or as part of a team, I prioritize clear
            communication and delivering quality results on time.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Contact
        </h2>
        <div className="space-y-3 text-sm pl-4">
          <p className="mb-4">Interested in working together? {`Let's`} create something amazing!</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-accent">📧</span>
              <Link href="mailto:justice.a.caban@gmail.com" className="text-primary hover:underline">
                justice.a.caban@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">💼</span>
              <Link href="https://www.linkedin.com/in/justice-caban" className="text-primary hover:underline">
                www.linkedin.com/in/justice-caban
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">🐙</span>
              <Link href="https://github.com/justice-caban" className="text-primary hover:underline">
                https://github.com/justice-caban
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
