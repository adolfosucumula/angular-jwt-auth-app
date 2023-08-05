import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //Method to clear the storage session
  clear(): void{
    window.sessionStorage.clear();
  }

  public saveUser(user: any){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  //This method get the user  through the session identified by the user-key
  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if(user) return JSON.parse(user);

    return {};
  }

  // Method to verify is the user is logged in
  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if(user) return true;

    return false;
  }
}
