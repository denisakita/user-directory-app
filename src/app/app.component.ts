import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {UserModule} from "./user/user.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UserModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-directory-app';
}
