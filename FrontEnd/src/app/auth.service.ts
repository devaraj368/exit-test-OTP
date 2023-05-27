import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // 
  server_address: string = "api";

  constructor(private http:HttpClient) { }

  saveEmail(email:any){
    console.log(email)
    return this.http.post(`${this.server_address}/email`,email)
  }
  checkOTP(otp:any){
    return this.http.post(`${this.server_address}/otp`,otp)
  }
}
