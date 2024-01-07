function myFunctionReadArticleCeliakia1() {
  var dotsReadArticleCeliakia1 = document.getElementById(
    "dots-read-articleCeliakia1"
  );
  var moreReadArticleCeliakia1 = document.getElementById(
    "read-more-articleCeliakia1"
  );
  var btnReadArticleCeliakia1 = document.getElementById(
    "myBtnReadArticleCeliakia1"
  );

  if (dotsReadArticleCeliakia1.style.display === "none") {
    dotsReadArticleCeliakia1.style.display = "inline";
    btnReadArticleCeliakia1.innerHTML = "Читать";
    moreReadArticleCeliakia1.style.display = "none";
  } else {
    dotsReadArticleCeliakia1.style.display = "none";
    btnReadArticleCeliakia1.innerHTML = "Свернуть";
    moreReadArticleCeliakia1.style.display = "inline";
  }
}
