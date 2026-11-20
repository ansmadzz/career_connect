
/* =====================================================
   CAREERCONNECT - HARDCODED DEMO VERSION
   No Firebase Authentication or Firestore
   Local Storage for demo data
===================================================== */

/* =====================================================
   1. DEMO ACCOUNT
===================================================== */

const demoAccount = {
  name: "Demo User",
  email: "demo@careerconnect.com",
  password: "career123"
};

const STORAGE_KEY = "careerConnectDemoData";


/* =====================================================
   2. SHARED JOB LISTINGS
===================================================== */

// Format:
// [id, title, department, company, location, salary,
//  type, skills, description, match]

const jobData = [
[1,"Frontend Developer","Information Technology","BrightLabs","Kuala Lumpur","RM 4,000 – RM 6,000","Full-time",["HTML","CSS","JavaScript"],"Build and maintain responsive website interfaces and improve user experience.",95],
[2,"UI/UX Designer","Design & Creative","Pixel Studio","Petaling Jaya","RM 3,500 – RM 5,000","Full-time",["Figma","UI Design","Prototyping"],"Create wireframes, user flows and visual designs for digital products.",90],
[3,"Web Developer Intern","Information Technology","Nexa Digital","Shah Alam","RM 1,200 – RM 1,800","Internship",["HTML","CSS","PHP"],"Assist with website updates, testing and basic front-end development.",88],
[4,"Software Engineer","Information Technology","CloudTech","Cyberjaya","RM 4,500 – RM 7,000","Full-time",["JavaScript","Python","SQL"],"Develop software features, troubleshoot issues and maintain applications.",82],
[5,"Digital Marketing Intern","Marketing","Mosaic Media","Remote","RM 1,000 – RM 1,500","Internship",["SEO","Marketing","Analytics"],"Support online campaigns, prepare content and monitor digital engagement.",78],
[6,"Product Designer","Design & Creative","Orbit Systems","Kuala Lumpur","RM 5,000 – RM 7,500","Full-time",["Figma","UX Research","Design"],"Research user needs and design clear, accessible product experiences.",75],
[7,"IT Support Assistant","Information Technology","Northstar Group","Shah Alam","RM 2,500 – RM 3,400","Full-time",["Troubleshooting","Networking","Support"],"Help staff troubleshoot devices, software and basic network issues.",84],
[8,"Content Creator","Media & Communications","Mosaic Media","Remote","RM 1,800 – RM 2,500","Part-time",["Content","Canva","Video"],"Create short-form videos, captions and engaging content for social platforms.",80],
[9,"Account Executive","Finance","Apex Advisory","Kuala Lumpur","RM 3,000 – RM 4,200","Full-time",["Accounting","Excel","Bookkeeping"],"Prepare invoices, update financial records and assist with monthly accounts.",82],
[10,"Junior Accountant","Finance","LedgerWorks","Petaling Jaya","RM 3,200 – RM 4,500","Full-time",["SQL Accounting","Financial Reports","Reconciliation"],"Maintain ledgers, reconcile transactions and prepare financial statements.",80],
[11,"Audit Assistant","Finance","Grant & Co.","Shah Alam","RM 2,800 – RM 3,800","Full-time",["Auditing","Documentation","Attention to Detail"],"Check financial documents, prepare audit schedules and support audit fieldwork.",78],
[12,"Payroll Executive","Human Resources","PeopleFirst Group","Kuala Lumpur","RM 3,000 – RM 4,000","Full-time",["Payroll","HRIS","Employment Act"],"Process monthly payroll, manage employee claims and maintain salary records.",81],
[13,"Talent Acquisition Intern","Human Resources","NextTalent Malaysia","Cyberjaya","RM 900 – RM 1,300","Internship",["Recruitment","Communication","Scheduling"],"Post vacancies, screen applications and coordinate interview sessions.",86],
[14,"HR Executive","Human Resources","Evergreen Holdings","Shah Alam","RM 3,200 – RM 4,500","Full-time",["Employee Relations","HR Administration","Onboarding"],"Handle staff records, onboarding, leave administration and employee enquiries.",83],
[15,"Social Media Executive","Marketing","Mosaic Media","Kuala Lumpur","RM 3,000 – RM 4,200","Full-time",["Social Media","Copywriting","Analytics"],"Plan social media calendars, create posts and review campaign performance.",91],
[16,"Graphic Designer","Marketing & Creative","Studio Nadi","Petaling Jaya","RM 2,800 – RM 4,000","Full-time",["Adobe Illustrator","Photoshop","Branding"],"Design posters, brochures, digital advertisements and marketing materials.",88],
[17,"Public Relations Assistant","Marketing & Communications","BrightPath Communications","Kuala Lumpur","RM 2,500 – RM 3,400","Full-time",["Media Relations","Writing","Event Support"],"Draft press materials, coordinate media activities and support public events.",79],
[18,"Market Research Assistant","Marketing","InsightPoint Research","Remote","RM 2,200 – RM 3,200","Full-time",["Surveys","Research","Data Analysis"],"Conduct market surveys, organise findings and prepare research summaries.",77],
[19,"Sales Representative","Sales","Nova Consumer Products","Shah Alam","RM 2,500 – RM 3,500 + commission","Full-time",["Negotiation","Customer Relations","Sales"],"Meet potential customers, explain products and achieve monthly sales targets.",84],
[20,"Business Development Executive","Sales & Business Development","Elevate Solutions","Kuala Lumpur","RM 3,500 – RM 5,000","Full-time",["Lead Generation","Networking","Presentations"],"Identify new clients, prepare proposals and build long-term business relationships.",85],
[21,"Retail Sales Assistant","Retail","Urban Living Store","Petaling Jaya","RM 1,800 – RM 2,400","Part-time",["Customer Service","POS","Merchandising"],"Assist shoppers, arrange product displays and process purchases at the cashier.",80],
[22,"Administrative Assistant","Administration","Crescent Services","Shah Alam","RM 2,000 – RM 2,800","Full-time",["Filing","Microsoft Office","Scheduling"],"Manage correspondence, organise files and support daily office operations.",87],
[23,"Personal Assistant","Administration","Meridian Group","Kuala Lumpur","RM 3,000 – RM 4,200","Full-time",["Calendar Management","Communication","Confidentiality"],"Arrange meetings, manage schedules and prepare documents for management.",78],
[24,"Data Entry Clerk","Administration","MetroLink Services","Remote","RM 1,800 – RM 2,500","Contract",["Data Entry","Accuracy","Microsoft Excel"],"Enter, verify and update information in company records and databases.",76],
[25,"Customer Service Officer","Customer Service","CareLine Malaysia","Cyberjaya","RM 2,300 – RM 3,200","Full-time",["Communication","Problem Solving","CRM"],"Answer customer questions, resolve complaints and record service requests.",89],
[26,"Call Centre Agent","Customer Service","ConnectPlus","Kuala Lumpur","RM 2,200 – RM 3,000","Full-time",["Call Handling","Active Listening","CRM"],"Handle inbound calls, provide product information and follow up on customer cases.",82],
[27,"Primary School Teacher","Education","Bright Future Academy","Shah Alam","RM 2,500 – RM 3,500","Full-time",["Lesson Planning","Classroom Management","Teaching"],"Prepare lessons, teach core subjects and assess pupils' learning progress.",86],
[28,"Training Coordinator","Education & Training","SkillBridge Centre","Petaling Jaya","RM 2,800 – RM 3,800","Full-time",["Training","Coordination","Documentation"],"Arrange training sessions, prepare materials and track participant attendance.",80],
[29,"Clinic Receptionist","Healthcare","WellCare Clinic","Kuala Lumpur","RM 1,900 – RM 2,600","Full-time",["Patient Registration","Scheduling","Customer Service"],"Register patients, arrange appointments and manage front-desk enquiries.",84],
[30,"Pharmacy Assistant","Healthcare","HealthPlus Pharmacy","Shah Alam","RM 2,000 – RM 2,800","Full-time",["Inventory","Customer Care","Retail"],"Assist customers, organise medicine stock and support pharmacy operations under supervision.",78],
[31,"Medical Records Assistant","Healthcare Administration","City Medical Centre","Cyberjaya","RM 2,200 – RM 3,000","Full-time",["Records Management","Data Entry","Confidentiality"],"Maintain patient files, update records and ensure documents are properly organised.",87],
[32,"Mechanical Engineer","Engineering","Axis Manufacturing","Shah Alam","RM 3,800 – RM 5,500","Full-time",["AutoCAD","Maintenance","Engineering"],"Support equipment design, inspect machinery and improve production processes.",82],
[33,"Civil Engineering Assistant","Engineering & Construction","BuildRight Consultants","Kuala Lumpur","RM 2,800 – RM 4,000","Full-time",["AutoCAD","Site Inspection","Technical Drawing"],"Assist with site inspections, technical drawings and construction documentation.",79],
[34,"Quality Control Inspector","Manufacturing","PrecisionWorks","Shah Alam","RM 2,300 – RM 3,200","Full-time",["Quality Checks","Reporting","Manufacturing"],"Inspect finished products, record defects and ensure quality standards are met.",83],
[35,"Logistics Coordinator","Logistics & Supply Chain","SwiftRoute Logistics","Petaling Jaya","RM 2,700 – RM 3,800","Full-time",["Shipment Tracking","Coordination","Excel"],"Coordinate deliveries, monitor shipments and communicate with drivers and suppliers.",85],
[36,"Warehouse Assistant","Logistics & Supply Chain","NorthGate Distribution","Shah Alam","RM 1,900 – RM 2,600","Full-time",["Stock Control","Packing","Inventory"],"Receive goods, prepare orders and maintain accurate warehouse stock records.",80],
[37,"Procurement Executive","Procurement","PrimeSource Trading","Kuala Lumpur","RM 3,000 – RM 4,300","Full-time",["Vendor Management","Purchasing","Negotiation"],"Request quotations, compare suppliers and process purchase orders.",81],
[38,"Hotel Front Desk Officer","Hospitality & Tourism","Serene Suites","Kuala Lumpur","RM 2,100 – RM 2,900","Full-time",["Guest Relations","Reservations","Communication"],"Welcome guests, manage check-ins and respond to booking enquiries.",84],
[39,"Event Coordinator","Events & Hospitality","Gather Events","Petaling Jaya","RM 2,600 – RM 3,600","Contract",["Event Planning","Vendor Coordination","Budgeting"],"Coordinate event schedules, liaise with vendors and manage event-day arrangements.",88],
[40,"Chef Assistant","Food & Beverage","The Garden Bistro","Shah Alam","RM 1,900 – RM 2,600","Full-time",["Food Preparation","Kitchen Safety","Teamwork"],"Prepare ingredients, maintain kitchen cleanliness and assist chefs during service.",77],
[41,"Legal Secretary","Legal","Carter & Lim Legal","Kuala Lumpur","RM 2,500 – RM 3,500","Full-time",["Legal Documents","Filing","Scheduling"],"Format legal documents, arrange appointments and maintain confidential case files.",78],
[42,"Compliance Assistant","Legal & Compliance","TrustMark Services","Cyberjaya","RM 2,800 – RM 3,900","Full-time",["Compliance","Documentation","Research"],"Review company documents, maintain compliance records and support internal checks.",80],
[43,"Interior Design Assistant","Design & Architecture","FormSpace Studio","Petaling Jaya","RM 2,500 – RM 3,600","Full-time",["SketchUp","Mood Boards","Space Planning"],"Prepare design presentations, source materials and assist with space-planning projects.",86],
[44,"Photographer / Videographer","Creative & Media","FrameHouse Studio","Remote","RM 2,200 – RM 3,500","Contract",["Photography","Video Editing","Lighting"],"Capture photos and videos, edit content and prepare media for client projects.",83],
[45,"Research Assistant","Research & Development","Vista Research Centre","Cyberjaya","RM 2,400 – RM 3,400","Contract",["Research","Report Writing","Data Collection"],"Collect information, review sources and prepare findings for research projects.",81],
[46,"Environmental Officer","Environment & Sustainability","GreenEarth Services","Shah Alam","RM 3,000 – RM 4,200","Full-time",["Environmental Audits","Safety","Reporting"],"Monitor environmental practices, conduct site checks and prepare sustainability reports.",79],
[47,"Insurance Claims Assistant","Insurance","SecureLife Assurance","Kuala Lumpur","RM 2,400 – RM 3,300","Full-time",["Claims Processing","Documentation","Customer Service"],"Review claim submissions, request supporting documents and update claim records.",82],
[48,"Real Estate Negotiator","Property & Real Estate","KeyStone Properties","Petaling Jaya","RM 2,000 – RM 3,000 + commission","Full-time",["Property Sales","Negotiation","Client Relations"],"Arrange property viewings, assist buyers and sellers and prepare listing information.",80]
];

