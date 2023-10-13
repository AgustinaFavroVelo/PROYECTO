//get all the menu items
const menuItems = document.querySelectorAll("#navbar-link", "#navbar-brand");

// Add a click event listener to each menu item
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    menuItems.forEach((item) => {
      item.classList.remove();
    });
   //le agrego la clase selected
    menuItem.classList.add('selected');
  });
});
