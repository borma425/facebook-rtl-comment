
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

  if (request.message === 'TabUpdated' ) {
  
  document.querySelector('[aria-label*="comment"],[aria-label*="تعليق"]').addEventListener("click", function (evt) {



setTimeout(function(){


  document.querySelectorAll('[dir="auto"],[dir="ltr"]').forEach((Element) => {
  // https://stackoverflow.com/questions/4446244/how-to-check-if-any-arabic-character-exists-in-the-string-javascript/4446309
  
  let arabic = /[\u0600-\u06FF]/,
  string = Element.textContent;
  
  if(arabic.test(string)){
  Element.setAttribute("dir", "rtl");
  }
  
  });
  
  evt.preventDefault();
  
  });
    
    
    
  }, 500);//wait 0.5 seconds
    
  
  
  
  
  
  
    }
  })
