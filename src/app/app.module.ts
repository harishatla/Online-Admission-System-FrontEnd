import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './users/register/register.component';
import { LogoutComponent } from './users/logout/logout.component';
import { LoginComponent } from './users/login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { CollegeViewComponent } from './college header/college-view/college-view.component';
import { ListApplicationsComponent } from './Adminview/list-applications/list-applications.component';
import { AddApplicationComponent } from './Studentview/add-application/add-application.component';
import { CampusLifeComponent } from './Studentview/campus-life/campus-life.component';
import { AboutUsComponent } from './Studentview/about-us/about-us.component';
import { ContactUsComponent } from './Studentview/contact-us/contact-us.component';
import { ListBranchComponent } from './Adminview/list-branch/list-branch.component';
import { ListCourseComponent } from './Adminview/list-course/list-course.component';
import { AddBranchComponent } from './Adminview/add-branch/add-branch.component';
import { AddCourseComponent } from './Adminview/add-course/add-course.component';
import { EditBranchComponent } from './Adminview/edit-branch/edit-branch.component';
import { AcknowledgementComponent } from './Studentview/acknowledgement/acknowledgement.component';
import { CheckStatusComponent } from './Studentview/check-status/check-status.component';
import { ApprovedApplicationsComponent } from './Adminview/approved-applications/approved-applications.component';
import { PendingApplicationsComponent } from './Adminview/pending-applications/pending-applications.component';
import { RejectedApplicationsComponent } from './Adminview/rejected-applications/rejected-applications.component';


  
@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    HeaderComponent,
    CollegeViewComponent,
    ListApplicationsComponent,
    AddApplicationComponent,
    CampusLifeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ListBranchComponent,
    ListCourseComponent,
    AddBranchComponent,
    AddCourseComponent,
    EditBranchComponent,
    AcknowledgementComponent,
    CheckStatusComponent,
    ApprovedApplicationsComponent,
    PendingApplicationsComponent,
    RejectedApplicationsComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
