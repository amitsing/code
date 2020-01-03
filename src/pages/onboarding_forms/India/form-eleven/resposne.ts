export class PF_Form {
    personal_info : PersonalInfo;
    kyc_info : KycInfo;
    pension_info : PensionInfo;

    constructor() {
        this.kyc_info = new KycInfo();
        this.pension_info = new PensionInfo();
        this.personal_info = new PersonalInfo();
    }

    initializePfForm(data) {
        this.kyc_info.initializeKycInfo(data.kyc_info);
        this.pension_info.initializePensionInfo(data.pension_info);
        this.personal_info.initializePersonalInfo(data.personal_info);
    }
}

class PersonalInfo {
    aadhar: metaData;
    contact_no: metaData;
    date_of_birth: metaData;
    date_of_joining: metaData;
    email_id: metaData;
    father_name: metaData;
    first_name: metaData;
    gender: metaData;
    relationship_selected : metaData;
    last_name: metaData;
    marital_status: metaData;
    middle_name: metaData;
    pan_number: metaData;
    passport: metaData;
    passport_expiery_date: metaData;
    passpost_issue_date : metaData;
    spouse_name: metaData;

    constructor() {
        this.aadhar = new metaData();
        this.contact_no = new metaData();
        this.date_of_birth = new metaData();
        this.date_of_joining = new metaData();
        this.email_id = new metaData();
        this.father_name = new metaData();
        this.first_name = new metaData();
        this.gender = new metaData();
        this.last_name = new metaData();
        this.marital_status = new metaData();
        this.middle_name = new metaData();
        this.pan_number = new metaData();
        this.passport = new metaData();
        this.passport_expiery_date = new metaData();
        this.passpost_issue_date  = new metaData();
        this.spouse_name = new metaData();
        this.relationship_selected = new metaData();
    }

    relationShipStatus() : boolean {
        if(this.relationship_selected.value == "") {
            return true;
        } else {
            return false;
        }
    }

    initializePersonalInfo(data) {
        this.relationship_selected.InitializeMetaData(data.relationship_selected);
        this.aadhar.InitializeMetaData(data.aadhar);
        this.contact_no.InitializeMetaData(data.contact_no);
        this.date_of_birth.InitializeMetaData(data.date_of_birth);
        this.date_of_joining.InitializeMetaData(data.date_of_joining);
        this.email_id.InitializeMetaData(data.email_id);
        this.father_name.InitializeMetaData(data.father_name);
        this.first_name.InitializeMetaData(data.first_name);
        this.gender.InitializeMetaData(data.gender);
        this.last_name.InitializeMetaData(data.last_name);
        this.marital_status.InitializeMetaData(data.marital_status);
        this.middle_name.InitializeMetaData(data.middle_name);
        this.pan_number.InitializeMetaData(data.pan_number);
        this.passport.InitializeMetaData(data.passport);
        this.passport_expiery_date.InitializeMetaData(data.passport_expiery_date);
        this.passpost_issue_date .InitializeMetaData(data.passpost_issue_date);
        this.spouse_name.InitializeMetaData(data.spouse_name);
    }
}

class KycInfo {
    is_fresher : boolean;
    bank_account: metaData;
    bank_ifs: metaData;
    bank_name: metaData;
    kyc_auto_id: string;

    constructor() {
        this.is_fresher = true;
        this.bank_account = new metaData();
        this.bank_ifs = new metaData();
        this.bank_name = new metaData();
        this.kyc_auto_id = '';
    }

    initializeKycInfo(data) {
        this.is_fresher = data.is_fresher
        this.bank_account.InitializeMetaData(data.bank_account);
        this.bank_ifs.InitializeMetaData(data.bank_ifs);
        this.bank_name.InitializeMetaData(data.bank_name);
        this.kyc_auto_id = data.kyc_auto_id
    }

    changefresherStatus() : void {
        this.is_fresher = !this.is_fresher;
    }
 }

class PensionInfo {
    city: metaData;
    country: metaData;
    establishment_address: metaData;
    establishment_name: metaData;
    member_eps_ac_no: metaData;
    non_contributory_period: metaData;
    past_doe: metaData;
    past_doj: metaData;
    past_scheme_certificate_no: metaData;
    past_uan: metaData;
    pension_auto_id: string;
    pf_account_number: metaData;
    ppo_number: metaData;
    trust_address: metaData;
    trust_doe: metaData;
    trust_doj: metaData;
    trust_name: metaData;
    trust_non_contributory_period_days: metaData;
    trust_scheme_certificate_no: metaData;
    trust_uan: metaData;
    mem_of_pension : metaData;
    mem_of_provident : metaData;
    is_international_worker : metaData;
    is_exempted_member : metaData;

    constructor () {
        this.city = new metaData();
        this.country = new metaData();
        this.establishment_address = new metaData();
        this.establishment_name = new metaData();
        this.member_eps_ac_no = new metaData();
        this.non_contributory_period = new metaData();
        this.past_doe = new metaData();
        this.past_doj = new metaData();
        this.past_scheme_certificate_no = new metaData();
        this.past_uan = new metaData();
        this.pension_auto_id = ''
        this.pf_account_number = new metaData();
        this.ppo_number = new metaData();
        this.trust_address = new metaData();
        this.trust_doe = new metaData();
        this.trust_doj = new metaData();
        this.trust_name = new metaData();
        this.trust_non_contributory_period_days = new metaData();
        this.trust_scheme_certificate_no = new metaData();
        this.trust_uan = new metaData(); 
        this.mem_of_pension = new metaData();
        this.mem_of_provident = new metaData(); 
        this.is_international_worker = new metaData();
        this.is_exempted_member = new metaData();
    }

    initializePensionInfo(data) {
        this.is_exempted_member.InitializeMetaData(data.is_exempted_member);
        this.is_international_worker.InitializeMetaData(data.is_international_worker);
        this.city.InitializeMetaData(data.city);
        this.country.InitializeMetaData(data.country);
        this.establishment_address.InitializeMetaData(data.establishment_address);
        this.establishment_name.InitializeMetaData(data.establishment_name);
        this.member_eps_ac_no.InitializeMetaData(data.member_eps_ac_no);
        this.non_contributory_period.InitializeMetaData(data.non_contributory_period);
        this.past_doe.InitializeMetaData(data.past_doe);
        this.past_doj.InitializeMetaData(data.past_doj);
        this.past_scheme_certificate_no.InitializeMetaData(data.past_scheme_certificate_no);
        this.past_uan.InitializeMetaData(data.past_uan);
        this.pension_auto_id = data.pension_auto_id
        this.pf_account_number.InitializeMetaData(data.pf_account_number);
        this.ppo_number.InitializeMetaData(data.ppo_number);
        this.trust_address.InitializeMetaData(data.trust_address);
        this.trust_doe.InitializeMetaData(data.trust_doe);
        this.trust_doj.InitializeMetaData(data.trust_doj);
        this.trust_name.InitializeMetaData(data.trust_name);
        this.trust_non_contributory_period_days.InitializeMetaData(data.trust_non_contributory_period_days);
        this.trust_scheme_certificate_no.InitializeMetaData(data.trust_scheme_certificate_no);
        this.trust_uan.InitializeMetaData(data.trust_uan);  
        this.mem_of_pension.InitializeMetaData(data.mem_of_pension);
        this.mem_of_provident.InitializeMetaData(data.mem_of_provident); 
    }
}

class metaData {
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
        this.is_enable = data.is_enable;
        this.hint_applicable = data.hint_applicable;
        this.hint = data.hint;
        this.value = data.value;
        this.is_mandatory = data.is_mandatory;
    }
}