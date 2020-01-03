export class HR_Details {
    other_info : OtherInfo;
    personal_info : PersonalInfo;

    constructor() {
        this.other_info = new OtherInfo();
        this.personal_info = new PersonalInfo();
    }

    initializeData(data : any) {
        this.other_info.initializeData(data.other_info);
        this.personal_info.initializeData(data.personal_info);
    }
}

class OtherInfo {
    about_location_constraint: metaData;
    convicted_detail: metaData;
    is_convicted_law: metaData;
    is_location_constraint : metaData;

    constructor() {
        this.about_location_constraint = new metaData();
        this.convicted_detail = new metaData();
        this.is_convicted_law = new metaData();
        this.is_location_constraint = new metaData();
    }

    initializeData(data : any) {
        this.is_convicted_law.InitializeMetaData(data.is_convicted_law);
        this.about_location_constraint.InitializeMetaData(data.about_location_constraint);
        this.convicted_detail.InitializeMetaData(data.convicted_detail);
        this.is_location_constraint.InitializeMetaData(data.is_location_constraint);   
    }
}

class PersonalInfo {
    PAN_number: metaData;
    aadhaar_number: metaData;
    available:  metaData;
    blood_group: metaData
    contact: metaData;
    date_of_birth: metaData;
    date_of_joining: metaData;
    department:  metaData
    designation: metaData
    email_id: metaData
    emergency_contact: metaData;
    father_name: metaData;
    first_name: metaData
    gender: metaData
    // guardian: metaData;
    // guardian_name: metaData;
    landline: metaData;
    last_name: metaData;
    marital_status: metaData
    middle_name: metaData;
    nationality_citizen_1: metaData
    passport_number: metaData;
    permanent_address: metaData
    physically_challanged: metaData
    physically_challanged_remark: metaData;
    present_address: metaData;
    reciept_number: metaData;

    constructor() {
        this.PAN_number = new metaData();
        this.aadhaar_number = new metaData();
        this.available = new metaData();
        this.blood_group = new metaData();
        this.contact = new metaData();
        this.date_of_birth = new metaData();
        this.date_of_joining = new metaData();
        this.department = new metaData();
        this.designation = new metaData();
        this.email_id = new metaData();
        this.emergency_contact = new metaData();
        this.father_name = new metaData();
        this.first_name = new metaData();
        this.gender = new metaData();
        // this.guardian = new metaData();
        // this.guardian_name = new metaData();
        this.landline = new metaData();
        this.last_name = new metaData();
        this.marital_status = new metaData();
        this.middle_name = new metaData();
        this.nationality_citizen_1 = new metaData();
        this.passport_number = new metaData();
        this.permanent_address = new metaData();
        this.physically_challanged = new metaData();
        this.physically_challanged_remark = new metaData();
        this.present_address = new metaData();
        this.reciept_number = new metaData();
    }

    initializeData(data : any) {
        this.PAN_number.InitializeMetaData(data.PAN_number);
        this.aadhaar_number.InitializeMetaData(data.aadhaar_number);
        this.available.InitializeMetaData(data.available);
        this.blood_group.InitializeMetaData(data.blood_group);
        this.contact.InitializeMetaData(data.contact);
        this.date_of_birth.InitializeMetaData(data.date_of_birth);
        this.date_of_joining.InitializeMetaData(data.date_of_joining);
        this.department.InitializeMetaData(data.department);
        this.designation.InitializeMetaData(data.designation);
        this.email_id.InitializeMetaData(data.email_id);
        this.emergency_contact.InitializeMetaData(data.emergency_contact);
        this.father_name.InitializeMetaData(data.father_name);
        this.first_name.InitializeMetaData(data.first_name);
        this.gender.InitializeMetaData(data.gender);
        // this.guardian.InitializeMetaData(data.guardian);
        // this.guardian_name.InitializeMetaData(data.guardian_name);
        this.landline.InitializeMetaData(data.landline);
        this.last_name.InitializeMetaData(data.last_name);
        this.marital_status.InitializeMetaData(data.marital_status);
        this.middle_name.InitializeMetaData(data.middle_name);
        this.nationality_citizen_1.InitializeMetaData(data.nationality_citizen_1);
        this.passport_number.InitializeMetaData(data.passport_number);
        this.permanent_address.InitializeMetaData(data.permanent_address);
        this.physically_challanged.InitializeMetaData(data.physically_challanged);
        this.physically_challanged_remark.InitializeMetaData(data.physically_challanged_remark);
        this.present_address.InitializeMetaData(data.present_address);
        this.reciept_number.InitializeMetaData(data.reciept_number);
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