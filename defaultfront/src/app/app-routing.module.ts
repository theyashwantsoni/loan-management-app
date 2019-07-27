import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MemberComponent} from './member/member.component';


const routes: Routes = [
  { path:'', redirectTo:'landing', pathMatch:'full'},
  { path: 'member/:code', component: MemberComponent },
  { path: 'landing', component: HomeComponent  },
  { path: '**', redirectTo:'landing' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }