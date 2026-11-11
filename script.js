/* ======================================================================
   Skillora – Academia × Industry Collaboration Portal
   Vanilla JS prototype (in-memory mock data, resets on reload)
   ====================================================================== */

/* ---------------------------------------------------------------------- */
/*  Mock seed data                                                        */
/* ---------------------------------------------------------------------- */
const ADMIN_PASSCODE = "admin123";
let idCounter = 5000;
const nextId = (prefix) => `${prefix}-${idCounter++}`;

const seedStudents = [
  {
    id: "S-1001", name: "Ananya Sharma", email: "ananya@college.edu", password: "pass123",
    college: "NIT Trichy", course: "B.Tech CSE", cgpa: "8.7",
    skills: ["React", "Node.js", "SQL", "Python", "Git"],
    projects: "Built a campus event platform used by 3,000+ students; ML-based resume screener.",
    certifications: "AWS Cloud Practitioner, Meta Front-End Developer",
    resumeLink: "ananya-sharma-resume.pdf", portfolioLink: "https://ananya.dev",
    panCard: "ABCPS1234F", photo: "", kycStatus: "submitted",
    status: "verified", joinedAt: "2026-06-02",
    assessments: { "React": { score: 4, total: 5, percent: 80, passed: true, takenAt: "2026-07-12" } },
  },
  {
    id: "S-1002", name: "Rohan Mehta", email: "rohan@college.edu", password: "pass123",
    college: "VIT Vellore", course: "B.Tech IT", cgpa: "9.1",
    skills: ["Java", "Spring Boot", "Docker", "AWS", "SQL"],
    projects: "Microservice-based food delivery backend; Dockerized CI/CD pipeline.",
    certifications: "Oracle Java SE 11, Docker Certified Associate",
    resumeLink: "rohan-mehta-resume.pdf", portfolioLink: "https://github.com/rohanm",
    panCard: "AEFPM5678K", photo: "", kycStatus: "submitted",
    status: "verified", joinedAt: "2026-06-10",
    assessments: { "Java": { score: 3, total: 5, percent: 60, passed: true, takenAt: "2026-07-18" }, "Docker": { score: 2, total: 5, percent: 40, passed: false, takenAt: "2026-07-18" } },
  },
];

const seedCompanies = [
  {
    id: "C-2001", name: "Nimbus Analytics", email: "hr@nimbusanalytics.com",
    industry: "Data & AI", website: "https://nimbusanalytics.com", contactPerson: "Priya Nair",
    description: "A data analytics company building forecasting tools for retail chains.",
    status: "verified", joinedAt: "2026-05-20",
  },
  {
    id: "C-2002", name: "Forgeworks Robotics", email: "careers@forgeworks.io",
    industry: "Robotics", website: "https://forgeworks.io", contactPerson: "Karan Bedi",
    description: "Industrial automation startup designing warehouse robotics.",
    status: "verified", joinedAt: "2026-04-11",
  },
  {
    id: "C-2003", name: "Verdant Cloud Systems", email: "hr@verdantcloud.com",
    industry: "Cloud & DevOps", website: "https://verdantcloud.com", contactPerson: "Meera Iyer",
    description: "Cloud infrastructure and DevOps consultancy helping startups scale on AWS and Kubernetes.",
    status: "verified", joinedAt: "2026-03-14",
  },
  {
    id: "C-2004", name: "Pixel & Pine Studio", email: "jobs@pixelpine.design",
    industry: "Design & UX", website: "https://pixelpine.design", contactPerson: "Aditya Rao",
    description: "Product design studio crafting web and mobile experiences for fintech clients.",
    status: "verified", joinedAt: "2026-02-27",
  },
  {
    id: "C-2005", name: "Lumen FinTech", email: "talent@lumenfintech.in",
    industry: "FinTech", website: "https://lumenfintech.in", contactPerson: "Sanya Kapoor",
    description: "Digital lending platform building credit-scoring and payments infrastructure.",
    status: "verified", joinedAt: "2026-05-02",
  },
  {
    id: "C-2006", name: "Orbit Mobile Labs", email: "hiring@orbitmobile.dev",
    industry: "Mobile Apps", website: "https://orbitmobile.dev", contactPerson: "Devansh Joshi",
    description: "Consumer app studio building Android and iOS products used by millions.",
    status: "verified", joinedAt: "2026-06-19",
  },
  {
    id: "C-2007", name: "Northbridge Consulting", email: "campus@northbridge.com",
    industry: "IT Consulting", website: "https://northbridge.com", contactPerson: "Ritu Chawla",
    description: "Enterprise IT consulting firm delivering data and cloud transformation projects.",
    status: "pending", joinedAt: "2026-08-20",
  },
  {
    id: "C-2008", name: "Sprout Learning Technologies", email: "team@sproutlearn.io",
    industry: "EdTech", website: "https://sproutlearn.io", contactPerson: "Farhan Ali",
    description: "EdTech startup building adaptive learning tools for K-12 and college students.",
    status: "pending", joinedAt: "2026-08-25",
  },
];

const seedOpportunities = [
  {
    id: "O-3001", companyId: "C-2001", title: "Data Analyst Intern", type: "Internship",
    requiredSkills: ["Python", "SQL", "React"], minCGPA: "7.5", location: "Bengaluru (Hybrid)",
    stipend: "₹25,000/month", description: "Work with the analytics team on retail forecasting dashboards.",
    status: "approved", postedAt: "2026-07-01",
  },
  {
    id: "O-3002", companyId: "C-2002", title: "Backend Developer (Java)", type: "Job",
    requiredSkills: ["Java", "Spring Boot", "Docker"], minCGPA: "8.0", location: "Pune (On-site)",
    stipend: "₹9,00,000/year", description: "Own backend services for our robotics fleet-management platform.",
    status: "approved", postedAt: "2026-07-05",
  },
  {
    id: "O-3003", companyId: "C-2003", title: "DevOps Intern", type: "Internship",
    requiredSkills: ["AWS", "Docker", "Git"], minCGPA: "7.0", location: "Remote",
    stipend: "₹20,000/month", description: "Help build CI/CD pipelines and manage Kubernetes clusters for client projects.",
    status: "approved", postedAt: "2026-07-10",
  },
  {
    id: "O-3004", companyId: "C-2004", title: "Product Design Intern", type: "Internship",
    requiredSkills: ["Figma", "UI Design", "HTML"], minCGPA: "6.5", location: "Bengaluru (On-site)",
    stipend: "₹18,000/month", description: "Design UI flows and prototypes for fintech client apps.",
    status: "approved", postedAt: "2026-07-15",
  },
  {
    id: "O-3005", companyId: "C-2005", title: "Full-Stack Developer", type: "Job",
    requiredSkills: ["React", "Node.js", "SQL"], minCGPA: "7.5", location: "Gurugram (Hybrid)",
    stipend: "₹8,50,000/year", description: "Build customer-facing lending dashboards and internal credit-scoring tools.",
    status: "approved", postedAt: "2026-07-20",
  },
  {
    id: "O-3006", companyId: "C-2006", title: "Android Developer Intern", type: "Internship",
    requiredSkills: ["Kotlin", "Java", "Git"], minCGPA: "7.0", location: "Mumbai (On-site)",
    stipend: "₹22,000/month", description: "Ship features for our flagship consumer Android app.",
    status: "approved", postedAt: "2026-07-25",
  },
  {
    id: "O-3007", companyId: "C-2003", title: "Cloud Support Engineer", type: "Job",
    requiredSkills: ["AWS", "Python", "SQL"], minCGPA: "7.2", location: "Remote",
    stipend: "₹7,20,000/year", description: "Support client cloud migrations and troubleshoot production incidents.",
    status: "pending", postedAt: "2026-08-28",
  },
];

/* ---------------------------------------------------------------------- */
/*  Skill assessment question bank                                       */
/* ---------------------------------------------------------------------- */
const QUESTION_BANK = {
  "React": [
    { q: "What hook lets a function component hold local state?", options: ["useEffect", "useState", "useContext", "useRef"], correct: 1 },
    { q: "What does JSX compile down to?", options: ["HTML strings", "React.createElement calls", "CSS-in-JS objects", "WebAssembly"], correct: 1 },
    { q: "Which prop uniquely identifies items in a rendered list?", options: ["id", "index", "key", "ref"], correct: 2 },
    { q: "What triggers a re-render of a function component?", options: ["Changing a local variable", "State or props changing", "Reloading the CSS", "Calling console.log"], correct: 1 },
    { q: "Which hook runs side effects after render?", options: ["useMemo", "useEffect", "useReducer", "useCallback"], correct: 1 },
  ],
  "Node.js": [
    { q: "Node.js runs JavaScript using which engine?", options: ["SpiderMonkey", "V8", "Chakra", "JavaScriptCore"], correct: 1 },
    { q: "Which module system does Node use by default in .js files?", options: ["ES Modules only", "CommonJS", "AMD", "UMD"], correct: 1 },
    { q: "What does npm stand for (informally)?", options: ["Node Package Manager", "New Project Module", "Node Process Monitor", "Native Package Method"], correct: 0 },
    { q: "Which object is used to handle HTTP requests in Express?", options: ["req", "res", "next", "app"], correct: 0 },
    { q: "Node.js is best described as:", options: ["A frontend framework", "A JavaScript runtime built on V8", "A CSS preprocessor", "A database"], correct: 1 },
  ],
  "SQL": [
    { q: "Which clause filters rows before grouping?", options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"], correct: 1 },
    { q: "Which join returns only matching rows from both tables?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL OUTER JOIN"], correct: 2 },
    { q: "Which keyword removes duplicate rows from results?", options: ["UNIQUE", "DISTINCT", "FILTER", "ONLY"], correct: 1 },
    { q: "Which statement is used to add a new row to a table?", options: ["UPDATE", "INSERT", "ALTER", "CREATE"], correct: 1 },
    { q: "A PRIMARY KEY column must be:", options: ["Nullable", "Unique and non-null", "Text type", "Indexed manually every time"], correct: 1 },
  ],
  "Python": [
    { q: "Which keyword defines a function in Python?", options: ["func", "def", "function", "lambda only"], correct: 1 },
    { q: "What data type is immutable in Python?", options: ["list", "dict", "tuple", "set"], correct: 2 },
    { q: "Which library is most associated with data analysis in Python?", options: ["pandas", "React", "Express", "Bootstrap"], correct: 0 },
    { q: "How do you start a comment in Python?", options: ["//", "#", "/* */", "--"], correct: 1 },
    { q: "What does `len([1,2,3])` return?", options: ["2", "3", "1", "Error"], correct: 1 },
  ],
  "Git": [
    { q: "Which command stages changes for commit?", options: ["git commit", "git add", "git push", "git stage"], correct: 1 },
    { q: "Which command creates a new branch and switches to it?", options: ["git branch -m", "git checkout -b", "git merge -b", "git switch --new"], correct: 1 },
    { q: "What does `git clone` do?", options: ["Deletes a repo", "Copies a remote repo locally", "Merges two branches", "Reverts the last commit"], correct: 1 },
    { q: "Which command shows commit history?", options: ["git log", "git diff", "git status", "git show-all"], correct: 0 },
    { q: "A merge conflict happens when:", options: ["Two branches change the same lines differently", "You forget to commit", "You clone a repo twice", "You delete a remote branch"], correct: 0 },
  ],
  "Java": [
    { q: "Java code is compiled into:", options: ["Machine code directly", "Bytecode run on the JVM", "Assembly", "Python bytecode"], correct: 1 },
    { q: "Which keyword is used to inherit a class in Java?", options: ["implements", "extends", "inherits", "super"], correct: 1 },
    { q: "Which collection type does not allow duplicate elements?", options: ["List", "Set", "ArrayList", "Map values"], correct: 1 },
    { q: "What is the entry point method of a Java application?", options: ["start()", "main()", "run()", "init()"], correct: 1 },
    { q: "Which keyword creates an object instance?", options: ["new", "create", "make", "instance"], correct: 0 },
  ],
  "Spring Boot": [
    { q: "Which annotation marks the main class of a Spring Boot app?", options: ["@Controller", "@SpringBootApplication", "@Service", "@Bean"], correct: 1 },
    { q: "Which annotation is used to define a REST endpoint?", options: ["@RestController", "@Entity", "@Repository", "@Config"], correct: 0 },
    { q: "Spring Boot's dependency injection is managed by:", options: ["The JVM", "The IoC container", "The build tool", "The servlet"], correct: 1 },
    { q: "Which file commonly holds Spring Boot configuration?", options: ["package.json", "application.properties", "web.xml only", "index.html"], correct: 1 },
    { q: "@Autowired is used to:", options: ["Auto-format code", "Inject a bean dependency", "Auto-generate tests", "Auto-deploy the app"], correct: 1 },
  ],
  "Docker": [
    { q: "A Docker image becomes a running instance called a:", options: ["Container", "Volume", "Layer", "Registry"], correct: 0 },
    { q: "Which file defines how a Docker image is built?", options: ["docker-compose.yml only", "Dockerfile", "image.json", "build.gradle"], correct: 1 },
    { q: "Which command lists running containers?", options: ["docker ps", "docker ls", "docker list", "docker show"], correct: 0 },
    { q: "Docker containers share the host's:", options: ["Kernel", "Full OS install", "GPU only", "Nothing at all"], correct: 0 },
    { q: "Which command builds an image from a Dockerfile?", options: ["docker run", "docker build", "docker start", "docker pull"], correct: 1 },
  ],
  "AWS": [
    { q: "Which AWS service provides scalable object storage?", options: ["EC2", "S3", "RDS", "Lambda"], correct: 1 },
    { q: "Which service lets you run code without managing servers?", options: ["EC2", "Lambda", "VPC", "IAM"], correct: 1 },
    { q: "IAM in AWS primarily manages:", options: ["Billing alerts", "Users, roles and permissions", "Network latency", "Database backups"], correct: 1 },
    { q: "Which service is a managed relational database?", options: ["DynamoDB", "RDS", "S3", "CloudFront"], correct: 1 },
    { q: "An AWS Region contains multiple:", options: ["Availability Zones", "Root accounts", "IAM users only", "VPN tunnels"], correct: 0 },
  ],
};

const GENERIC_QUIZ = [
  { q: "How would you rate your hands-on project experience with this skill?", options: ["No experience", "Used it in coursework only", "Used it in a personal/academic project", "Used it professionally or in a major project"], correct: 3 },
  { q: "Can you explain this skill's core concepts to someone else?", options: ["Not at all", "With difficulty", "Reasonably well", "Confidently and clearly"], correct: 3 },
  { q: "Have you debugged real issues while using this skill?", options: ["Never", "Rarely", "Occasionally", "Frequently"], correct: 3 },
  { q: "How comfortable are you picking this skill for a new project today?", options: ["Not comfortable", "Somewhat unsure", "Fairly comfortable", "Very comfortable"], correct: 3 },
];

const getQuizForSkill = (skill) => QUESTION_BANK[skill] || GENERIC_QUIZ;
const OFFERED_SKILLS = Object.keys(QUESTION_BANK);

const recordAssessmentResult = (student, skill, score, total) => {
  const percent = Math.round((score / total) * 100);
  const passed = percent >= 60;
  if (!student.assessments) student.assessments = {};
  student.assessments[skill] = { score, total, percent, passed, takenAt: new Date().toISOString().slice(0, 10) };
  if (passed && !student.skills.includes(skill)) student.skills.push(skill);
  return { percent, passed };
};

/* ---------------------------------------------------------------------- */
/*  Global state                                                          */
/* ---------------------------------------------------------------------- */
const state = {
  view: "landing",
  authMode: "login",
  reg: null, // multi-step student registration draft: { step, formData, selectedSkills, testIndex, activeQuiz, results }

  students: seedStudents.slice(),
  companies: seedCompanies.slice(),
  opportunities: seedOpportunities.slice(),
  applications: [],
  reports: [],
  notifications: [],

  currentStudentId: null,
  currentCompanyId: null,
  isAdmin: false,

  studentTab: "overview",
  companyTab: "overview",
  adminTab: "students",

  oppFilter: { q: "", type: "All" },
  studentFilter: { q: "", skill: "" },

  editingProfile: false,
  bellOpen: false,
  activeQuiz: null, // {skill, qIndex, answers: []}

  modal: null, // {type:'report', oppId} | {type:'interview', appId}
  toast: null,
  authError: "",
  authNotice: "",
};
let toastTimer = null;

/* ---------------------------------------------------------------------- */
/*  Utilities                                                             */
/* ---------------------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const esc = (str) =>
  String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const icon = (name, cls = "") => `<i data-lucide="${name}" class="${cls}"></i>`;

const parseSkills = (str) => str.split(",").map((s) => s.trim()).filter(Boolean);

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!file) { resolve(""); return; }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

const maskPan = (pan) => {
  if (!pan) return "—";
  const p = String(pan).toUpperCase();
  return p.length <= 4 ? p : `${p.slice(0, 2)}${"*".repeat(p.length - 4)}${p.slice(-2)}`;
};

const kycBadge = (student) => {
  const has = !!(student.panCard && student.photo);
  return has ? badge("KYC submitted", "emerald", true) : badge("KYC incomplete", "amber", true);
};

const avatarThumb = (student, size = 40) =>
  student.photo
    ? `<img src="${student.photo}" alt="${esc(student.name)}" class="kyc-photo" style="width:${size}px;height:${size}px;" />`
    : `<div class="avatar" style="width:${size}px;height:${size}px;">${esc((student.name || "?")[0])}</div>`;

const matchScore = (studentSkills = [], requiredSkills = []) => {
  if (!requiredSkills.length) return 0;
  const set = new Set(studentSkills.map((x) => x.toLowerCase()));
  const hit = requiredSkills.filter((r) => set.has(r.toLowerCase())).length;
  return Math.round((hit / requiredSkills.length) * 100);
};

const assessmentFor = (student, skill) => (student.assessments || {})[skill];

const skillBadgeWithAssessment = (student, skill) => {
  const a = assessmentFor(student, skill);
  if (!a) return badge(skill, "indigo");
  return a.passed ? badge(`${skill} · ${a.percent}%`, "emerald") : badge(`${skill} · ${a.percent}%`, "rose");
};

const findStudent = (id) => state.students.find((s) => s.id === id);
const findCompany = (id) => state.companies.find((c) => c.id === id);
const findOpp = (id) => state.opportunities.find((o) => o.id === id);
const currentStudent = () => findStudent(state.currentStudentId);
const currentCompany = () => findCompany(state.currentCompanyId);

const audienceKey = () =>
  state.isAdmin ? "admin" : state.currentStudentId ? `student:${state.currentStudentId}` : state.currentCompanyId ? `company:${state.currentCompanyId}` : null;

function pushNotification(audience, message) {
  state.notifications.unshift({ id: nextId("N"), audience, message, time: new Date().toLocaleString(), read: false });
}

function finalizeStudentRegistration() {
  const reg = state.reg;
  if (!reg) return;
  const data = reg.formData;
  const assessments = {};
  const passedSkills = [];
  Object.entries(reg.results).forEach(([skill, r]) => {
    assessments[skill] = { ...r, takenAt: new Date().toISOString().slice(0, 10) };
    if (r.passed) passedSkills.push(skill);
  });
  const student = {
    id: nextId("S"), name: data.name, email: data.email, password: data.password,
    college: data.college, course: data.course, cgpa: data.cgpa || "",
    skills: passedSkills, projects: data.projects || "", certifications: data.certifications || "",
    resumeLink: data.resumeLink || "resume.pdf", portfolioLink: data.portfolioLink || "",
    panCard: data.panCard.trim().toUpperCase(), photo: data.photoDataUrl, kycStatus: "submitted",
    status: "pending", joinedAt: new Date().toISOString().slice(0, 10),
    assessments,
  };
  state.students.push(student);
  pushNotification("admin", `New student registration awaiting verification: ${student.name}`);
  state.currentStudentId = student.id; state.view = "studentDash"; state.studentTab = "overview"; state.authError = "";
  state.reg = null;
  showToast(`Profile created with ${passedSkills.length} verified skill${passedSkills.length === 1 ? "" : "s"} — pending admin verification.`, "emerald");
}

function showToast(msg, tone = "emerald") {
  state.toast = { msg, tone };
  clearTimeout(toastTimer);
  render();
  toastTimer = setTimeout(() => { state.toast = null; render(); }, 3200);
}

const statusStyles = {
  Applied: "stone", Shortlisted: "amber", "Interview Scheduled": "indigo", Selected: "emerald", Rejected: "rose",
};

/* small template helpers */
const badge = (text, tone = "stone", small = false) =>
  `<span class="badge ${tone} ${small ? "badge-sm" : ""}">${esc(text)}</span>`;

const verifiedTag = (small = false) =>
  `<span class="verified-tag ${small ? "small" : ""}">${icon("badge-check")} Verified</span>`;

const statCard = (iconName, label, value, tone = "indigo") => `
  <div class="stat-card">
    <div class="stat-icon ${tone}">${icon(iconName)}</div>
    <div><div class="stat-value">${esc(value)}</div><div class="stat-label">${esc(label)}</div></div>
  </div>`;

const emptyState = (text) => `<div class="empty-state">${esc(text)}</div>`;

/* ---------------------------------------------------------------------- */
/*  Header                                                                */
/* ---------------------------------------------------------------------- */
function renderHeader(role) {
  let right = "";
  if (role) {
    const notifs = state.notifications.filter((n) => n.audience === audienceKey());
    const unread = notifs.filter((n) => !n.read).length;
    const name = role === "admin" ? "Admin" : role === "student" ? currentStudent()?.name : currentCompany()?.name;
    const initial = (name || "?")[0];

    right = `
      <div class="flex items-center gap-3">
        <div style="position:relative">
          <button class="icon-btn" data-action="toggle-bell">
            ${icon("bell")}
            ${unread > 0 ? `<span class="badge-dot">${unread}</span>` : ""}
          </button>
          ${state.bellOpen ? `
            <div class="notif-panel fade-in">
              <div class="notif-title">Notifications</div>
              ${notifs.length === 0 ? `<div class="notif-empty">Nothing yet.</div>` :
                notifs.slice(0, 12).map((n) => `
                  <div class="notif-item"><p>${esc(n.message)}</p><p class="notif-time">${esc(n.time)}</p></div>
                `).join("")}
            </div>` : ""}
        </div>
        <div class="user-chip">
          <div class="avatar">${esc(initial)}</div>
          <span class="user-name">${esc(name || "")}</span>
        </div>
        <button class="icon-btn" data-action="logout">${icon("log-out")}</button>
      </div>`;
  } else if (state.view !== "landing") {
    right = `<button class="back-link" data-action="go-landing">${icon("arrow-left")} Back home</button>`;
  }

  return `
    <header class="sb-header">
      <div class="container sb-header-inner">
        <button class="sb-brand" data-action="go-landing">
          <span class="sb-brand-mark">${icon("sparkles")}</span>
          <span class="sb-brand-text sb-serif">Skill<span class="accent">ora</span></span>
        </button>
        ${right}
      </div>
    </header>`;
}

/* ---------------------------------------------------------------------- */
/*  Landing page                                                          */
/* ---------------------------------------------------------------------- */
function renderLanding() {
  const steps = [
    { n: "01", title: "Register & get verified", body: "Students and companies sign up, complete their profile, and are checked by the admin team before going live.", icon: "shield-check" },
    { n: "02", title: "Build your profile", body: "Students list skills, projects and certifications. Companies list roles, required skills and eligibility.", icon: "user" },
    { n: "03", title: "Get matched", body: "Skillora scores every opportunity against a student's skill set, so the best-fit roles surface first.", icon: "trending-up" },
    { n: "04", title: "Apply & get hired", body: "Apply in one click, track every stage from shortlist to interview to offer, all in one place.", icon: "award" },
  ];

  return `
    ${renderHeader(null)}
    <section class="container hero">
      <div>
        <div class="eyebrow-pill">${icon("shield-check")} Verified students, verified companies</div>
        <h1 class="sb-serif">Bridge your skills to your career</h1>
        <p class="lead">Skillora connects verified students with verified companies through skill-based matching — for internships, live projects and full-time placements.</p>
        <p class="tagline">Your skills. Their opportunities. One powerful connection.</p>
        <div class="hero-cta">
          <button class="btn btn-primary" data-action="go-choose-role">Get started ${icon("arrow-right")}</button>
          <button class="btn btn-outline" data-action="go-student-auth" data-mode="login">Student login</button>
          <button class="btn btn-outline btn-outline-amber" data-action="go-company-auth" data-mode="login">Company login</button>
        </div>
      </div>

      <div class="flow-card" id="flow-card">
        <p class="flow-label">How the bridge works</p>
        <div class="flow-track"><div class="flow-track-bg"></div><div class="flow-dot"></div></div>
        <div class="flow-steps">
          <div class="flow-step"><div class="flow-step-icon" style="background:var(--indigo-50); color:var(--indigo-900); animation-delay:0s">${icon("graduation-cap")}</div><span>Student</span></div>
          <div class="flow-step"><div class="flow-step-icon" style="background:var(--amber-50); color:#78350f; animation-delay:.5s">${icon("star")}</div><span>Skills</span></div>
          <div class="flow-step"><div class="flow-step-icon" style="background:var(--stone-100); color:var(--stone-700); animation-delay:1s">${icon("building-2")}</div><span>Company</span></div>
          <div class="flow-step"><div class="flow-step-icon" style="background:var(--emerald-50); color:var(--emerald-700); animation-delay:1.5s">${icon("award")}</div><span>Career</span></div>
        </div>
        <div class="flow-stats">
          <div><div class="v" id="stat-students">0+</div><div class="l">Verified students</div></div>
          <div><div class="v" id="stat-companies">0+</div><div class="l">Verified companies</div></div>
        </div>
      </div>
    </section>

    <section class="stats-strip">
      <div class="container grid grid-4">
        <div><div class="v" id="strip-students">0+</div><div class="l">Verified students</div></div>
        <div><div class="v" id="strip-companies">0+</div><div class="l">Verified companies</div></div>
        <div><div class="v" id="strip-placements">0+</div><div class="l">Successful placements</div></div>
        <div><div class="v" id="strip-match">0%</div><div class="l">Avg. skill-match accuracy</div></div>
      </div>
    </section>

    <section class="container section">
      <h2 class="sb-serif">How it works</h2>
      <p class="desc">Four steps from campus to career, with verification built into the process.</p>
      <div class="grid grid-4">
        ${steps.map((s) => `
          <div class="step-card">
            <span class="step-num sb-serif">${s.n}</span>
            <div class="step-icon">${icon(s.icon)}</div>
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.body)}</p>
          </div>`).join("")}
      </div>
    </section>

    <section class="container grid grid-2" style="padding-bottom:5rem;">
      <div class="portal-panel indigo">
        <div>
          ${icon("graduation-cap", "top-icon")}
          <h3>For students</h3>
          <p>Create a verified profile, get matched to internships and jobs by skill fit, and track every application in one dashboard.</p>
        </div>
        <button class="go" data-action="go-student-auth" data-mode="register">Register as a student ${icon("chevron-right")}</button>
      </div>
      <div class="portal-panel amber">
        <div>
          ${icon("building-2", "top-icon")}
          <h3>For companies</h3>
          <p>Get verified, post internships and roles, search verified student profiles by skill, and manage the entire hiring pipeline.</p>
        </div>
        <button class="go" data-action="go-company-auth" data-mode="register">Register your company ${icon("chevron-right")}</button>
      </div>
    </section>

    <footer class="sb-footer">
      <div class="container">
        <span class="mark">Skillora</span>
        <p class="tag">Your skills. Their opportunities. One powerful connection.</p>
        <button class="admin-link" data-action="go-admin-auth">Admin sign-in</button>
      </div>
    </footer>`;
}

