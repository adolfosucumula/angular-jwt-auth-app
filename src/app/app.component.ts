import { Component } from '@angular/core';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jwt-auth-app';

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private storageService: StorageService, private authService: AuthService ) { }

  //Method to controll the user access status.
    ngOnInit(): void {
        //First check if the user is logged in on not, if is true we get user's role and set value for showAdminBoard.
      this.isLoggedIn = this.storageService.isLoggedIn();

      if(this.isLoggedIn) {
        const user = this.storageService.getUser();
        this.roles = user.roles;

        this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
        this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

        this.username = user.username;
        alert(this.username)
      }
    }


    logout(): void {
      this.authService.logout().subscribe({
        next: res => {
          console.log(res);
          this.storageService.clear();

          window.location.reload();

        },
        error: err => {
          alert(err)
          console.log(err);
        }
      });
    }

}
