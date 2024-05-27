window.onload = function () {
  if (!getCookie("cookieConsent")) {
    document.getElementById("cookieConsent").style.display = "block";
  }
};

document.getElementById("acceptCookies").onclick = function () {
  setCookie("cookieConsent", "accepted", 365);
  document.getElementById("cookieConsent").style.display = "none";
};

document.getElementById("rejectCookies").onclick = function () {
  setCookie("cookieConsent", "rejected", 365);
  document.getElementById("cookieConsent").style.display = "none";
};

document.getElementById("cookieSettings").onclick = function () {
  window.location.href = "..//pages/cookie-settings.html"; // Ссылка на страницу настроек
};

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
