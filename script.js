const sidebar = document.getElementById("sidebar");
const hamburgerBtn = document.getElementById("hamburger-btn");
const closeSidebarBtn = document.getElementById("close-sidebar");
const themeBtn = document.getElementById("theme-btn");
const sidebarThemeBtn = document.getElementById("sidebar-theme-btn");
const body = document.body;

document.addEventListener("DOMContentLoaded", () => {
  // Toggle sidebar
  hamburgerBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    hamburgerBtn.classList.add("hidden");
  });
  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    hamburgerBtn.classList.remove("hidden");
  });

  // Toggle dark mode
  // const toggleDarkMode = () => {
  //     body.classList.toggle("dark");
  // };

  // themeBtn.addEventListener("click", toggleDarkMode);
  // sidebarThemeBtn.addEventListener("click", toggleDarkMode);

  // Check and apply the saved theme on page load
  const applySavedTheme = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      document.body.classList.add("dark");
    }
  };

  // Toggle dark mode and save the preference
  const toggleDarkMode = () => {
    const isDarkMode = document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", isDarkMode);
  };

  // Apply the saved theme on load
  applySavedTheme();

  // Add event listeners for buttons
  themeBtn.addEventListener("click", toggleDarkMode);
  sidebarThemeBtn.addEventListener("click", toggleDarkMode);
});

function copyEmail() {
  const email = document.getElementById("email").textContent; // Get the email text
  navigator.clipboard
    .writeText(email) // Copy email to clipboard
    .then(() => {
      alert("Email copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy email:", err);
    });
}

function copyPhone() {
  const phone = document.getElementById("phone").textContent;
  navigator.clipboard
    .writeText(phone)
    .then(() => {
      alert("Phone number copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy Phone number:", err);
    });
}

document.getElementById("about-btn").addEventListener("click", function () {
  const aboutSection = document.getElementById("about-section");
  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("skill-btn").addEventListener("click", function () {
  const skillSection = document.getElementById("skill-section");
  skillSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("work-btn").addEventListener("click", function () {
  const workSection = document.getElementById("work-section");
  workSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

document
  .getElementById("testimonial-btn")
  .addEventListener("click", function () {
    const testimonialSection = document.getElementById("testimonial-section");
    testimonialSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

document.getElementById("contact-btn").addEventListener("click", function () {
  const contactSection = document.getElementById("contact-section");
  contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
});


