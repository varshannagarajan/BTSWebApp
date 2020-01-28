import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  private url = environment.url;
  constructor(private http: HttpClient) {}

  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post(`${this.url}users/upload-picture`, imageForm); // change this to a function in user.service
  }
}
