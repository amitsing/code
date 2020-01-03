import { FamilyDetails } from "./response";

export class Benificiary {
    auto_id : string;
    nominee_address : string;
    nominee_name : string;
    nominee_relation : string;
    constructor(data : FamilyDetails) {
        this.auto_id = data.auto_id
        this.nominee_address = data.nominee_address.value;
        this.nominee_name = data.nominee_name.value;
        this.nominee_relation = data.nominee_relation.value;
    }

}