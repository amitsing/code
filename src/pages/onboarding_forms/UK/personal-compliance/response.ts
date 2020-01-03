export class PersonalCompliance {
    auto_id : string;
    contract_type: metaData;
    job_title: metaData;
    passport: metaData;
    right_to_work_doc: metaData;
    visa_expiry_date: metaData;
    visa_type: metaData;
    work_location : metaData
   

    constructor() {
        this.auto_id = "";
        this.contract_type = new metaData();
        this.job_title = new metaData();
        this.passport = new metaData();
        this.right_to_work_doc = new metaData();
        this.visa_expiry_date = new metaData();
        this.visa_type = new metaData();
        this.work_location = new metaData();
    }

    initializePersonalCompliance(data) {
        this.auto_id = data.auto_id;
        this.contract_type.InitializeMetaData(data.contract_type);
        this.job_title.InitializeMetaData(data.job_title);
        this.passport.InitializeMetaData(data.passport);
        this.right_to_work_doc.InitializeMetaData(data.right_to_work_doc);
        this.visa_expiry_date.InitializeMetaData(data.visa_expiry_date);
        this.visa_type.InitializeMetaData(data.visa_type);
        this.work_location.InitializeMetaData(data.work_location);
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
        if(data) {
            this.is_enable = data.is_enable;
            this.hint_applicable = data.hint_applicable;
            this.hint = data.hint;
            this.value = data.value;
            this.is_mandatory = data.is_mandatory;    
        } else console.log('field is missing');
    }
}
