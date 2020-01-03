import { PersonalInfo } from "./response";

export class PersonalInfoReq {

    address : Address;
    bank_detail : BankDetails;
    dependents : Depandent[];
    emergency : EmergencyContact 
    userData : UserDetrail;
    refree : Refrence[];

    constructor(data : PersonalInfo) {
        this.dependents = [];
        this.refree = [];
        this.address = new Address(data.address);
        this.bank_detail = new BankDetails(data.bank_detail);
        this.emergency = new EmergencyContact(data.emergency);
        this.userData = new UserDetrail(data.userData);
        data.dependents.forEach(ele=>{
            this.dependents.push(new Depandent(ele));
        });
        data.refree.forEach(ele=>{
            this.refree.push(new Refrence(ele));
        });
    }

}


class Depandent {
    auto_id: string;
    dependent_dob: string;
    dependent_name: string;

    constructor(data) {
        this.auto_id = data.auto_id
        this.dependent_dob = data.dependent_dob.value;
        this.dependent_name = data.dependent_name.value;
    }

  
} 


class Address {
    address: string;
    auto_id: string;
    postal_code: string

    constructor(data) {
        this.auto_id = data.auto_id
        this.address = data.address.value;
        this.postal_code = data.postal_code.value;
    }

   
} 

class BankDetails {
    account_number: string;
    auto_id: string;
    bank_name: string;
    bank_sort_code: string;

    constructor(data) {
        this.auto_id = data.auto_id
        this.account_number = data.account_number.value;
        this.bank_name = data.bank_name.value;
        this.bank_sort_code = data.bank_sort_code.value;
    }

 
} 

class EmergencyContact {
    auto_id: string;
    emg_contact_address: string;
    emg_contact_daytime_contact: string;
    emg_contact_name: string;
    emg_contact_number: string;
    emg_contact_relation: string;
    emg_contact_zipcode: string;

    constructor(data) {
        this.auto_id = data.auto_id;
        this.emg_contact_address = data.emg_contact_address.value;
        this.emg_contact_daytime_contact = data.emg_contact_daytime_contact.value;
        this.emg_contact_name = data.emg_contact_name.value;
        this.emg_contact_number = data.emg_contact_number.value;
        this.emg_contact_relation = data.emg_contact_relation.value;
        this.emg_contact_zipcode = data.emg_contact_zipcode.value;
    }

  
}

class Refrence {
    auto_id: string;
    company_name: string;
    contact: string;
    email_id: string;
    employee_job_title: string;
    from_date_of_employeement: string;
    referee_job_title: string;
    referee_name: string;
    to_date_of_employeement: string;

    constructor(data){
        this.auto_id = data.auto_id;
        this.email_id = data.email_id.value;
        this.company_name = data.company_name.value;
        this.contact = data.contact.value;
        this.employee_job_title = data.employee_job_title.value;
        this.from_date_of_employeement = data.from_date_of_employeement.value;
        this.referee_job_title = data.referee_job_title.value;
        this.referee_name = data.referee_name.value;
        this.to_date_of_employeement = data.to_date_of_employeement.value;
    }

 
}

class UserDetrail {
    contact: string
    date_of_birth: string
    dental_insaurance: string
    email_id: string
    medical_insaurance: string
    nation_insaurance_no: string
    nationality: string
    userName:string

    constructor(data){
        this.contact = data.contact.value;
        this.date_of_birth = data.date_of_birth.value;
        this.dental_insaurance = data.dental_insaurance.value;
        this.email_id = data.email_id.value;
        this.medical_insaurance = data.medical_insaurance.value;
        this.nation_insaurance_no = data.nation_insaurance_no.value;
        this.nationality = data.nationality.value;
        this.userName = data.userName.value;
    }

   
}