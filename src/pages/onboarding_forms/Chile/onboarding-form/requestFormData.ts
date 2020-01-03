import { OnBoardingForm } from './responseFormData';

export class OnBoardingFormDetails {
    userData : UserData;
    eduData : EduData;
    emgData : EmgData;
    rmDetail : RmDetail;
    rutData : RutData;
    address : Address;
    passport : Passport;

    constructor(data : OnBoardingForm) {
        this.userData = new UserData(data.userData);
        this.eduData = new EduData(data.eduData);
        this.emgData = new EmgData(data.emgData);
        this.rmDetail = new RmDetail(data.rmDetail);
        this.rutData = new RutData(data.rutData);
        this.address = new Address(data.address);
        this.passport = new Passport(data.passport);
    }
}

class Passport {
    passport : string;
    constructor(data) {
        this.passport = data.passport.value;
    }
}

class Address {
    employee_id :string;
    address :string;
    zipcode :string;
    residing_since :string;
    nature_of_location :string; 
    state :string;
    city :string;
    country :string;
    chile_address: string;

    constructor(data) {
        this.employee_id = data.employee_id;
        this.address = data.address.value
        this.zipcode = data.zipcode.value;
        this.residing_since = data.residing_since.value;
        this.nature_of_location = data.nature_of_location.value;
        this.state = data.state.value;
        this.city = data.city.value;
        this.country = data.country.value;
        this.chile_address = data.chile_address.value;
    }
}

class UserData {
    userName :string;
    gender :string;
    contact :string;
    father_name :string;
    date_of_birth :string;
    place_of_birth :string;
    nationality_name :string;
    marital_status :string;
    email_id :string;
    designation :string;
    department :string;
    date_of_joining :string;

    constructor(data) {
        this.userName = data.userName.value;
        this.gender = data.gender.value;
        this.contact = data.contact.value;
        this.father_name = data.father_name.value;
        this.date_of_birth = data.date_of_birth.value;
        this.place_of_birth = data.place_of_birth.value;
        this.nationality_name = data.nationality_name.value;
        this.marital_status = data.marital_status.value;
        this.email_id = data.email_id.value;
        this.designation = data.designation.value;
        this.department = data.department.value;
        this.date_of_joining = data.date_of_joining.value;
    }
}

class EduData {
    university_name : string;
    level_of_education :string;
    education_specialization_id : string;

    constructor(data){
        this.university_name = data.university_name.value;
        this.level_of_education = data.level_of_education.value;
        this.education_specialization_id = data.education_specialization_id.value;
    }
}

class EmgData {
    emg_contact_name :string;
    emg_contact_number :string;

    constructor(data) {
        this.emg_contact_name = data.emg_contact_name.value;
        this.emg_contact_number = data.emg_contact_number.value;
    }
}

class RmDetail {
    contact_person :string;

    constructor(data) {
        this.contact_person = data.contact_person.value;
    }
}

class RutData {
    rut_number :string;

    constructor(data) {
        this.rut_number = data.rut_number.value;
    }

}
