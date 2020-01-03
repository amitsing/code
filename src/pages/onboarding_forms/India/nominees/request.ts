export class GratuityDetailsRequest {
    auto_id : string;
    age_nominee : string;
    gratuity_sharing_proportion : string;
    nominee_address : string;
    nominee_name : string;
    relation_nominee : string;
    constructor(data) {
        this.age_nominee = data.age_nominee.value;
        this.gratuity_sharing_proportion = data.gratuity_sharing_proportion.value;
        this.nominee_address = data.nominee_address.value;
        this.nominee_name = data.nominee_name.value;
        this.relation_nominee = data.relation_nominee.value;
    }
}
