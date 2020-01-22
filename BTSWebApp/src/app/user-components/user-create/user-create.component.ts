import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../classes/user';
import { Contact } from '../../classes/contact';
import { AuthService } from '../../services/auth.service';
import { EmploymentInfo } from 'src/app/classes/employment-info';
import { Address } from 'src/app/classes/address';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html'
})
export class UserCreateComponent implements OnInit {
  user: User;
  createError: string;

  constructor(private a: AuthService, private router: Router) {
    this.user = new User();
    this.user.user_email = '';
    this.user.user_firstName = '';
    this.user.user_lastName = '';
    this.user.user_bio = '';
    this.user.user_statusActivated = false;
    this.user.user_photos = [''];
    this.user.user_contacts = [''];
    this.user.user_favourites = [''];
    this.user.user_eventsList = [''];
    this.user.user_contactInfo = new Contact();
    this.user.user_employmentInfo = new EmploymentInfo();

    // TODO: Unhard code this
    this.user.user_employmentInfo.organization = 'Mesh';
    this.user.user_employmentInfo.occupation = 'Developer';
    this.user.user_employmentInfo.organizationAddress = new Address();
    this.user.user_employmentInfo.organizationAddress.street = 'Seneca Hill';
    this.user.user_employmentInfo.organizationAddress.postalCode = 'M2M 2M2';
    this.user.user_employmentInfo.organizationAddress.city = 'Toronto';
    this.user.user_employmentInfo.organizationAddress.province = 'ON';
    this.user.user_employmentInfo.organizationAddress.country = 'Canada';
    

    

  }

  ngOnInit() {}

  onSubmit(): void {
    this.a.create(this.user).subscribe(
      data => {
        console.log(this.user);
        this.router.navigate(['/userActivate']);
      },
      error => {
        this.createError = error;
      }
    );
  }
}
