import { HR_Details } from "./response";

export class HR_Details_Req {
    other_info : OtherInfo;
    personal_info : PersonalInfo;

    constructor(data : HR_Details) {
        this.other_info = new OtherInfo(data.other_info);
        this.personal_info = new PersonalInfo(data.personal_info);
    }
}

class OtherInfo {
    about_location_constraint : string;
    convicted_detail : string;
    is_convicted_law : string;
    is_location_constraint  : string;

    constructor(data : any) {
        this.is_convicted_law = data.is_convicted_law.value;
        this.is_location_constraint = data.is_location_constraint.value;
        if(this.is_convicted_law == '1') {
            this.convicted_detail = data.convicted_detail.value;
        } else {
            this.convicted_detail = '';
        }

        if(this.is_location_constraint == '1') {
            this.about_location_constraint = data.about_location_constraint.value;
        } else {
            this.about_location_constraint = '';
        }

        
    }
}

class PersonalInfo {
    PAN_number : string;
    aadhaar_number : string;
    available:  string;
    blood_group : string
    contact : string;
    date_of_birth : string;
    date_of_joining : string;
    department:  string
    designation : string
    email_id : string
    emergency_contact : string;
    father_name : string;
    first_name : string
    gender : string
    // guardian : string;
    // guardian_name : string;
    landline : string;
    last_name : string;
    marital_status : string
    middle_name : string;
    nationality_citizen_1 : string
    passport_number : string;
    permanent_address : string
    physically_challanged : string
    physically_challanged_remark : string;
    present_address : string;
    reciept_number : string;

    constructor(data : any) {
        this.aadhaar_number = data.aadhaar_number.value;
        this.available = data.available.value;
        if(this.available == '1') {
            this.PAN_number = data.PAN_number.value;
            this.reciept_number = data.reciept_number.value;
        } else {
            this.PAN_number = data.PAN_number.value;
            this.reciept_number = data.reciept_number.value;
        }
        this.blood_group = data.blood_group.value;
        this.contact = data.contact.value;
        this.date_of_birth = data.date_of_birth.value;
        this.date_of_joining = data.date_of_joining.value;
        this.department = data.department.value;
        this.designation = data.designation.value;
        this.email_id = data.email_id.value;
        this.emergency_contact = data.emergency_contact.value;
        this.father_name = data.father_name.value;
        this.first_name = data.first_name.value;
        this.gender = data.gender.value;
        // this.guardian = data.guardian.value;
        // this.guardian_name = data.guardian_name.value;
        this.landline = data.landline.value;
        this.last_name = data.last_name.value;
        this.marital_status = data.marital_status.value;
        this.middle_name = data.middle_name.value;
        this.nationality_citizen_1 = data.nationality_citizen_1.value;
        this.passport_number = data.passport_number.value;
        this.permanent_address = data.permanent_address.value;
        this.physically_challanged = data.physically_challanged.value;
        if(this.physically_challanged == '1') {
            this.physically_challanged_remark = data.physically_challanged_remark.value;
        } else {
            this.physically_challanged_remark = '';
        }
        this.present_address = data.present_address.value;    
    }
}
