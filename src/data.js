// ── Edit this file to update your site's content ──────────────────────────

export const profile = {
  name: "Syed Naved Mehdi",
  role: "AI/ML Researcher",
  tagline: "Generative AI, computer vision, and applied ML research.",
  location: "Chennai, India",
  email: "syednavedmehdi@gmail.com",
  github: "https://github.com/naved-me",
  linkedin: "https://linkedin.com/in/syednavedmehdi",
  resumeUrl: "/portfolio/resume.pdf", // drop your resume PDF into /public as resume.pdf
};

export const about = `M.Tech student in Computer Science & Engineering (AI & Machine Learning) at
SRM Institute of Science and Technology, Chennai (SGPA 8.60), following a B.Tech in
Artificial Intelligence from Sarala Birla University, Ranchi. Work centers on generative AI,
computer vision, and applied ML research — moving between model design, evaluation, and
shipped systems.`;

export const journey = [
  {
    year: "2026",
    title: "Brain Tumour Classification using Transfer Learning — ICMINT 2025",
    place: "",
    detail:
      "Co-authored research evaluating an MRI-based tumour detection system using a fine-tuned ResNet Transformer with ImageNet pretraining to address limited medical dataset constraints.",
  },
  {
    year: "2026",
    title: "MR-Attn-LSTM for Electricity Load Forecasting — ICICDA 2026",
    place: "SRM IST Vadapalani",
    detail:
      "Proposed a parallel-branch LSTM with Bahdanau attention processing hourly, daily, and weekly resolutions; trained on 43,776 hours of real TNEB & KSEB data for simultaneous 1h/6h/24h forecasting. Outperformed 6 baselines (MAPE 1.50% TN / 1.35% Kerala at 1h horizon).",
  },
  {
    year: "2025–27",
    title: "M.Tech, CSE (AI & ML)",
    place: "SRM Institute of Science and Technology, Chennai",
    detail: "Current SGPA: 8.60 / 10.0. Generative AI, computer vision, applied ML research.",
  },
  {
    year: "2021–25",
    title: "B.Tech, Artificial Intelligence",
    place: "Sarala Birla University, Ranchi",
    detail: "CGPA: 7.1 / 10.0.",
  },
];

export const research = [
  {
    tag: "Publication · ICICDA 2026",
    title: "MR-Attn-LSTM: Multi-Resolution Deep Learning for Electricity Load Forecasting",
    detail:
      "A parallel-branch LSTM with Bahdanau attention across hourly, daily, and weekly resolutions, trained on 30 months of real TNEB & KSEB grid data. Achieved MAPE 1.50% (Tamil Nadu) / 1.35% (Kerala) at 1-hour horizon, a 26–27% MAE reduction over the strongest baseline, with attention profiles revealing interpretable demand signatures.",
    venue: "SRM IST Vadapalani",
  },
  {
    tag: "Patent · App No. 202541106145",
    title: "AI-Driven Legal Chatbot for Motor Laws (RAG Architecture)",
    detail:
      "Co-developed an AI legal assistant using Retrieval-Augmented Generation to ground LLM outputs in verified motor vehicle law, reducing hallucination. Application published by the Indian Patent Office; awaiting substantive examination.",
    venue: "",
  },
  {
    tag: "Publication · ICMINT 2025",
    title: "Brain Tumour Classification using Transfer Learning",
    detail:
      "Co-authored research evaluating an MRI-based tumour detection system using a fine-tuned ResNet Transformer with ImageNet pretraining to address limited medical dataset constraints.",
    venue: "",
  },
];

export const projects = [
  {
    title: "Real-Time Gaze Heatmap & Attention Tracker",
    detail:
      "A real-time computer vision pipeline tracking pupil movement to generate spatial heatmaps of user screen attention and engagement patterns.",
    stack: ["Python", "OpenCV", "MediaPipe"],
    github: "", // TODO: add your repo link
    demo: "",
  },
  {
    title: "Hardware-Level Gesture Controller (Racing & Mouse)",
    detail:
      "A multi-modal HCI system mapping MediaPipe hand-tracking gestures directly to OS-level DirectX hardware inputs for zero-latency execution, with state-machine logic and hysteresis buffering to prevent input spamming during real-time steering and navigation.",
    stack: ["Python", "MediaPipe", "ctypes"],
    github: "", // TODO: add your repo link
    demo: "",
  },
  {
    title: "AI-Driven Legal Chatbot for Motor Laws",
    detail:
      "RAG-based legal assistant grounding LLM outputs in verified motor vehicle law. Patent application published by the Indian Patent Office.",
    stack: ["RAG", "LLMs", "FAISS/ChromaDB"],
    github: "",
    demo: "",
  },
  {
    title: "Local RAG Pipeline",
    detail:
      "A retrieval-augmented generation system built to run locally end-to-end — indexing, retrieval, and generation without external API dependencies.",
    stack: ["RAG", "LLMs", "Vector Search"],
    github: "",
    demo: "",
  },
];

export const skills = {
  Languages: ["Python", "Java", "SQL"],
  "ML / DL Frameworks": ["PyTorch", "TensorFlow", "Scikit-learn", "Keras"],
  "Generative AI & NLP": [
    "LLMs",
    "RAG",
    "Agentic AI",
    "FAISS/ChromaDB",
    "Prompt Engineering",
  ],
  "Data & Computer Vision": [
    "NumPy",
    "Pandas",
    "OpenCV",
    "MediaPipe",
    "ResNet",
    "Transformers",
  ],
  "Developer Tools & MLOps": [
    "Git",
    "GitHub",
    "Docker",
    "VS Code",
    "Flask",
    "Jupyter",
  ],
};

export const certifications = [
  {
    name: "Gold Medal — Rank #1 in Madhya Pradesh, National Science Olympiad",
    issuer: "NSO",
  },
  {
    name: "Building Agentic AI Applications with LLMs",
    issuer: "NVIDIA",
  },
  { name: "Brain Computer Interface using Deep Learning", issuer: "Udemy" },
  { name: "Introduction to Data Analytics", issuer: "Internshala" },
  { name: "Interpersonal Skills", issuer: "US English" },
];