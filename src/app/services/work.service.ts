import { Injectable } from '@angular/core';
import { userDetails } from '../userDetails';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  userData: userDetails[] = [];


  constructor() { }

  addToService(userData: userDetails) {
    this.userData.push(userData);
    console.warn(this.userData);
  }

  getData() {
    return this.userData;
  }

}
