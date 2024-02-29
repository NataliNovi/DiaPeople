function myFunctionReadArticleGadgSet1() {
  var dotsReadArticleGadgSet1 = document.getElementById(
    "dots-read-article-GadgSet1"
  );
  var moreReadArticleGadgSet1 = document.getElementById(
    "read-more-article-GadgSet1"
  );
  var btnReadArticleGadgSet1 = document.getElementById(
    "myBtnReadArticleGadgSet1"
  );

  if (dotsReadArticleGadgSet1.style.display === "none") {
    dotsReadArticleGadgSet1.style.display = "inline";
    btnReadArticleGadgSet1.innerHTML = "Читать";
    moreReadArticleGadgSet1.style.display = "none";
  } else {
    dotsReadArticleGadgSet1.style.display = "none";
    btnReadArticleGadgSet1.innerHTML = "Свернуть";
    moreReadArticleGadgSet1.style.display = "inline";
  }
}
