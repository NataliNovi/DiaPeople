function myFunctionReadArticleFruits1() {
  var dotsReadArticleFruits1 = document.getElementById(
    "dots-read-article-fruits1"
  );
  var moreReadArticleFruits1 = document.getElementById(
    "read-more-article-fruits1"
  );
  var btnReadArticleFruits1 = document.getElementById(
    "myBtnReadArticleFruits1"
  );

  if (dotsReadArticleFruits1.style.display === "none") {
    dotsReadArticleFruits1.style.display = "inline";
    btnReadArticleFruits1.innerHTML = "Читать";
    moreReadArticleFruits1.style.display = "none";
  } else {
    dotsReadArticleFruits1.style.display = "none";
    btnReadArticleFruits1.innerHTML = "Свернуть";
    moreReadArticleFruits1.style.display = "inline";
  }
}
