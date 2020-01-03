import { BackgroundVerification } from './response'

export class SendData {
    highschool : Education;
    graduation : Education;
    postgraduation : Education;
    experience : Experience[];
    // background : UserDetrail;
    refrence : Refrence[];
    joinee_info : JoineeInfo;
    permanent_add : Address;
    present_add : Address;
    previous_add : Address[];

    constructor(data : BackgroundVerification){
        this.experience = [];
        this.refrence = [];
        this.previous_add = [];
        this.highschool = new Education(data.highschool);
        this.graduation = new Education(data.graduation);
        this.postgraduation = new Education(data.postgraduation);
        this.permanent_add = new Address(data.permanent_add);
        this.present_add = new Address(data.present_add);
        this.joinee_info = new JoineeInfo(data.joinee_info);
        data.previous_add.forEach(element=>{
            let tempAdd = new Address(element);
            this.previous_add.push(tempAdd);
        })
        data.experience.forEach(element => {
            let tempExp = new Experience(element);
            this.experience.push(tempExp);
        });
        data.refrence.forEach(element => {
            let tempRef = new Refrence(element);
            this.refrence.push(tempRef);
        });
        // this.background = new UserDetrail(data.background);
    }
}

class Education {
    is_mandatory : string;
    data : EducationDetails;

    constructor(data) {
        this.is_mandatory = this.getMandatoryStatus(data.is_mandatory);
        this.data = new EducationDetails(data.data);
    }

    getMandatoryStatus(data:boolean) : string {
        if(data) return "1";
         else return "0"
    }

}

class EducationDetails {
    auto_id: number;
    level_of_education: number;
    education_specialization_id: string;
    // university_name: string;
    institution_name: string;
    // is_complete: string;
    education_from_date: string;
    education_end_date:string;
    expected_month_for_latest_marksheet: string;
    address: string;
    education_contact_number: string;
    website_link:string;

    constructor(data) {
        this.auto_id = data.auto_id;
        this.level_of_education = data.level_of_education;
        this.education_specialization_id = data.education_specialization_id.value;
        // this.university_name = data.university_name.value;
        this.institution_name = data.institution_name.value;
        // this.is_complete = data.is_complete.value;
        this.education_from_date = data.education_from_date.value;
        this.education_end_date = data.education_end_date.value;
        this.expected_month_for_latest_marksheet = data.expected_month_for_latest_marksheet.value;
        this.address = data.address.value;
        this.education_contact_number = data.contact_number.value;
        this.website_link = data.website_link.value;
    }
} 

class Experience {
    auto_id : string;
    employer_name: string;
    employee_code: string;
    pre_start_date: string;
    pre_end_date: string;
    job_title:  string
    // last_drawn_sallary_annual: string
    employer_address: string;
    exp_country_id: string;
    exp_state: string;
    exp_city: string;
    exp_zipcode: string;
    company_phone_number: string;
    company_url: string;
    part_time : string;
    contact_auth : string;
    reason_of_leaving: string;
    // reporting_manager: ReportingManeger;
    hr_department : HrDepartment;

    constructor(data) {
        this.auto_id = data.auto_id;
        this.employer_name = data.employer_name.value;
        this.employee_code = data.employee_code.value;
        this.pre_start_date = data.pre_start_date.value;
        this.pre_end_date = data.pre_end_date.value;
        this.job_title = data.job_title.value;
        // this.last_drawn_sallary_annual = data.last_drawn_sallary_annual.value;
        this.employer_address = data.employer_address.value;
        this.exp_country_id = data.country_id.value;
        this.exp_state = data.state.value;
        this.exp_city = data.city.value;
        this.exp_zipcode = data.zip_code.value;
        this.company_phone_number = data.company_phone_number.value;
        this.company_url = data.company_url.value;
        this.part_time = data.part_time.value;
        this.contact_auth = data.contact_auth.value;
        this.reason_of_leaving = data.reason_of_leaving.value;
        // this.reporting_manager = new ReportingManeger(data.reporting_manager);
        this.hr_department = new HrDepartment(data.hr_department);
    }
}

