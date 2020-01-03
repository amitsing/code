export class OnBoardingForm {
    userData : UserData;
    eduData : EduData;
    emgData : EmgData;
    rmDetail : RmDetail;
    rutData : RutData;
    address : Address;
    passport : Passport;

    //// validation status
    status : boolean = false;

    constructor() {
        this.userData = new UserData();
        this.eduData = new EduData();
        this.emgData = new EmgData();
        this.rmDetail = new RmDetail();
        this.rutData = new RutData();
        this.address = new Address();
        this.passport = new Passport();
    }

    InitializeOnBoarding(data) {
        this.userData.initializeUserData(data.userData);
        this.eduData.initializeEduData(data.eduData);
        this.emgData.initializeEmgData(data.emgData);
        this.rmDetail.initializeRmDetail(data.rmDetail);
        this.rutData.initializeRutData(data.rutData);
        this.address.initializeAddress(data.address);
        this.passport.initializePassport(data.passport); 
    }
}

class Passport {
    passport : metaData;

    constructor() {
        this.passport = new metaData();
    }

    initializePassport(data) {
        this.passport.InitializeMetaData(data.passport);
    }
}

class Address {
    employee_id : metaData;
    address : metaData;
    zipcode : metaData;
    residing_since : metaData;
    nature_of_location : metaData; 
    state : metaData;
    city : metaData;
    country : metaData;
    chile_address : metaData;

    constructor() {
        this.employee_id = new metaData();
        this.address = new metaData();
        this.zipcode = new metaData();
        this.residing_since = new metaData();
        this.nature_of_location = new metaData();
        this.state = new metaData();
        this.city = new metaData();
        this.country = new metaData();
        this.chile_address = new metaData();
    }

    initializeAddress(data) {
        this.employee_id = data.employee_id;
        this.address.InitializeMetaData(data.address)
        this.zipcode.InitializeMetaData(data.zipcode);
        this.residing_since.InitializeMetaData(data.residing_since);
        this.nature_of_location.InitializeMetaData(data.nature_of_location);
        this.state.InitializeMetaData(data.state);
        this.city.InitializeMetaData(data.city);
        this.country.InitializeMetaData(data.country);
        this.chile_address.InitializeMetaData(data.chile_address);
    }
}

class UserData {
    userName : metaData;
    gender : metaData;
    contact : metaData;
    father_name : metaData;
    date_of_birth : metaData;
    place_of_birth : metaData;
    nationality_name : metaData;
    marital_status : metaData;
    email_id : metaData;
    designation : metaData;
    department : metaData;
    date_of_joining : metaData;

    constructor() {
        this.userName = new metaData();
        this.gender = new metaData();
        this.contact = new metaData();
        this.father_name = new metaData();
        this.date_of_birth = new metaData();
        this.place_of_birth = new metaData();
        this.nationality_name = new metaData();
        this.marital_status = new metaData();
        this.email_id = new metaData();
        this.designation = new metaData();
        this.department = new metaData();
        this.date_of_joining = new metaData();
    }

    initializeUserData(data) {
        this.userName.InitializeMetaData(data.userName);
        this.gender.InitializeMetaData(data.gender);
        this.contact.InitializeMetaData(data.contact);
        this.father_name.InitializeMetaData(data.father_name);
        this.date_of_birth.InitializeMetaData(data.date_of_birth);
        this.place_of_birth.InitializeMetaData(data.place_of_birth);
        this.nationality_name.InitializeMetaData(data.nationality_name);
        this.marital_status.InitializeMetaData(data.marital_status);
        this.email_id.InitializeMetaData(data.email_id);
        this.designation.InitializeMetaData(data.designation);
        this.department.InitializeMetaData(data.department);
        this.date_of_joining.InitializeMetaData(data.date_of_joining);
    }
}

class EduData {
    university_name :metaData;
    level_of_education : metaData;
    education_specialization_id : metaData;

    constructor(){
        this.university_name = new metaData();
        this.level_of_education = new metaData();
        this.education_specialization_id = new metaData();
    }

    initializeEduData(data) {
        this.university_name.InitializeMetaData(data.university_name);
        this.level_of_education.InitializeMetaData(data.level_of_education);
        this.education_specialization_id.InitializeMetaData(data.education_specialization_id);
    }

}

class EmgData {
    emg_contact_name : metaData;
    emg_contact_number : metaData;

    constructor() {
        this.emg_contact_name = new metaData();
        this.emg_contact_number = new metaData();
    }

    initializeEmgData(data) {
        this.emg_contact_name.InitializeMetaData(data.emg_contact_name);
        this.emg_contact_number.InitializeMetaData(data.emg_contact_number);
    }
}

class RmDetail {
    contact_person : metaData;

    constructor() {
        this.contact_person = new metaData();
    }

    initializeRmDetail(data) {
        this.contact_person.InitializeMetaData(data.contact_person);
    }
}

class RutData {
    rut_number : metaData;

    constructor() {
        this.rut_number = new metaData();
    }

    initializeRutData(data) {
        this.rut_number.InitializeMetaData(data.rut_number);
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
        this.is_mandatory = false;
    }

    public valueStatus() : boolean {
        if(!this.is_enable ){
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
