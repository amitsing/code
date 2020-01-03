import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

    
    baseUrl = "https://benepik.in/evalueserve/APIs/";
    // packageName = 'connect.myevalTest';
    packageName = 'connect.myeval'
    newBaseUrl="https://benepik.in/reach_dev/reach/APIs/";
    bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
    clientUrl="https://benepik.in/reach_dev/reach/";
    discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';
    onBoardingFormUrl=this.clientUrl+'Onboarding_Forms_Apis/';
    // ************* live app url ****************//

        
    // baseUrl = "https://benepik.co.in/evalueserve/APIs/";
    // // packageName = 'connect.myevalTest';
    // packageName = 'connect.myeval';
    // newBaseUrl="https://benepik.co.in/reach/APIs/";
    // bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
    // clientUrl="https://benepik.co.in/reach/";
    // discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';

  //***************testing app url */

//   baseUrl = "https://benepik.in/evalueserve/APIs/";
//   packageName = 'connect.myevalonboarding';
//   newBaseUrl="https://benepik.in/reach/APIs/";
//   bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
//   clientUrl="https://benepik.in/reach/";
//   discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';
// //   onBoardingFormUrl=this.clientUrl+'reach/Onboarding_Forms_Apis/';
// onBoardingFormUrl=this.clientUrl+'Onboarding_Forms_Apis/';
  //***************stagging app url */

//   baseUrl = "https://ujjivanconnect.com/evalueserve/APIs/";
//   packageName='connect.myevalTest';
//   newBaseUrl="https://ujjivanconnect.com/reach/APIs/";
//   bfsUrl="https://hrerpappsuat.evalueserve.com:992/api/";
//   clientUrl="https://ujjivanconnect.com/reach/";
//   discountingBaseUrl=this.clientUrl+'reachPrivilege/api/v1/';

  /////******************** live app url/