class HrDepartment {
    hrname : string;
    hrdesignation : string;
    hrmobile : string;
    hrphone : string;
    hremailid : string;

    constructor(data) {
      this.hrname = data.hrname.value;
      this.hrdesignation = data.hrdesignation.value;
      this.hrmobile = data.hrmobile.value;
      this.hrphone = data.hrphone.value;
      this.hremailid = data.hremailid.value;
    }
}

// class ReportingManeger {
//     supervisorname : string;
//     supervisordesignation : string;
//     supervisorcontact : string;
//     supervisorphonenumber : string;
//     supervisoremailid : string;

//     constructor(data) {
//       this.supervisorname = data.supervisorname.value;
//       this.supervisordesignation = data.supervisordesignation.value;
//       this.supervisorcontact = data.supervisorcontact.value;
//       this.supervisorphonenumber = data.supervisorphonenumber.value;
//       this.supervisoremailid = data.supervisoremailid.value;
//     }
// }

class Refrence {
    auto_id: string;
    company_email: string;
    company_name: string;
    contact_number: string;
    // designation: string;
    name: string;
    relationship : string;

    constructor(data){
        this.auto_id = data.auto_id
        this.company_email = data.company_email.value;
        this.company_name = data.company_name.value;
        this.contact_number = data.contact_number.value;
        // this.designation = data.designation.value;
        this.name = data.name.value;
        this.relationship = data.relationship.value;
    }
}

class Address {
    auto_id: string;
    address_type: null
    address_type_2: null;
    available_person_contact_number : string;
    city : string;
    complete_address : string;
    country : string;
    country_area_code : string;
    end_date : string;
    start_date : string;
    state : string;
    zipcode : string;

    constructor(data) {
        this.auto_id = data.auto_id;
        this.address_type = data.address_type
        this.address_type_2 = data.address_type_2;
        this.available_person_contact_number = data.available_person_contact_number.value;
        this.city = data.city.value;
        this.complete_address = data.complete_address.value;
        this.country = data.country.value;
        this.country_area_code = data.country_area_code.value;
        this.end_date = data.end_date.value;
        this.start_date = data.start_date.value;
        this.state = data.state.value;
        this.zipcode = data.zipcode.value;
    }
}

class JoineeInfo {
    contact : string;
    date_of_birth : string;    
    first_name : string;
    home_phone : string;
    is_convicted_law : string;
    last_name : string;
    location_authorized_for_work : string;
    middle_name : string;
    passport_number : string;
    sin_no : string;

    constructor(data) {
        this.contact = data.contact.value;
        this.date_of_birth = data.date_of_birth.value;    
        this.first_name = data.first_name.value;
        this.home_phone = data.home_phone.value;
        this.is_convicted_law = data.is_convicted_law.value;
        this.last_name = data.last_name.value;
        this.location_authorized_for_work = data.location_authorized_for_work.value;
        this.middle_name = data.middle_name.value;
        this.passport_number = data.passport_number.value;
        this.sin_no = data.sin_no.value;
    }
}

// class UserDetrail {
//     userName: string;
//     gender: string;
//     contact: string;
//     father_name: string;
//     date_of_birth: string;
//     place_of_birth: string;
//     nationality_name: string;
//     marital_status: string;
//     email_id: string;
//     employee_designation: string;
//     department: string;
//     date_of_joining: string;

//     constructor(data) {
//         this.userName = data.userName.value;
//         this.gender= data.gender;
//         this.contact= data.contact;
//         this.father_name= data.father_name;
//         this.date_of_birth= data.date_of_birth;
//         this.place_of_birth= data.place_of_birth;
//         this.nationality_name= data.nationality_name;
//         this.marital_status= data.marital_status;
//         this.email_id= data.email_id;
//         this.employee_designation= data.employee_designation
//         this.department= data.department
//         this.date_of_joining= data.date_of_joining;
//     }
// }

