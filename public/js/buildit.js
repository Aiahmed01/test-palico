// Get DOM elements
const armorTypeSelect = document.getElementById('armorType');
const armorSetSelect = document.getElementById('armorSet');
const saveButton = document.getElementById('saveButton');
const selectedArmorList = document.getElementById('selectedArmorList');

// Event listener for armor type selection
armorTypeSelect.addEventListener('change', () => {
  const selectedType = armorTypeSelect.value;
  if (selectedType) {
    armorSetSelect.disabled = false;
    armorSetSelect.innerHTML = '<option value="">Please select armor set</option>';
    fetchArmorSets(selectedType);
  } else {
    armorSetSelect.disabled = true;
    armorSetSelect.innerHTML = '<option value="">Please select armor type first</option>';
  }
});

// Event listener for save button
saveButton.addEventListener('click', () => {
  const selectedSetId = armorSetSelect.value;
  if (selectedSetId) {
    const selectedSet = armorSetSelect.options[armorSetSelect.selectedIndex].text;
    saveArmorSet(selectedSetId, selectedSet);
    clearSelection();
  }
});

// Fetch armor sets based on selected type
function fetchArmorSets(type) {
  // Replace the URL with your actual endpoint
  fetch(`/api/armor/${type}`)
    .then((response) => response.json())
    .then((data) => {
      const armorSets = data.armorSets;
      if (armorSets && armorSets.length > 0) {
        armorSets.forEach((set) => {
          const option = document.createElement('option');
          option.value = set.id;
          option.textContent = set.name;
          armorSetSelect.appendChild(option);
        });
      }
    })
    .catch((error) => {
      console.error('Error fetching armor sets:', error);
    });
}

// Save selected armor set
function saveArmorSet(armorSetId, armorSetName) {
  // Replace the URL with your actual endpoint
  fetch('/api/armor/savearmor', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ armorSetId }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Armor set saved:', data);
      displaySelectedArmor(armorSetName);
    })
    .catch((error) => {
      console.error('Error saving armor set:', error);
    });
}

// Display selected armor set
function displaySelectedArmor(armorSet) {
  const listItem = document.createElement('li');
  listItem.textContent = armorSet;
  selectedArmorList.appendChild(listItem);
}

// Clear selection after saving
function clearSelection() {
  armorTypeSelect.value = '';
  armorSetSelect.value = '';
  armorSetSelect.disabled = true;
}
