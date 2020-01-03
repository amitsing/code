export class Credit {
    credit_detail: CreditDetails;
    present_address: PresentAddress;
    previous_address: PrevAddress;
    userData: UserDetail;

    constructor() {
        this.credit_detail = new CreditDetails();
        this.present_address = new PresentAddress(); 
        this.previous_address = new PrevAddress();
        this.userData = new UserDetail();
    }

    initializeCredit(data:any) {
        this.credit_detail.initializeCreditCardDetails(data.credit_detail);
        this.present_address.initializePresentAddress(data.present_address); 
        this.previous_address.initializePrevAddress(data.previous_address);
        this.userData.initializeUserDetails(data.userData);
    }
}

export class CreditDetails {
    auto_id: string;
    account_number: metaData;
    business_name: metaData;
    card_name: metaData;
    existing_customer: metaData;
    is_title: metaData;
    memorable_word: metaData;
    other: metaData;
    share_pin: metaData;
    sort_code: metaData;
    title: metaData;

    constructor() {
        this.auto_id = "";
        this.account_number = new metaData();
        this.business_name = new metaData();
        this.card_name = new metaData();
        this.existing_customer = new metaData();
        this.is_title = new metaData();
        this.memorable_word = new metaData();
        this.other = new metaData();
        this.share_pin = new metaData();
        this.sort_code = new metaData();
        this.title = new metaData();
    }

    initializeCreditCardDetails(data:any) {
        this.auto_id = data.auto_id;
        this.account_number.InitializeMetaData(data.account_number);
        this.business_name.InitializeMetaData(data.business_name);
        this.card_name.InitializeMetaData(data.card_name);
        this.existing_customer.InitializeMetaData(data.existing_customer);
        this.is_title.InitializeMetaData(data.is_title);
        this.memorable_word.InitializeMetaData(data.memorable_word);
        this.other.InitializeMetaData(data.other);
        this.share_pin.InitializeMetaData(data.share_pin);
        this.sort_code.InitializeMetaData(data.sort_code);
        this.title.InitializeMetaData(data.title);
    }
}

export class PrevAddress {
    auto_id: string;
    address: metaData;
    postal_code : metaData;
    has_previous_address : metaData;

    constructor() {
        this.auto_id= "";
        this.address = new metaData();
        this.postal_code = new metaData();
        this.has_previous_address = new metaData();
    }

    initializePrevAddress(data:any) {
        this.auto_id= data.auto_id;
        this.address.InitializeMetaData(data.address);
        this.postal_code.InitializeMetaData(data.postal_code);
        this.has_previous_address.InitializeMetaData(data.has_previous_address);
    }
}

export class PresentAddress {
    auto_id: string;
    address: metaData;
    postal_code : metaData;
    move_date : metaData;
    telephone_number : metaData;

    constructor() {
        this.auto_id= "";
        this.address = new metaData();
        this.postal_code = new metaData();
        this.move_date = new metaData();
        this.telephone_number = new metaData();
    }

    initializePresentAddress(data:any) {
        this.auto_id= data.auto_id;
        this.address.InitializeMetaData(data.address);
        this.postal_code.InitializeMetaData(data.postal_code);
        this.move_date.InitializeMetaData(data.move_date);
        this.telephone_number.InitializeMetaData(data.telephone_number);
    }
}

export class UserDetail {
    contact: metaData;
    date_of_birth: metaData;
    email_id: metaData;
    first_name: metaData;
    gender: metaData;
    last_name: metaData;

    constructor() {
        this.contact = new metaData();
        this.date_of_birth= new metaData();
        this.email_id= new metaData();
        this.first_name= new metaData();
        this.gender= new metaData();
        this.last_name= new metaData();
    }

    initializeUserDetails(data) {
        this.contact.InitializeMetaData(data.contact);
        this.date_of_birth.InitializeMetaData(data.date_of_birth);
        this.email_id.InitializeMetaData(data.email_id);
        this.first_name.InitializeMetaData(data.first_name);
        this.gender.InitializeMetaData(data.gender);
        this.last_name.InitializeMetaData(data.last_name);
    }
}

export class metaData {
    is_enable: boolean; 
    hint_applicable: boolean; 
    hint: string; 
    value: string;
    is_mandatory : boolean;

    constructor()   {
        this.is_enable =true;
        this.hint_applicable = false;
        this.hint = "";
        this.value = "";
        this.is_mandatory = true;
    }

    public valueStatus() : boolean {
        // console.log('data');
        if(!this.is_enable || !this.is_mandatory){
            return true;
        } else {
            if(this.value ) {
                if(this.value.trim().length > 0) {
                    return true;
                } else return false;   
            } else return false;
        }
    }


    public InitializeMetaData(data) {
        if(data) {
            this.is_enable = data.is_enable;
            this.hint_applicable = data.hint_applicable;
            this.hint = data.hint;
            this.value = data.value;
            this.is_mandatory = data.is_mandatory;    
        } else console.log('field is missing');
    }

    checkWordCount(num: number) : boolean {
        if(this.value){
            if(this.value.length > num) {
                return true;
            } else {
                return false;
            }
        }
    }
}
