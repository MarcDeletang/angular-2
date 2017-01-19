import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { AdminComponent } from './admin/admin.component';
import { AuthCheckerService } from './auth-checker.service'

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
    	path: '', component: ListComponent
    },{
      path: 'new', component: CreateComponent
    },{
      path: 'admin/:data', component: AdminComponent, canActivate: [AuthCheckerService]
    }])
  ],
  providers: [AuthCheckerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
