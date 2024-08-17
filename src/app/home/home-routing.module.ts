import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserListComponent} from "../user/components";
import {HomeComponent} from "./components/home/home.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UserListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
