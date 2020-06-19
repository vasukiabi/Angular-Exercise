import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff/staff.component';
import { HoDComponent } from './ho-d/ho-d.component';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [StaffComponent, HoDComponent, PrincipalComponent],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