const jobs = jobData.map(item => ({
  id: item[0],
  title: item[1],
  department: item[2],
  company: item[3],
  location: item[4],
  salary: item[5],
  type: item[6],
  skills: item[7],
  description: item[8],
  match: item[9]
}));


/* =====================================================
   3. GENERAL SETTINGS
===================================================== */

const statuses = [
  "Applied",
  "Under Review",
  "Interview",
  "Offered",
  "Rejected"
];

const pages = [
  "dashboard",
  "jobs",
  "applications",
  "saved",
  "resume",
  "interviews"
];

const pageTitles = {
  dashboard: "Dashboard",
  jobs: "Find jobs",
  applications: "My applications",
  saved: "Saved jobs",
  resume: "Resume builder",
  interviews: "Interview planner"
};

const resumeFields = [
  "Name",
  "Email",
  "Title",
  "Summary",
  "Skills",
  "Education",
  "Experience"
];


/* =====================================================
   4. ACTIVE USER DATA
===================================================== */

let activeUser = null;

let applications = [];
let interviews = [];
let savedJobs = [];
let resumeData = {};

let applicationsChart = null;
let statusChart = null;

let currentPage = "dashboard";
let workspaceReady = false;


/* =====================================================
   5. LOCAL DEMO WORKSPACE
===================================================== */

