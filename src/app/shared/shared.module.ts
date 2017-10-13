import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { HttpModule } from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ApiService],
  declarations: []
})
export class SharedModule { }
