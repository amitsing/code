import { PersonalCompliance } from "./response";

export class PersonalComplianceReq {
    auto_id : string;
    contract_type : string;
    job_title : string;
    passport : string;
    right_to_work_doc : string;
    visa_expiry_date : string;
    visa_type : string;
    work_location  : string;
   

    constructor(data: PersonalCompliance) {
        this.auto_id = data.auto_id;
        this.contract_type = data.contract_type.value;
        this.job_title = data.job_title.value;
        this.passport = data.passport.value;
        this.right_to_work_doc = data.right_to_work_doc.value;
        this.visa_expiry_date = data.visa_expiry_date.value;
        this.visa_type = data.visa_type.value;
        this.work_location = data.work_location.value;
    }
} 