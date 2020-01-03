import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ApiServiceProvider } from "../../providers/api-service/api-service";

import { ImageViewerController } from "ionic-img-viewer";

/**
 * Generated class for the InstructionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-instruction",
  templateUrl: "instruction.html"
})
export class InstructionPage {
  _imageViewerCtrl: ImageViewerController;
  flag: any;
  formid: any;
  previousePageData: any;
  userImage: any;
  formData  :any;
  constructor(
    imageViewerCtrl: ImageViewerController,
    private apiservices: ApiServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.previousePageData = this.navParams.get("data");
    this.formid = this.previousePageData.form_id;
    // this.flag = this.navParams.get("flag");
    // this.formid = this.navParams.get("formid");
    this.flag = this.previousePageData.flag;
    console.log("all data== ", this.previousePageData);
    this.userImage =
      this.apiservices.clientUrl + "" + this.previousePageData.form_data_dump;

    console.log("all userImage== ", this.userImage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InstructionPage");
  }
  gotosamplepassport() {
    // this.navCtrl.push('SamplepassportphotoPage');
    this.navCtrl.push("SamplepassportphotoPage", {
      flag: this.flag,
      formid: this.formid
    });
  }
  zoomImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    // setTimeout(() => imageViewer.dismiss(), 30000);
    imageViewer.onDidDismiss(() => console.log("Viewer dismissed"));
  }
}
