export class FamilyDetailRequest {
    member_name : string;
    member_relation : string;
    member_occupation : string;
    member_dob : string;
    contact_number : string;
    gender:string;

    constructor(data) {
        this.member_name = data.member_name.value;
        this.member_relation = data.member_relation.value;
        this.member_occupation = data.member_occupation.value;
        this.member_dob = data.member_dob.value;
        this.contact_number = data.contact_number.value;
        this.gender = data.gender.value;
    }
}