// baseUrl = "https://benepik.co.in/evalueserve/APIs/";
//  packageName='connect.myeval';

  device = '2';
  appVersion = '3';
  clientId = 'CO-31'
  optionalupdatekey='1'
  newoptionalupdatekey=1;
  razorpayDealType=''; //this key is used on previlege deal details page
  //***************web_worker api url */
  
  forceupdate_webWorkerURL = this.newBaseUrl + 'Force_Update/force_update.php';
  gcmDetails_webWorkerURL = this.baseUrl + 'GCMDetails/GCM_details.php';
  joineefcmDetails_webWorkerURL = this.newBaseUrl + 'Joinee_FCM/joinee_FCM_details.php';

  albumList_webWorkerURL=this.newBaseUrl + "Album/album.php";
  onboardNewsList_webWorkerURL=this.newBaseUrl + "News/get_news.php";
  countryHeadMsgList_webWorkerURL=this.newBaseUrl + "Country_Head/get_country_head_msg.php";
  menuList_webWorkerURL=this.newBaseUrl + "Menu/get_menu.php";
  pramotedfeed_webWorkerURL=this.newBaseUrl + "Promoted_Feed/get_promoted_feed.php";
  photoWall_webWorkerUrl = this.newBaseUrl + "HomePage/photo_wall_album.php"

  pendingList_webWorkerURL = `${this.newBaseUrl}HomePage/pending_activities.php`;
 badgeList_webWorkerURL = `${this.newBaseUrl}HomePage/badge.php`;
 myCommunities_webWorkerURL =  `${this.newBaseUrl}HomePage/my_communities.php`;
  //***************file transfer api url */
  profilePictureUpload = this.newBaseUrl + 'Image_Upload/image_upload.php';
  passportpicupload = this.newBaseUrl + 'Image_Upload/image_upload.php';
  cummunityimgupload= this.newBaseUrl + 'Image_Upload/post_image_upload.php';
  photoWallImageupload= this.newBaseUrl + 'Image_Upload/post_image_upload.php';
  contactQuery = this.newBaseUrl + 'Contact_Us/contact_us.php';
  mailWebworker_url=this.baseUrl +"Account/send_voucher_mail.php";
  constructor(public http: HttpClient,public Http:Http) {
    console.log('Hello ApiServiceProvider Provider');
  }

  loginUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Login_Signup/login.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }


  welcomeMessage(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Welcome_message/welcome_message.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  optionalUpdateApi(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Force_Update/optionalupdate.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }



  homePageApi(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Home_Page/homepage.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }


  resetPassword(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Login_Signup/reset_password.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }
 




  faqDetails(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Faq/faq.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }


//   quizResult(data) {
//     return new Promise((resolve, reject) => {
//       this.http.post(this.baseUrl + 'Learning/quiz_result.php', JSON.stringify(data)).subscribe(res => {
//         resolve(res);
//       }, (err) => {
//         reject(err);
//       });
//     });
//   }



  preview_aboard(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Welcome_Aboard/preview_aboard.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  submit_aboard(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl + 'Welcome_Aboard/submitAboard.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }




  newJoinee(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.newBaseUrl + 'Joinee_login/login_joinee.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  } 

  employeelogin(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.newBaseUrl + 'Login_SignUp/login.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }


  maintainance(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.newBaseUrl + 'Force_Update/maintainance_api.php', JSON.stringify(data)).subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  } 

/////////headers api///////
//   urllist(inputs,token){
//     console.log("apisrvc",token);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Authorization', token);
//     return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/form_list_v2.php", inputs,{ headers: headers })
//         .map((res) => {
//             return res.json();
//         })  
// }


urllist(inputs,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/form_list_v3.php", inputs,{ headers: headers })
        .map((res) => {
            return res.json();
        })  
}

forceupdate(data,token) {

  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Force_Update/force_update.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}

newForceUpdate(data,token) {

    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Force_Update/force_update_v2.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        }) 
  }




joineehomepage(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_HomePage/homepage.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}

onboardUserAlbum(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Album/album.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}

onboardUserAlbumDetails(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Album/album_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}


aboutEvalList(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "AboutEval/about_eval_category.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}


aboutLeaders_list(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Managment/managment_leader.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}

// leaders_list(data) {
  
//   return new Promise((resolve, reject) => {
//     this.http.post(this.baseUrl + 'Leaders/leaders_list.php', JSON.stringify(data)).subscribe(res => {
//       resolve(res);
//     }, (err) => {
//       reject(err);
//     });
//   });
// } 


userSignOut(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_login/logout_joinee.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}



userjoinningDetails(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joining_Details/joining_details.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}

// userProfile(data,token) {
//   console.log("apisrvc",token);
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Authorization', token);
//   return this.Http.post(this.newBaseUrl + "User_Profile/get_user_profile.php", data,{ headers: headers })
//       .map((res) => {
//           return res.json();
//       }) 
// }

lifeAtEvalueserve(data,token) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Life_At_Eval/life_at_eval.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}


onboardnewsDetails(data,token) {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "News/get_news_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      }) 
}

formsublist(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/form_sub_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 
 salarrystructure(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/save_value.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 
 savingpreferences(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/sallary_restructuring_summery.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 surveylist(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Survey/survey_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 surveydetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Survey/survey_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 surveysubmit(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
   //   return this.Http.post(this.newBaseUrl + "Survey/submit_survey.php", data,{ headers: headers })
    return this.Http.post(this.newBaseUrl + "Survey/submit_survey_v1.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

 quizlist(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Quiz/quiz_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 quizdetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Quiz/quiz_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 awardslist(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/get_award_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 awardDetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/award_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 recentlyrewarded(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/recently_awarded.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 searchuser(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/search_user.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 createnomine(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/create_nomination.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 awardsdetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 menu(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Menu/get_menu.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 homeapi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "HomePage/homePage_v1.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 UploadMystatus(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Story_Line/create_story.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }



 storylist(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Story_Line/get_storyline_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 empAlbumList(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Album_Employee/get_albums.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 empAlbumdetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Album_Employee/get_album_images.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 createlike(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Like_Comments/create_like.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 } 

 getallcomment(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Like_Comments/get_all_comments.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 
 createcomment(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Like_Comments/create_comment.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 } 

 postdetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 leadershiptalk(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Leadership/get_leadership_talks.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 nominationandapproval(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/past_nomination.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 pendingnomination(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/show_pending_nomination.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 acceptandreject(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/process_nomination.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 submitquiz(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Quiz/submit_quiz.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 quizresult(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Quiz/quiz_results.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 bfslogin(data) {
  // console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  // headers.append('Authorization', token);
  return this.Http.post(this.bfsUrl + "BfsLogin/Loginreach", data)
      .map((res) => {
          return res.json();
      })
 }

 axlogin(data) {
  return this.Http.post(this.newBaseUrl + "Login_SignUp/ax_login.php", data)
      .map((res) => {
          return res.json();
      })
 }

 emailverification(data) {
  return this.Http.post(this.newBaseUrl + "Login_SignUp/email_verification.php", data)
      .map((res) => {
          return res.json();
      })
 }

 preonboard(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Welcome_Aboard/preview_aboard.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 submitonboard(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Welcome_Aboard/submit_aboard.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }
 
 tncApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Term_Condition/get_tc.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 submitTncApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Term_Condition/submit_tc.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

//********************rajesh************ */
 getOnboardingForm(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Welcome_Aboard/submit_aboard.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }




 getformmenu(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/get_form_menu.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 getContactInfo(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Term_Condition/agree_tc.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 submitMobileNumber(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Term_Condition/submit_number.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 submitOTP(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Term_Condition/submit_tc.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 bankdetail(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/bank_detail_option.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 submitinstruction(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/bank_detail_submit.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 bankinstruction(data,token) {      
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/bank_detail_instruction.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

//*****************************marging code employee module 2aug2019******* */

storyDetails(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Story_Line/get_story_details.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 storyDetailsViewAnalytic(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Story_Line/create_post_views.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 noticeListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Notice/get_notice_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 noticeDetailsApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }



 thoughtOftheDayApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Thought/get_thoughts.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 quickBytesListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Quick_bytes/get_category.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 postDetailsApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 welcomeDetailsApi(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Welcome_Aboard/welcome_aboard_detail.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }



 quickBytesDetailsApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }





// welcomeOnBoard(data,token) {
//   console.log("apisrvc",token);
//   let headers = new Headers();
//   headers.append('Content-Type', 'application/json');
//   headers.append('Authorization', token);
//   return this.Http.post(this.newBaseUrl + "Welcome_Aboard/get_welcome_aboard.php", data,{ headers: headers })
//       .map((res) => {
//           return res.json();
//       })
//  }

 welcomeOnBoard(data,token) {
      console.log("apisrvc",token);
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', token);
      return this.Http.post(this.newBaseUrl + "Welcome_Aboard/welcome_aboard_list.php", data,{ headers: headers })
          .map((res) => {
              return res.json();
          })
     }



 healthAndWellnessListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Wellness/exercise_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 wowAwardsbadgeListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Wow_Award/badge_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 sendWowAwardsbadgeApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Wow_Award/send_badge.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }



 badgeBoardApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Wow_Award/latest_badge.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 leaderBoardApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Wow_Award/leaderboard.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 doLikeUnlikeApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Like_Comments/create_like.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }



 userSignoutApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Login_SignUp/logout.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 userlikeListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Like_Comments/get_all_likes.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


communityListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Community/community_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 communityJoinUnJoinedApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Community/community_join.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 communityCreateApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Community/community_post.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }

 communityPostApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Community/community_details.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 communityPostDetailsApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Post/post_detail.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 communitymemberListApi(data,token) {
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "Community/community_member_list.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      })
 }


 passportimgsubmit(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Image_Upload/submit_passport_pic.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

//    joineefcm(data,token) {
//     console.log("apisrvc",token);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Authorization', token);
//     return this.Http.post(this.newBaseUrl + "Joinee_FCM/joinee_FCM_details.php", data,{ headers: headers })
//         .map((res) => {
//             return res.json();
//         })
//    }

submitcumunitypost(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Community/community_post.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   joineesurveydetail(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Survey/joinee_survey_detail.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   joineesurveysubmit(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Survey/joinee_submit_survey_v1.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }



   joineequizdetail(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Quiz/get_quiz_question.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }


   joineequizsubmit(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Quiz/submit_quiz.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }



   joineequizhistory(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Quiz/quiz_history.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }


   joineealert(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Alert/joinee_alert.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }


   alertStatus(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Joinee_Alert/joinee_alert_status_off.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   carhirevalues(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/get_car_hire_values.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   carhirevaluesubmit(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Sallary_Restructuring/save_car_care.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   reject(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/process_nomination_new.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   alltranscationaward(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/alltransaction_award.php", data,{ headers: headers })
        .map((res) => {
            return res.json(); 
        })
   }

   EmployeeAlert(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Employee_Alert/alerts.php", data,{ headers: headers })
        .map((res) => {
            return res.json(); 
        })
   }


   EmployeeAwarddetail(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data,{ headers: headers })
        .map((res) => {
            return res.json(); 
        })
   }












//********************************privilege*************** */
//********************************privilege*************** */
//********************************privilege*************** */
privilegeHomeCategoryList(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "category/all", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }
   privilegeHomeDealListApi(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "deal/all", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }
   privilegeDealListApi(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "category/deal/all", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }


   cummunitytags(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Community/get_community_tags.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }   


   cummunitytagsubmit(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Community/save_community_tags.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

    newslist(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "NPM/get_npm_list.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }

   submitContactQuery(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Contact_Us/contact_us.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }
   getPrivacyPolicies(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Privacy_policy/get_policy.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }
   approveddata(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/alltransaction_award.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }


   getFaq(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Faq/get_faqs.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }
   getContestList(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Contest/get_contest.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
   }
//    getNominationApprovalDetailPage(data,token){
//     console.log("apisrvc",token);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Authorization', token);
//     return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data,{ headers: headers })
//         .map((res) => {
//             return res.json();
//         });
//    }


//    awardgraph(data,token){
//     console.log("apisrvc",token);
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Authorization', token);
//     return this.Http.post(this.newBaseUrl + "R_And_R/nomination_dashboard.php", data,{ headers: headers })
//         .map((res) => {
//             return res.json();
//         });
//    } 

   tandcbeforelogin(data){
    return this.Http.post(this.newBaseUrl + "Login_SignUp/before_login_terms.php", data)
        .map((res) => {
            return res.json();
        });
   } 


   getNominationApprovalDetailPage(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/show_nomination_detail.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   awardgraph(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/nomination_dashboard.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   getAwardGraph(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/approvalgraph.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   contactHelpdesk(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Contact_Us/contact_us.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
 
   dashboardGraph(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/awarddashboard.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }

   nominationApproveReject(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/process_nomination.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   myAwardsApi(data,token){
    //shivanshi
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "R_And_R/myAwards.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
}
MyCertificatesApi(data,token){
 //    shivanshi
 console.log("apisrvc",token);
 let headers = new Headers();
 headers.append('Content-Type', 'application/json');
 headers.append('Authorization', token);
 return this.Http.post(this.newBaseUrl + "R_And_R/myCertificates.php", data,{ headers: headers })
     .map((res) => {
         return res.json();
     });
}
MyCertificatesSendEmailApi(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.newBaseUrl + "R_And_R/send_mail_myCertificate.php", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
 Rewardspoint(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "account/points", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }

vcategory(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "category/all", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
vlist(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "category/deal/all/redeem", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
dealdetail(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "deal/detail", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
 statement(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "account/points/history", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
 myvouchers(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "order/history", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
 myvouchersdetail(data,token){
  console.log("apisrvc",token);
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Authorization', token);
  return this.Http.post(this.discountingBaseUrl + "order/details", data,{ headers: headers })
      .map((res) => {
          return res.json();
      });
 }
 resendotp(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "resendotp", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   dealpurches(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "deal/purchase", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
 
 sendotp(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "deal/order/create", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }


   HrPolicyHomeProvider(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Hr_Policy/get_hr_policy.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }

   userProfile(data,token) {
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.newBaseUrl + "Profile/profile.php", data,{ headers: headers })
        .map((res) => {
            return res.json();
        })
  }






  /// bhupender

  FavouriteDealApi(data,token){
    console.log("apisrvc",token);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "favourite/deal/update", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   DealDetail(data,token){
    console.log("Deal Detail API Service Data=",data);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    return this.Http.post(this.discountingBaseUrl + "deal/detail", data,{ headers: headers })
        .map((res) => {
            return res.json();
        });
   }
   privilegeReserveATable(inputs) {
    return this.Http.post(this.discountingBaseUrl + "bookappointment.php", inputs)
        .map((res) => {
            return res.json();
        })
  }
  showCoupon(inputs) {
    return this.Http.post(this.discountingBaseUrl + "APIs/show_coupon.php", inputs)
        .map((res) => {
            return res.json();
        })
  }
   //Previlege Feedback API
   privilegeFeedback(inputs) {
    return this.Http.post(this.discountingBaseUrl + "merchant_feedback.php", inputs)
    .map((res) => {
        return res.json();
    })
  }
    BenepikAppointment(data,tokenS){
        console.log("Deal Detail API Service Data=",data);
        console.log("token Detail API Service Data=",tokenS);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', tokenS);
        return this.Http.post(this.discountingBaseUrl + "deal/order/create", data,{ headers: headers })
            .map((res) => {
                return res.json();
        });
    }
    DineOutTimeSlot(inputs){
        return this.Http.post(this.discountingBaseUrl + "deal/order/create", inputs)
        .map((res) => {
            return res.json();
        })
    }
    payment(voucher) {
        let buyerId = 'A5FE48C2-7018-4C55-85DA-3B94A269DAB5';
        let url = 'https://catalog.vouchagram.net/EPService.svc/VoucherQuantity?BuyerGuid=' + buyerId + '&Password=pRlF8GQqVKilwamzwH3gZg==&ProductGuid=' + voucher
        return this.Http.get(url)
            .map((res) => {
                return res.json();
            })
    }
    adduserlocation(inputs, token) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.discountingBaseUrl + "APIs/add_user_privilege_location.php", inputs, { headers: headers })
            .map((res) => {
                return res.json();
            })
      }


      updatenomine(data,token){
        console.log("apisrvc",token);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "R_And_R/changes_pending_nomination.php", data,{ headers: headers })
            .map((res) => {
                return res.json();
            })
      }

      behaviourGuideApi(data,token){
        console.log("apisrvc",token);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "HomePage/behaviour_guide.php", data,{ headers: headers })
            .map((res) => {
                return res.json();
            })
      }

      updatewalkthrough(data,token){
        console.log("apisrvc",token);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Login_SignUp/update_walkthrough.php", data,{ headers: headers })
            .map((res) => {
                return res.json();
            });
       }  

       inductionRecruitementFeedbackSubmit(data){
        // console.log("apisrvc",token);
        let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Login_SignUp/update_walkthrough.php", data,{ headers: headers })
            .map((res) => {
                return res.json();
            });
       }  

       quizinstruction(data,token){
        console.log("apisrvc",token);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', token);
        return this.Http.post(this.newBaseUrl + "Joinee_Quiz/quiz_instruction.php", data,{ headers: headers })
            .map((res) => {
                return res.json();
            });
    
        } 


        awardDashBoardUpdated(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "R_And_R/awarddashboard_v1.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }
          awardUtilization(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "R_And_R/awardutilization.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          sendmail(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.discountingBaseUrl + "sendVoucherMail", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          saveVouchers(inputs) {
            return this.Http.post(this.discountingBaseUrl+ "APIs/save_voucher_detail_v2.php", inputs)
                .map((res) => {
                    return res.json();
                })
        }
       //new wohoo api call
       wohooApiCall(inputs) {
        return this.Http.post(this.discountingBaseUrl + "APIs/save_payment_woohoo_v2.php", inputs)
            .map((res) => {
                return res.json();
            })
        }

        dealPurchase(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.discountingBaseUrl + "deal/purchase", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }
  
          favDealListApi(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.discountingBaseUrl + "favdeal/all", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          skiptc(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Term_Condition/skip_tc.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          photowallCategory(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Photo_Wall/photo_wall_category.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          photowallCategoryDetails(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Photo_Wall/photo_wall_detail.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          photowallPublish(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Photo_Wall/create_photo_wall.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          analyticApi(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Analytics/save_analytics.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }
          dynamicModuleList(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Special_Content/special_content_list.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }
          getdynamicmoduleDataApi(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Special_Content/special_content_detail.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          }

          getTsopPerformerList(data,token){
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "HomePage/get_award_list.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
          } 
          
          previewPushMailer(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Mailer/htmlmailer.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           generalinformation(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "india_forms/general_info_api.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           china_consent(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "common_form_apis/all_consent_form.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           china_consent_submit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "common_form_apis/submit_consent_form.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           globalpolicy_list(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "global_policy/global_policy_index.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           } 
           
           globalpolicy_detail(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "global_policy/global_policy_index_details.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           globalpolicy_quiz(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "global_policy/get_globel_policy_quiz.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           globalpolicy_quizsubmit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "global_policy/submit_global_policy_quiz.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           globalpolicy_ack(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "global_policy/ack_global_policy_index.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           get_china_declaration(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "common_form_apis/get_form_declaration_content.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           get_declaration_otp(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "common_form_apis/generate_form_declaration_otp.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           submit_form_declaration(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "common_form_apis/submit_form_declaration.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           get_emergency_contact(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "china_forms/get_emergency_contact.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           get_emergency_dropdown(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "china_forms/emergency_form_dropdown_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           get_emergency_save(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "china_forms/save_emergency_contact.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           get_emergency_delete(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "china_forms/delete_emergency_contact.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           get_emergency_submit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "common_form_apis/save_form_policy_ack.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }


           ChilleBackGroundVerification(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/chille_forms/background_verification.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          ChilleOnBoarding(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl + "Onboarding_Forms_Apis/chille_forms/onboarding_form.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          chilleSubmitBackgroundVerification(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/chille_forms/submit_chile_background_form.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          chilleSubmitOnboarding(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/chille_forms/submit_onboarding_form.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          getDropDown(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/get_dropdowns.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          ChilleGetDeclaration(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/get_form_declaration_content.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          ChilleFormDeclarationOtp(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/generate_form_declaration_otp.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          ChilleDeclarationSubmit(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/generate_form_declaration_otp.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          getFormPolicy(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/get_form_policy_contents.php",
              data,
              { headers: headers }
            ).map(res => {
              return res.json();
            });
          }

          submitFormPolicy(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/save_form_policy_ack.php",
              data,
              { headers: headers }
            ).map(res => {
              return res.json();
            });
          }

          getPolicyFormDeclaration(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/common_form_apis/get_form_declaration_content.php",
              data,
              { headers: headers }
            ).map(res => {
              return res.json();
            });
          }

          onboardingDynamicModuleList(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "On_Dy_Module/get_module_list.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           onboardingDynamicModuleDetail(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "On_Dy_Module/get_module_detail.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           nationality_declaration(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "china_forms/get_nationality_dec_content.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           } 
           
           nationality_declaration_submit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.onBoardingFormUrl + "china_forms/save_nationality_dec_content.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }  

           RomaniaFirstDaySubmission(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.newBaseUrl + "Joinee_Form_Api/save_romania_day1_ack.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           RomaniaGetForm(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/romania_forms/get_form_contents.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
        
        RomaniaSubmitForm(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/romania_forms/save_form_ack.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           } 
           us_self_identification(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_identification_form_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           } 
           us_self_identification_submit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/save_identification_form_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           } 
           us_new_joinee(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_joiner_form_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           } 
           us_new_joinee_submit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/submit_joiner_form_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }  
           USABackGroundVerification(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/usa_forms/get_background_verification_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          us_attendance(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_orientation_att_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           us_attendance_submit(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/save_orientation_att_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaGetFamilyDetail(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_family_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaSaveFamilyDetail(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_family_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaFamilyDropDown(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_drop_down_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaUpdateFamilyDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/update_family_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaDeleteFamilyDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/delete_family_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaGetContactDetail(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_contact_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaSaveContactDetail(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_contact_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaUpdateContactDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/update_contact_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaDeleteContactDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/delete_contact_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaGetHRDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_hr_form_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaSaveHRDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_hr_form_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaGetPfForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/get_pf_form_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaSavePfForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/save_pf_form_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaUpdatePfForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/update_pf_form_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          India_get_EPfForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/get_epf_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }

          India_EPfForm_update(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/update_epf_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }

          India_EPfForm_save(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/save_epf_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          India_EPfForm_delete(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/delete_epf_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaGetGratuityForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/get_gratuity_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaSaveGratuityForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/save_gratuity_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaUpdateGratuityForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/update_gratuity_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaDeleteGratuityForm(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/delete_gratuity_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaGetInsurane(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/india_forms/get_insurance_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          IndiaSaveInsuraneDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/save_insurance_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaSubmitInsuraneDetails(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/update_insurance_data.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           IndiaGetCity(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/india_forms/get_city_dropdown.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           get_proprietary(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/get_proprietary_invention.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }

           save_proprietary(data,token) {
            console.log("apisrvc",token);
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
            return this.Http.post(this.clientUrl + "Onboarding_Forms_Apis/usa_forms/save_proprietary_invention.php", data,{ headers: headers })
                .map((res) => {
                    return res.json();
                })
           }
           
           Uk_Get_Personal_Info(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/get_personal_info.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Save_Personal_Info(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/save_personal_info.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Get_Group_Protection(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/get_group_protection_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Save_Group_Protection(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/save_group_protection_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Delete_Group_Protection(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/delete_group_protection_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Get_Personal_Compliance(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/get_personal_complaince_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Save_Personal_Compliance(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/save_personal_compliance_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Get_Credit_Card_Info(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/get_credit_card_application_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Save_Credit_Card_Info(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/save_credit_card_application_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }
          Uk_Credit_Card_Dropdown(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/uk_forms/get_uk_dropdown_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }

          USASubmitBackgroundVerification(data, token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                "Onboarding_Forms_Apis/usa_forms/save_background_verification_data.php",
              data,
              {
                headers: headers
              }
            ).map(res => {
              return res.json();
            });
          }

          us_canada(url,data,token) {
            console.log("apisrvc", token);
            let headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            return this.Http.post(
              this.clientUrl +
                url,
              data,
              { headers: headers }
            ).map(res => {
              return res.json();
            });
          }


}
