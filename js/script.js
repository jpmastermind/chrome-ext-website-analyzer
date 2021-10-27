$(function() {

  $( "#btn-footer-dev" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.create({ url: 'https://www.linkedin.com/in/jeanpaulmanuel' });
  });
  
  $( "#btn-isitdown" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      var url = new URL(tab.url)
      var parsedURL = psl.parse(url.hostname);
      var domain = parsedURL.domain;
      chrome.tabs.create({ url: 'http://downforeveryoneorjustme.com/' + domain });
    });
  });

  $( "#btn-siteworthtraffic" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      var url = new URL(tab.url)
      var parsedURL = psl.parse(url.hostname);
      var domain = parsedURL.domain;
      chrome.tabs.create({ url: 'http://www.siteworthtraffic.com/report/' + domain });
    });
  });

  $( "#btn-similarweb" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      var url = new URL(tab.url)
      var parsedURL = psl.parse(url.hostname);
      var domain = parsedURL.domain;
      chrome.tabs.create({ url: 'https://www.similarweb.com/website/' + domain });
    });
  });

  var openGtMetrix = function(domain) {
    var url = 'data:text/html;charset=utf8,';
    function append(key, value) {
        var input = document.createElement('textarea');
        input.setAttribute('name', key);
        input.textContent = value;
        form.appendChild(input);
    }
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://gtmetrix.com/analyze.html';
    append('url', domain);
    url += encodeURIComponent(form.outerHTML);
    url += encodeURIComponent('<script>document.forms[0].submit();</script>');
    chrome.tabs.create({url: url, active: true});
  }

  $( "#btn-gtmetrix-domain" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      var url = new URL(tab.url)
      var parsedURL = psl.parse(url.hostname);
      var domain = parsedURL.domain;
      openGtMetrix(domain);
    });
  });

  $( "#btn-gtmetrix-current" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      openGtMetrix(tab.url);
    });
  });

  $( "#btn-neilpatel" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      var url = new URL(tab.url)
      var parsedURL = psl.parse(url.hostname);
      var domain = parsedURL.domain;
      chrome.tabs.create({ url: 'http://tools.neilpatel.com/en/analyze/' + domain });
    });
  });

  $( "#btn-seositecheckup" ).click(function(e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function(tab) {
      var url = new URL(tab.url)
      var parsedURL = psl.parse(url.hostname);
      var domain = parsedURL.domain;
      chrome.tabs.create({ url: 'https://seositecheckup.com/seo-audit/' + domain });
    });
  });

});