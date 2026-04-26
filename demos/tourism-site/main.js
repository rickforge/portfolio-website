/* ====================================================================
   NAVBAR BURGER JS - https://bulma.io/documentation/components/navbar/
   ==================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0,
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

/* ====================================================================
          MODAL - https://bulma.io/documentation/components/modal/
   ==================================================================== */

  document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add("is-active");
    }

    function closeModal($el) {
      $el.classList.remove("is-active");
    }

    function closeAllModals() {
      (document.querySelectorAll(".modal") || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
      ($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener("click", () => {
          openModal($target);
        });
      },
    );

    // Add a click event on various child elements to close the parent modal
    (
      document.querySelectorAll(
        ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button",
      ) || []
    ).forEach(($close) => {
      const $target = $close.closest(".modal");

      $close.addEventListener("click", () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeAllModals();
      }
    });
  }); 




/* ====================================================================
                         TEMA LJUS/MÖRK
   ==================================================================== */

const html = document.documentElement;
const toggle = document.getElementById("theme-toggle");

// Kollar om det finns ett sparat tema i localstorage
let theme = localStorage.getItem("theme");

// Om inget tema finns sparat kollas användarens systeminställningar
if (!theme) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  } else {
    theme = "light";
  }
}

// Ändrar temat i "html" 
html.setAttribute("data-theme", theme);

// Ändrar tema knappens text beroende på vilket tema som är aktivt
if (theme === "dark") {
  toggle.textContent = "Light theme ☀️";
} else {
  toggle.textContent = "Dark theme 🌙";
}

// Vid klick på tema knappen ändras temat i "html", localstorage och knapptexten
toggle.onclick = () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggle.textContent = "Dark theme 🌙";
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggle.textContent = "Light theme ☀️";
  }
};