function getDefaultUserData() {

  return {
    applications: [
      {
        jobId: 1,
        title: "Frontend Developer",
        company: "BrightLabs",
        date: "2026-10-25",
        status: "Interview"
      },
      {
        jobId: 2,
        title: "UI/UX Designer",
        company: "Pixel Studio",
        date: "2026-10-27",
        status: "Under Review"
      },
      {
        jobId: 3,
        title: "Web Developer Intern",
        company: "Nexa Digital",
        date: "2026-10-29",
        status: "Applied"
      }
    ],

    interviews: [
      {
        id: 1,
        company: "BrightLabs",
        position: "Frontend Developer",
        date: "2026-11-25",
        time: "10:30",
        notes: "Prepare portfolio and review JavaScript fundamentals."
      },
      {
        id: 2,
        company: "Pixel Studio",
        position: "UI/UX Designer",
        date: "2026-11-28",
        time: "14:00",
        notes: "Prepare Figma portfolio and design projects."
      }
    ],

    savedJobs: [2, 6, 15],

    resume: {
      name: "Demo User",
      email: "demo@careerconnect.com",
      title: "Information Systems Student",
      summary: "Motivated student interested in technology, information systems and digital solutions.",
      skills: "HTML, CSS, JavaScript, Microsoft Office, Communication",
      education: "Bachelor of Information Science",
      experience: "Academic website development projects"
    }
  };
}


