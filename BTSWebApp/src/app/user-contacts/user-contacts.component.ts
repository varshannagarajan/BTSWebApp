import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-contacts',
  templateUrl: './user-contacts.component.html',
  styleUrls: ['./user-contacts.component.css']
})
export class UserContactsComponent implements OnInit {

  searchBy: String;
  searchBar: String;
  contacts = new Array();
  id: String;
  user: User;
  constructor(
    private route: ActivatedRoute,
    private m: UserService,
    private router: Router
  ) {
    this.user = new User();
    this.user.user_firstName = "George of the Jungle";
  }

  ngOnInit() {
    this.user = this.m.getCurrentUser();
    console.log(this.m.getCurrentUser());
  }

  ngDoCheck(){
    this.user = this.m.getCurrentUser();
  }


  viewContact(c:string){
    console.log(c);
    this.router.navigate(['/userRead/', c]);
    this.m.reqresUserGetByUsername(c).subscribe(s => {
      this.id = s._id;
      console.log(this.id);
      this.router.navigateByUrl('/userRead/'+ s._id);
    });
    
  }

  addContact(c:string){
    console.log(c);
  }

   getContact(contactUserName: String): Promise<any> {
    return new Promise((resolve, reject) => {
      this.m.reqresUserGetByUsername(contactUserName).subscribe(c => {
        resolve(c[0]);
      });
    });
  }

  search(searchOption: String, searchValue: String): Array<User> {
    var filteredContacts = new Array();
    switch(searchOption) {
      case "name": {
        filteredContacts = this.contacts.filter(contact => contact.user_firstName == searchValue);
        console.log("name");
        break;
      }
      case "company": {
        filteredContacts = this.contacts.filter(contact => contact.user_employmentInfo["organization"] == searchValue);
        console.log("company");
        break;
      }
      case "event": {
        console.log("event found");
        break;
      }
      default: {
        console.log("fail");
        break;
      }
    }
    return filteredContacts;
  }

  onSubmit(): void{ // when the search button is clicked
    var filteredContacts = new Array();
    if(this.searchBy && this.searchBar) {
      if(this.contacts.length == 0) {
        
        for(var i = 0; i < this.user.user_contacts.length; i++) {
           this.getContact(this.user.user_contacts[i]).then((contact) => {
            this.contacts.push(contact);
            console.log("Contact: " + contact);
          }).catch((err) => {
            console.log(err);
          });
        }
        filteredContacts = this.search(this.searchBy, this.searchBar);
        console.log(filteredContacts);
      } else {
        // contact array is already prevented. this allows a second search to be faster and not refetch all data again
        filteredContacts = this.search(this.searchBy, this.searchBar);
        console.log(filteredContacts);
      }
     
    } else {
      console.log("null searchBy or searchBar");
    }
  }

}
