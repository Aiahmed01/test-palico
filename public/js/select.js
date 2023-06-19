// Function to filter and display armors by type
function filterAndDisplayArmors(selectedType) {
  const armorRows = document.querySelectorAll('.armor-row');
  armorRows.forEach(row => {
    const armorType = row.dataset.type;

    if (selectedType === 'all' || armorType === selectedType) {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  });
}

// Function to handle the filter event
function filterArmorByType(event) {
  const selectedType = event.target.dataset.type;

  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll('.armor-type-button');
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Add 'active' class to the clicked button
  event.target.classList.add('active');

  // Filter and display armors by the selected type
  filterAndDisplayArmors(selectedType);
}

// Add event listener to armor type buttons
const armorTypeButtons = document.querySelectorAll('.armor-type-button');
armorTypeButtons.forEach(button => {
  button.addEventListener('click', filterArmorByType);
});
