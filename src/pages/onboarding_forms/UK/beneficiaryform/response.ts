import { Metadata } from "@ionic-native/file";

export class Nominee {
    layout : Layout;
    benificry : FamilyDetails;
    firstEdit : boolean;

    constructor() {
        this.layout = Layout.FORM,
        this.firstEdit = true;
        this.benificry = new FamilyDetails();
    }

    initializeData(data) {
        this.layout = Layout.CARD;
        this.firstEdit = false;
        this.benificry.initializeFamilyDetails(data);
    }
}

export class FamilyDetails {
    auto_id : string;
    nominee_address : metaData;
    nominee_name : metaData;
    nominee_relation : metaData;
   

    constructor() {
        this.auto_id = "";
        this.nominee_address = new metaData();
        this.nominee_name = new metaData();
        this.nominee_relation = new metaData();
    }

    initializeFamilyDetails(data) {
        this.auto_id = data.auto_id;
        this.nominee_address.InitializeMetaData(data.nominee_address);
        this.nominee_name.InitializeMetaData(data.nominee_name);
        this.nominee_relation.InitializeMetaData(data.nominee_relation);
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

export enum Layout {
    CARD = 'CARD',
    FORM = 'FORM'
}