import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    InfiniteScrollModule
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule
  ]
})
export class SharedModule { }
