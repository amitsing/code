import { Metadata } from "@ionic-native/file";

export class GratuityForm {
    layout : Layout;
    GratuityDetails : GratuityDetails;
    firstEdit : boolean;

    constructor() {
        this.layout = Layout.FORM,
        this.firstEdit = true;
        this.GratuityDetails = new GratuityDetails();
    }

    initializeData(data) {
        this.layout = Layout.CARD;
        this.firstEdit = false;
        this.GratuityDetails.initializeGratuityDetails(data);
    }
}

export class GratuityDetails {
    auto_id : string;
    age_nominee : metaData;
    gratuity_sharing_proportion : metaData;
    nominee_address : metaData;
    nominee_name : metaData;
    relation_nominee : metaData;
   

    constructor() {
        this.auto_id = "";
        this.age_nominee = new metaData();
        this.gratuity_sharing_proportion = new metaData();
        this.nominee_address = new metaData();
        this.nominee_name = new metaData();
        this.relation_nominee = new metaData();
    }

    initializeGratuityDetails(data) {
        this.auto_id = data.auto_id;
        this.age_nominee.InitializeMetaData(data.age_nominee);
        this.gratuity_sharing_proportion.InitializeMetaData(data.gratuity_sharing_proportion);
        this.nominee_address.InitializeMetaData(data.nominee_address);
        this.nominee_name.InitializeMetaData(data.nominee_name);
        this.relation_nominee.InitializeMetaData(data.relation_nominee);
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