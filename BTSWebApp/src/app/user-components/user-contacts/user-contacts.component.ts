import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html'
})
export class UserContactsComponent implements OnInit {
  searchBy: string;
  searchBar: string;
  contacts = new Array();
  filteredContacts = new Array();
  id: String;
  user: User;
  constructor(
    private m: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    this.getAllUserContacts();
    this.filteredContacts = this.contacts;
    console.log(this.m.getCurrentUser());
  }

  viewContact(c: string) {
    this.router.navigate(['/userRead/', c]);
  }

  delContact(c: string) {
    const del = new DeleteContact();
    del.usersEmail = this.user.user_email;
    del.emailToDelete = c;
    console.log(del);
    this.m.deleteContact(del).subscribe(s => {
      // this.filteredContacts = this.contacts;
    });
    this.filteredContacts = this.contacts.filter(
      contact => contact.user_email != del.emailToDelete
    );
    this.contacts = this.filteredContacts;
  }

  getContact(contactUserName: String): Promise<any> {
    return new Promise((resolve, _) => {
      this.m.reqresUserGetByUsername(contactUserName).subscribe(c => {
        resolve(c);
      });
    });
  }

  getAllUserContacts(): void {
    for (let i = 0; i < this.user.user_contacts.length; i++) {
      this.getContact(this.user.user_contacts[i])
        .then(contact => {
          this.contacts.push(contact);
          console.log('Contact: ' + contact);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  search(searchOption: string, searchValue: string): Array<User> {
    let filteredContacts = new Array();
    switch (searchOption) {
      case 'name': {
        filteredContacts = this.contacts.filter(
          contact => contact.user_firstName == searchValue
        );
        console.log('name');
        break;
      }
      case 'company': {
        filteredContacts = this.contacts.filter(
          contact => contact.user_employmentInfo['organization'] == searchValue
        );
        console.log('company');
        break;
      }
      case 'event': {
        filteredContacts = this.contacts.filter(
          contact =>
            contact.user_eventsList.includes(searchValue) &&
            this.user.user_eventsList.includes(searchValue)
        );
        console.log('event found');
        break;
      }
      default: {
        console.log('fail');
        break;
      }
    }
    return filteredContacts;
  }

  onSubmit(): void {
    // when the search button is clicked
    if (this.searchBy && this.searchBar) {
      this.filteredContacts = this.search(this.searchBy, this.searchBar);
    } else {
      this.filteredContacts = this.contacts;
    }
  }
}

export class DeleteContact {
  emailToDelete: string;
  usersEmail: string;
}
