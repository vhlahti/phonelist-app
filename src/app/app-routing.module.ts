import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneDetailComponent } from './phonelist/phone-detail/phone-detail.component';
import { PhonelistComponent } from './phonelist/phonelist.component';

const routes: Routes = [
  {path: '', component: PhonelistComponent},
  {path: 'home', component: PhonelistComponent},
  {path: 'details/:id', component: PhoneDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
