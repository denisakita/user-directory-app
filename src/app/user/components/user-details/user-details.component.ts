import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user.service';
import {catchError, of, switchMap} from 'rxjs';
import {UserModel} from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user!: null | UserModel;
  error: string | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const userId = params.get('id');
          console.log(userId)
          if (userId) {
            return this.userService.getUserById(userId);
          } else {
            return of(null);
          }
        }),
        catchError(() => {
          this.isLoading = false;
          return of(null);
        })
      )
      .subscribe(user => {
        this.user = user;
        console.log(user)
        this.isLoading = false;
      });
  }

}
