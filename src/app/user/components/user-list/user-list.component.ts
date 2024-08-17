import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import {environment} from "../../../../environments/environment";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatPaginator, MatPaginatorIntl} from "@angular/material/paginator";
import {catchError, map, merge, startWith, switchMap} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  columns: string[] = ['name', 'email', 'actions'];
  isLoading = true;
  pageSize: number = environment.PAGE_SIZE;
  resultSize: number = 0;
  userDS: MatTableDataSource<User> = new MatTableDataSource<User>();

  @ViewChild('paginator', {static: true}) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);
  userFG: FormGroup = new FormGroup({});

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.userFG = this.getFilterForm();
    this.initializeUserList();
  }

  getFilterForm() {
    return this.fb.group({
      name: [''],
      email: ['']
    });
  }

  initializeUserList() {
    merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => this.loadUserList()),
        map(response => this.handleUserResponse(response)),
        catchError(() => this.handleUserError())
      ).subscribe((data: User[]) => this.updateUserDataSource(data));
  }

  loadUserList() {
    this.isLoading = true;
    return this.userService.getUsers();
  }

  handleUserResponse(response: { results: User[], info: { page: number } }) {
    this.isLoading = false;
    this.resultSize = response.info.page;
    return response.results;
  }

  handleUserError() {
    this.isLoading = false;
    this.resultSize = 0;
    return [];
  }

  updateUserDataSource(data: User[]) {
    this.userDS.data = data;
  }

  getList() {
    this.loadUserList().subscribe((data) => this.updateUserList(data));
  }

  updateUserList(data: { results: User[], info: { page: number } }) {
    if (data) {
      this.resultSize = data.info.page;
      this.userDS.data = data.results;
    }
    this.isLoading = false;
  }

  searchUser() {
    this.paginator.pageIndex = 0;
    this.getList();
  }

  clearUserFG() {
    this.userFG.setValue({name: '', email: ''});
  }

  detailsUser(user: User) {
    console.log("see details");
  }

  addUser() {
    console.log("add user");
  }
}
