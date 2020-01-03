self.onmessage = function(event) {

    console.log('newsList_webWorker API keys:', event.data);
    console.log('newsList_webWorker inside webworker== ',event );
    var apikey={
      "client_id":event.data.client_id,
      "employee_id":event.data.employee_id,
      "device":event.data.device,
      "device_id":event.data.device_id,
      "app_version":event.data.app_version,
      "val":event.data.val,
      "employee_type":event.data.employee_type
   }

    var url =event.data.baseURL;
    var token=event.data.token;
    console.log('newsList_webWorker webworker api key url', url)
    console.log('newsList_webWorker webworker api key', apikey)
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', token);
    
    fetch(url, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify(apikey)
    }).then(function(response) {
        console.log('newsList_webWorker:', response);
      return response.json();
    }).then(function(data) {
      console.log('newsList_webWorker:', data);
      const newsList_webWorker=data;
      console.log('homeAlbumList_webWorker API result== ',newsList_webWorker);
      self.postMessage(newsList_webWorker);
    }); 

   }    
       
      
      