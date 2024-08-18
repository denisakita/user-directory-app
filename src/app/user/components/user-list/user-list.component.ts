import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {environment} from "../../../../environments/environment";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {catchError, debounceTime, map, startWith, switchMap} from "rxjs";
import {Router} from "@angular/router";
import {UserModel} from "../../models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  columns: string[] = ['thumbnail', 'name', 'phone', 'email', 'actions'];
  isLoading = true;
  pageSize: number = environment.PAGE_SIZE;
  resultSize: number = 0;
  userDS: MatTableDataSource<UserModel> = new MatTableDataSource<UserModel>();

  @ViewChild('paginator', {static: true}) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  userFG: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.userFG = this.getFilterForm();
    this.initializeUserList();

    this.userFG.valueChanges.pipe(
      debounceTime(300),
      startWith(this.userFG.value),
      switchMap(formValues => this.userService.filterUsers(formValues.name, formValues.email)),
      catchError(() => [])
    ).subscribe(data => this.updateUserDataSource(data));
  }

  getFilterForm() {
    return this.fb.group({
      name: [''],
      email: ['']
    });
  }

  initializeUserList() {
    this.userService.getUsers().pipe(
      map(users => {
        this.isLoading = false;
        this.resultSize = users.length;
        return users;
      }),
      catchError(() => {
        this.isLoading = false;
        this.resultSize = 0;
        return [];
      })
    ).subscribe(data => this.updateUserDataSource(data));
  }

  updateUserDataSource(data: UserModel[]) {
    this.userDS.data = data;
  }

  searchUser() {
    const filterValues = this.userFG.value;
    this.userService.filterUsers(filterValues.name, filterValues.email)
      .subscribe(data => this.updateUserDataSource(data));
  }

  clearUserFG() {
    this.userFG.setValue({name: '', email: ''});
  }

  detailsUser(user: UserModel) {
    const userId = user?.login?.uuid;
    if (userId) {
      this.router.navigate(['/users', userId]);
    } else {
      console.error(`User ID is not defined`);
    }
  }

}
