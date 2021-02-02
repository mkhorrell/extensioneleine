
chrome.runtime.onMessage.addListener(request => {

  if(request.bgcolor) {

    document.body.style.backgroundColor = request.bgcolor;
        document.html.style.backgroundColor = request.bgcolor;
        document.querySelector('header').style.backgroundColor = request.bgcolor;
  };

  if(request.txtcolor) {

    document.body.style.color = request.txtcolor;
        document.html.style.color = request.txtcolor;
        document.querySelector('header').style.color = request.txtcolor;
  }
})
