document.addEventListener("DOMContentLoaded", function () {
  var consentContainer = document.getElementById("cookieConsentContainer");
  var acceptBtn = document.getElementById("acceptCookieConsent");
  var declineBtn = document.getElementById("declineCookieConsent");
  var settingsBtn = document.getElementById("settingsCookieConsent");

  function showConsentContainer() {
    if (!getCookie("cookieConsent")) {
      consentContainer.style.display = "block";
    }
  }

  acceptBtn.onclick = function () {
    setCookie("cookieConsent", "accept", 365);
    consentContainer.style.display = "none";
  };

  declineBtn.onclick = function () {
    setCookie("cookieConsent", "decline", 365);
    consentContainer.style.display = "none";
  };

  settingsBtn.onclick = function () {
    window.location.href = "..//pages/cookie-settings.html"; // Ссылка на вашу страницу настроек cookies
  };

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  showConsentContainer();
});
