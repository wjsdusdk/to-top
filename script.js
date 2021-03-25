var btt = document.getElementById("back-to-top"),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

// 1. 문서 높이 계산하기

// docHeight = docElem.scrollHeight; // 문서 높이 (길이)
// docHeight = docElem.offsetHeight; // 문서 높이 (길이)
docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight); // 브라우저마다 길이가 다르게 나오면 긴거 사용
console.log(docHeight);

if (docHeight != "undefined") {
    offset = docHeight / 4;
} // docHeight != '' or docHeight == 0 라고 해도됨

// 2. 스크롤 이벤트 추가

window.addEventListener("scroll", function () {
    scrollPos = docElem.scrollTop; // 스크롤했을 때 문서 높이 (위치)
    console.log(scrollPos);

    btt.className = scrollPos > offset ? "visible" : ""; // 조건이 참이면 btt에 .visible을 만들고 거짓이면 빈값
});

// 3. 클릭 이벤트 추가

btt.addEventListener("click", function (ev) {
    ev.preventDefault(); // 링크의 본연의 기능을 막음 // ev: btt의 기본속성
    // docElem.scrollTop = 0;
    scrollToTop();
});

function scrollToTop() {
    // 일정시간마다 할 일
    // var scrollInterval = setInterval (할 일, 시간);
    // 0.0015s = 15
    // 할 일 = function () {실제로 할 일}
    // 실제로 할 일: 윈도우 스크롤이 0이 아닐 때 window.scrollBy (x, y);
    // 스크롤이 0이면 setInterval을 멈춤. clearInterval (이름);

    var scrollInterval = setInterval(function () {
        if (scrollPos != 0) {
            window.scrollBy(0, -55);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
