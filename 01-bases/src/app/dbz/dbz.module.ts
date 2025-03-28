import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    FormComponent
  ],
  exports: [
    DbzMainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
