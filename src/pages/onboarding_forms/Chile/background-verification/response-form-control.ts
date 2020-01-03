export class BackgroundVerification {
    highschool : Education;
    graduation : Education;
    postgraduation : Education;
    experience : Experience[];
    background : UserDetrail;
    refrence : Refrence[];

    //// validation control veriables
    status : boolean = false;

    constructor(){
        this.experience = []; 
        this.refrence = [];
        this.highschool = new Education();
        this.graduation = new Education();
        this.postgraduation = new Education();
        this.experience.push(new Experience());
        this.background = new UserDetrail();
        this.refrence.push(new Refrence());
    }

    public addExperirnceDetail() {
        let tempExp = new Experience();
        this.experience.push(tempExp);
        console.log(this.experience);
    }

    public removeExperirnceDetail(data : Experience) {
        this.experience = this.experience.filter((element)=>{
            return data != element;
        })
    }

    public addReference() {
        let tempRef = new Refrence();
        this.refrence.push(tempRef);
        console.log('worked');
    }

    public removeReference(data : Refrence) {
        this.refrence = this.refrence.filter((element)=>{
            return data != element;
        })
    }

    public initializeModal(data) {
        this.experience = [];
        this.refrence = [];
        this.highschool.initializeEducation(data.highschool);
        this.graduation.initializeEducation(data.graduation);
        this.postgraduation.initializeEducation(data.postgraduation);
        data.experience.forEach(element => {
            let tempExp = new Experience();
            tempExp.initializeExperience(element);
            this.experience.push(tempExp);
        });
        this.background.iniializeUserDetails(data.background);
        data.refrence.forEach(element => {
            let tempRef = new Refrence();
            tempRef.initializeReference(element);
            this.refrence.push(tempRef)
        });
    }

    chanegGraduationMandatoryStatus() {
        this.graduation.is_mandatory = !this.graduation.is_mandatory;
        if(!this.graduation.is_mandatory){
            this.postgraduation.is_mandatory = false;
        }
    }
    chanegPostGraduationMandatoryStatus() {
        this.postgraduation.is_mandatory = !this.postgraduation.is_mandatory
    }
}

class Education {
    is_mandatory : boolean;
    data : EducationDetails;

    constructor() {
        this.is_mandatory = false;
        this.data = new EducationDetails();
    }

    public initializeEducation(data) {
        this.is_mandatory = data.is_mandatory;
        this.data.initializeEduDetails(data.data)
    }
}

class EducationDetails {
    auto_id: string;
    level_of_education: string;
    education_specialization_id: metaData;
    university_name: metaData;
    institution_name: metaData;
    is_complete: metaData;
    education_from_date: metaData;
    education_end_date:metaData;
    expected_month_for_latest_marksheet: metaData;
    address: metaData;
    contact_number: metaData;
    website_link:metaData;

    constructor() {
        this.auto_id = ""
        this.level_of_education = "";
        this.education_specialization_id = new metaData();
        // this.university_name = data.university_name.value;
        this.institution_name = new metaData();
        // this.is_complete = data.is_complete.value;
        this.education_from_date = new metaData();
        this.education_end_date = new metaData();
        this.expected_month_for_latest_marksheet = new metaData();
        this.address = new metaData();
        this.contact_number = new metaData();
        this.website_link = new metaData();
    }

    public initializeEduDetails(data) {
        this.auto_id = data.auto_id;
        this.level_of_education = data.level_of_education.value;
        this.education_specialization_id.InitializeMetaData(data.education_specialization_id);
        // this.university_name = data.university_name.value;
        this.institution_name.InitializeMetaData(data.institution_name);
        // this.is_complete = data.is_complete.value;
        this.education_from_date.InitializeMetaData(data.education_from_date);
        this.education_end_date.InitializeMetaData(data.education_end_date);
        this.expected_month_for_latest_marksheet.InitializeMetaData(data.expected_month_for_latest_marksheet);
        this.address.InitializeMetaData(data.address);
        this.contact_number.InitializeMetaData(data.contact_number);
        this.website_link.InitializeMetaData(data.website_link);
    }
} 

class Experience {
    auto_id : string;
    employer_name: metaData;
    employee_code: metaData;
    pre_start_date: metaData;
    pre_end_date: metaData;
    job_title:  metaData
    last_drawn_sallary_annual: metaData
    employer_address: metaData;
    country_id: metaData;
    state: metaData;
    city: metaData;
    zip_code: metaData;
    company_phone_number: metaData;
    company_url: metaData;
    responsibilities: metaData;
    business_unit: metaData;
    reason_of_leaving: metaData;
    reporting_manager: ReportingManeger;
    hr_department : HrDepartment;

