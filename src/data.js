// ── Edit this file to update your site's content ──────────────────────────

export const profile = {
  name: "Paradox",
  role: "AI/ML Researcher",
  tagline: "Generative AI, computer vision, and applied ML research.",
  location: "Chennai, India",
  email: "your-email@example.com",       // TODO: fill in
  github: "https://github.com/yourhandle",     // TODO: fill in
  linkedin: "https://linkedin.com/in/yourhandle", // TODO: fill in
  resumeUrl: "/portfolio/resume.pdf",    // TODO: drop your resume PDF in /public
};

export const about = `M.Tech student in Computer Science & Engineering (AI & Machine Learning) at
SRM IST Chennai, following a B.Tech background in AI. Work centers on generative AI,
computer vision, and applied ML research — moving between model design, evaluation, and
shipped systems.`;

export const journey = [
  {
    year: "2026",
    title: "Energy Forecasting — ICICDA 2026",
    place: "SRM Vadapalani",
    detail:
      "Authored a paper on an attention-based multi-resolution, multi-horizon model producing 1-day, 1-week, and 1-month forecasts.",
  },
  {
    year: "2024–26",
    title: "M.Tech, CSE (AI & ML)",
    place: "SRM IST Chennai",
    detail: "Generative AI, computer vision, applied ML research.",
  },
  {
    year: "Earlier",
    title: "B.Tech, Artificial Intelligence",
    place: "",
    detail: "Foundation in AI/ML, systems, and software engineering.",
  },
];

export const research = [
  {
    tag: "Publication · ICICDA 2026",
    title: "Attention-Based Multi-Resolution, Multi-Horizon Energy Forecasting",
    detail:
      "A model predicting 1-day, 1-week, and 1-month energy forecasts using attention across multiple resolutions rather than a single end-to-end pipeline.",
    venue: "SRM Vadapalani",
  },
  {
    tag: "Patent · Filed (Group)",
    title: "AI Legal Chatbot",
    detail:
      "Legal-domain conversational assistant; patent application filed as part of a group project.",
    venue: "",
  },
];

export const projects = [
  {
    title: "Local RAG Pipeline",
    detail:
      "A retrieval-augmented generation system built to run locally end-to-end — indexing, retrieval, and generation without external API dependencies.",
    stack: ["RAG", "LLMs", "Vector Search"],
    github: "",
    demo: "",
  },
  {
    title: "AI Legal Chatbot",
    detail:
      "Conversational assistant for legal-domain queries, developed as a group project with a patent application filed.",
    stack: ["NLP", "LLMs"],
    github: "",
    demo: "",
  },
  {
    title: "Brain Tumour Classifier",
    detail:
      "Computer vision model classifying brain tumours from MRI scans.",
    stack: ["Computer Vision", "Deep Learning"],
    github: "",
    demo: "",
  },
  {
    title: "Exam Monitoring System",
    detail:
      "A monitoring system built to flag irregularities during examinations.",
    stack: ["Computer Vision", "Applied ML"],
    github: "",
    demo: "",
  },
];

export const skills = {
  "Generative AI & LLMs": ["LLMs", "RAG", "Agentic AI", "Prompt Engineering"],
  "Computer Vision": ["CNNs", "Image Classification", "OpenCV"],
  "Core ML": ["PyTorch", "Scikit-learn", "Model Evaluation"],
  Tools: ["Python", "Git", "LaTeX"],
};

export const certifications = [
  {
    name: "Building Agentic AI Applications with LLMs",
    issuer: "NVIDIA",
  },
  { name: "Data Analytics", issuer: "Internshala" },
  { name: "Excel Analytics", issuer: "360DigiTMG" },
  { name: "Brain-Computer Interface", issuer: "Udemy" },
  { name: "Interpersonal Skills", issuer: "US English" },
];
