import { Metadata } from "@ionic-native/file";

export class Data {
    layout : Layout;
    familyDetails : FamilyDetails;
    firstEdit : boolean;

    constructor() {
        this.layout = Layout.FORM,
        this.firstEdit = true;
        this.familyDetails = new FamilyDetails();
    }

    initializeData(data) {
        this.layout = Layout.CARD;
        this.firstEdit = false;
        this.familyDetails.initializeFamilyDetails(data);
    }
}

export class FamilyDetails {
    auto_id : string;
    member_name : metaData;
    member_relation : metaData;
    member_occupation : metaData;
    member_dob : metaData;
    contact_number : metaData;
    gender : metaData;
    constructor() {
        this.auto_id = "";
        this.member_name = new metaData();
        this.member_relation = new metaData();
        this.member_occupation = new metaData();
        this.member_dob = new metaData();
        this.contact_number = new metaData();
        this.gender = new metaData();
    }

    initializeFamilyDetails(data) {
        this.auto_id = data.auto_id;
        this.member_name.InitializeMetaData(data.member_name);
        this.member_relation.InitializeMetaData(data.member_relation);
        this.member_occupation.InitializeMetaData(data.member_occupation);
        this.member_dob.InitializeMetaData(data.member_dob);
        this.contact_number.InitializeMetaData(data.contact_number);
        this.gender.InitializeMetaData(data.gender);
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

export enum Layout {
    CARD = 'CARD',
    FORM = 'FORM'
}