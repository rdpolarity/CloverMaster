function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $(".sign-out").css("display", "block");
}

function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  alert("WOW");
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());

  $(".modal").modal.close();

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    console.log("User signed out.");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  $(".preloader-background")
    .delay(1700)
    .fadeOut("slow");
  $(".preloader-wrapper")
    .delay(1700)
    .fadeOut();
});
