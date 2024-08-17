import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {catchError, of, switchMap} from 'rxjs';
import {UserModel} from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: UserModel | null = null;
  error: string | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const userId = params.get('id');
          if (userId) {
            return this.userService.getUserById(userId);
          } else {
            return of(null);
          }
        }),
        catchError(() => {
          this.isLoading = false;
          this.error = 'Error fetching user details';
          return of(null);
        })
      )
      .subscribe(user => {
        this.user = user;
        this.isLoading = false;
      });
  }


  goBack(): void {
    this.router.navigate(['/users']);
  }
}
