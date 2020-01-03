import { PF_Form } from "./resposne";

export class PF_Form_Req {
    aadhar: string;
    contact_no: string;
    date_of_birth: string;
    date_of_joining: string;
    email_id: string;
    father_name: string;
    first_name: string;
    gender: string;
    relationship_selected : string;
    last_name: string;
    marital_status: string;
    middle_name: string;
    pan_number: string;
    passport: string;
    passport_expiery_date: string;
    passpost_issue_date : string;
    spouse_name: string;

    is_fresher : string;
    bank_account: string;
    bank_ifs: string;
    bank_name: string;
    kyc_auto_id: string;

    city: string;
    country: string;
    establishment_address: string;
    establishment_name: string;
    member_eps_ac_no: string;
    non_contributory_period: string;
    past_doe: string;
    past_doj: string;
    past_scheme_certificate_no: string;
    past_uan: string;
    pension_auto_id: string;
    pf_account_number: string;
    ppo_number: string;
    trust_address: string;
    trust_doe: string;
    trust_doj: string;
    trust_name: string;
    trust_non_contributory_period_days: string;
    trust_scheme_certificate_no: string;
    trust_uan: string;
    mem_of_pension : string;
    mem_of_provident : string;
    is_international_worker : string;
    is_exempted_member : string;

    constructor(data : PF_Form) {
        this.contact_no = data.personal_info.contact_no.value;
        this.date_of_birth = data.personal_info.date_of_birth.value;
        this.date_of_joining = data.personal_info.date_of_joining.value;
        this.email_id = data.personal_info.email_id.value;
        this.first_name = data.personal_info.first_name.value;
        this.gender = data.personal_info.gender.value;
        this.relationship_selected  = data.personal_info.relationship_selected.value;
        if(this.relationship_selected == '1') {
            this.spouse_name = data.personal_info.spouse_name.value;
            this.father_name = data.personal_info.father_name.value;
        } else if (this.relationship_selected == '2'){
            this.father_name = data.personal_info.father_name.value;
            this.spouse_name = data.personal_info.spouse_name.value;
        } else {
            this.father_name = data.personal_info.father_name.value;
            this.spouse_name = data.personal_info.spouse_name.value;
        }
        this.last_name = data.personal_info.last_name.value;
        this.marital_status = data.personal_info.marital_status.value;
        this.middle_name = data.personal_info.middle_name.value;
        console.log(data.kyc_info.is_fresher);
    
        if(data.kyc_info.is_fresher) {
            this.is_fresher = "true";
            this.bank_account = data.kyc_info.bank_account.value;
            this.bank_ifs = data.kyc_info.bank_ifs.value;
            this.bank_name = data.kyc_info.bank_name.value;
            this.kyc_auto_id = data.kyc_info.kyc_auto_id;
            this.aadhar = data.personal_info.aadhar.value;
            this.pan_number = data.personal_info.pan_number.value;
        } else {
            this.is_fresher = "false";
            this.bank_account = data.kyc_info.bank_account.value;
            this.bank_ifs = data.kyc_info.bank_ifs.value;
            this.bank_name = data.kyc_info.bank_name.value;
            this.kyc_auto_id = data.kyc_info.kyc_auto_id;
            this.aadhar = data.personal_info.aadhar.value;
            this.pan_number = data.personal_info.pan_number.value;
        }

        this.is_international_worker  = data.pension_info.is_international_worker.value;
        if(this.is_international_worker == "true") {
            this.city = data.pension_info.city.value;
            this.country = data.pension_info.country.value;
            this.passport = data.personal_info.passport.value;
            this.passport_expiery_date = data.personal_info.passport_expiery_date.value;
            this.passpost_issue_date  = data.personal_info.passpost_issue_date.value;
        } else  {
            this.city = "";
            this.country = "";
            this.passport = "";
            this.passport_expiery_date = "";
            this.passpost_issue_date  = "";
        }

        this.mem_of_provident  = data.pension_info.mem_of_provident.value;
        if(this.mem_of_provident == 'true') {
            this.mem_of_pension = data.pension_info.mem_of_pension.value;
            this.is_exempted_member = data.pension_info.is_exempted_member.value;
            if(this.is_exempted_member == 'true') {
                this.establishment_address = "";
                this.establishment_name = "";
                this.non_contributory_period = "";
                this.past_doe = "";
                this.past_doj = "";
                this.past_scheme_certificate_no = "";
                this.past_uan = "";
                this.pension_auto_id = data.pension_info.pension_auto_id;
                this.pf_account_number = "";
                this.ppo_number = "";
                this.member_eps_ac_no = data.pension_info.member_eps_ac_no.value;
                this.trust_address = data.pension_info.trust_address.value;
                this.trust_doe = data.pension_info.trust_doe.value;
                this.trust_doj = data.pension_info.trust_doj.value;
                this.trust_name = data.pension_info.trust_name.value;
                this.trust_non_contributory_period_days = data.pension_info.trust_non_contributory_period_days.value;
                this.trust_scheme_certificate_no = data.pension_info.trust_scheme_certificate_no.value;
                this.trust_uan = data.pension_info.trust_uan.value;
            } else if (this.is_exempted_member == 'false') {
                this.establishment_address = data.pension_info.establishment_address.value;
                this.establishment_name = data.pension_info.establishment_name.value;
                this.non_contributory_period = data.pension_info.non_contributory_period.value;
                this.past_doe = data.pension_info.past_doe.value;
                this.past_doj = data.pension_info.past_doj.value;
                this.past_scheme_certificate_no = data.pension_info.past_scheme_certificate_no.value;
                this.past_uan = data.pension_info.past_uan.value;
                this.pension_auto_id = data.pension_info.pension_auto_id;
                this.pf_account_number = data.pension_info.pf_account_number.value;
                this.ppo_number = data.pension_info.ppo_number.value;
                this.member_eps_ac_no = "";
                this.trust_address = "";
                this.trust_doe = "";
                this.trust_doj = "";
                this.trust_name = "";
                this.trust_non_contributory_period_days = "";
                this.trust_scheme_certificate_no = "";
                this.trust_uan = "";
            }
        } else {
            this.trust_uan = data.pension_info.trust_uan.value;
            this.mem_of_pension = data.pension_info.mem_of_pension.value;
            this.is_exempted_member = data.pension_info.is_exempted_member.value;
            this.establishment_address = data.pension_info.establishment_address.value;
            this.establishment_name = data.pension_info.establishment_name.value;
            this.non_contributory_period = data.pension_info.non_contributory_period.value;
            this.past_doe = data.pension_info.past_doe.value;
            this.past_doj = data.pension_info.past_doj.value;
            this.past_scheme_certificate_no = data.pension_info.past_scheme_certificate_no.value;
            this.past_uan = data.pension_info.past_uan.value;
            this.pension_auto_id = data.pension_info.pension_auto_id;
            this.pf_account_number = data.pension_info.pf_account_number.value;
            this.ppo_number = data.pension_info.ppo_number.value;
            this.member_eps_ac_no = data.pension_info.member_eps_ac_no.value;
            this.trust_address = data.pension_info.trust_address.value;
            this.trust_doe = data.pension_info.trust_doe.value;
            this.trust_doj = data.pension_info.trust_doj.value;
            this.trust_name = data.pension_info.trust_name.value;
            this.trust_non_contributory_period_days = data.pension_info.trust_non_contributory_period_days.value;
            this.trust_scheme_certificate_no = data.pension_info.trust_scheme_certificate_no.value;
        }
    }
}