function loadDemoWorkspace() {

  let data = null;

  try {

    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
      data = JSON.parse(storedData);
    }

  } catch (error) {

    console.error("Unable to load saved data:", error);

  }

  if (!data || typeof data !== "object") {

    data = getDefaultUserData();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  }

  applications = Array.isArray(data.applications)
    ? data.applications
    : [];

  interviews = Array.isArray(data.interviews)
    ? data.interviews
    : [];

  savedJobs = Array.isArray(data.savedJobs)
    ? data.savedJobs
    : [];

  resumeData =
    data.resume && typeof data.resume === "object"
      ? data.resume
      : {};

  workspaceReady = true;
}


async function persist() {

  if (!activeUser || !workspaceReady) return;

  const data = {
    applications,
    interviews,
    savedJobs,
    resume: resumeData
  };

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );

  } catch (error) {

    console.error("Save error:", error);

    toast("Unable to save your changes.");
  }
}


/* =====================================================
   6. GENERAL HELPER FUNCTIONS
===================================================== */

function toast(message) {

  const messageElement =
    document.getElementById("toastMessage");

  const toastElement =
    document.getElementById("appToast");

  if (!messageElement || !toastElement || !window.bootstrap) {
    return;
  }

  messageElement.textContent = message;

  bootstrap.Toast.getOrCreateInstance(
    toastElement,
    { delay: 2600 }
  ).show();
}


function escapeHTML(value = "") {

  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[character]));
}


