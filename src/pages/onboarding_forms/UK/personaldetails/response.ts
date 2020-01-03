export class PersonalInfo {
    address : Address;
    bank_detail : BankDetails;
    dependents : Depandent[];
    emergency : EmergencyContact 
    userData : UserDetrail;
    refree : Refrence[];

    //// validation control veriables
    status : boolean = false;

    constructor(){
        this.dependents = []; 
        this.refree = [];
        this.address = new Address();
        this.bank_detail = new BankDetails();
        this.dependents.push(new Depandent());
        this.emergency = new EmergencyContact(); 
        this.userData = new UserDetrail();
        this.refree.push(new Refrence());
    }

    public addDependents() {
        let tempExp = new Depandent();
        this.dependents.push(tempExp);
        console.log(this.dependents);
    }

    public removeDependents(data : Depandent) {
        this.dependents = this.dependents.filter((element)=>{
            return data != element;
        })
    }

    public addReference() {
        let tempRef = new Refrence();
        this.refree.push(tempRef);
        console.log('worked');
    }

    public removeReference(data : Refrence) {
        this.refree = this.refree.filter((element)=>{
            return data != element;
        })
    }

    public initializeModal(data) {
        this.dependents = []; 
        this.refree = [];
        this.address.initializeAddress(data.address);
        this.bank_detail.initializeBankDetails(data.bank_detail);
        this.emergency.initializeEmergencyContact(data.emergency); 
        this.userData.iniializeUserDetails(data.userData);
        data.dependents.forEach(element => {
            let tempExp = new Depandent();
            tempExp.initializeDepandent(element);
            this.dependents.push(tempExp);
        });
        data.refree.forEach(element => {
            let tempRef = new Refrence();
            tempRef.initializeReference(element);
            this.refree.push(tempRef)
        });
    }
}



class Depandent {
    auto_id: string;
    dependent_dob: metaData;
    dependent_name: metaData;

    constructor() {
        this.auto_id = ""
        this.dependent_dob = new metaData();
        this.dependent_name = new metaData();
    }

    public initializeDepandent(data) {
        this.auto_id = data.auto_id;
        this.dependent_dob.InitializeMetaData(data.dependent_dob);
        this.dependent_name.InitializeMetaData(data.dependent_name);
    }
} 


class Address {
    address: metaData;
    auto_id: string;
    postal_code: metaData

    constructor() {
        this.auto_id = ""
        this.address = new metaData();
        this.postal_code = new metaData();
    }

    public initializeAddress(data) {
        this.auto_id = data.auto_id;
        this.address.InitializeMetaData(data.address);
        this.postal_code.InitializeMetaData(data.postal_code);
    }
} 

class BankDetails {
    account_number: metaData;
    auto_id: string;
    bank_name: metaData;
    bank_sort_code: metaData;

    constructor() {
        this.auto_id = ""
        this.account_number = new metaData();
        this.bank_name = new metaData();
        this.bank_sort_code = new metaData();
    }

    public initializeBankDetails(data) {
        this.auto_id = data.auto_id;
        this.bank_name.InitializeMetaData(data.bank_name);
        this.bank_sort_code.InitializeMetaData(data.bank_sort_code);
        this.account_number.InitializeMetaData(data.account_number);
    }
} 

class EmergencyContact {
    auto_id: string;
    emg_contact_address: metaData;
    emg_contact_daytime_contact: metaData;
    emg_contact_name: metaData;
    emg_contact_number: metaData;
    emg_contact_relation: metaData;
    emg_contact_zipcode: metaData;

    constructor() {
        this.auto_id = "";
        this.emg_contact_address = new metaData();
        this.emg_contact_daytime_contact = new metaData();
        this.emg_contact_name = new metaData();
        this.emg_contact_number = new metaData();
        this.emg_contact_relation = new metaData();
        this.emg_contact_zipcode = new metaData();
    }

    public initializeEmergencyContact(data) {
        this.auto_id = data.auto_id
        this.emg_contact_address.InitializeMetaData(data.emg_contact_address);
        this.emg_contact_daytime_contact.InitializeMetaData(data.emg_contact_daytime_contact); 
        this.emg_contact_name.InitializeMetaData(data.emg_contact_name);
        this.emg_contact_number.InitializeMetaData(data.emg_contact_number);
        this.emg_contact_relation.InitializeMetaData(data.emg_contact_relation);
        this.emg_contact_zipcode.InitializeMetaData(data.emg_contact_zipcode);
    }
}

class Refrence {
    auto_id: string;
    company_name: metaData;
    contact: metaData;
    email_id: metaData;
    employee_job_title: metaData;
    from_date_of_employeement: metaData;
    referee_job_title: metaData;
    referee_name: metaData;
    to_date_of_employeement: metaData;

    constructor(){
        this.auto_id = "";
        this.email_id = new metaData();
        this.company_name = new metaData();
        this.contact = new metaData();
        this.employee_job_title = new metaData();
        this.from_date_of_employeement = new metaData();
        this.referee_job_title = new metaData();
        this.referee_name = new metaData();
        this.to_date_of_employeement = new metaData();
    }

    public initializeReference(data) {
        this.auto_id = data.auto_id;
        this.email_id.InitializeMetaData(data.email_id);
        this.company_name.InitializeMetaData(data.company_name);
        this.contact.InitializeMetaData(data.contact);
        this.employee_job_title.InitializeMetaData(data.employee_job_title);
        this.from_date_of_employeement.InitializeMetaData(data.from_date_of_employeement);
        this.referee_job_title.InitializeMetaData(data.referee_job_title);
        this.referee_name.InitializeMetaData(data.referee_name);
        this.to_date_of_employeement.InitializeMetaData(data.to_date_of_employeement);
    }
}

class UserDetrail {
    contact: metaData
    date_of_birth: metaData
    dental_insaurance: metaData
    email_id: metaData
    medical_insaurance: metaData
    nation_insaurance_no: metaData
    nationality: metaData
    userName:metaData

    constructor(){
        this.contact = new metaData();
        this.date_of_birth = new metaData();
        this.dental_insaurance = new metaData();
        this.email_id = new metaData();
        this.medical_insaurance = new metaData();
        this.nation_insaurance_no = new metaData();
        this.nationality = new metaData();
        this.userName = new metaData();
    }

    public iniializeUserDetails(data) {
        this.contact.InitializeMetaData(data.contact);
        this.date_of_birth.InitializeMetaData(data.date_of_birth);
        this.dental_insaurance.InitializeMetaData(data.dental_insaurance);
        this.email_id.InitializeMetaData(data.email_id);
        this.medical_insaurance.InitializeMetaData(data.medical_insaurance);
        this.nation_insaurance_no.InitializeMetaData(data.nation_insaurance_no);
        this.nationality.InitializeMetaData(data.nationality);
        this.userName.InitializeMetaData(data.userName);       
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
        this.hint_applicable = true;
        this.hint = "";
        this.value = "";
        this.is_mandatory = false;
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
}