
 $(".c").click(function () {
 	const bgcolor = this.id;
chrome.tabs.query({url: '<all_urls>'}, tabs => {

    tabs.forEach(tab =>
        chrome.tabs.sendMessage(tab.id, { bgcolor } )
      );
 });
});


 $(".t").click(function () {
 	const txtcolor = this.id;
chrome.tabs.query({url: '<all_urls>'}, tabs => {

    tabs.forEach(tab =>
        chrome.tabs.sendMessage(tab.id, { txtcolor } )
      );
 });
});
