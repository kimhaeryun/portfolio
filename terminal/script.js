
var aText = new Array(
    "<span class='terminal__text__span'>안녕하세요. 김민준입니다.</span>",
    "<span class='terminal__text__span'>제 꿈은 프론트엔드 개발자가 되는 것입니다.</span>",
    "<span class='terminal__text__span'>그래서 열심히 공부 하고 있어요.</span>",
    "<span class='terminal__text__span'>노력한 덕분에 이런 멋진 사이트를 만들어봤습니다</span>",
    "<span class='terminal__text__span'># # # # # # # # # #</span>",
    "<span class='terminal__text__span'>제가 만든 포트폴리오 모음 사이트 입니다. <a href='http://smap.or.kr/kimhaeryun/1.site/'>포트폴리오</a>",
    "<span class='terminal__text__span'>그리고 저는 소고기를 무척 좋아해요!!</span>",
    "<span class='terminal__text__span'>취미는 요리이고 만든 음식을 SNS에 자주 업로드 합니다. <a href='https://www.instagram.com/min.jun_k96/' target='_blank'>인스타그램</a></span>"
);
var iSpeed = 10;
var iIndex = 0;
var iArrLength = aText[0].length;
var iScrollAt = 20;

var iTextPos = 0;
var sContents = '';
var iRow;

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 100);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}
$(function () {
    $(".wrapper").draggable();
});