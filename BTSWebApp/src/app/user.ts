import { Contact } from './contact';
import { EmploymentInfo } from './employment-info';

export class User {
  user_email: string;
  user_password: string;
  user_contactInfo: Contact;
  user_firstName: string;
  user_lastName: string;
  user_employementInfo: EmploymentInfo;
  user_photos: string[];
  user_contacts: string[];
  user_favourites: string[];
  user_eventsList: string[];
  user_bio: string;
  user_statusActivated: boolean;
}
