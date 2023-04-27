document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggleBtnIcon = document.querySelector(".toggle-btn i");
  const dropDownMenu = document.querySelector(".dropdown-menu");

  toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
  };

  const dropdownItems = document.querySelectorAll(".dropdown-menu ul li");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove the "active" class from the currently active link, if there is one
      const activeItem = document.querySelector(".dropdown-menu ul li.active");
      if (activeItem) {
        activeItem.classList.remove("active");
      }
      // Add the "active" class to the clicked <a> element
      item.classList.add("active");
    });
  });
});
