export interface InsuranceData {
    accidental: Accidental[];
    familyData: FamilyData[]; 
    mediclaim: Mediclaim; 
}

export interface Accidental {
    annual_premium: string;
    auto_id: string;
    is_selected: boolean;
    option_name: string;
    plan_dependent: string;
    plan_type: string;
    sum_assured: string;
}

interface FamilyData {
    auto_id: string;
    member_dob: metaData;
    member_name: metaData;
    gender: metaData;
    member_relation: metaData;
    relation_type: string;
}

interface Mediclaim {
    self_selected : boolean;
    self: Self[];
    self_dependent: Self_dependent[];
}

export interface Self {
    annual_premium: string;
    auto_id: string;
    is_selected: boolean;
    option_name: string;
    plan_dependent: string;
    plan_type: string;
    sum_assured: string;
}

export interface Self_dependent {
    annual_premium: string;
    auto_id: string;
    family_premium: Family_Premium[];
    is_selected: boolean;
    option_name: string;
    plan_dependent: string;
    plan_type: string;
    sum_assured: string;
}

export interface Family_Premium {
    auto_id: string;
    annual_premium: string;
    dependent_id : string;
    family_id: string
    is_selected: boolean
    relation_name: string;
    relation_type: string;
}

export class FamilyFormField {
    relation_type : string;
    family_id : string;
    auto_id : string;
    dependent_id : string;
    member_dob: metaData;
    member_name: metaData;
    gender: metaData;
    member_relation: metaData;

    constructor() {
        this.member_dob = new metaData();
        this.member_name = new metaData();
        this.gender = new metaData();
        this.member_relation = new metaData();
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
        this.is_enable = data.is_enable;
        this.hint_applicable = data.hint_applicable;
        this.hint = data.hint;
        this.value = data.value;
        this.is_mandatory = data.is_mandatory;
    }

}