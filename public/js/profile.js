// // Get the form element
// const form = document.querySelector('form');

// // Add event listener to the form submit event
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   // Get the values from the form inputs
//   const type = document.querySelector('#type').value;
//   const name = document.querySelector('#name').value;

//   try {
//     // Send a POST request to save the armor
//     const response = await fetch('/savearmor', {
//       method: 'POST',
//       body: JSON.stringify({ type, name }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       // Redirect to the profile page after successfully saving the armor
//       window.location.href = '/profile';
//     } else {
//       // Handle the error if the request was not successful
//       throw new Error('Failed to save armor.');
//     }
//   } catch (err) {
//     console.error(err);
//     // Display an error message to the user
//     alert('An error occurred while saving the armor.');
//   }
// });
