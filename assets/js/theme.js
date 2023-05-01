document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleBtnIcon = document.querySelector(".toggle-btn i");

  const dropDownMenu = document.querySelector(".dropdown-menu");

  const toggleBtnTablet = document.querySelector(".toggle-btn-tablet");
  const toggleBtnIconTablet = document.querySelector(".toggle-btn-tablet i");

  function toggleMenuIcon() {
    if (window.innerWidth > 320 && window.innerWidth <= 1160) {
      if (dropDownMenu.classList.contains("open")) {
        toggleBtnIconTablet.classList.replace("fa-bars", "fa-xmark");
      } else {
        toggleBtnIconTablet.classList.replace("fa-xmark", "fa-bars");
      }
      toggleBtnTablet.style.display = "block";
      toggleBtn.style.display = "none";
    } else if (window.innerWidth < 320) {
      toggleBtnIcon.classList.replace("fa-bars", "fa-xmark");
      toggleBtn.style.display = "block";
      toggleBtnTablet.style.display = "none";
    }
  }

  toggleMenuIcon();

  window.addEventListener("resize", toggleMenuIcon);

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    toggleMenuIcon();
  };

  toggleBtnTablet.onclick = function () {
    dropDownMenu.classList.toggle("open");
    toggleMenuIcon();
  };

  const dropdownItems = document.querySelectorAll(".dropdown-menu ul li");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const activeItem = document.querySelector(".dropdown-menu ul li.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }

      item.classList.add("active");
    });
  });
});
