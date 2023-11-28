//стр для новенькихкнопка читать статью

function myFunctionReadArticleNewPeople1() {
  var dotsReadArticleNewPeople1 = document.getElementById(
    "dots-read-article-NewPeople1"
  );
  var moreReadArticleNewPeople1 = document.getElementById(
    "read-more-article-NewPeople1"
  );
  var btnReadArticleNewPeople1 = document.getElementById(
    "myBtnReadArticle-NewPeople1"
  );

  if (dotsReadArticleNewPeople1.style.display === "none") {
    dotsReadArticleNewPeople1.style.display = "inline";
    btnReadArticleNewPeople1.innerHTML = "Читать";
    moreReadArticleNewPeople1.style.display = "none";
  } else {
    dotsReadArticleNewPeople1.style.display = "none";
    btnReadArticleNewPeople1.innerHTML = "Свернуть";
    moreReadArticleNewPeople1.style.display = "inline";
  }
}