function animateLandingCounters() {
  const targets = { students: 640, companies: 132, placements: 318, match: 94 };
  const start = performance.now();
  const dur = 1200;
  function tick(t) {
    const p = Math.min(1, (t - start) / dur);
    const ease = 1 - Math.pow(1 - p, 3);
    const s = Math.round(targets.students * ease);
    const c = Math.round(targets.companies * ease);
    const pl = Math.round(targets.placements * ease);
    const m = Math.round(targets.match * ease);
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set("stat-students", `${s}+`); set("stat-companies", `${c}+`);
    set("strip-students", `${s}+`); set("strip-companies", `${c}+`);
    set("strip-placements", `${pl}+`); set("strip-match", `${m}%`);
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------------------------------------------------------------- */
/*  Choose role                                                           */
/* ---------------------------------------------------------------------- */
function renderChooseRole() {
  return `
    ${renderHeader(null)}
    <div class="container" style="max-width:56rem; padding-top:6rem; padding-bottom:6rem; text-align:center;">
      <h1 class="sb-serif" style="font-size:2.4rem; font-weight:600; margin:0 0 .5rem;">Who's joining Skillora?</h1>
      <p class="lead" style="margin:0 auto 3rem; text-align:center;">Choose how you'd like to get started.</p>
      <div class="grid grid-2" style="text-align:left;">
        <button class="card" data-action="go-student-auth" data-mode="register" style="text-align:left;">
          ${icon("graduation-cap")}
          <h3 class="sb-serif" style="font-size:1.2rem; font-weight:600; margin:.75rem 0 .5rem;">I'm a student</h3>
          <p style="font-size:.875rem; color:var(--stone-600); margin:0 0 .75rem;">Build a verified profile, discover internships and placements, and track applications.</p>
          <span style="display:inline-flex; align-items:center; gap:.3rem; font-size:.875rem; font-weight:500; color:var(--indigo-900);">Continue ${icon("arrow-right")}</span>
        </button>
        <button class="card" data-action="go-company-auth" data-mode="register" style="text-align:left;">
          ${icon("building-2")}
          <h3 class="sb-serif" style="font-size:1.2rem; font-weight:600; margin:.75rem 0 .5rem;">I'm a company</h3>
          <p style="font-size:.875rem; color:var(--stone-600); margin:0 0 .75rem;">Get verified, post opportunities, and search verified student talent.</p>
          <span style="display:inline-flex; align-items:center; gap:.3rem; font-size:.875rem; font-weight:500; color:#78350f;">Continue ${icon("arrow-right")}</span>
        </button>
      </div>
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Field helper                                                          */
/* ---------------------------------------------------------------------- */
const field = (label, inputHtml, iconName = "") =>
  `<label class="field"><span>${iconName ? icon(iconName) : ""}${esc(label)}</span>${inputHtml}</label>`;

/* ---------------------------------------------------------------------- */
/*  Student auth                                                          */
/* ---------------------------------------------------------------------- */
function renderStudentAuth() {
  const mode = state.authMode;
  return `
    ${renderHeader(null)}
    <div class="container-sm" style="padding:4rem 0;">
      <div style="text-align:center; margin-bottom:2rem;">
        ${icon("graduation-cap")}
        <h1 class="sb-serif" style="font-size:1.6rem; font-weight:600; margin:.5rem 0 .25rem;">Student portal</h1>
        <p style="font-size:.875rem; color:var(--stone-500);">${mode === "login" ? "Welcome back — sign in to continue." : "Create your verified student profile."}</p>
      </div>

      ${mode !== "forgot" ? `
      <div class="auth-toggle">
        <button class="${mode === "login" ? "active" : ""}" data-action="set-auth-mode" data-mode="login" data-role="student">Login</button>
        <button class="${mode === "register" ? "active" : ""}" data-action="set-auth-mode" data-mode="register" data-role="student">Register</button>
      </div>` : ""}

      ${state.authError ? `<div class="alert alert-rose">${esc(state.authError)}</div>` : ""}
      ${state.authNotice ? `<div class="alert alert-emerald">${esc(state.authNotice)}</div>` : ""}

      ${mode === "login" ? `
        <form id="form-student-login">
          ${field("Email", `<input class="sb-input" type="email" name="email" required placeholder="you@college.edu" />`, "mail")}
          ${field("Password", `<input class="sb-input" type="password" name="password" required placeholder="••••••••" />`, "lock")}
          <button class="btn btn-primary btn-block" type="submit">Sign in</button>
          <button type="button" class="link-btn" data-action="set-auth-mode" data-mode="forgot" data-role="student">Forgot password?</button>
          <p class="hint">Demo login: ananya@college.edu / pass123</p>
        </form>` : mode === "forgot" ? `
        <form id="form-student-forgot">
          <p class="hint-text" style="margin-top:0;">Enter your registered email and choose a new password. In this prototype the reset happens immediately — no email is sent.</p>
          ${field("Registered email", `<input class="sb-input" type="email" name="email" required placeholder="you@college.edu" />`, "mail")}
          ${field("New password", `<input class="sb-input" type="password" name="newPassword" required minlength="4" />`, "lock")}
          ${field("Confirm new password", `<input class="sb-input" type="password" name="confirmPassword" required minlength="4" />`, "lock")}
          <button class="btn btn-primary btn-block" type="submit">Reset password</button>
          <button type="button" class="link-btn" data-action="set-auth-mode" data-mode="login" data-role="student">${icon("arrow-left")} Back to login</button>
        </form>` : `
        ${renderStudentRegisterFlow()}`}
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Student registration flow: details -> pick skills -> test -> review  */
/* ---------------------------------------------------------------------- */
function renderStudentRegisterFlow() {
  const reg = state.reg;

  if (!reg) {
    return `
        <form id="form-student-register-details">
          ${field("Full name *", `<input class="sb-input" name="name" required />`)}
          ${field("Email *", `<input class="sb-input" type="email" name="email" required />`)}
          ${field("Password *", `<input class="sb-input" type="password" name="password" required />`)}
          <div class="grid grid-2">
            ${field("College *", `<input class="sb-input" name="college" required />`)}
            ${field("Course *", `<input class="sb-input" name="course" required />`)}
          </div>
          ${field("CGPA", `<input class="sb-input" name="cgpa" placeholder="e.g. 8.4" />`)}
          ${field("Projects", `<textarea class="sb-input" name="projects" rows="2"></textarea>`)}
          ${field("Certifications", `<textarea class="sb-input" name="certifications" rows="2"></textarea>`)}
          <div class="grid grid-2">
            ${field("Resume file name", `<input class="sb-input" name="resumeLink" placeholder="resume.pdf" />`, "upload")}
            ${field("Portfolio link", `<input class="sb-input" name="portfolioLink" placeholder="https://" />`, "link-2")}
          </div>
          <div class="kyc-block">
            <p class="kyc-heading">${icon("shield-check")} Identity verification (KYC)</p>
            <p class="hint-text" style="margin-top:-.25rem;">Required so the admin team can verify your account. Kept private and only visible to admins.</p>
            <div class="grid grid-2">
              ${field("PAN card number *", `<input class="sb-input" name="panCard" required maxlength="10" style="text-transform:uppercase;" placeholder="ABCDE1234F" />`, "credit-card")}
              ${field("Photo (passport-size) *", `<input class="sb-input" type="file" name="photo" accept="image/*" required />`, "camera")}
            </div>
            <div id="photo-preview-wrap"></div>
          </div>
          <p class="hint-text" style="margin-top:-.25rem;">Next, you'll take short skill tests — skills you pass are added to your profile automatically, so there's no manual skills field here.</p>
          <button class="btn btn-primary btn-block" type="submit">Continue to skill tests</button>
        </form>`;
  }

  if (reg.step === "skills") {
    return `
      <div class="card" style="margin-bottom:1rem;">
        <h3 style="margin:0 0 .35rem; font-weight:600;">Build your skill profile</h3>
        <p style="font-size:.875rem; color:var(--stone-600); margin:0;">Pick the skills you want to be tested on. Score 60% or higher on a skill's test to have it added to your profile.</p>
      </div>
      ${Object.keys(reg.results).length > 0 ? `
      <div class="card" style="margin-bottom:1rem;">
        <h4 style="margin:0 0 .6rem; font-weight:600; font-size:.875rem;">Already tested</h4>
        <div class="flex gap-2" style="flex-wrap:wrap;">
          ${Object.entries(reg.results).map(([sk, r]) => badge(`${sk} · ${r.percent}%`, r.passed ? "emerald" : "rose", true)).join("")}
        </div>
      </div>` : ""}
      <div class="card" style="margin-bottom:1rem;">
        <h4 style="margin:0 0 .75rem; font-weight:600; font-size:.875rem;">Choose skills to test now</h4>
        <div class="grid grid-2" style="gap:.5rem;">
          ${OFFERED_SKILLS.filter((sk) => !reg.results[sk]).map((sk) => `
            <label style="display:flex; align-items:center; gap:.5rem; font-size:.875rem; border:1px solid var(--stone-200); border-radius:.5rem; padding:.5rem .7rem; cursor:pointer;">
              <input type="checkbox" data-action="reg-toggle-skill" data-skill="${esc(sk)}" ${reg.selectedSkills.includes(sk) ? "checked" : ""} style="accent-color:var(--indigo-600,#4338ca);" />
              ${esc(sk)}
            </label>`).join("")}
        </div>
        <form id="form-reg-custom-skill" class="flex gap-2 items-end" style="margin-top:1rem; flex-wrap:wrap;">
          <div style="flex:1; min-width:12rem;">${field("Add a custom skill", `<input class="sb-input" name="customSkill" placeholder="e.g. Figma, Kotlin" />`)}</div>
          <button class="chip-btn" type="submit" style="margin-bottom:1rem;">Add to list</button>
        </form>
        ${reg.selectedSkills.length > 0 ? `<div class="flex gap-2" style="flex-wrap:wrap; margin-top:.75rem;">${reg.selectedSkills.map((sk) => badge(sk, "indigo", true)).join("")}</div>` : ""}
      </div>
      <div class="flex justify-between items-center">
        ${Object.keys(reg.results).length > 0 ? `<button class="chip-btn" data-action="reg-go-review">Skip to review</button>` : `<span></span>`}
        <button class="btn btn-primary" data-action="reg-start-tests" ${reg.selectedSkills.length === 0 ? "disabled" : ""}>Start test${reg.selectedSkills.length > 1 ? "s" : ""} (${reg.selectedSkills.length})</button>
      </div>`;
  }

  if (reg.step === "quiz") return renderRegQuizRunner();

  if (reg.step === "review") {
    const entries = Object.entries(reg.results);
    const passedCount = entries.filter(([, r]) => r.passed).length;
    return `
      <div class="card" style="margin-bottom:1rem;">
        <h3 style="margin:0 0 .35rem; font-weight:600;">Review your skill profile</h3>
        <p style="font-size:.875rem; color:var(--stone-600); margin:0;">${passedCount} of ${entries.length} tested skill${entries.length === 1 ? "" : "s"} passed and will appear on your profile. Failed skills aren't added — you can retake them anytime after signing in.</p>
      </div>
      <div class="card" style="margin-bottom:1.25rem;">
        ${entries.map(([sk, r]) => `
          <div class="flex justify-between items-center" style="padding:.5rem 0; border-bottom:1px solid var(--stone-100);">
            <span style="font-weight:500; font-size:.875rem;">${esc(sk)}</span>
            ${r.passed ? badge(`Passed · ${r.percent}%`, "emerald", true) : badge(`Not added · ${r.percent}%`, "rose", true)}
          </div>`).join("")}
      </div>
      <div class="flex justify-between items-center">
        <button class="chip-btn" data-action="reg-more-skills">Test another skill</button>
        <button class="btn btn-primary" data-action="reg-finalize">Create profile</button>
      </div>`;
  }

  return "";
}

function renderRegQuizRunner() {
  const reg = state.reg;
  const skill = reg.selectedSkills[reg.testIndex];
  const { qIndex, answers } = reg.activeQuiz;
  const questions = getQuizForSkill(skill);
  const total = questions.length;
  const current = questions[qIndex];
  const selected = answers[qIndex];
  const isLastQ = qIndex === total - 1;
  const isLastSkill = reg.testIndex === reg.selectedSkills.length - 1;
  const canAdvance = selected !== null && selected !== undefined;

  return `
    <div class="card">
      <div class="flex justify-between items-center" style="margin-bottom:.25rem;">
        <h3 style="margin:0; font-weight:600;">${esc(skill)} test</h3>
        <span style="font-size:.72rem; color:var(--stone-500);">Skill ${reg.testIndex + 1} of ${reg.selectedSkills.length}</span>
      </div>
      <p style="font-size:.72rem; color:var(--stone-500); margin:0 0 1rem;">Question ${qIndex + 1} of ${total}</p>
      <div style="height:.4rem; background:var(--stone-100); border-radius:999px; overflow:hidden; margin-bottom:1.25rem;">
        <div style="height:100%; width:${Math.round(((qIndex + (canAdvance ? 1 : 0)) / total) * 100)}%; background:var(--indigo-600,#4338ca); transition:width .2s;"></div>
      </div>
      <p style="font-weight:500; margin:0 0 1rem;">${esc(current.q)}</p>
      <div class="flex flex-col gap-2" style="margin-bottom:1.5rem;">
        ${current.options.map((opt, i) => `
          <label style="display:flex; align-items:center; gap:.6rem; border:1px solid ${selected === i ? "var(--indigo-300)" : "var(--stone-200)"}; background:${selected === i ? "var(--indigo-50)" : "#fff"}; border-radius:.6rem; padding:.6rem .85rem; cursor:pointer; font-size:.875rem;">
            <input type="radio" name="reg-quiz-opt" data-action="reg-quiz-select" data-index="${i}" ${selected === i ? "checked" : ""} style="accent-color:var(--indigo-600,#4338ca);" />
            ${esc(opt)}
          </label>`).join("")}
      </div>
      <div class="flex justify-between items-center">
        <button class="chip-btn" data-action="reg-quiz-prev" ${qIndex === 0 ? "disabled" : ""}>Back</button>
        ${isLastQ
          ? `<button class="chip-btn emerald" data-action="reg-quiz-submit" ${canAdvance ? "" : "disabled"}>${isLastSkill ? "Finish & see results" : "Finish this skill"}</button>`
          : `<button class="chip-btn emerald" data-action="reg-quiz-next" ${canAdvance ? "" : "disabled"}>Next</button>`}
      </div>
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Company auth                                                          */
/* ---------------------------------------------------------------------- */
function renderCompanyAuth() {
  const mode = state.authMode;
  return `
    ${renderHeader(null)}
    <div class="container-sm" style="padding:4rem 0;">
      <div style="text-align:center; margin-bottom:2rem;">
        ${icon("building-2")}
        <h1 class="sb-serif" style="font-size:1.6rem; font-weight:600; margin:.5rem 0 .25rem;">Company portal</h1>
        <p style="font-size:.875rem; color:var(--stone-500);">${mode === "login" ? "Welcome back — sign in to continue." : "Register your organization."}</p>
      </div>

      ${mode !== "forgot" ? `
      <div class="auth-toggle">
        <button class="${mode === "login" ? "active amber" : ""}" data-action="set-auth-mode" data-mode="login" data-role="company">Login</button>
        <button class="${mode === "register" ? "active amber" : ""}" data-action="set-auth-mode" data-mode="register" data-role="company">Register</button>
      </div>` : ""}

      ${state.authError ? `<div class="alert alert-rose">${esc(state.authError)}</div>` : ""}
      ${state.authNotice ? `<div class="alert alert-emerald">${esc(state.authNotice)}</div>` : ""}

      ${mode === "login" ? `
        <form id="form-company-login">
          ${field("Work email", `<input class="sb-input" type="email" name="email" required />`, "mail")}
          ${field("Password", `<input class="sb-input" type="password" name="password" required />`, "lock")}
          <button class="btn btn-amber btn-block" type="submit">Sign in</button>
          <button type="button" class="link-btn amber" data-action="set-auth-mode" data-mode="forgot" data-role="company">Forgot password?</button>
          <p class="hint">Demo login: hr@nimbusanalytics.com / any password</p>
        </form>` : mode === "forgot" ? `
        <form id="form-company-forgot">
          <p class="hint-text" style="margin-top:0;">Enter your registered work email and choose a new password. In this prototype the reset happens immediately — no email is sent.</p>
          ${field("Registered work email", `<input class="sb-input" type="email" name="email" required />`, "mail")}
          ${field("New password", `<input class="sb-input" type="password" name="newPassword" required minlength="4" />`, "lock")}
          ${field("Confirm new password", `<input class="sb-input" type="password" name="confirmPassword" required minlength="4" />`, "lock")}
          <button class="btn btn-amber btn-block" type="submit">Reset password</button>
          <button type="button" class="link-btn amber" data-action="set-auth-mode" data-mode="login" data-role="company">${icon("arrow-left")} Back to login</button>
        </form>` : `
        <form id="form-company-register">
          ${field("Company name *", `<input class="sb-input" name="name" required />`)}
          ${field("Work email *", `<input class="sb-input" type="email" name="email" required />`)}
          ${field("Password *", `<input class="sb-input" type="password" name="password" required />`)}
          ${field("Contact person *", `<input class="sb-input" name="contactPerson" required />`)}
          <div class="grid grid-2">
            ${field("Industry", `<input class="sb-input" name="industry" />`)}
            ${field("Website", `<input class="sb-input" name="website" placeholder="https://" />`)}
          </div>
          ${field("Company description", `<textarea class="sb-input" name="description" rows="3"></textarea>`)}
          <button class="btn btn-amber btn-block" type="submit">Register company</button>
        </form>`}
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Admin auth                                                            */
/* ---------------------------------------------------------------------- */
function renderAdminAuth() {
  return `
    ${renderHeader(null)}
    <div class="container-sm" style="padding:6rem 0; text-align:center;">
      ${icon("shield-alert")}
      <h1 class="sb-serif" style="font-size:1.6rem; font-weight:600; margin:.5rem 0 .25rem;">Admin sign-in</h1>
      <p style="font-size:.875rem; color:var(--stone-500); margin-bottom:1.5rem;">Verification &amp; moderation console.</p>
      <form id="form-admin-auth" style="text-align:left;">
        ${field("Passcode", `<input class="sb-input" type="password" name="code" />`, "lock")}
        ${state.authError ? `<p style="color:var(--rose-600); font-size:.875rem;">${esc(state.authError)}</p>` : ""}
        <button class="btn btn-dark btn-block" type="submit">Enter console</button>
        <p class="hint">Demo passcode: admin123</p>
      </form>
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Opportunity card (student view)                                       */
/* ---------------------------------------------------------------------- */
function opportunityCard(opp, student) {
  const company = findCompany(opp.companyId);
  const score = matchScore(student.skills, opp.requiredSkills);
  const matchCls = score >= 70 ? "match-high" : score >= 40 ? "match-mid" : "match-low";
  const applied = state.applications.some((a) => a.opportunityId === opp.id && a.studentId === student.id);
  const studentSkillsLower = student.skills.map((x) => x.toLowerCase());

  return `
    <div class="opp-card">
      <div class="flex justify-between items-start gap-2">
        <div>
          <p class="title">${esc(opp.title)}</p>
          <p class="sub">${esc(company?.name || "")} ${company?.status === "verified" ? verifiedTag(true) : ""}</p>
        </div>
        <span class="match-pill ${matchCls}">${score}% match</span>
      </div>
      <div style="margin:.6rem 0;">
        ${opp.requiredSkills.map((s) => `<span class="skill-pill ${studentSkillsLower.includes(s.toLowerCase()) ? "have" : "miss"}">${esc(s)}</span>`).join("")}
      </div>
      <div class="opp-meta">
        <span>${icon("briefcase")} ${esc(opp.type)}</span>
        <span>${icon("map-pin")} ${esc(opp.location || "—")}</span>
      </div>
      <div class="opp-actions">
        <button class="btn ${applied ? "btn-disabled" : "btn-primary"}" style="flex:1;" ${applied ? "disabled" : ""} data-action="apply" data-opp="${opp.id}">${applied ? "Applied" : "Apply now"}</button>
        <button class="icon-btn" title="Report" data-action="open-report" data-opp="${opp.id}">${icon("flag")}</button>
      </div>
    </div>`;
}

function studentOpportunityList() {
  const student = currentStudent();
  const approved = state.opportunities.filter((o) => o.status === "approved");
  const filtered = approved.filter((o) => {
    const q = state.oppFilter.q.toLowerCase();
    const matchesQ = !q || o.title.toLowerCase().includes(q) || o.requiredSkills.join(" ").toLowerCase().includes(q);
    const matchesType = state.oppFilter.type === "All" || o.type === state.oppFilter.type;
    return matchesQ && matchesType;
  }).sort((a, b) => matchScore(student.skills, b.requiredSkills) - matchScore(student.skills, a.requiredSkills));
  return filtered;
}

function renderOppResultsGrid() {
  const student = currentStudent();
  const filtered = studentOpportunityList();
  if (filtered.length === 0) return emptyState("No opportunities match your filters yet.");
  return `<div class="grid grid-2">${filtered.map((o) => opportunityCard(o, student)).join("")}</div>`;
}

/* ---------------------------------------------------------------------- */
/*  Student dashboard                                                     */
/* ---------------------------------------------------------------------- */
function renderStudentDashboard() {
  const s = currentStudent();
  if (!s) return renderLanding();
  const myApps = state.applications.filter((a) => a.studentId === s.id);

  const tabs = [
    ["overview", "Overview"], ["opportunities", "Opportunities"], ["companies", "Verified companies"],
    ["applications", "My applications"], ["assessment", "Skill Assessment"], ["profile", "Profile"],
  ];

  const statusBadge = s.status === "verified" ? verifiedTag() : s.status === "pending" ? badge("Verification pending", "amber") : badge("Verification rejected", "rose");

  let body = "";
  if (state.studentTab === "overview") {
    const top = studentOpportunityList().slice(0, 4);
    body = `
      <div class="grid grid-3">
        ${statCard("briefcase", "Applications", myApps.length)}
        ${statCard("check-circle-2", "Selected", myApps.filter((a) => a.status === "Selected").length, "emerald")}
        ${statCard("star", "Skills listed", s.skills.length, "amber")}
      </div>
      <div class="card" style="margin-top:1.25rem;">
        <h3 style="margin:0 0 1rem; font-weight:600;">Top matches for you</h3>
        ${s.status !== "verified" ? `<div class="alert alert-amber">Your profile is awaiting admin verification. You'll be able to apply once verified.</div>` : ""}
        <div class="grid grid-2">${top.map((o) => opportunityCard(o, s)).join("") || emptyState("No opportunities yet.")}</div>
      </div>`;
  } else if (state.studentTab === "opportunities") {
    body = `
      <div class="flex wrap gap-3" style="margin-bottom:1.5rem;">
        <input id="opp-search" class="sb-input" style="flex:1; min-width:220px;" placeholder="Search by title or skill…" value="${esc(state.oppFilter.q)}" />
        <select id="opp-type-filter" class="sb-input" style="width:10rem;">
          ${["All", "Internship", "Job"].map((t) => `<option ${state.oppFilter.type === t ? "selected" : ""}>${t}</option>`).join("")}
        </select>
      </div>
      <div id="opp-results">${renderOppResultsGrid()}</div>`;
  } else if (state.studentTab === "companies") {
    const verified = state.companies.filter((c) => c.status === "verified");
    body = `<div class="grid grid-2">${verified.map((c) => `
      <div class="card">
        <div class="flex justify-between items-start">
          <div class="stat-icon amber">${icon("building-2")}</div>
          ${verifiedTag(true)}
        </div>
        <h3 style="margin:.75rem 0 .1rem; font-weight:600;">${esc(c.name)}</h3>
        <p style="font-size:.72rem; color:var(--stone-500); margin:0 0 .5rem;">${esc(c.industry)}</p>
        <p style="font-size:.875rem; color:var(--stone-600); line-height:1.5;">${esc(c.description)}</p>
        <p style="font-size:.72rem; color:var(--stone-400); margin-top:.75rem;">${state.opportunities.filter((o) => o.companyId === c.id && o.status === "approved").length} open opportunities</p>
      </div>`).join("")}</div>`;
  } else if (state.studentTab === "applications") {
    if (myApps.length === 0) body = emptyState("You haven't applied to anything yet — check the Opportunities tab.");
    else body = `<div class="flex flex-col gap-3">${myApps.map((a) => {
      const opp = findOpp(a.opportunityId); const comp = findCompany(a.companyId);
      if (!opp) return "";
      return `
        <div class="card flex wrap justify-between items-center gap-3">
          <div>
            <p style="font-weight:600; margin:0;">${esc(opp.title)}</p>
            <p style="font-size:.875rem; color:var(--stone-500); margin:.15rem 0 0;">${esc(comp?.name || "")} · Applied ${esc(a.appliedAt)}</p>
            ${a.interviewNote ? `<p style="font-size:.72rem; color:var(--indigo-700); margin:.25rem 0 0;">Note: ${esc(a.interviewNote)}</p>` : ""}
          </div>
          ${badge(a.status, statusStyles[a.status])}
        </div>`;
    }).join("")}</div>`;
  } else if (state.studentTab === "assessment") {
    body = renderAssessmentTab(s);
  } else if (state.studentTab === "profile") {
    if (!state.editingProfile) {
      body = `
        <div class="card" style="max-width:40rem;">
          <div class="flex justify-between items-center" style="margin-bottom:1.25rem;">
            <h3 style="margin:0; font-weight:600;">Your profile</h3>
            <button class="chip-btn" data-action="edit-profile">Edit</button>
          </div>
          <div class="profile-row"><span class="k">College</span><span class="v">${esc(s.college)}</span></div>
          <div class="profile-row"><span class="k">Course</span><span class="v">${esc(s.course)}</span></div>
          <div class="profile-row"><span class="k">CGPA</span><span class="v">${esc(s.cgpa)}</span></div>
          <div class="profile-row"><span class="k">Skills</span><span class="v">${s.skills.map((sk) => skillBadgeWithAssessment(s, sk)).join(" ")}</span></div>
          <div class="profile-row"><span class="k">Projects</span><span class="v">${esc(s.projects || "—")}</span></div>
          <div class="profile-row"><span class="k">Certifications</span><span class="v">${esc(s.certifications || "—")}</span></div>
          <div class="profile-row"><span class="k">Resume</span><span class="v">${esc(s.resumeLink)}</span></div>
          <div class="profile-row"><span class="k">Portfolio</span><span class="v">${esc(s.portfolioLink || "—")}</span></div>
          <div class="profile-row"><span class="k">PAN card</span><span class="v">${esc(maskPan(s.panCard))} ${kycBadge(s)}</span></div>
          <div class="profile-row"><span class="k">Photo</span><span class="v">${avatarThumb(s, 56)}</span></div>
        </div>`;
    } else {
      body = `
        <form id="form-edit-profile" class="card" style="max-width:40rem;">
          <div class="flex justify-between items-center" style="margin-bottom:1.25rem;">
            <h3 style="margin:0; font-weight:600;">Edit profile</h3>
            <div class="flex gap-2">
              <button type="button" class="chip-btn" data-action="cancel-edit-profile">Cancel</button>
              <button type="submit" class="chip-btn emerald">Save</button>
            </div>
          </div>
          <div class="grid grid-2">
            ${field("College", `<input class="sb-input" name="college" value="${esc(s.college)}" />`)}
            ${field("Course", `<input class="sb-input" name="course" value="${esc(s.course)}" />`)}
          </div>
          ${field("CGPA", `<input class="sb-input" name="cgpa" value="${esc(s.cgpa)}" />`)}
          ${field("Skills (comma separated)", `<input class="sb-input" name="skills" value="${esc(s.skills.join(", "))}" />`)}
          ${field("Projects", `<textarea class="sb-input" name="projects" rows="2">${esc(s.projects)}</textarea>`)}
          ${field("Certifications", `<textarea class="sb-input" name="certifications" rows="2">${esc(s.certifications)}</textarea>`)}
          ${field("Portfolio link", `<input class="sb-input" name="portfolioLink" value="${esc(s.portfolioLink)}" />`)}
          <div class="kyc-block">
            <p class="kyc-heading">${icon("shield-check")} Identity verification (KYC)</p>
            <div class="grid grid-2">
              ${field("PAN card number", `<input class="sb-input" name="panCard" maxlength="10" style="text-transform:uppercase;" value="${esc(s.panCard || "")}" />`, "credit-card")}
              ${field("Replace photo", `<input class="sb-input" type="file" name="photo" accept="image/*" />`, "camera")}
            </div>
            <div class="flex items-center gap-2" style="margin-top:.25rem;">${avatarThumb(s, 48)}<span class="hint" style="margin:0;">Current photo on file — upload a new one to replace it.</span></div>
          </div>
        </form>`;
    }
  }

  return `
    ${renderHeader("student")}
    <div class="container dash-page">
      <div class="dash-header">
        <div>
          <h1 class="dash-title sb-serif">Hi, ${esc(s.name.split(" ")[0])}</h1>
          <div class="dash-sub">${statusBadge}<span>·</span><span>${esc(s.course)}, ${esc(s.college)}</span></div>
        </div>
      </div>
      <div class="tabs-row">
        ${tabs.map(([id, label]) => `<button class="tab-btn ${state.studentTab === id ? "active" : ""}" data-action="set-tab" data-dash="student" data-tab="${id}">${esc(label)}</button>`).join("")}
      </div>
      ${body}
    </div>
    ${renderModal()}`;
}

/* ---------------------------------------------------------------------- */
/*  Skill assessment                                                      */
/* ---------------------------------------------------------------------- */
function renderSkillPicker() {
  return `
    <form id="form-add-skill-test" class="flex gap-2 items-end" style="flex-wrap:wrap;">
      <div style="flex:1; min-width:14rem;">
        ${field("Skill to test", `<input class="sb-input" name="skill" list="skill-suggestions" placeholder="e.g. React, AWS, Figma" required />`)}
        <datalist id="skill-suggestions">${OFFERED_SKILLS.map((sk) => `<option value="${esc(sk)}"></option>`).join("")}</datalist>
      </div>
      <button class="btn btn-primary" type="submit" style="margin-bottom:1rem;">Start test</button>
    </form>`;
}

function renderAssessmentTab(s) {
  if (state.activeQuiz) return renderQuizRunner(s);

  const skills = Array.from(new Set([...(s.skills || []), ...Object.keys(s.assessments || {})]));
  if (skills.length === 0) {
    return emptyState("No skills tested yet. Take a test below to add a verified skill to your profile.") +
      `<div class="card" style="margin-top:1rem;"><h4 style="margin:0 0 .75rem; font-weight:600;">Test a skill</h4>${renderSkillPicker()}</div>`;
  }

  return `
    <div class="card" style="margin-bottom:1.25rem;">
      <h3 style="margin:0 0 .35rem; font-weight:600;">Skill assessment</h3>
      <p style="font-size:.875rem; color:var(--stone-600); margin:0;">Take a short 5-question test for each skill on your profile. A passing score (60%+) adds a verified badge companies can see next to that skill.</p>
    </div>
    <div class="grid grid-2">
      ${skills.map((skill) => {
        const a = assessmentFor(s, skill);
        const quizLen = getQuizForSkill(skill).length;
        return `
        <div class="card">
          <div class="flex justify-between items-start">
            <h4 style="margin:0; font-weight:600;">${esc(skill)}</h4>
            ${a ? (a.passed ? badge(`Passed · ${a.percent}%`, "emerald", true) : badge(`Retake · ${a.percent}%`, "rose", true)) : badge("Not attempted", "stone", true)}
          </div>
          <p style="font-size:.72rem; color:var(--stone-500); margin:.4rem 0 .9rem;">${quizLen} questions${a ? ` · last taken ${esc(a.takenAt)}` : ""}</p>
          <button class="chip-btn ${a && a.passed ? "" : "emerald"}" data-action="start-assessment" data-skill="${esc(skill)}">${a ? "Retake test" : "Take test"}</button>
        </div>`;
      }).join("")}
    </div>
    <div class="card" style="margin-top:1.25rem;">
      <h4 style="margin:0 0 .75rem; font-weight:600;">Test a new skill</h4>
      ${renderSkillPicker()}
    </div>`;
}

function renderQuizRunner(s) {
  const { skill, qIndex, answers } = state.activeQuiz;
  const questions = getQuizForSkill(skill);
  const total = questions.length;
  const current = questions[qIndex];
  const selected = answers[qIndex];
  const isLast = qIndex === total - 1;
  const canAdvance = selected !== null && selected !== undefined;

  return `
    <div class="card" style="max-width:38rem;">
      <div class="flex justify-between items-center" style="margin-bottom:.25rem;">
        <h3 style="margin:0; font-weight:600;">${esc(skill)} assessment</h3>
        <button class="icon-btn" data-action="quiz-cancel" title="Cancel">${icon("x")}</button>
      </div>
      <p style="font-size:.72rem; color:var(--stone-500); margin:0 0 1rem;">Question ${qIndex + 1} of ${total}</p>
      <div class="progress-track" style="height:.4rem; background:var(--stone-100); border-radius:999px; overflow:hidden; margin-bottom:1.25rem;">
        <div style="height:100%; width:${Math.round(((qIndex + (canAdvance ? 1 : 0)) / total) * 100)}%; background:var(--indigo-600, #4338ca); transition:width .2s;"></div>
      </div>
      <p style="font-weight:500; margin:0 0 1rem;">${esc(current.q)}</p>
      <div class="flex flex-col gap-2" style="margin-bottom:1.5rem;">
        ${current.options.map((opt, i) => `
          <label class="quiz-option ${selected === i ? "selected" : ""}" style="display:flex; align-items:center; gap:.6rem; border:1px solid ${selected === i ? "var(--indigo-300)" : "var(--stone-200)"}; background:${selected === i ? "var(--indigo-50)" : "#fff"}; border-radius:.6rem; padding:.6rem .85rem; cursor:pointer; font-size:.875rem;">
            <input type="radio" name="quiz-opt" data-action="quiz-select" data-index="${i}" ${selected === i ? "checked" : ""} style="accent-color:var(--indigo-600, #4338ca);" />
            ${esc(opt)}
          </label>`).join("")}
      </div>
      <div class="flex justify-between items-center">
        <button class="chip-btn" data-action="quiz-prev" ${qIndex === 0 ? "disabled" : ""}>Back</button>
        ${isLast
          ? `<button class="chip-btn emerald" data-action="quiz-submit" ${canAdvance ? "" : "disabled"}>Submit</button>`
          : `<button class="chip-btn emerald" data-action="quiz-next" ${canAdvance ? "" : "disabled"}>Next</button>`}
      </div>
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Company dashboard                                                     */
/* ---------------------------------------------------------------------- */
function companyStudentResults() {
  const q = state.studentFilter.q.toLowerCase();
  const skill = state.studentFilter.skill.toLowerCase();
  return state.students.filter((s) => s.status === "verified").filter((s) => {
    const matchesQ = !q || s.name.toLowerCase().includes(q) || s.college.toLowerCase().includes(q);
    const matchesSkill = !skill || s.skills.some((sk) => sk.toLowerCase().includes(skill));
    return matchesQ && matchesSkill;
  });
}

function renderStudentResultsGrid() {
  const list = companyStudentResults();
  if (list.length === 0) return emptyState("No verified students match this search.");
  return `<div class="grid grid-2">${list.map((s) => `
    <div class="card">
      <div class="flex justify-between items-start">
        <div>
          <p style="font-weight:600; margin:0;">${esc(s.name)}</p>
          <p style="font-size:.72rem; color:var(--stone-500); margin:.1rem 0 0;">${esc(s.course)} · ${esc(s.college)}</p>
        </div>
        ${verifiedTag(true)}
      </div>
      <p style="font-size:.72rem; color:var(--stone-400); margin:.25rem 0 0;">CGPA ${esc(s.cgpa)}</p>
      <div style="margin:.6rem 0;">${s.skills.map((sk) => skillBadgeWithAssessment(s, sk)).join(" ")}</div>
      <p style="font-size:.875rem; color:var(--stone-600);" class="line-clamp-2">${esc(s.projects)}</p>
      <div class="flex gap-3" style="margin-top:.75rem; font-size:.72rem; color:var(--stone-500);">
        <span class="flex items-center gap-1">${icon("file-text")} ${esc(s.resumeLink)}</span>
        ${s.portfolioLink ? `<span class="flex items-center gap-1">${icon("link-2")} Portfolio</span>` : ""}
      </div>
    </div>`).join("")}</div>`;
}

function renderCompanyDashboard() {
  const c = currentCompany();
  if (!c) return renderLanding();
  const myOpps = state.opportunities.filter((o) => o.companyId === c.id);
  const myApps = state.applications.filter((a) => a.companyId === c.id);

  const tabs = [
    ["overview", "Overview"], ["post", "Post opportunity"], ["myOpps", "My opportunities"],
    ["search", "Search students"], ["applications", "Applications"],
  ];

  const statusBadge = c.status === "verified" ? verifiedTag() : c.status === "pending" ? badge("Verification pending", "amber") : badge("Verification rejected", "rose");

  let body = "";
  if (state.companyTab === "overview") {
    body = `
      <div class="grid grid-3">
        ${statCard("briefcase", "Opportunities posted", myOpps.length, "amber")}
        ${statCard("users", "Applications received", myApps.length)}
        ${statCard("check-circle-2", "Selected", myApps.filter((a) => a.status === "Selected").length, "emerald")}
      </div>
      ${c.status !== "verified" ? `<div class="alert alert-amber" style="margin-top:1.25rem;">Your company is pending admin verification. You'll be able to post opportunities once verified.</div>` : ""}`;
  } else if (state.companyTab === "post") {
    body = `
      <form id="form-post-opportunity" class="card" style="max-width:40rem;">
        ${field("Role title *", `<input class="sb-input" name="title" required />`)}
        <div class="grid grid-2">
          ${field("Type", `<select class="sb-input" name="type"><option>Internship</option><option>Job</option></select>`)}
          ${field("Minimum CGPA", `<input class="sb-input" name="minCGPA" />`)}
        </div>
        ${field("Required skills (comma separated) *", `<input class="sb-input" name="requiredSkills" required placeholder="React, SQL, Python" />`)}
        <div class="grid grid-2">
          ${field("Location", `<input class="sb-input" name="location" />`)}
          ${field("Stipend / salary", `<input class="sb-input" name="stipend" />`)}
        </div>
        ${field("Description", `<textarea class="sb-input" name="description" rows="3"></textarea>`)}
        <button class="btn btn-amber btn-block" type="submit">Submit for approval</button>
      </form>`;
  } else if (state.companyTab === "myOpps") {
    if (myOpps.length === 0) body = emptyState("You haven't posted any opportunities yet.");
    else body = `<div class="flex flex-col gap-3">${myOpps.map((o) => `
      <div class="card">
        <div class="flex wrap justify-between items-center gap-2">
          <div>
            <p style="font-weight:600; margin:0;">${esc(o.title)}</p>
            <p style="font-size:.72rem; color:var(--stone-500); margin:.15rem 0 0;">${esc(o.type)} · ${esc(o.location || "—")} · ${state.applications.filter((a) => a.opportunityId === o.id).length} applicants</p>
          </div>
          ${o.status === "approved" ? badge("Approved", "emerald") : o.status === "pending" ? badge("Pending approval", "amber") : badge("Rejected", "rose")}
        </div>
        <div style="margin-top:.6rem;">${o.requiredSkills.map((s) => badge(s, "indigo")).join(" ")}</div>
      </div>`).join("")}</div>`;
  } else if (state.companyTab === "search") {
    body = `
      <div class="flex wrap gap-3" style="margin-bottom:1.5rem;">
        <input id="student-search" class="sb-input" style="flex:1; min-width:220px;" placeholder="Search name or college…" value="${esc(state.studentFilter.q)}" />
        <input id="student-skill-filter" class="sb-input" style="flex:1; min-width:200px;" placeholder="Filter by skill…" value="${esc(state.studentFilter.skill)}" />
      </div>
      <div id="student-results">${renderStudentResultsGrid()}</div>`;
  } else if (state.companyTab === "applications") {
    if (myApps.length === 0) body = emptyState("No applications yet — post an opportunity to start receiving them.");
    else body = `<div class="flex flex-col gap-3">${myApps.map((a) => {
      const student = findStudent(a.studentId); const opp = findOpp(a.opportunityId);
      if (!student || !opp) return "";
      const score = matchScore(student.skills, opp.requiredSkills);
      return `
        <div class="card">
          <div class="flex wrap justify-between items-start gap-3">
            <div>
              <p style="font-weight:600; margin:0;">${esc(student.name)} <span style="color:var(--stone-400); font-weight:400;">→ ${esc(opp.title)}</span></p>
              <p style="font-size:.72rem; color:var(--stone-500); margin:.15rem 0 0;">${esc(student.college)} · CGPA ${esc(student.cgpa)} · ${score}% skill match</p>
            </div>
            ${badge(a.status, statusStyles[a.status])}
          </div>
          <div class="flex wrap gap-2" style="margin-top:1rem;">
            <button class="chip-btn" data-action="shortlist" data-app="${a.id}">Shortlist</button>
            <button class="chip-btn" data-action="open-schedule" data-app="${a.id}">Schedule interview</button>
            <button class="chip-btn emerald" data-action="select-app" data-app="${a.id}">Select</button>
            <button class="chip-btn rose" data-action="reject-app" data-app="${a.id}">Reject</button>
          </div>
        </div>`;
    }).join("")}</div>`;
  }

  return `
    ${renderHeader("company")}
    <div class="container dash-page">
      <div class="dash-header">
        <div>
          <h1 class="dash-title sb-serif">${esc(c.name)}</h1>
          <div class="dash-sub">${statusBadge}<span>·</span><span>${esc(c.industry || "—")}</span></div>
        </div>
      </div>
      <div class="tabs-row">
        ${tabs.map(([id, label]) => `<button class="tab-btn amber ${state.companyTab === id ? "active amber" : ""}" data-action="set-tab" data-dash="company" data-tab="${id}">${esc(label)}</button>`).join("")}
      </div>
      ${body}
    </div>
    ${renderModal()}`;
}

/* ---------------------------------------------------------------------- */
/*  Admin dashboard                                                       */
/* ---------------------------------------------------------------------- */
function renderAdminDashboard() {
  const pendingStudents = state.students.filter((s) => s.status === "pending");
  const pendingCompanies = state.companies.filter((c) => c.status === "pending");
  const pendingOpps = state.opportunities.filter((o) => o.status === "pending");
  const openReports = state.reports.filter((r) => r.status === "open");

  const tabs = [
    ["students", "Students", pendingStudents.length], ["companies", "Companies", pendingCompanies.length],
    ["opportunities", "Opportunities", pendingOpps.length], ["reports", "Reports", openReports.length],
  ];

  let body = "";
  if (state.adminTab === "students") {
    const list = state.students.slice().reverse();
    body = list.length === 0 ? emptyState("No students yet.") : `<div class="flex flex-col gap-3">${list.map((s) => {
      const kycOk = !!(s.panCard && s.photo);
      return `
      <div class="card flex wrap justify-between items-center gap-4">
        <div class="flex items-start gap-3">
          ${avatarThumb(s, 48)}
          <div>
            <p style="font-weight:600; margin:0;">${esc(s.name)} <span style="color:var(--stone-400); font-weight:400; font-size:.875rem;">· ${esc(s.email)}</span></p>
            <p style="font-size:.72rem; color:var(--stone-500); margin:.15rem 0 0;">${esc(s.course)}, ${esc(s.college)} · CGPA ${esc(s.cgpa)}</p>
            <p style="font-size:.72rem; color:var(--stone-600); margin:.3rem 0 0;">${icon("credit-card")} PAN: ${esc(maskPan(s.panCard))} ${kycBadge(s)}</p>
            <div style="margin-top:.5rem;">${s.skills.map((sk) => badge(sk, "indigo")).join(" ")}</div>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          ${s.status === "verified" ? badge("Verified", "emerald") : s.status === "rejected" ? badge("Rejected", "rose") : `
            <button class="chip-btn emerald" ${kycOk ? "" : "disabled title=\"Awaiting PAN & photo from student\""} data-action="verify-student" data-id="${s.id}" data-status="verified">${icon("check")} Verify</button>
            <button class="chip-btn rose" data-action="verify-student" data-id="${s.id}" data-status="rejected">${icon("x")} Reject</button>`}
        </div>
      </div>`;
    }).join("")}</div>`;
  } else if (state.adminTab === "companies") {
    const list = state.companies.slice().reverse();
    body = list.length === 0 ? emptyState("No companies yet.") : `<div class="flex flex-col gap-3">${list.map((c) => `
      <div class="card flex wrap justify-between items-center gap-4">
        <div>
          <p style="font-weight:600; margin:0;">${esc(c.name)} <span style="color:var(--stone-400); font-weight:400; font-size:.875rem;">· ${esc(c.email)}</span></p>
          <p style="font-size:.72rem; color:var(--stone-500); margin:.15rem 0 0;">${esc(c.industry || "—")} · Contact: ${esc(c.contactPerson)}</p>
          <p style="font-size:.875rem; color:var(--stone-600); margin:.35rem 0 0; max-width:32rem;">${esc(c.description || "")}</p>
        </div>
        <div class="flex gap-2">
          ${c.status === "verified" ? badge("Verified", "emerald") : c.status === "rejected" ? badge("Rejected", "rose") : `
            <button class="chip-btn emerald" data-action="verify-company" data-id="${c.id}" data-status="verified">${icon("check")} Verify</button>
            <button class="chip-btn rose" data-action="verify-company" data-id="${c.id}" data-status="rejected">${icon("x")} Reject</button>`}
        </div>
      </div>`).join("")}</div>`;
  } else if (state.adminTab === "opportunities") {
    const list = state.opportunities.slice().reverse();
    body = list.length === 0 ? emptyState("No opportunities yet.") : `<div class="flex flex-col gap-3">${list.map((o) => {
      const c = findCompany(o.companyId);
      return `
      <div class="card flex wrap justify-between items-center gap-4">
        <div>
          <p style="font-weight:600; margin:0;">${esc(o.title)} <span style="color:var(--stone-400); font-weight:400; font-size:.875rem;">· ${esc(c?.name || "")}</span></p>
          <p style="font-size:.72rem; color:var(--stone-500); margin:.15rem 0 0;">${esc(o.type)} · ${esc(o.location || "—")} · Min CGPA ${esc(o.minCGPA || "—")}</p>
          <div style="margin-top:.5rem;">${o.requiredSkills.map((s) => badge(s, "indigo")).join(" ")}</div>
        </div>
        <div class="flex gap-2">
          ${o.status === "approved" ? badge("Approved", "emerald") : o.status === "rejected" ? badge("Rejected", "rose") : `
            <button class="chip-btn emerald" data-action="decide-opp" data-id="${o.id}" data-status="approved">${icon("check")} Approve</button>
            <button class="chip-btn rose" data-action="decide-opp" data-id="${o.id}" data-status="rejected">${icon("x")} Reject</button>`}
        </div>
      </div>`;
    }).join("")}</div>`;
  } else if (state.adminTab === "reports") {
    const list = state.reports.slice().reverse();
    body = list.length === 0 ? emptyState("No reports filed.") : `<div class="flex flex-col gap-3">${list.map((r) => {
      const opp = findOpp(r.opportunityId); const student = findStudent(r.byStudentId);
      return `
      <div class="card flex wrap justify-between items-center gap-4">
        <div>
          <p style="font-weight:600; margin:0; display:flex; align-items:center; gap:.4rem;">${icon("flag")} ${esc(opp?.title || "Opportunity removed")}</p>
          <p style="font-size:.72rem; color:var(--stone-500); margin:.15rem 0 0;">Reported by ${esc(student?.name || "—")} · ${esc(r.time)}</p>
          <p style="font-size:.875rem; color:var(--stone-600); margin:.35rem 0 0;">${esc(r.reason)}</p>
        </div>
        ${r.status === "reviewed" ? badge("Reviewed", "stone") : `<button class="chip-btn" data-action="resolve-report" data-id="${r.id}">Mark reviewed</button>`}
      </div>`;
    }).join("")}</div>`;
  }

  return `
    ${renderHeader("admin")}
    <div class="container dash-page">
      <h1 class="dash-title sb-serif" style="margin-bottom:.15rem;">Verification console</h1>
      <p style="font-size:.875rem; color:var(--stone-500); margin:0 0 1.5rem;">Review students, companies, opportunities and reports.</p>
      <div class="grid grid-4" style="margin-bottom:2rem;">
        ${statCard("graduation-cap", "Verified students", state.students.filter((s) => s.status === "verified").length)}
        ${statCard("building-2", "Verified companies", state.companies.filter((c) => c.status === "verified").length, "amber")}
        ${statCard("briefcase", "Live opportunities", state.opportunities.filter((o) => o.status === "approved").length, "emerald")}
        ${statCard("alert-triangle", "Open reports", openReports.length)}
      </div>
      <div class="tabs-row">
        ${tabs.map(([id, label, count]) => `
          <button class="tab-btn dark ${state.adminTab === id ? "active dark" : ""}" data-action="set-tab" data-dash="admin" data-tab="${id}">
            ${esc(label)} ${count > 0 ? `<span class="tab-count">${count}</span>` : ""}
          </button>`).join("")}
      </div>
      ${body}
    </div>`;
}

/* ---------------------------------------------------------------------- */
/*  Modal                                                                 */
/* ---------------------------------------------------------------------- */
function renderModal() {
  if (!state.modal) return "";
  if (state.modal.type === "report") {
    const opp = findOpp(state.modal.oppId);
    return `
      <div class="modal-overlay" data-action="close-modal-overlay">
        <div class="modal-box fade-in" onclick="event.stopPropagation()">
          <div class="modal-head"><h3>Report "${esc(opp?.title || "")}"</h3><button class="modal-close" data-action="close-modal">${icon("x")}</button></div>
          <p class="hint-text">Let the admin team know what looks wrong with this opportunity.</p>
          <form id="form-report">
            <textarea class="sb-input" name="reason" rows="3" placeholder="Describe the issue…" style="margin-bottom:1rem;"></textarea>
            <button class="btn btn-primary btn-block" type="submit">Submit report</button>
          </form>
        </div>
      </div>`;
  }
  if (state.modal.type === "interview") {
    return `
      <div class="modal-overlay" data-action="close-modal-overlay">
        <div class="modal-box fade-in" onclick="event.stopPropagation()">
          <div class="modal-head"><h3>Schedule interview</h3><button class="modal-close" data-action="close-modal">${icon("x")}</button></div>
          <p class="hint-text">Add a date/time or note for the candidate.</p>
          <form id="form-interview">
            <input class="sb-input" name="note" placeholder="e.g. Tue 15 Sep, 3:00 PM — Google Meet" style="margin-bottom:1rem;" />
            <button class="btn btn-amber btn-block" type="submit">Confirm schedule</button>
          </form>
        </div>
      </div>`;
  }
  return "";
}

/* ---------------------------------------------------------------------- */
/*  Toast                                                                 */
/* ---------------------------------------------------------------------- */
function renderToast() {
  if (!state.toast) return "";
  const iconName = state.toast.tone === "emerald" ? "check-circle-2" : state.toast.tone === "rose" ? "alert-triangle" : "";
  return `<div class="toast-wrap"><div class="toast ${state.toast.tone} fade-in">${iconName ? icon(iconName) : ""}${esc(state.toast.msg)}</div></div>`;
}

/* ---------------------------------------------------------------------- */
/*  Master render                                                        */
/* ---------------------------------------------------------------------- */
function render() {
  const app = document.getElementById("app");
  let html = "";
  switch (state.view) {
    case "landing": html = renderLanding(); break;
    case "chooseRole": html = renderChooseRole(); break;
    case "studentAuth": html = renderStudentAuth(); break;
    case "companyAuth": html = renderCompanyAuth(); break;
    case "adminAuth": html = renderAdminAuth(); break;
    case "studentDash": html = renderStudentDashboard(); break;
    case "companyDash": html = renderCompanyDashboard(); break;
    case "adminDash": html = renderAdminDashboard(); break;
    default: html = renderLanding();
  }
  app.innerHTML = html + renderToast();
  if (window.lucide) window.lucide.createIcons();
  if (state.view === "landing") animateLandingCounters();
}

/* ---------------------------------------------------------------------- */
/*  Actions                                                               */
/* ---------------------------------------------------------------------- */
function goHome() {
  state.view = "landing"; state.currentStudentId = null; state.currentCompanyId = null;
  state.isAdmin = false; state.bellOpen = false; state.modal = null; state.authError = ""; state.authNotice = "";
}

function markAllRead() {
  state.notifications.forEach((n) => { if (n.audience === audienceKey()) n.read = true; });
}

function handleAction(el) {
  const action = el.dataset.action;
  switch (action) {
    case "go-landing": goHome(); render(); break;
    case "go-choose-role": state.view = "chooseRole"; render(); break;
    case "go-student-auth": state.view = "studentAuth"; state.authMode = el.dataset.mode || "login"; state.authError = ""; state.authNotice = ""; state.reg = null; render(); break;
    case "go-company-auth": state.view = "companyAuth"; state.authMode = el.dataset.mode || "login"; state.authError = ""; state.authNotice = ""; render(); break;
    case "go-admin-auth": state.view = "adminAuth"; state.authError = ""; render(); break;
    case "set-auth-mode": state.authMode = el.dataset.mode; state.authError = ""; state.authNotice = ""; state.reg = null; render(); break;
    case "logout": showToast("Signed out", "stone"); goHome(); render(); break;
    case "toggle-bell":
      state.bellOpen = !state.bellOpen;
      if (state.bellOpen) markAllRead();
      render();
      break;

    case "set-tab": {
      const dash = el.dataset.dash;
      if (dash === "student") state.studentTab = el.dataset.tab;
      if (dash === "company") state.companyTab = el.dataset.tab;
      if (dash === "admin") state.adminTab = el.dataset.tab;
      render();
      break;
    }

    /* student actions */
    case "apply": {
      const opp = findOpp(el.dataset.opp);
      const student = currentStudent();
      if (!opp || !student) break;
      if (student.status !== "verified") { showToast("Get verified before applying.", "rose"); break; }
      if (state.applications.some((a) => a.opportunityId === opp.id && a.studentId === student.id)) { showToast("Already applied to this opportunity.", "stone"); break; }
      state.applications.push({ id: nextId("A"), studentId: student.id, opportunityId: opp.id, companyId: opp.companyId, status: "Applied", appliedAt: new Date().toISOString().slice(0, 10) });
      pushNotification(`company:${opp.companyId}`, `${student.name} applied for ${opp.title}.`);
      showToast("Application submitted!", "emerald");
      break;
    }
    case "open-report": state.modal = { type: "report", oppId: el.dataset.opp }; render(); break;
    case "edit-profile": state.editingProfile = true; render(); break;
    case "cancel-edit-profile": state.editingProfile = false; render(); break;

    /* skill assessment */
    case "start-assessment": {
      const skill = el.dataset.skill;
      const len = getQuizForSkill(skill).length;
      state.activeQuiz = { skill, qIndex: 0, answers: new Array(len).fill(null) };
      render();
      break;
    }
    case "quiz-select": {
      state.activeQuiz.answers[state.activeQuiz.qIndex] = Number(el.dataset.index);
      render();
      break;
    }
    case "quiz-next": {
      const q = state.activeQuiz;
      if (q.answers[q.qIndex] == null) break;
      q.qIndex = Math.min(q.qIndex + 1, getQuizForSkill(q.skill).length - 1);
      render();
      break;
    }
    case "quiz-prev": {
      state.activeQuiz.qIndex = Math.max(0, state.activeQuiz.qIndex - 1);
      render();
      break;
    }
    case "quiz-submit": {
      const q = state.activeQuiz;
      if (q.answers[q.qIndex] == null) break;
      const questions = getQuizForSkill(q.skill);
      const total = questions.length;
      const score = questions.reduce((acc, item, i) => acc + (q.answers[i] === item.correct ? 1 : 0), 0);
      const student = currentStudent();
      const { percent, passed } = recordAssessmentResult(student, q.skill, score, total);
      state.activeQuiz = null;
      showToast(passed ? `Passed ${q.skill} assessment — ${percent}%! Added to your profile.` : `Scored ${percent}% on ${q.skill} — try again anytime.`, passed ? "emerald" : "rose");
      break;
    }
    case "quiz-cancel": state.activeQuiz = null; render(); break;

    /* registration skill-testing flow */
    case "reg-toggle-skill": {
      const sk = el.dataset.skill;
      const sel = state.reg.selectedSkills;
      const idx = sel.indexOf(sk);
      if (idx === -1) sel.push(sk); else sel.splice(idx, 1);
      render();
      break;
    }
    case "reg-start-tests": {
      if (state.reg.selectedSkills.length === 0) break;
      state.reg.step = "quiz";
      state.reg.testIndex = 0;
      const firstSkill = state.reg.selectedSkills[0];
      state.reg.activeQuiz = { qIndex: 0, answers: new Array(getQuizForSkill(firstSkill).length).fill(null) };
      render();
      break;
    }
    case "reg-quiz-select": {
      state.reg.activeQuiz.answers[state.reg.activeQuiz.qIndex] = Number(el.dataset.index);
      render();
      break;
    }
    case "reg-quiz-next": {
      const rq = state.reg.activeQuiz;
      if (rq.answers[rq.qIndex] == null) break;
      const skill = state.reg.selectedSkills[state.reg.testIndex];
      rq.qIndex = Math.min(rq.qIndex + 1, getQuizForSkill(skill).length - 1);
      render();
      break;
    }
    case "reg-quiz-prev": {
      state.reg.activeQuiz.qIndex = Math.max(0, state.reg.activeQuiz.qIndex - 1);
      render();
      break;
    }
    case "reg-quiz-submit": {
      const reg = state.reg;
      const rq = reg.activeQuiz;
      if (rq.answers[rq.qIndex] == null) break;
      const skill = reg.selectedSkills[reg.testIndex];
      const questions = getQuizForSkill(skill);
      const score = questions.reduce((acc, item, i) => acc + (rq.answers[i] === item.correct ? 1 : 0), 0);
      const percent = Math.round((score / questions.length) * 100);
      reg.results[skill] = { score, total: questions.length, percent, passed: percent >= 60 };
      if (reg.testIndex < reg.selectedSkills.length - 1) {
        reg.testIndex += 1;
        const nextSkill = reg.selectedSkills[reg.testIndex];
        reg.activeQuiz = { qIndex: 0, answers: new Array(getQuizForSkill(nextSkill).length).fill(null) };
      } else {
        reg.step = "review";
        reg.selectedSkills = [];
        reg.activeQuiz = null;
      }
      render();
      break;
    }
    case "reg-go-review": state.reg.step = "review"; state.reg.selectedSkills = []; state.reg.activeQuiz = null; render(); break;
    case "reg-more-skills": state.reg.step = "skills"; render(); break;
    case "reg-finalize": finalizeStudentRegistration(); break;

    /* company actions */
    case "shortlist": updateApp(el.dataset.app, "Shortlisted"); break;
    case "select-app": updateApp(el.dataset.app, "Selected"); break;
    case "reject-app": updateApp(el.dataset.app, "Rejected"); break;
    case "open-schedule": state.modal = { type: "interview", appId: el.dataset.app }; render(); break;

    /* admin actions */
    case "verify-student": {
      const s = findStudent(el.dataset.id); if (!s) break;
      s.status = el.dataset.status;
      pushNotification(`student:${s.id}`, s.status === "verified" ? "Your profile has been verified! You can now apply to opportunities." : "Your profile verification was rejected. Please update your details.");
      showToast(`${s.name} ${s.status}.`, s.status === "verified" ? "emerald" : "rose");
      break;
    }
    case "verify-company": {
      const c = findCompany(el.dataset.id); if (!c) break;
      c.status = el.dataset.status;
      pushNotification(`company:${c.id}`, c.status === "verified" ? "Your company has been verified! You can now post opportunities." : "Your company verification was rejected. Please review your details.");
      showToast(`${c.name} ${c.status}.`, c.status === "verified" ? "emerald" : "rose");
      break;
    }
    case "decide-opp": {
      const o = findOpp(el.dataset.id); if (!o) break;
      o.status = el.dataset.status;
      pushNotification(`company:${o.companyId}`, `Your opportunity "${o.title}" was ${o.status}.`);
      showToast(`Opportunity ${o.status}.`, o.status === "approved" ? "emerald" : "rose");
      break;
    }
    case "resolve-report": {
      const r = state.reports.find((x) => x.id === el.dataset.id); if (!r) break;
      r.status = "reviewed";
      showToast("Report marked as reviewed.", "stone");
      break;
    }

    case "close-modal": case "close-modal-overlay": state.modal = null; render(); break;
  }
}

function updateApp(appId, status) {
  const app = state.applications.find((a) => a.id === appId);
  if (!app) return;
  app.status = status;
  const opp = findOpp(app.opportunityId);
  pushNotification(`student:${app.studentId}`, `Your application for "${opp?.title || ""}" is now: ${status}.`);
  showToast(`Marked as ${status}.`, "emerald");
}

/* ---------------------------------------------------------------------- */
/*  Form submissions                                                      */
/* ---------------------------------------------------------------------- */
async function handleSubmit(form) {
  const data = Object.fromEntries(new FormData(form).entries());

  if (form.id === "form-add-skill-test") {
    const skill = (data.skill || "").trim();
    if (!skill) { render(); return; }
    const len = getQuizForSkill(skill).length;
    state.activeQuiz = { skill, qIndex: 0, answers: new Array(len).fill(null) };
    render();
  }

  else if (form.id === "form-student-register-details") {
    if (!data.name || !data.email || !data.password || !data.college || !data.course) { state.authError = "Please fill in all required fields."; render(); return; }
    if (!data.panCard || !data.panCard.trim()) { state.authError = "PAN card number is required for identity verification."; render(); return; }
    if (state.students.some((s) => s.email === data.email)) { state.authError = "An account with this email already exists."; render(); return; }
    const photoInput = form.querySelector('input[name="photo"]');
    const photoFile = photoInput && photoInput.files && photoInput.files[0];
    if (!photoFile) { state.authError = "Please upload a photo for identity verification."; render(); return; }
    let photoDataUrl = "";
    try { photoDataUrl = await fileToDataUrl(photoFile); }
    catch { state.authError = "Could not read the uploaded photo. Please try a different file."; render(); return; }
    state.authError = "";
    state.reg = {
      step: "skills",
      formData: { ...data, photoDataUrl },
      selectedSkills: [],
      testIndex: 0,
      activeQuiz: null,
      results: {},
    };
    render();
  }

  else if (form.id === "form-reg-custom-skill") {
    const sk = (data.customSkill || "").trim();
    if (sk && !state.reg.selectedSkills.includes(sk) && !state.reg.results[sk]) state.reg.selectedSkills.push(sk);
    form.reset();
    render();
  }

  else if (form.id === "form-student-login") {
    const found = state.students.find((s) => s.email === data.email && s.password === data.password);
    if (!found) { state.authError = "No matching student account. Try registering, or use ananya@college.edu / pass123."; render(); return; }
    state.currentStudentId = found.id; state.view = "studentDash"; state.studentTab = "overview"; state.authError = ""; render();
  }

  else if (form.id === "form-company-login") {
    const found = state.companies.find((c) => c.email === data.email);
    if (!found) { state.authError = "No matching company account. Try registering, or use hr@nimbusanalytics.com (any password)."; render(); return; }
    state.currentCompanyId = found.id; state.view = "companyDash"; state.companyTab = "overview"; state.authError = ""; render();
  }

  else if (form.id === "form-company-register") {
    if (!data.name || !data.email || !data.password || !data.contactPerson) { state.authError = "Please fill in all required fields."; render(); return; }
    if (state.companies.some((c) => c.email === data.email)) { state.authError = "An account with this email already exists."; render(); return; }
    const company = { id: nextId("C"), name: data.name, email: data.email, password: data.password, industry: data.industry || "", website: data.website || "", contactPerson: data.contactPerson, description: data.description || "", status: "pending", joinedAt: new Date().toISOString().slice(0, 10) };
    state.companies.push(company);
    pushNotification("admin", `New company registration awaiting verification: ${company.name}`);
    state.currentCompanyId = company.id; state.view = "companyDash"; state.companyTab = "overview"; state.authError = "";
    showToast("Company profile created — pending verification.", "emerald");
  }

  else if (form.id === "form-student-forgot") {
    const found = state.students.find((s) => s.email === data.email);
    if (!found) { state.authError = "No student account found with that email."; state.authNotice = ""; render(); return; }
    if (!data.newPassword || data.newPassword.length < 4) { state.authError = "Password must be at least 4 characters."; render(); return; }
    if (data.newPassword !== data.confirmPassword) { state.authError = "Passwords do not match."; render(); return; }
    found.password = data.newPassword;
    state.authError = ""; state.authNotice = "Password reset successfully. You can now sign in."; state.authMode = "login";
    showToast("Password reset.", "emerald");
  }

  else if (form.id === "form-company-forgot") {
    const found = state.companies.find((c) => c.email === data.email);
    if (!found) { state.authError = "No company account found with that email."; state.authNotice = ""; render(); return; }
    if (!data.newPassword || data.newPassword.length < 4) { state.authError = "Password must be at least 4 characters."; render(); return; }
    if (data.newPassword !== data.confirmPassword) { state.authError = "Passwords do not match."; render(); return; }
    found.password = data.newPassword;
    state.authError = ""; state.authNotice = "Password reset successfully. You can now sign in."; state.authMode = "login";
    showToast("Password reset.", "emerald");
  }

  else if (form.id === "form-admin-auth") {
    if (data.code !== ADMIN_PASSCODE) { state.authError = "Incorrect passcode."; render(); return; }
    state.isAdmin = true; state.view = "adminDash"; state.authError = ""; render();
  }

  else if (form.id === "form-post-opportunity") {
    const c = currentCompany();
    if (c.status !== "verified") { showToast("Get verified before posting.", "rose"); return; }
    if (!data.title || !data.requiredSkills) { showToast("Fill in title and required skills.", "rose"); return; }
    const opp = { id: nextId("O"), companyId: c.id, title: data.title, type: data.type, requiredSkills: parseSkills(data.requiredSkills), minCGPA: data.minCGPA || "", location: data.location || "", stipend: data.stipend || "", description: data.description || "", status: "pending", postedAt: new Date().toISOString().slice(0, 10) };
    state.opportunities.push(opp);
    pushNotification("admin", `New opportunity "${opp.title}" from ${c.name} awaiting approval.`);
    state.companyTab = "myOpps";
    showToast("Opportunity submitted for admin approval.", "emerald");
  }

  else if (form.id === "form-edit-profile") {
    const s = currentStudent();
    Object.assign(s, { college: data.college, course: data.course, cgpa: data.cgpa, skills: parseSkills(data.skills || ""), projects: data.projects, certifications: data.certifications, portfolioLink: data.portfolioLink });
    if (data.panCard && data.panCard.trim()) s.panCard = data.panCard.trim().toUpperCase();
    const photoInput = form.querySelector('input[name="photo"]');
    const photoFile = photoInput && photoInput.files && photoInput.files[0];
    if (photoFile) {
      try { s.photo = await fileToDataUrl(photoFile); }
      catch { showToast("Could not read the uploaded photo.", "rose"); }
    }
    s.kycStatus = (s.panCard && s.photo) ? "submitted" : "incomplete";
    state.editingProfile = false;
    showToast("Profile updated.", "emerald");
  }

  else if (form.id === "form-report") {
    if (!data.reason || !data.reason.trim()) return;
    const student = currentStudent();
    state.reports.push({ id: nextId("R"), opportunityId: state.modal.oppId, byStudentId: student.id, reason: data.reason, status: "open", time: new Date().toLocaleString() });
    const opp = findOpp(state.modal.oppId);
    pushNotification("admin", `Report filed on "${opp?.title || ""}" by ${student.name}.`);
    state.modal = null;
    showToast("Report submitted to admin.", "stone");
  }

  else if (form.id === "form-interview") {
    updateApp(state.modal.appId, "Interview Scheduled");
    const app = state.applications.find((a) => a.id === state.modal.appId);
    if (app) app.interviewNote = data.note || "";
    state.modal = null;
  }

  render();
}

/* ---------------------------------------------------------------------- */
/*  Filter (partial re-render) handlers                                   */
/* ---------------------------------------------------------------------- */
function handleFilterInput(target) {
  if (target.id === "opp-search") { state.oppFilter.q = target.value; updateOppResults(); }
  else if (target.id === "opp-type-filter") { state.oppFilter.type = target.value; updateOppResults(); }
  else if (target.id === "student-search") { state.studentFilter.q = target.value; updateStudentResults(); }
  else if (target.id === "student-skill-filter") { state.studentFilter.skill = target.value; updateStudentResults(); }
}

function updateOppResults() {
  const el = document.getElementById("opp-results");
  if (el) { el.innerHTML = renderOppResultsGrid(); if (window.lucide) window.lucide.createIcons(); }
}
function updateStudentResults() {
  const el = document.getElementById("student-results");
  if (el) { el.innerHTML = renderStudentResultsGrid(); if (window.lucide) window.lucide.createIcons(); }
}

/* ---------------------------------------------------------------------- */
/*  Event delegation setup                                                */
/* ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (el) handleAction(el);
  });

  app.addEventListener("submit", (e) => {
    if (e.target.tagName === "FORM") { e.preventDefault(); handleSubmit(e.target); }
  });

  app.addEventListener("input", (e) => {
    if (e.target.id === "opp-search" || e.target.id === "student-search" || e.target.id === "student-skill-filter") handleFilterInput(e.target);
  });
  app.addEventListener("change", (e) => {
    if (e.target.id === "opp-type-filter") handleFilterInput(e.target);
    if (e.target.matches('input[name="photo"][type="file"]')) {
      const wrap = document.getElementById("photo-preview-wrap");
      const file = e.target.files && e.target.files[0];
      if (wrap && file) {
        fileToDataUrl(file).then((url) => {
          wrap.innerHTML = `<img src="${url}" alt="Preview" class="kyc-photo" style="width:64px;height:64px;margin-top:.5rem;" />`;
        }).catch(() => {});
      }
    }
  });

  render();
});