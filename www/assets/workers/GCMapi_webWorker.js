self.onmessage = function(event) {

  console.log('GCM API keys:', event.data);
  console.log('rewards point  inside webworker== ',event );
  var apikey={
  "client_id": event.data.client_id,
  "employee_id": event.data.employee_id,
  "device": event.data.device,
  "device_id": event.data.device_id,
  "app_version": event.data.app_version,
  "registration_token":event.data.registration_token,
  "user_type":event.data.user_type,
  };
  var url =event.data.baseURL;
  var token=event.data.token;
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', token);
  fetch(url, {
    method: 'post',
    headers: myHeaders,
    body: JSON.stringify(apikey)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log('GCM API HIT:', data);
    const GCMapi_webWorker_result=data;
    console.log('GCM API result== ',GCMapi_webWorker_result);
    self.postMessage(GCMapi_webWorker_result);
  });
  
  }
  
  
  