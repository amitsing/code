import { InsuranceData, FamilyFormField } from "./response";

export class InsuranceSendData {
    accidental: {option_id ?: string}= {};
    familyData: FamilyForm[] = []; 
    mediclaim: {option_id ?: string, self_dependent?:string} = {};
    
    constructor(data:InsuranceData,familydata:FamilyFormField[]) {
        data.accidental.forEach(ele=>{
            if(ele.is_selected){
                this.accidental.option_id = ele.auto_id;
            }
        });
        if(data.mediclaim.self_selected) {
            this.mediclaim.self_dependent = 'false';
            data.mediclaim.self.forEach(ele=>{
                if(ele.is_selected) {
                    this.mediclaim.option_id = ele.auto_id;
                }
            });
        } else {
            this.mediclaim.self_dependent = 'true';
            data.mediclaim.self_dependent.forEach(ele=>{
                if(ele.is_selected) {
                    this.mediclaim.option_id = ele.auto_id;
                }
            });
        }

       

        familydata.forEach(ele=>{
            let temp : FamilyForm = new FamilyForm(ele);
            this.familyData.push(temp);
        })
        
    }
}


export class FamilyForm {
    relation_type : string;
    family_id : string;
    dependent_id : string;
    auto_id :string;
    member_dob: string;
    member_name: string;
    gender: string;
    relation_name: string;
    source : string;

    constructor(data:FamilyFormField) {
        this.auto_id = data.auto_id;
        if(data.dependent_id == null) {
            this.dependent_id = "";
        } else {
            this.dependent_id = data.dependent_id;
        }
        this.family_id = data.family_id;
        this.relation_type = data.relation_type;
        this.member_dob = data.member_dob.value;
        this.member_name = data.member_name.value;
        this.gender = data.gender.value;
        this.relation_name = data.member_relation.value;
        this.source = '1';
    }
}