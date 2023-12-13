function myFunctionReadArticleDonate() {
  var dotsReadArticleDonate = document.getElementById(
    "dots-read-article-donate"
  );
  var moreReadArticleDonate = document.getElementById(
    "read-more-article-donate"
  );
  var btnReadArticleDonate = document.getElementById("myBtnReadArticleDonate");

  if (dotsReadArticleDonate.style.display === "none") {
    dotsReadArticleDonate.style.display = "inline";
    btnReadArticleDonate.innerHTML = "Читать";
    moreReadArticleDonate.style.display = "none";
  } else {
    dotsReadArticleDonate.style.display = "none";
    btnReadArticleDonate.innerHTML = "Свернуть";
    moreReadArticleDonate.style.display = "inline";
  }
}
