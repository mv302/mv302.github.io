// // JavaScript code for charting (simplified example)
// const ctx = document.getElementById('stock-chart').getContext('2d');
// const chart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Time1', 'Time2', 'Time3', 'Time4'], // Replace with real data
//         datasets: [{
//             label: 'Stock Price',
//             data: [100, 105, 110, 115], // Replace with real data
//             borderColor: 'blue',
//             fill: false
//         }]
//     },
//     options: {
//         scales: {
//             x: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Time'
//                 }
//             },
//             y: {
//                 display: true,
//                 title: {
//                     display: true,
//                     text: 'Price'
//                 }
//             }
//         }
//     }
// });


const automationToggle = document.querySelector('#automation-toggle');
const automationConsent = document.querySelector('#automation-consent');

automationToggle.addEventListener('change', function() {
  if (!automationConsent.checked) {
    automationToggle.checked = false;
    alert('You must agree to the terms of the automation before you can turn it on.');
  }
});
