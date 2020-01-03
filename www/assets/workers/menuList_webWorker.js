self.onmessage = function(event) {

    console.log('menuList__webWorker API keys:', event.data);
    console.log('menuList_webWorkerinside webworker== ',event );
    var apikey={
  
      "client_id":event.data.client_id,
        "employee_id":event.data.employee_id,
        "device":event.data.device,
        "device_id":event.data.device_id,
        "app_version":event.data.app_version,
        "request":"home",
   }

    var url =event.data.baseURL;
    var token=event.data.token;
    console.log('homeAlbumList_webWorker webworker api key url', url)
    console.log('homeAlbumList_webWorker webworker api key', apikey)
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Authorization', token);
    fetch(url, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify(apikey)
    }).then(function(response) {
        console.log('homeAlbumList_webWorker:', response);
      return response.json();
    }).then(function(data) {
      console.log('homeAlbumList_webWorker:', data);
      const menuList_webWorker=data;
      console.log('homeAlbumList_webWorker API result== ',menuList_webWorker);
      self.postMessage(menuList_webWorker);
    }); 
   }    
       
      
      