import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides,ModalController,ViewController,
  AlertController,ToastController,LoadingController,Events,Platform } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';


declare var google;
@IonicPage()
@Component({
  selector: 'page-autocomplete',
  templateUrl: 'autocomplete.html',
})
export class AutocompletePage {

  loadingPopup: any;
  loginToken: any;
  dataValue:any = 0;
  DeviceId: any;
  client_id: any;
  employeeId: any;
  cityName: string;
  callAfterFourSec: any;
  autocompleteItems:any;autocomplete:any;
  mySelectedCity:any='';
  public unregisterBackButtonAction: any;
  closeAppPopupShow:number=0;
  acService:any;currentLatitude:any;placesService:any;currentLongitude:any;
  previewImage: any;
  // autocompleteItems;
  // autocomplete; 
  // geo: any
  // service = new google.maps.places.AutocompleteService();
  constructor(private geolocation:Geolocation,private storage:Storage,private apiServices:ApiServiceProvider,
    public navCtrl:NavController,public navParams:NavParams,private modlCtrl:ModalController,private platform:Platform,
    public viewCtrl:ViewController,private zone:NgZone,public diagnostic:Diagnostic,public loadingCtrl:LoadingController,
    private alertCtrl:AlertController,private nativeGeocoder:NativeGeocoder,public toastCtrl:ToastController,
    public events: Events) {
    //   this.autocompleteItems = [];
    // this.autocomplete = {
    //   query: ''
    // };
    this.mySelectedCity=this.navParams.get('locationCity');
    console.log('************************city is===', this.mySelectedCity);
    if(this.mySelectedCity=='' ||this.mySelectedCity==null || this.mySelectedCity==undefined 
    || this.mySelectedCity=='undefined'||this.mySelectedCity.lenght<=0){
      this.mySelectedCity='';
      console.log('************************city is blank===', this.mySelectedCity);
    }else{
      this.mySelectedCity=this.navParams.get('locationCity');
      this.storage.get('currentLat').then((data) => {
        console.log('currentLat ==', data);
        this.currentLatitude = data;
      })
      this.storage.get('currentLong').then((data) => {
        console.log('currentLong ==', data);
        this.currentLongitude = data;
      })
    }
  }

