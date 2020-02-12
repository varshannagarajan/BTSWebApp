import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styles: [`
    .userInfo{
      display: flex;
      justify-content: space-between;
      align-content: flex-start;
      flex-flow: row wrap;
    }

    .userInfo button{
      height: 30px;
    }

  `],
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
  }

  viewContact(c: string) {
    this.router.navigate(['/userRead/', c]);
  }

  delContact(c: string) {
    const del = new DeleteContact();
    del.usersEmail = this.user.user_email;
    del.emailToDelete = c;
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
        break;
      }
      case 'company': {
        filteredContacts = this.contacts.filter(
          contact => contact.user_employmentInfo['organization'] == searchValue
        );
        break;
      }
      case 'event': {
        filteredContacts = this.contacts.filter(
          contact =>
            contact.user_eventsList.includes(searchValue) &&
            this.user.user_eventsList.includes(searchValue)
        );
        break;
      }
      default: {
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
