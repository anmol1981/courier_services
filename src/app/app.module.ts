import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EmpLoginComponent } from './employee/emp-login/emp-login.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import {MatRadioModule} from '@angular/material/radio';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeSalDetailsComponent } from './employee-sal-details/employee-sal-details.component';
import { CustomerQueryViewAllComponent } from './customer-query-view-all/customer-query-view-all.component';
import { ChangeAdminPwdComponent } from './admin/change-admin-pwd/change-admin-pwd.component';
import { ChangeEmpPasswordComponent } from './employee/change-emp-password/change-emp-password.component';
import {MatTableModule} from '@angular/material/table';
import { CalculateEmpSalaryComponent } from './admin/calculate-emp-salary/calculate-emp-salary.component';
import { ViewEmpDetailsComponent } from './employee/view-emp-details/view-emp-details.component';
import { ViewEmpSalaryComponent } from './employee/view-emp-salary/view-emp-salary.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerQueryComponent } from './customer/customer-query/customer-query.component';
import { ChangeCustomerPwdComponent } from './customer/change-customer-pwd/change-customer-pwd.component';
import { CourierBookingInfoComponent } from './courier/courier-booking-info/courier-booking-info.component';
import { CourierPrivilegesComponent } from './courier/courier-privileges/courier-privileges.component';
import { CustomerRequestViewComponent } from './admin/customer-request-view/customer-request-view.component';
import { AdminRequestViewComponent } from './employee/admin-request-view/admin-request-view.component';
import { ViewStatusComponent } from './customer/view-status/view-status.component';
import { AboutCourierComponent } from './about-courier/about-courier.component';
import { ContactCourierComponent } from './contact-courier/contact-courier.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    EmpLoginComponent,

    EmpHomeComponent,
    HeaderComponent,
    EmployeeRegisterComponent,
    EmployeeDetailsComponent,
    EmployeeUpdateComponent,
    EmployeeSalDetailsComponent,
    CustomerQueryViewAllComponent,
    ChangeAdminPwdComponent,
    ChangeEmpPasswordComponent,
    CalculateEmpSalaryComponent,
    ViewEmpDetailsComponent,
    ViewEmpSalaryComponent,
    CustomerRegisterComponent,
    CustomerLoginComponent,
    CustomerHomeComponent,
    CustomerQueryComponent,
    ChangeCustomerPwdComponent,
    CourierBookingInfoComponent,
    CourierPrivilegesComponent,
    CustomerRequestViewComponent,
    AdminRequestViewComponent,
    ViewStatusComponent,
    AboutCourierComponent,
    ContactCourierComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatRadioModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
