import { Component, OnInit } from '@angular/core';
import { User, PictureURL } from '../../classes/user';
import { Contact } from '../../classes/contact';
import { UserService } from '../../services/user.service';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { ImageUploadService } from '../../services/image-upload.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: [`
    .buttonRow a{
      float: left;
    }
    .buttonRow button{
      float: right;
    }

  `],
})
export class UserUpdateComponent implements OnInit {
  user: User;
  imageObj: File;
  imageUrl: string;

  constructor(
    private m: UserService,
    private router: Router,
    private imageUploadService: ImageUploadService
    ) {
    this.user = _.cloneDeep(this.m.currentUser, true);
    console.log(this.user);

  }

  ngOnInit() {}

  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.imageObj = FILE;
  }

  onImageUpload(profilePicture: Boolean) {
    const imageForm = new FormData();
    const imageExtension = this.imageObj.name.substr(this.imageObj.name.lastIndexOf('.'));
    var imageName = String();
    
    if(profilePicture) {
      imageName = this.user.user_email + imageExtension;
    } else {
      imageName = this.user.user_email + "-logo" + imageExtension;
    }
    
  
    imageForm.append('image', this.imageObj, imageName);
    this.imageUploadService.imageUpload(imageForm).subscribe(res => {
      this.imageUrl = res['image'];

      this.addPictureURLToUser(profilePicture);
    });
  }

  addPictureURLToUser(isProfilePicture: Boolean) {
    const pictureURL = new PictureURL();
    pictureURL.userEmail = this.user.user_email;
    pictureURL.pictureURL = "https://mesh-user-profile-pictures.s3.amazonaws.com/" + this.imageUrl;
    if(isProfilePicture) {
      this.m.addProfilePicture(pictureURL).subscribe();
    } else {
      this.m.addLogoPicture(pictureURL).subscribe();
    }
  }
  // Methods
  onSubmit(): void {
    this.user.user_employmentInfo.occupation = "Manager";
    console.log(this.user.user_employmentInfo.occupation);
    this.m.updateUser(this.user).subscribe();
    this.router.navigate(['/userContacts/']);
    console.log(this.user);
  }
}
