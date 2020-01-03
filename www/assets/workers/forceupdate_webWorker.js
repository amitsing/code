self.onmessage = function(event) {

    console.log('force update API keys:', event.data);
    console.log('force update  inside webworker== ',event );
    var apikey={
      // "clientId":event.data.clientId,
      // "employeeId":event.data.employeeId,
      // "device":event.data.device,
      // "deviceId":event.data.deviceId,
      // "appVersion":event.data.appVersion
      "client_id":event.data.clientId,
      "employee_id":event.data.employeeId,
      "device":event.data.device,
      "device_id":event.data.deviceId,
      "app_version":event.data.appVersion,
      "employee_type":event.data.employee_type,

   }

    var url =event.data.baseURL;
console.log('forceUpdate webworker api key', apikey)
    fetch(url, {
      method: 'post',
      body: JSON.stringify(apikey)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log('Force updata web worker:', data);
      const GCMapi_webWorker_result=data;
      console.log('force update API result== ',GCMapi_webWorker_result);
      self.postMessage(GCMapi_webWorker_result);
    }); 
   }    
       
      
      