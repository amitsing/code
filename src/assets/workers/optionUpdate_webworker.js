self.onmessage = function (event) {
    
    console.log('inside optional update webworker== ',event );
  var apikey={
    'clientid': event.data[0].clientId
  };
  var url =event.data[0].baseURL;

    fetch(url, {
      method: 'post',
      body: JSON.stringify(apikey)
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      const optionalUpdate_webworker = data;
      console.log('this is option update webworker res==',optionalUpdate_webworker );
      self.postMessage(optionalUpdate_webworker);
    });
  }