function formatDate(value) {

  if (!value) return "—";

  return new Date(value + "T12:00:00")
    .toLocaleDateString("en-MY", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
}


function shortDate(value) {

  const date = new Date(value + "T12:00:00");

  return {
    day: date.getDate(),

    month: date.toLocaleDateString("en-MY", {
      month: "short"
    })
  };
}


function statusClass(status) {

  return {
    "Applied": "status-applied",
    "Under Review": "status-review",
    "Interview": "status-interview",
    "Offered": "status-offered",
    "Rejected": "status-rejected"
  }[status] || "status-applied";
}


function statusBadge(status) {

  return `
    <span class="status-badge ${statusClass(status)}">
      ${escapeHTML(status)}
    </span>
  `;
}


/* =====================================================
   7. LOGIN AND REGISTRATION
===================================================== */

function showAuth(which) {

  document.getElementById("loginPage")
    .classList.toggle("d-none", which !== "login");

  document.getElementById("registerPage")
    .classList.toggle("d-none", which !== "register");

  document.getElementById("mainApplication")
    .classList.add("d-none");
}


/* REGISTRATION DISABLED */

document.getElementById("showRegister")
  .addEventListener("click", event => {

    event.preventDefault();

    document.getElementById("loginError").textContent =
      "Registration is disabled in demo mode. Please use the demo account.";

  });


document.getElementById("showLogin")
  .addEventListener("click", event => {

    event.preventDefault();

    document.getElementById("registerError").textContent = "";

    showAuth("login");

  });


/* SHOW / HIDE PASSWORD */

document.querySelectorAll("[data-toggle-password]")
  .forEach(button => {

    button.addEventListener("click", () => {

      const input = document.getElementById(
        button.dataset.togglePassword
      );

      input.type =
        input.type === "password"
          ? "text"
          : "password";

      button.innerHTML = `
        <i class="bi bi-eye${
          input.type === "password" ? "" : "-slash"
        }"></i>
      `;

    });

  });



/* LOGIN - ONE CLICK DEMO ACCESS */

document.getElementById("loginForm")
  .addEventListener("submit", event => {

    event.preventDefault();

    // Automatically use the demo account
    activeUser = {
      name: demoAccount.name,
      email: demoAccount.email
    };

    // Load the demo workspace
    loadDemoWorkspace();

    // Clear login fields
    document.getElementById("loginForm").reset();

    // Open CareerConnect
    showApplication();

    toast("Welcome to CareerConnect!");

  });



/* =====================================================
   8. OPEN MAIN APPLICATION
===================================================== */

function showApplication() {

  showAuth("none");

  document.getElementById("mainApplication")
    .classList.remove("d-none");

  const name = activeUser?.name || "User";

  document.getElementById("headerUserName").textContent =
    name;

  document.getElementById("welcomeName").textContent =
    name.split(" ")[0];

  document.getElementById("userAvatar").textContent =
    name.charAt(0).toUpperCase();

  document.getElementById("todayDate").textContent =
    new Date().toLocaleDateString("en-MY", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

  showPage("dashboard");
}


/* LOGOUT */

document.getElementById("logoutButton")
  .addEventListener("click", () => {

    activeUser = null;

    workspaceReady = false;

    applications = [];
    interviews = [];
    savedJobs = [];
    resumeData = {};

    document.getElementById("loginForm").reset();

    document.getElementById("loginError").textContent = "";

    showAuth("login");

    toast("You have logged out successfully.");

  });


/* =====================================================
   9. PAGE NAVIGATION
===================================================== */

function showPage(page) {

  if (!pages.includes(page)) return;

  currentPage = page;

  pages.forEach(current => {

    document.getElementById(current + "Page")
      .classList.toggle("d-none", current !== page);

  });

  document.querySelectorAll("#sidebar .nav-link")
    .forEach(link => {

      link.classList.toggle(
        "active",
        link.dataset.page === page
      );

    });

  document.getElementById("headerPageTitle").textContent =
    pageTitles[page];

  document.getElementById("sidebar")
    .classList.remove("show");

  refreshCurrentPage();
}


function refreshCurrentPage() {

  if (!workspaceReady) return;

  if (currentPage === "dashboard") updateDashboard();
  if (currentPage === "jobs") displayJobs();
  if (currentPage === "applications") displayApplications();
  if (currentPage === "saved") displaySavedJobs();
  if (currentPage === "resume") loadResume();
  if (currentPage === "interviews") displayInterviews();
}


document.querySelectorAll("#sidebar .nav-link")
  .forEach(link => {

    link.addEventListener("click", event => {

      event.preventDefault();

      showPage(link.dataset.page);

    });

  });


document.querySelectorAll("[data-go]")
  .forEach(button => {

    button.addEventListener("click", () => {

      showPage(button.dataset.go);

    });

  });


document.getElementById("menuToggle")
  .addEventListener("click", () => {

    document.getElementById("sidebar")
      .classList.toggle("show");

  });


/* =====================================================
   10. DASHBOARD
===================================================== */

function updateDashboard() {

  document.getElementById("totalApplications").textContent =
    applications.length;

  document.getElementById("totalInterviews").textContent =
    interviews.length;

  document.getElementById("totalJobs").textContent =
    jobs.length;

  document.getElementById("totalSaved").textContent =
    savedJobs.length;

  document.getElementById("jobNavCount").textContent =
    jobs.length;

  renderCharts();
  renderRecent();
  renderDashboardInterviews();
}


function renderCharts() {

  if (!window.Chart) return;

  const monthly = Array(12).fill(0);

  applications.forEach(application => {

    const date = new Date(application.date + "T12:00:00");

    if (!Number.isNaN(date.getTime())) {
      monthly[date.getMonth()]++;
    }

  });


  const applicationsCanvas =
    document.getElementById("applicationsChart");

  if (applicationsChart) {
    applicationsChart.destroy();
  }

  applicationsChart = new Chart(
    applicationsCanvas,
    {
      type: "line",

      data: {
        labels: [
          "Jan", "Feb", "Mar", "Apr",
          "May", "Jun", "Jul", "Aug",
          "Sep", "Oct", "Nov", "Dec"
        ],

        datasets: [{
          data: monthly,
          borderColor: "#7C0E44",
          backgroundColor: "rgba(124,14,68,.09)",
          fill: true,
          tension: .4,
          borderWidth: 2.5,
          pointRadius: 3,
          pointBackgroundColor: "#7C0E44"
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: { display: false }
        },

        scales: {
          x: {
            grid: { display: false },
            ticks: {
              color: "#A48D98",
              font: { size: 10 }
            }
          },

          y: {
            beginAtZero: true,
            ticks: {
              precision: 0,
              color: "#A48D98",
              font: { size: 10 }
            },
            grid: { color: "#F3EAEF" }
          }
        }
      }
    }
  );


  const counts = statuses.map(status =>
    applications.filter(application =>
      application.status === status
    ).length
  );


  const statusCanvas =
    document.getElementById("statusChart");

  if (statusChart) {
    statusChart.destroy();
  }

  statusChart = new Chart(
    statusCanvas,
    {
      type: "doughnut",

      data: {
        labels: statuses,

        datasets: [{
          data: counts,

          backgroundColor: [
            "#8D75B6",
            "#D69A4B",
            "#43866C",
            "#AA5E7A",
            "#D66D7B"
          ],

          borderWidth: 3,
          borderColor: "#fff"
        }]
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "69%",

        plugins: {
          legend: {
            position: "bottom",
            labels: {
              usePointStyle: true,
              boxWidth: 7,
              padding: 14,
              font: { size: 10 }
            }
          }
        }
      }
    }
  );

}


function renderRecent() {

  const body =
    document.getElementById("recentApplications");

  const recent = [...applications]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  body.innerHTML = recent.length

    ? recent.map(application => `
        <tr>
          <td class="fw-semibold">
            ${escapeHTML(application.title)}
          </td>
          <td>${escapeHTML(application.company)}</td>
          <td>${formatDate(application.date)}</td>
          <td>${statusBadge(application.status)}</td>
        </tr>
      `).join("")

    : `
        <tr>
          <td colspan="4">
            <div class="empty-state">
              <strong>No applications yet</strong>
              <p>Explore jobs to get started.</p>
            </div>
          </td>
        </tr>
      `;
}


function renderDashboardInterviews() {

  const element =
    document.getElementById("dashboardInterviews");

  const today = new Date().toLocaleDateString("en-CA");

  const upcoming = [...interviews]
    .filter(interview => interview.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  element.innerHTML = upcoming.length

    ? upcoming.map(interview => {

        const date = shortDate(interview.date);

        return `
          <div class="compact-item">
            <div class="compact-date">
              <strong>${date.day}</strong>
              <small>${date.month}</small>
            </div>

            <div>
              <strong>${escapeHTML(interview.position)}</strong>
              <small>
                ${escapeHTML(interview.company)} ·
                ${escapeHTML(interview.time)}
              </small>
            </div>
          </div>
        `;

      }).join("")

    : `
        <div class="empty-state">
          <i class="bi bi-calendar2-plus"></i>
          <strong>No upcoming interviews</strong>
          <p>Your scheduled interviews will appear here.</p>
        </div>
      `;
}


/* =====================================================
   11. FIND JOBS
===================================================== */

function filteredJobs() {

  const keyword = document
    .getElementById("jobSearch")
    .value.trim()
    .toLowerCase();

  const department =
    document.getElementById("departmentFilter").value;

  const location =
    document.getElementById("locationFilter").value;

  const type =
    document.getElementById("typeFilter").value;

  return jobs.filter(job => {

    const searchableText = [
      job.title,
      job.department,
      job.company,
      job.location,
      job.description,
      ...job.skills
    ].join(" ").toLowerCase();

    return (
      (!keyword || searchableText.includes(keyword)) &&
      (!department || job.department === department) &&
      (!location || job.location === location) &&
      (!type || job.type === type)
    );

  });

}


function jobCard(job) {

  const applied = applications.some(
    application => application.jobId === job.id
  );

  const saved = savedJobs.includes(job.id);

  return `
    <div class="col-md-6 col-xl-4">
      <article class="job-card">

        <div class="job-card-top">
          <div class="company-avatar">
            ${escapeHTML(job.company.charAt(0))}
          </div>

          <div class="d-flex align-items-start gap-2">
            <span class="match-pill">${job.match}% match</span>

            <button
              class="save-job ${saved ? "saved" : ""}"
              onclick="toggleSaved(${job.id})"
              title="${saved ? "Remove saved job" : "Save job"}"
            >
              <i class="bi bi-bookmark${saved ? "-fill" : ""}"></i>
            </button>
          </div>
        </div>

        <h5>${escapeHTML(job.title)}</h5>

        <p class="company-name">
          ${escapeHTML(job.company)}
        </p>

        <span class="department-pill">
          ${escapeHTML(job.department)}
        </span>

        <p class="job-description">
          ${escapeHTML(job.description)}
        </p>

        <div class="job-meta">
          <span>
            <i class="bi bi-geo-alt"></i>
            ${escapeHTML(job.location)}
          </span>

          <span>
            <i class="bi bi-clock"></i>
            ${escapeHTML(job.type)}
          </span>
        </div>

        <div class="job-tags">
          ${job.skills.map(skill => `
            <span class="job-tag">${escapeHTML(skill)}</span>
          `).join("")}
        </div>

        <div class="job-card-bottom">
          <span class="job-salary">
            ${escapeHTML(job.salary)}
          </span>

          <button
            class="btn btn-primary"
            onclick="applyJob(${job.id})"
            ${applied ? "disabled" : ""}
          >
            ${applied ? "Applied" : "Apply now"}
          </button>
        </div>

      </article>
    </div>
  `;
}


function displayJobs() {

  const list = filteredJobs();

  document.getElementById("jobResultCount").textContent =
    `${list.length} opportunit${list.length === 1 ? "y" : "ies"}`;

  document.getElementById("jobListings").innerHTML =
    list.length

      ? list.map(jobCard).join("")

      : `
        <div class="col-12">
          <div class="panel-card empty-state">
            <i class="bi bi-search"></i>
            <strong>No matching jobs found</strong>
            <p>Try changing your keywords or filters.</p>
          </div>
        </div>
      `;
}


["jobSearch", "departmentFilter", "locationFilter", "typeFilter"]
  .forEach(id => {

    document.getElementById(id)
      .addEventListener("input", displayJobs);

  });


document.getElementById("clearFilters")
  .addEventListener("click", () => {

    document.getElementById("jobSearch").value = "";
    document.getElementById("departmentFilter").value = "";
    document.getElementById("locationFilter").value = "";
    document.getElementById("typeFilter").value = "";

    displayJobs();

  });


async function applyJob(id) {

  const job = jobs.find(item => item.id === id);

  if (
    !job ||
    applications.some(application => application.jobId === id)
  ) {
    return;
  }

  applications.push({
    jobId: id,
    title: job.title,
    company: job.company,
    date: new Date().toLocaleDateString("en-CA"),
    status: "Applied"
  });

  await persist();

  displayJobs();
  updateDashboard();

  toast("Application submitted successfully!");
}


/* =====================================================
   12. SAVED JOBS
===================================================== */

async function toggleSaved(id) {

  savedJobs = savedJobs.includes(id)
    ? savedJobs.filter(jobId => jobId !== id)
    : [...savedJobs, id];

  await persist();

  displayJobs();
  displaySavedJobs();
  updateDashboard();

  toast(
    savedJobs.includes(id)
      ? "Job added to saved list."
      : "Job removed from saved list."
  );
}


function displaySavedJobs() {

  const list = jobs.filter(job =>
    savedJobs.includes(job.id)
  );

  document.getElementById("savedListings").innerHTML =
    list.length

      ? list.map(jobCard).join("")

      : `
        <div class="col-12">
          <div class="panel-card empty-state">
            <i class="bi bi-bookmark-heart"></i>
            <strong>No saved jobs yet</strong>
            <p>
              Use the bookmark icon on a job card
              to save opportunities.
            </p>

            <button
              class="btn btn-primary btn-sm mt-3"
              onclick="showPage('jobs')"
            >
              Browse jobs
            </button>
          </div>
        </div>
      `;
}


/* =====================================================
   13. APPLICATION TRACKER
===================================================== */

document.getElementById("applicationFilter")
  .addEventListener("change", displayApplications);


function displayApplications() {

  const filter =
    document.getElementById("applicationFilter").value;

  const rows = applications.filter(application =>
    !filter || application.status === filter
  );

  document.getElementById("applicationTable").innerHTML =
    rows.length

      ? rows.map(application => `
          <tr>
            <td class="fw-semibold">
              ${escapeHTML(application.title)}
            </td>

            <td>${escapeHTML(application.company)}</td>

            <td>${formatDate(application.date)}</td>

            <td>
              <select
                class="form-select status-select"
                aria-label="Update application status"
                onchange="changeApplicationStatus(
                  ${application.jobId},
                  this.value
                )"
              >
                ${statuses.map(status => `
                  <option ${
                    application.status === status
                      ? "selected"
                      : ""
                  }>
                    ${status}
                  </option>
                `).join("")}
              </select>
            </td>

            <td>
              <button
                class="table-action"
                title="Delete application"
                onclick="deleteApplication(${application.jobId})"
              >
                <i class="bi bi-trash3"></i>
              </button>
            </td>
          </tr>
        `).join("")

      : `
        <tr>
          <td colspan="5">
            <div class="empty-state">
              <strong>No applications found</strong>
              <p>Applications matching this filter will appear here.</p>
            </div>
          </td>
        </tr>
      `;
}


async function changeApplicationStatus(id, status) {

  const application = applications.find(
    item => item.jobId === id
  );

  if (!application || !statuses.includes(status)) return;

  application.status = status;

  await persist();

  displayApplications();
  updateDashboard();

  toast("Application status updated.");
}


async function deleteApplication(id) {

  if (!confirm("Remove this application from your tracker?")) {
    return;
  }

  applications = applications.filter(
    application => application.jobId !== id
  );

  await persist();

  displayApplications();
  displayJobs();
  updateDashboard();

  toast("Application removed.");
}


/* =====================================================
   14. RESUME BUILDER
===================================================== */

function readResumeForm() {

  return Object.fromEntries(
    resumeFields.map(field => [
      field.toLowerCase(),
      document.getElementById("resume" + field).value.trim()
    ])
  );
}


function updateResumePreview() {

  const resume = readResumeForm();

  document.getElementById("previewName").textContent =
    resume.name || "Your Name";

  document.getElementById("previewTitle").textContent =
    resume.title || "Professional Title";

  document.getElementById("previewEmail").textContent =
    resume.email || "your.email@example.com";

  document.getElementById("previewSummary").textContent =
    resume.summary || "Your professional summary will appear here.";

  document.getElementById("previewSkills").textContent =
    resume.skills || "Your skills will appear here.";

  document.getElementById("previewEducation").textContent =
    resume.education || "Your education details will appear here.";

  document.getElementById("previewExperience").textContent =
    resume.experience || "Your experience and projects will appear here.";
}


function loadResume() {

  resumeFields.forEach(field => {

    const input = document.getElementById("resume" + field);

    input.value = resumeData[field.toLowerCase()] || "";

  });

  updateResumePreview();
}


resumeFields.forEach(field => {

  document.getElementById("resume" + field)
    .addEventListener("input", updateResumePreview);

});


document.getElementById("resumeForm")
  .addEventListener("submit", async event => {

    event.preventDefault();

    resumeData = readResumeForm();

    await persist();

    updateResumePreview();

    toast("Resume details saved to your account.");

  });


document.getElementById("printResume")
  .addEventListener("click", () => {

    updateResumePreview();

    window.print();

  });


/* =====================================================
   15. INTERVIEW PLANNER
===================================================== */

document.getElementById("interviewDate").min =
  new Date().toLocaleDateString("en-CA");


document.getElementById("interviewForm")
  .addEventListener("submit", async event => {

    event.preventDefault();

    interviews.push({

      id: Date.now(),

      company: document
        .getElementById("interviewCompany")
        .value.trim(),

      position: document
        .getElementById("interviewPosition")
        .value.trim(),

      date: document.getElementById("interviewDate").value,

      time: document.getElementById("interviewTime").value,

      notes: document
        .getElementById("interviewNotes")
        .value.trim()

    });

    await persist();

    event.target.reset();

    document.getElementById("interviewDate").min =
      new Date().toLocaleDateString("en-CA");

    displayInterviews();
    updateDashboard();

    toast("Interview added to your planner.");

  });


function displayInterviews() {

  const sorted = [...interviews].sort(
    (a, b) =>
      a.date.localeCompare(b.date) ||
      a.time.localeCompare(b.time)
  );

  document.getElementById("interviewCount").textContent =
    `${interviews.length} SCHEDULED`;

  document.getElementById("interviewList").innerHTML =
    sorted.length

      ? sorted.map(interview => {

          const date = shortDate(interview.date);

          return `
            <article class="interview-card">

              <div class="interview-date">
                <strong>${date.day}</strong>
                <small>${date.month}</small>
              </div>

              <div class="interview-info">

                <strong>
                  ${escapeHTML(interview.position)}
                </strong>

                <div class="company-name">
                  ${escapeHTML(interview.company)} ·
                  ${escapeHTML(interview.time)}
                </div>

                ${
                  interview.notes
                    ? `<p>${escapeHTML(interview.notes)}</p>`
                    : ""
                }

              </div>

              <div class="interview-actions">
                <button
                  class="table-action"
                  title="Remove interview"
                  onclick="deleteInterview(${interview.id})"
                >
                  <i class="bi bi-trash3"></i>
                </button>
              </div>

            </article>
          `;

        }).join("")

      : `
        <div class="empty-state">
          <i class="bi bi-calendar2-plus"></i>
          <strong>No interviews scheduled</strong>
          <p>
            Add an interview using the form
            to keep your schedule organised.
          </p>
        </div>
      `;
}


async function deleteInterview(id) {

  if (!confirm("Remove this interview?")) {
    return;
  }

  interviews = interviews.filter(
    interview => interview.id !== id
  );

  await persist();

  displayInterviews();
  updateDashboard();

  toast("Interview removed.");
}


/* =====================================================
   16. INLINE HTML FUNCTION ACCESS
===================================================== */

// These functions are called by onclick/onchange
// attributes inside dynamically generated HTML.

window.showPage = showPage;
window.toggleSaved = toggleSaved;
window.applyJob = applyJob;
window.changeApplicationStatus = changeApplicationStatus;
window.deleteApplication = deleteApplication;
window.deleteInterview = deleteInterview;


/* =====================================================
   17. INITIAL SETUP
===================================================== */

// Start at the login screen.

showAuth("login");

console.log("CareerConnect demo version loaded successfully.");
console.log("Demo email:", demoAccount.email);
