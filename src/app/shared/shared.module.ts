import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ApiService } from './api.service';
import { SharedService } from './shared.service';



@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [ApiService, SharedService],
  declarations: []
})
export class SharedModule { }
