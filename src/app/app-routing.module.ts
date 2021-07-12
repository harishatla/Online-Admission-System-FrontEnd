import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBranchComponent } from './Adminview/add-branch/add-branch.component';
import { AddCourseComponent } from './Adminview/add-course/add-course.component';
import { ApprovedApplicationsComponent } from './Adminview/approved-applications/approved-applications.component';
import { EditBranchComponent } from './Adminview/edit-branch/edit-branch.component';
import { ListApplicationsComponent } from './Adminview/list-applications/list-applications.component';
import { ListBranchComponent } from './Adminview/list-branch/list-branch.component';
import { ListCourseComponent } from './Adminview/list-course/list-course.component';
import { RejectedApplicationsComponent } from './Adminview/rejected-applications/rejected-applications.component';
import { CollegeViewComponent } from './college header/college-view/college-view.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutUsComponent } from './Studentview/about-us/about-us.component';
import { AcknowledgementComponent } from './Studentview/acknowledgement/acknowledgement.component';
import { AddApplicationComponent } from './Studentview/add-application/add-application.component';
import { CampusLifeComponent } from './Studentview/campus-life/campus-life.component';
import { CheckStatusComponent } from './Studentview/check-status/check-status.component';
import { ContactUsComponent } from './Studentview/contact-us/contact-us.component';
import { LoginComponent } from './users/login/login.component';
import { LogoutComponent } from './users/logout/logout.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [

  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'authenticate',
    component: LoginComponent

  },
  {
    path: 'logout',
    component: LogoutComponent
  },

  {
    path: 'college-view',
    component: CollegeViewComponent
  },

  {
    path: "collegeview",
    component: CollegeViewComponent
  },
  {
    path: "add-application",
    component: AddApplicationComponent
  },
  {
    path: "list-applications",
    component: ListApplicationsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent
  },
  {
    path: "about-us",
    component: AboutUsComponent
  },
  {
    path: "campus-life",
    component: CampusLifeComponent
  },
  {
    path: "payment",
    component: PaymentComponent
  },
  {
    path: "list-branch",
    component: ListBranchComponent
  },
  {
    path: "add-branch",
    component: AddBranchComponent
  },
  {
    path: "list-course",
    component: ListCourseComponent
  },
  {
    path: "add-course",
    component: AddCourseComponent
  },
  {
    path: 'edit-branch/:branchId',
    component: EditBranchComponent
  },
  {
    path: "list-applications",
    component: ListApplicationsComponent
  },
  {
    path: "acknowledgement/:applicationId",
    component: AcknowledgementComponent
  },
  {
    path: "check-status",
    component: CheckStatusComponent
  },
  {
    path: "approved-applications",
    component: ApprovedApplicationsComponent
  },
  {
    path: "rejected-applications",
    component: RejectedApplicationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
