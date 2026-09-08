// ============================================================
// EDIT THIS FILE TO UPDATE YOUR SITE. Nothing else needs to change.
// After editing, just save and refresh the page (or push to deploy).
// ============================================================

const CONTENT = {
  name: "Syed Inayath",
  role: "Senior Software Engineer",
  tagline:
    "I build reliable backend systems, workflow platforms, and enterprise integrations that scale across application, data, and infrastructure layers.",
  location: "Bengaluru, India",

  about:
    "Software Engineer with 5+ years of experience building backend and enterprise applications using Java, Go, Python, and Spring Boot. Experienced in designing REST APIs, distributed workflow systems, concurrency controls, XML processing, deployment automation, and production troubleshooting. Strong experience working across application, database, messaging, and infrastructure layers.",

  links: {
    email: "dev.syed.inayath@gmail.com",
    github: "https://github.com/syedinay",
    linkedin: "https://www.linkedin.com/in/syedinay/",
    resume: "resources/resume.pdf"
  },

  skills: [
    {
      category: "Languages",
      items: ["Java", "Go", "Python", "SQL", "Bash/KornShell"]
    },
    {
      category: "Frameworks",
      items: ["Spring Boot", "Spring MVC", "Spring Security", "FastAPI", "React"]
    },
    {
      category: "Data & Messaging",
      items: ["Oracle", "MySQL", "PostgreSQL", "JDBC", "JMS", "ActiveMQ", "IBM MQ"]
    },
    {
      category: "Tools & Infra",
      items: ["Git", "Jenkins", "Linux", "REST APIs", "CI/CD", "JUnit", "XML", "XSLT"]
    }
  ],

  experience: [
    {
      role: "Senior Software Engineer",
      company: "HashedIn by Deloitte",
      period: "June 2024 — Present",
      points: [
        "Designed and implemented priority-aware workflow scheduling for Jurs APIs, atomically persisting workflow priority and introducing a DB-backed FIFO waiting queue to prevent interactive workloads from being starved by batch processing.",
        "Built the frontend and backend of a legislation extraction application using React and Python/FastAPI, integrating with an external extraction service and processing returned XML documents through XSLT transformations to generate structured output for downstream workflows.",
        "Diagnosed cross-environment LegisExtract failures caused by stale deployment configuration and hardened deployment automation with deterministic configuration synchronization, timestamped rollback backups, hostname validation, process lifecycle controls, port checks, and post-deployment health validation.",
        "Implemented type-ahead search functionality for the Phoenix application, improving search and navigation across content used for creating, publishing, and managing books, journals, eBooks, and print materials.",
        "Upgraded vulnerable Log4j and related transitive dependencies across Java applications to address security vulnerabilities and compliance requirements."
      ]
    },
    {
      role: "Software Engineer",
      company: "Oracle Cerner",
      period: "May 2021 — May 2024",
      points: [
        "Developed, customized, and resolved feature issues in Oracle Cerner's Bedrock clinical application using Java RCP and SWT, including client-specific workflows for the US Department of Defense and federal-agency deployments.",
        "Optimized SQL queries and redesigned business logic to resolve critical defects and improve application performance; introduced application-level locking to prevent concurrent data modification through the user interface.",
        "Independently upgraded Log4j and transitive SLF4J dependencies to mitigate CVE-2021-44228 and resolved 52 Fortify-reported CVEs across the application.",
        "Added framework-level RTMS timers to expose long-running processes through the Olympus portal and built Jenkins pipelines supporting deployments across multiple production and non-production environments.",
        "Developed a Python deployment utility integrating Jira and the internal feature-tracking system, automating deployment updates through API integrations and NTLM authentication."
      ]
    }
  ],

  projects: [
    {
      title: "Priority-Aware Workflow Scheduling",
      description:
        "Built a scheduling layer for Jurs APIs that preserved priority during insertion and enforced a DB-backed FIFO waiting queue to keep interactive workloads responsive under load.",
      tags: ["Java", "SQL", "Distributed Systems"],
      link: ""
    },
    {
      title: "Legislation Extraction Platform",
      description:
        "Created a React + FastAPI workflow for extracting legislative content from an external service, transforming returned XML via XSLT, and passing structured output to downstream processing pipelines.",
      tags: ["React", "Python", "FastAPI", "XML", "XSLT"],
      link: ""
    },
    {
      title: "Deployment Automation Hardening",
      description:
        "Hardened release automation by synchronizing config deterministically, validating hostnames, checking ports, backing up versions, and validating application health before and after deployment.",
      tags: ["Jenkins", "Linux", "Automation", "CI/CD"],
      link: ""
    }
  ]
};
window.CONTENT = CONTENT;
