// Renders CONTENT (from content.js) into the page.
// You should not need to edit this file — edit content.js instead.

(function () {
  const c = window.CONTENT;
  if (!c) {
    console.error("content.js did not load or CONTENT is undefined.");
    return;
  }

  const toast = document.getElementById("copy-toast");

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "fixed";
    temp.style.left = "-9999px";
    document.body.appendChild(temp);
    temp.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(temp);
    return copied;
  }

  function showCopyToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showCopyToast.timeoutId);
    showCopyToast.timeoutId = setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
  }

  function bindCopyEmailLink(link, email) {
    if (!link || !email) return;
    link.setAttribute("type", "button");
    link.setAttribute("aria-label", `Copy email address ${email}`);
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      showCopyToast("Email copied to clipboard");
      try {
        await copyTextToClipboard(email);
      } catch (error) {
        // Clipboard access may be blocked or unavailable in some browsers.
      }
    });
  }

  // ---------- HERO ----------
  document.getElementById("hero-location").textContent = c.location || "";
  document.getElementById("hero-name").textContent = c.name || "";
  document.getElementById("hero-role").textContent = c.role || "";
  document.getElementById("hero-tagline").textContent = c.tagline || "";

  const heroLinks = document.getElementById("hero-links");
  const heroLinkDefs = [
    ["GitHub", c.links && c.links.github],
    ["LinkedIn", c.links && c.links.linkedin]
  ];
  heroLinkDefs.forEach(([label, href]) => {
    if (!href) return;
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (href.startsWith("http")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    heroLinks.appendChild(a);
  });

  // ---------- ABOUT ----------
  document.getElementById("about-text").textContent = c.about || "";

  // ---------- SKILLS ----------
  const skillsList = document.getElementById("skills-list");
  (c.skills || []).forEach((group) => {
    const row = document.createElement("div");
    row.className = "skill-row";

    const cat = document.createElement("div");
    cat.className = "skill-cat";
    cat.textContent = group.category;

    const items = document.createElement("div");
    items.className = "skill-items";
    items.textContent = (group.items || []).join("  ·  ");

    row.appendChild(cat);
    row.appendChild(items);
    skillsList.appendChild(row);
  });

  // ---------- EXPERIENCE ----------
  const expList = document.getElementById("experience-list");
  (c.experience || []).forEach((job) => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    const role = document.createElement("div");
    role.className = "timeline-role";
    role.textContent = `${job.role} — ${job.company}`;

    const meta = document.createElement("div");
    meta.className = "timeline-meta";
    meta.textContent = job.period || "";

    const points = document.createElement("ul");
    points.className = "timeline-points";
    (job.points || []).forEach((pt) => {
      const li = document.createElement("li");
      li.textContent = pt;
      points.appendChild(li);
    });

    item.appendChild(role);
    item.appendChild(meta);
    item.appendChild(points);
    expList.appendChild(item);
  });

  // ---------- PROJECTS ----------
  const projList = document.getElementById("projects-list");
  (c.projects || []).forEach((proj) => {
    const item = document.createElement("div");
    item.className = "project-item";

    const titleRow = document.createElement("div");
    titleRow.className = "project-title-row";

    const title = document.createElement("div");
    title.className = "project-title";
    title.textContent = proj.title;
    titleRow.appendChild(title);

    if (proj.link) {
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = proj.link;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "View";
      titleRow.appendChild(link);
    }

    const desc = document.createElement("div");
    desc.className = "project-desc";
    desc.textContent = proj.description || "";

    const tags = document.createElement("div");
    tags.className = "project-tags";
    (proj.tags || []).forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      tags.appendChild(span);
    });

    item.appendChild(titleRow);
    item.appendChild(desc);
    item.appendChild(tags);
    projList.appendChild(item);
  });

  // ---------- FOOTER ----------
  document.getElementById("footer-text").textContent =
    `Open to new opportunities. Reach out at ${c.links && c.links.email ? c.links.email : ""}, or grab my resume below.`;

  const footerLinks = document.getElementById("footer-links");
  if (c.links && c.links.email) {
    const a = document.createElement("button");
    a.textContent = "Email me";
    bindCopyEmailLink(a, c.links.email);
    footerLinks.appendChild(a);
  }
  if (c.links && c.links.resume) {
    const a = document.createElement("a");
    a.href = c.links.resume;
    a.download = "";
    a.className = "resume-btn";
    a.textContent = "Download resume";
    footerLinks.appendChild(a);
  }

  // page title
  if (c.name) {
    document.title = `${c.name} — ${c.role || "Portfolio"}`;
  }
})();
