export class FamilyDetailRequest {
    emg_contact_address : string;
    emg_contact_name : string;
    emg_contact_number : string;

    constructor(data) {
        this.emg_contact_address = data.emg_contact_address.value;
        this.emg_contact_name = data.emg_contact_name.value;
        this.emg_contact_number = data.emg_contact_number.value;
    }
}
