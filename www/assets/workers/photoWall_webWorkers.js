self.onmessage = function(event) {

    console.log('photoWall_webWorker API keys:', event.data);
    console.log('photoWall_webWorker webworker== ',event );
    var apikey={
        "client_id":event.data.client_id,
        "employee_id":event.data.employee_id,
        "device":event.data.device,
        "device_id":event.data.device_id,
        "app_version":event.data.app_version,
    }
    var url =event.data.baseURL;
    var token=event.data.token;
    console.log('photoWall_webWorker webworker api key url', url)
    console.log('photoWall_webWorker webworker api key', apikey)
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', token);
    fetch(url, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify(apikey)
    }).then(function(response) {
        console.log('photoWall_webWorker:', response);
      return response.json();
    }).then(function(data) {
      console.log('photoWall_webWorker:', data);
      const photoWall_webWorker=data;
      console.log('pendingActivityList_webWorker API result== ',photoWall_webWorker);
      self.postMessage(photoWall_webWorker);
    }); 
   }    
       
      
      