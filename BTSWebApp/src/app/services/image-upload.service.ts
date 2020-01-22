import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  imageUpload(imageForm: FormData) {
    console.log('image uploading');
    return this.http.post('http://localhost:8080/api/users/upload-picture', imageForm); // change this to a function in user.service
  }
}