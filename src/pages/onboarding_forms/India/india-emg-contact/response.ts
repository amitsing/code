export class EmergrncyContact {
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
    emg_contact_address : metaData;
    emg_contact_name : metaData;
    emg_contact_number : metaData;
   

    constructor() {
        this.auto_id = "";
        this.emg_contact_address = new metaData();
        this.emg_contact_name = new metaData();
        this.emg_contact_number = new metaData();
    }

    initializeFamilyDetails(data) {
        this.auto_id = data.auto_id;
        this.emg_contact_address.InitializeMetaData(data.emg_contact_address);
        this.emg_contact_name.InitializeMetaData(data.emg_contact_name);
        this.emg_contact_number.InitializeMetaData(data.emg_contact_number);
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