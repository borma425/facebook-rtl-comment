
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {




function rtlComment(time){

setTimeout(() => {


document.querySelectorAll('[dir="auto"],[dir="ltr"]').forEach((Element) => {
// https://stackoverflow.com/questions/4446244/how-to-check-if-any-arabic-character-exists-in-the-string-javascript/4446309

let arabic = /[\u0600-\u06FF]/,
string = Element.textContent;

if(arabic.test(string))
Element.setAttribute("dir", "rtl");


});



}, time);

}








if (request.message === 'TabUpdated' ) {

const url = window.location;
const params = new URLSearchParams(url.search);

if(url.href.indexOf("/posts/") > -1 || params.has("comment_id") || params.has("reply_comment_id")  || params.has("group_comment") ){

rtlComment(1000);

}

document.querySelector('[aria-label*="comment"],[aria-label*="تعليق"]').addEventListener("click", function (evt) {

rtlComment(500);
evt.preventDefault();

});




}
  })
