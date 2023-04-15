 
// Checks for the mobile view. Just to demonstrate the usage of ui_mode
function isMobile() {
  return window.parent.innerWidth <= 840;
}

// function that receives the credentials and sends an event to the parent container with credentials
function handleCredentialResponse({credential}) {
  console.log("Encoded JWT ID token in IFRAME: " + credential);
  window.parent.postMessage({ type: 'handleGoogleYoloCb', credential, isGoogleYoloMessage: true }, '*');	
  google.accounts.id.intermediate.notifyParentDone();
}


window.onGoogleLibraryLoad = function () {
  // Initializing the Google One Tap 2.0
  google.accounts.id.initialize({
    // Replace it with your Google Client Id
    client_id:
      "837888262468-7jrglbtjdgmdvdihj1qsdtc3b3rtfjvm.apps.googleusercontent.com",
    // Function to be called with credentials after the one of the listed accounts have been selected by the user
    callback: handleCredentialResponse,
    // cookie domain that is used for the Google One Tap
    ux_mode: "popup",
    // Context for the UI Message of the Google One Tap
    context: "use",
    allowed_parent_origin: [
      "https://dinavinter-literate-yodel-p75vgpg5755h76g6-8080.preview.app.github.dev",
      "https://gigya.login.dynidp.com",
      "https://cdpn.io",
      "https://*.gigya.com",
      "https://*.github.io",
      "https://*.dynidp.com",
    ],
    // Rednder mode for the UI style of the Google One Tap (NOT MENTIONED IN THE OFFICIAL DOCS)
    ui_mode: isMobile() ? "bottom_sheet" : "card",
  });

  // You can skip the next instruction if you don't want to show the "Sign-in" button
  google.accounts.id.renderButton(
    document.getElementById("g_login_container"), // Ensure the element exist and it is a div to display correcctly
    { theme: "outline", size: "large" } // Customization attributes
  );

  google.accounts.id.prompt(); // Display the One Tap dialog
};






