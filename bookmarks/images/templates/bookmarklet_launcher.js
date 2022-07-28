(function(){
  if(!window.bookmarklet) {
    bookmarklet_js = document.body.appendChild(document.createElement('script'));
    bookmarklet_js.src='//127.0.0.1:8000/static/js/bookmarklet.js?r='+Math.floor(Math.random()*9999999999999999);
    window.bookmarklet = true;
  }
  else {
    bookmarkletLaunch();
  }
})();


//(function(){
//    if (window.myBookmarklet !== undefined){
//        myBookmarklet();
//    }
//    else {
//        document.body.appendChild(document.createElement('script')).src='https://b4ce-87-117-180-186.eu.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
//    }
//})();