    constructor() {
        this.auto_id = "";
        this.employer_name = new metaData();
        this.employee_code = new metaData();
        this.pre_start_date = new metaData();
        this.pre_end_date = new metaData();
        this.job_title = new metaData();
        this.last_drawn_sallary_annual = new metaData();
        this.employer_address = new metaData();
        this.country_id = new metaData();
        this.state = new metaData();
        this.city = new metaData();
        this.zip_code = new metaData();
        this.company_phone_number = new metaData();
        this.company_url = new metaData();
        this.responsibilities = new metaData();
        this.business_unit = new metaData();
        this.reason_of_leaving = new metaData();
        this.reporting_manager = new ReportingManeger();
        this.hr_department = new HrDepartment();
    }

    public initializeExperience(data) {
        this.auto_id = data.auto_id
        this.employer_name.InitializeMetaData(data.employer_name);
        this.employee_code.InitializeMetaData(data.employee_code); 
        this.pre_start_date.InitializeMetaData(data.pre_start_date);
        this.pre_end_date.InitializeMetaData(data.pre_end_date);
        this.job_title.InitializeMetaData(data.job_title);
        this.last_drawn_sallary_annual.InitializeMetaData(data.last_drawn_sallary_annual);
        this.employer_address.InitializeMetaData(data.employer_address);
        this.country_id.InitializeMetaData(data.country_id);
        this.city.InitializeMetaData(data.city);
        this.state.InitializeMetaData(data.state);
        this.zip_code.InitializeMetaData(data.zip_code);
        this.company_phone_number.InitializeMetaData(data.company_phone_number);
        this.company_url.InitializeMetaData(data.company_url);
        this.responsibilities.InitializeMetaData(data.responsibilities);
        this.business_unit.InitializeMetaData(data.business_unit);
        this.reason_of_leaving.InitializeMetaData(data.reason_of_leaving);
        this.reporting_manager.initializeReportingManager(data.reporting_manager);
        this.hr_department.initializeHrDepartment(data.hr_department);
    }
}

class HrDepartment {
    hrname : metaData;
    hrdesignation : metaData;
    hrmobile : metaData;
    hrphone : metaData;
    hremailid : metaData;

    constructor() {
        this.hrname = new metaData();
        this.hrdesignation = new metaData();
        this.hrmobile = new metaData();
        this.hrphone = new metaData();
        this.hremailid = new metaData();
    }

    public initializeHrDepartment(data) {
        this.hrname.InitializeMetaData(data.hrname);
        this.hrdesignation.InitializeMetaData(data.hrdesignation);
        this.hrmobile.InitializeMetaData(data.hrmobile);
        this.hrphone.InitializeMetaData(data.hrphone);
        this.hremailid.InitializeMetaData(data.hremailid);
    }
}

class ReportingManeger {
    supervisorname : metaData;
    supervisordesignation : metaData;
    supervisorcontact : metaData;
    supervisorphonenumber : metaData;
    supervisoremailid : metaData;

    constructor() {
        this.supervisorname = new metaData();
        this.supervisordesignation = new metaData();
        this.supervisorcontact = new metaData();
        this.supervisorphonenumber = new metaData();
        this.supervisoremailid = new metaData();
    }

    public initializeReportingManager(data) {
        this.supervisorname.InitializeMetaData(data.supervisorname);
        this.supervisordesignation.InitializeMetaData(data.supervisordesignation);
        this.supervisorcontact.InitializeMetaData(data.supervisorcontact);
        this.supervisorphonenumber.InitializeMetaData(data.supervisorphonenumber);
        this.supervisoremailid.InitializeMetaData(data.supervisoremailid);
    }
}

class Refrence {
    auto_id: string;
    company_email: metaData;
    company_name: metaData;
    contact_number: metaData;
    designation: metaData;
    name: metaData;
    relationship : metaData;

    constructor(){
        this.auto_id = "";
        this.company_email = new metaData();
        this.company_name = new metaData();
        this.contact_number = new metaData();
        this.designation = new metaData();
        this.name = new metaData();
        this.relationship = new metaData();
    }

    public initializeReference(data) {
        this.auto_id = data.auto_id;
        this.company_email.InitializeMetaData(data.company_email);
        this.company_name.InitializeMetaData(data.company_name);
        this.contact_number.InitializeMetaData(data.contact_number);
        this.designation.InitializeMetaData(data.designation);
        this.name.InitializeMetaData(data.name);
        this.relationship.InitializeMetaData(data.relationship);
    }
}

class UserDetrail {
    userName: metaData;
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

    constructor(){
        this.userName = new metaData();
        this.gender= "";
        this.contact= "";
        this.father_name= "";
        this.date_of_birth= "";
        this.place_of_birth= "";
        this.nationality_name= "";
        this.marital_status= "";
        this.email_id= "";
        this.employee_designation= "";
        this.department= ""
        this.date_of_joining= "";
    }

    public iniializeUserDetails(data) {
        this.userName.InitializeMetaData(data.userName);
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
        this.is_enable = data.is_enable;
        this.hint_applicable = data.hint_applicable;
        this.hint = data.hint;
        this.value = data.value;
        this.is_mandatory = data.is_mandatory;
    }
}