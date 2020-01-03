///// @author : Ankit Saini
///// @purpose : RazorPay payment gateway Service

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { razorPayOption } from '../../Modals/razorPayOption';
import { Events } from 'ionic-angular';

declare var RazorpayCheckout:any;
/*
  Generated class for the RazorpayProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RazorpayProvider {

  constructor(public http: HttpClient, private _event : Events) { }

  makePayment(options:razorPayOption,sucessRedirectPage:string,cancelRedirectPage:string,data?:object){
    var self = this;

    //// data to check on browser(must remove when make build)
    // data['paymentId'] = 'xyzabc';
    // data['page'] = sucessRedirectPage;
    // data['success'] = '1';
    // self.navigate(data);
    //// Success callback function
    //// called when payment successfully done
    var successCallback = function (payment_id) {
      data['paymentId'] = payment_id;
      data['page'] = sucessRedirectPage;
      data['success'] = '1';
      self.navigate(data);
    };

    //// cancel callback function
    /// called when razorPay get any error
    var cancelCallback = function (error) {
      data['page'] = cancelRedirectPage;
      data['success'] = '0';
      self.navigate(data);
    };

    //// open RazorPay payment page
    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }

  //// navigation through Events
  //// this event must be subscribed in the constructor of the page which make a call to makePayment method of this service  
  navigate(pageComponent){
    console.log('inside razorpay ts file==*** ', pageComponent);
    this._event.publish('paymentSucessful', pageComponent);
  }


}
