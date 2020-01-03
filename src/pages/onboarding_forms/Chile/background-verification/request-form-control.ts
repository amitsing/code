import { BackgroundVerification } from './response-form-control'

export class SendData {
    highschool : Education;
    graduation : Education;
    postgraduation : Education;
    experience : Experience[];
    background : UserDetrail;
    refrence : Refrence[];

    constructor(data : BackgroundVerification){
        this.experience = [];
        this.refrence = [];
        this.highschool = new Education(data.highschool);
        this.graduation = new Education(data.graduation);
        this.postgraduation = new Education(data.postgraduation);
        data.experience.forEach(element => {
            let tempExp = new Experience(element);
            this.experience.push(tempExp);
        });
        data.refrence.forEach(element => {
            let tempRef = new Refrence(element);
            this.refrence.push(tempRef);
        });
        this.background = new UserDetrail(data.background);
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
    contact_number: string;
    website_link:string;

    constructor(data) {
        this.auto_id = data.auto_id;
        // this.level_of_education = data.level_of_education.value;
        this.education_specialization_id = data.education_specialization_id.value;
        // this.university_name = data.university_name.value;
        this.institution_name = data.institution_name.value;
        // this.is_complete = data.is_complete.value;
        this.education_from_date = data.education_from_date.value;
        this.education_end_date = data.education_end_date.value;
        this.expected_month_for_latest_marksheet = data.expected_month_for_latest_marksheet.value;
        this.address = data.address.value;
        this.contact_number = data.contact_number.value;
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
    last_drawn_sallary_annual: string
    employer_address: string;
    country_id: string;
    state: string;
    city: string;
    zip_code: string;
    company_phone_number: string;
    company_url: string;
    responsibilities: string;
    business_unit: string;
    reason_of_leaving: string;
    reporting_manager: ReportingManeger;
    hr_department : HrDepartment;

    constructor(data) {
        this.auto_id = data.auto_id;
        this.employer_name = data.employer_name.value;
        this.employee_code = data.employee_code.value;
        this.pre_start_date = data.pre_start_date.value;
        this.pre_end_date = data.pre_end_date.value;
        this.job_title = data.job_title.value;
        this.last_drawn_sallary_annual = data.last_drawn_sallary_annual.value;
        this.employer_address = data.employer_address.value;
        this.country_id = data.country_id.value;
        this.state = data.state.value;
        this.city = data.city.value;
        this.zip_code = data.zip_code.value;
        this.company_phone_number = data.company_phone_number.value;
        this.company_url = data.company_url.value;
        this.responsibilities = data.responsibilities.value;
        this.business_unit = data.business_unit.value;
        this.reason_of_leaving = data.reason_of_leaving.value;
        this.reporting_manager = new ReportingManeger(data.reporting_manager);
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

class ReportingManeger {
    supervisorname : string;
    supervisordesignation : string;
    supervisorcontact : string;
    supervisorphonenumber : string;
    supervisoremailid : string;

    constructor(data) {
      this.supervisorname = data.supervisorname.value;
      this.supervisordesignation = data.supervisordesignation.value;
      this.supervisorcontact = data.supervisorcontact.value;
      this.supervisorphonenumber = data.supervisorphonenumber.value;
      this.supervisoremailid = data.supervisoremailid.value;
    }
}

class Refrence {
    auto_id: string;
    company_email: string;
    company_name: string;
    contact_number: string;
    designation: string;
    name: string;
    relationship : string;

    constructor(data){
        this.auto_id = data.auto_id
        this.company_email = data.company_email.value;
        this.company_name = data.company_name.value;
        this.contact_number = data.contact_number.value;
        this.designation = data.designation.value;
        this.name = data.name.value;
        this.relationship = data.relationship.value;
    }
}

class UserDetrail {
    userName: string;
    gender: string;
    contact: string;
    father_name: string;
    date_of_birth: string;
    place_of_birth: string;
    nationality_name: string;
    marital_status: string;
    email_id: string;
    employee_designation: string;
    department: string;
    date_of_joining: string;

    constructor(data) {
        this.userName = data.userName.value;
        this.gender= data.gender;
        this.contact= data.contact;
        this.father_name= data.father_name;
        this.date_of_birth= data.date_of_birth;
        this.place_of_birth= data.place_of_birth;
        this.nationality_name= data.nationality_name;
        this.marital_status= data.marital_status;
        this.email_id= data.email_id;
        this.employee_designation= data.employee_designation
        this.department= data.department
        this.date_of_joining= data.date_of_joining;
    }
}

