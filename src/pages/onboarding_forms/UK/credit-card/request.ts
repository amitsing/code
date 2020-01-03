import { Credit } from "./response";

export class CreditReq {
    credit_detail: CreditDetails;
    present_address: PresentAddress;
    previous_address: PrevAddress;
    userData: UserDetail;

    constructor(data: Credit) {
        this.credit_detail = new CreditDetails(data.credit_detail);
        this.present_address = new PresentAddress(data.present_address); 
        this.previous_address = new PrevAddress(data.previous_address);
        this.userData = new UserDetail(data.userData);
    }
}

export class CreditDetails {
    auto_id: string;
    account_number: string;
    business_name: string;
    card_name: string;
    existing_customer: string;
    is_title: string;
    memorable_word: string;
    other: string;
    share_pin: string;
    sort_code: string;
    title: string;

    constructor(data : any) {
        this.auto_id = data.auto_id;
        this.title = data.title.value;
        this.account_number = data.account_number.value;
        this.business_name = data.business_name.value;
        this.card_name = data.card_name.value;
        this.existing_customer = data.existing_customer.value;
        if(this.title == 'other'){
            this.other = data.other.value;
            this.is_title = "false";
        } else {
            this.other = ""
            this.is_title = "true"
        }
        this.memorable_word = data.memorable_word.value;
        this.share_pin = data.share_pin.value;
        this.sort_code = data.sort_code.value;
    }
}

export class PrevAddress {
    auto_id: string;
    address: string;
    postal_code : string;
    has_previous_address : string;

    constructor(data: any) {
        this.auto_id= data.auto_id;
        this.address = data.address.value;
        this.postal_code = data.postal_code.value;
        this.has_previous_address = data.has_previous_address.value;
    }
}

export class PresentAddress {
    auto_id: string;
    address: string;
    postal_code : string;
    move_date : string;
    telephone_number : string;

    constructor(data : any) {
        this.auto_id= data.auto_id;
        this.address = data.address.value;
        this.postal_code = data.postal_code.value;
        this.move_date = data.move_date.value;
        this.telephone_number = data.telephone_number.value;
    }
}

export class UserDetail {
    contact: string;
    date_of_birth: string;
    email_id: string;
    first_name: string;
    gender: string;
    last_name: string;

    constructor(data : any) {
        this.contact = data.contact.value;
        this.date_of_birth= data.date_of_birth.value;
        this.email_id= data.email_id.value;
        this.first_name= data.first_name.value;
        this.gender= data.gender.value;
        this.last_name= data.last_name.value;
    }
}
