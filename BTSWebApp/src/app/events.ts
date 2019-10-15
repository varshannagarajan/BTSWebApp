import { Address } from './address'
import { Contact } from './contact';

export class Events {
    _id: String;
    ev_name: String;
    ev_address: Address;
    ev_category: String[];
    ev_description: String;
    ev_company: String;
    ev_contact: Contact;
    ev_coordinator: String;
    ev_date: Date;
    ev_attendees: String[];
    ev_photo: String;
    ev_private: Boolean;
    ev_invitedUsers: String[];
}

