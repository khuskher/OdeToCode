// // const panicButton = document.getElementById("panicButton");

// // panicButton.addEventListener("click", function panic() 

// function panic()
// {




//   // Get user's geolocation
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       const lat = position.coords.latitude;
//       const lon = position.coords.longitude;

//       const mess = `EMERGENCY: Please send help to my location! My coordinates are: (${lat}, ${lon}).`;
//       // return mess;
    
//       function sendEmail() {
//         console.log("here");
//         Email.send({
//           SecureToken: "46d32ef0-17b3-433b-8fd7-2cd1db6018d2",
//           To: "aditi.sadadiwala@gmail.com",
//           From: "aditi.sadadiwala@gmail.com",
//           Subject: "new incident reported",
//           Body: mess
//         }).then(
//           message => alert(message)
//         );
//       }

//       sendEmail();
      
//     });
//   } else {
//     console.log('Geolocation is not supported by this browser.');
//   }
// }
