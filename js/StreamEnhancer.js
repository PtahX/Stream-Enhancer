let shouldContinueToMonitor = false;
chrome.devtools.network.onRequestFinished.addListener(requestMonitor);

function requestMonitor(request) {
  if (shouldContinueToMonitor) {
    if (request.request.url.indexOf("m3u8") !== -1) {
      _log("Found valid stream link");
      //_log(request);
      // playlist link
      let b64request = btoa(JSON.stringify(request));
      let url = "streamenhancer://" + b64request;
      shouldContinueToMonitor = false;
      $("#scan").removeClass("scanning");
      $(".loader").css('display', 'none');
      $("#results").append(`<a class="link" href="${url}" id="link" role="button"><span>Link</span></a>`);
    }
    console.log("got request in should");
  }
}