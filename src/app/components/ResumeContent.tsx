"use client";

export function ResumeContent() {
  return (
    <div className="space-y-8 text-foreground">
      {/* Header */}
      <div className="space-y-3">
        <div className="text-2xl font-bold text-primary">Justice Caban</div>
        <div className="text-sm text-accent mb-3">Full-Stack Software Engineer | Air Force Veteran</div>
        <div className="text-sm text-muted-foreground space-y-1.5 pl-4">
          <div className="flex items-center gap-2">
            <span className="text-accent">📧</span>
            <a href="mailto:justice.a.caban@gmail.com" className="hover:text-primary transition-colors">
              justice.a.caban@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">📱</span>
            <span>610-413-9925</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">💼</span>
            <a href="https://linkedin.com/in/justice-caban" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              linkedin.com/in/justice-caban
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">🐙</span>
            <a href="https://github.com/Justice-Caban" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              github.com/Justice-Caban
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-accent">📍</span>
            <span>Hamburg, PA</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Professional Summary
        </h2>
        <div className="text-sm text-muted-foreground leading-relaxed pl-4">
          Software Engineer with a strong background in backend development using Go and Python. Experienced in
          designing and building scalable, cloud-native solutions on AWS, including serverless functions and
          message-driven architectures. Proven ability to deliver robust, well-tested systems from conception to
          deployment, with a focus on security and automation.
        </div>
      </div>

      {/* Experience */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Professional Experience
        </h2>
        <div className="space-y-5 pl-4">
          {/* Job 1 */}
          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="font-semibold text-foreground">Network Security Analyst / Developer</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">2022 - Current</div>
            </div>
            <div className="text-sm text-accent mb-3">Flat Earth Networking - Nashville, TN (Hybrid)</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Designed and deployed a serverless, event-driven pipeline in Go using AWS Lambda and SNS to ingest SIEM alerts, perform ETL operations, and automatically generate detailed Jira tickets. Authored comprehensive unit tests using {"Go's"} standard testing library to ensure reliability.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Developed and integrated scalable backend solutions and APIs across diverse client networks and third-party services, utilizing a range of automation platforms, self-hosted servers, and cloud hosts to enhance operational efficiency and security.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Conducted comprehensive security analysis and implemented advanced threat prevention and mitigation strategies for multiple contracted clients, ensuring robust protection against potential cyber threats.</span>
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="font-semibold text-foreground">Full-Stack Web Developer (Intern)</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">2022</div>
            </div>
            <div className="text-sm text-accent mb-3">Yello - Chicago, IL (Remote)</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Contributed to a Django REST backend by adding URL endpoints, serialization/deserialization of data, and modifying the Postgres schema to improve data handling and system performance.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Collaborated on integrating Next.js into the existing codebase, implementing content management systems and profile-setting webforms with reactive validation and file uploading capabilities to a Django backend.</span>
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="font-semibold text-foreground">Radio Frequency Transmission Systems Craftsman</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">2016 - 2022</div>
            </div>
            <div className="text-sm text-accent mb-3">US Air Force, Various Locations</div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Spearheaded a multidisciplinary team responsible for asset management, maintenance, installation, and project planning, ensuring seamless operations and optimal resource utilization.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>Developed and managed a comprehensive training program for an organization with over 100 members, delivering group lessons and continuously updating training plans to meet evolving needs.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Technical Skills
        </h2>
        <div className="space-y-3 text-sm pl-4">
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[9rem]">Languages</span>
            <span className="text-muted-foreground">Go, Python, JavaScript, TypeScript, SQL</span>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[9rem]">Frameworks</span>
            <span className="text-muted-foreground">React, Next.js, Django, RPC, Bootstrap, Tailwind CSS</span>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[9rem]">Tools/Platforms</span>
            <span className="text-muted-foreground">AWS (Lambda, SNS), Docker, Kubernetes, Git, Linux, Jira</span>
          </div>
          <div className="flex gap-4 items-start">
            <span className="text-accent font-semibold min-w-[9rem]">Databases</span>
            <span className="text-muted-foreground">PostgreSQL</span>
          </div>
        </div>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
          <span className="text-primary">▸</span> Education
        </h2>
        <div className="pl-4 space-y-4">
          <div className="p-4 rounded-lg border border-border/50">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="font-semibold text-foreground">Full Stack Web Development Bootcamp</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">Jan 2022 - May 2022</div>
            </div>
            <div className="text-sm text-accent">Code Platoon - Chicago, IL</div>
          </div>
          <div className="p-4 rounded-lg border border-border/50">
            <div className="flex justify-between items-start gap-4 mb-2">
              <div className="font-semibold text-foreground">Community College of the Air Force</div>
              <div className="text-xs text-muted-foreground whitespace-nowrap">2016 - 2019</div>
            </div>
            <div className="text-sm text-accent">Various Air Force Bases</div>
          </div>
        </div>
      </div>
    </div>
  );
}