  commonLoader() {
    this.loadingPopup = this.loadingCtrl.create({
      enableBackdropDismiss: true,
      spinner: 'ios-small',
      content: 'Loading data...'
    });
    this.loadingPopup.present();
  }
  getGeolocatonData() {
    // this.showloc();  // uncomment for run only browser
    this.diagnostic.isLocationEnabled().then((res)=>{
      if(res==true){
        this.showloc();
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Your device location is off.',
          subTitle: 'Please turn on your device location.',
          // buttons: ['Dismiss']
          buttons:[
            {
              text: 'Dismiss',
              handler: data => {
                console.log('Cancel clicked');
                // this.loadingPopup.dismiss();
              }
            },
            {
              text: 'Ok',
              handler: data => {
                console.log('Saved clicked');
              this.diagnostic.switchToLocationSettings();
              // this.loadingPopup.dismiss();
              }
            }
          ]
        });
        alert.present();
      }
    });
  }
  showloc(){
    this.commonLoader();
    console.log('this. is get geo location data function=');
    this.geolocation.getCurrentPosition().then((resp) => {
      this.loadingPopup.dismiss();
      console.log('this is reponce of geolocation=',resp);
      if (resp.coords.latitude != undefined) {
        this.storage.set('currentLat', resp.coords.latitude);
        this.storage.set('currentLong', resp.coords.longitude);
        this.currentLatitude = resp.coords.latitude;
        this.currentLongitude = resp.coords.longitude;
        this.addressfind();
      }
    }).catch((error) => {
      this.loadingPopup.dismiss();
      console.log('Error getting location', error);
    });
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.events.publish('location1', data);
      console.log('this is reponce of geolocation watchPosition=',data);
      if (data.coords.latitude != undefined) {
        this.storage.set('currentLat', data.coords.latitude);
        this.storage.set('currentLong', data.coords.longitude);
        this.currentLatitude = data.coords.latitude;
        this.currentLongitude = data.coords.longitude;
        this.addressfind();
      }
    });
  }
  addressfind(){
    // this.callAfterFourSec.unsubscribe();
    console.log('in address find func');
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 1
    };
    console.log("options",options);
    console.log("this.lat",this.currentLatitude);
    console.log("this.long",this.currentLongitude);
    this.nativeGeocoder.reverseGeocode(this.currentLatitude, this.currentLongitude, options)
    .then((result: NativeGeocoderReverseResult[]) =>{
      console.log('nativeGeocoder',result);
      this.cityName=result[0].locality;
      console.log('this is new City Name=', this.cityName);
      this.mySelectedCity=this.cityName;
      // this.loadingPopup.dismiss();
      this.dismiss(this.cityName);
      // this.sendloc(this.cityName,'');
    })
    .catch((error: any) => {
      console.log('error', error);
      this.commmonTast(error);
    });
    console.log('cityName22',this.cityName);
  }

  commmonTast(message){
    const toast = this.toastCtrl.create({
      message: message,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  goBack(){
    let manuallyCloseModal=1;
    this.viewCtrl.dismiss({"latitude":this.currentLatitude,"longitude":this.currentLongitude,"cityName":this.mySelectedCity}).then(manuallyCloseModal=>{

    });
    // this.navCtrl.pop();
  }
  
  dismiss(Cityname) {
    this.viewCtrl.dismiss({"latitude":this.currentLatitude,"longitude":this.currentLongitude,"cityName":Cityname}).then(res=>{

    });
  }


  ngOnInit() {
    this.acService = new google.maps.places.AutocompleteService();
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    this.storage.get('privillege_image').then(data=>{
      this.previewImage = data;
      console.log("previewImage",this.previewImage);
    })
  } 
    
    
  updateSearch() {
    console.log('modal > updateSearch');
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let self = this; 
    let config = { 
      //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
      input: this.autocomplete.query, 
      componentRestrictions: {  } 
    }
    this.acService.getPlacePredictions(config, function (predictions, status) {
      console.log('modal > getPlacePredictions > status > ', status);
      self.autocompleteItems = [];    
      console.log('predictions data ', predictions);        
      predictions.forEach(function (prediction) {              
        self.autocompleteItems.push(prediction);
      });
    });
  }
    
  chooseItem(address){
    this.commonLoader();
    console.log('selectedAddress== ', address);  
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address.description }, (results, status) => {
      this.loadingPopup.dismiss();
      console.log('all data from google results== ', results);  
      console.log('all data from google status== ', status);  
      // this.events.publish('location', results);
      this.currentLatitude = results[0].geometry.location.lat();
      this.currentLongitude = results[0].geometry.location.lng();
      this.addressfind();
      console.log("lat: " + this.currentLatitude + ", long: " + this.currentLongitude);
    });      
  }

  ionViewWillEnter() {
    this.initializeBackButtonCustomHandler();
  }

  ionViewWillLeave(){
    this.events.publish('location', this.currentLatitude,this.currentLongitude);
    this.unregisterBackButtonAction && this.unregisterBackButtonAction();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AutocompletePage');
  }




  //Hardware Back Button

  initializeBackButtonCustomHandler(): void {
    let that = this;
    this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function (event) {
  
      // that.navCtrl.popToRoot();
      // that.navCtrl.pop();
      let manuallyCloseModal=1;
      this.viewCtrl.dismiss({"latitude":this.currentLatitude,"longitude":this.currentLongitude,"cityName":this.mySelectedCity}).then(manuallyCloseModal=>{
  
      });
    }, 101); // Priority 101 will override back button handling (we set in app.component.ts) as it is bigger then priority 100 configured in app.component.ts file */
  }

}
