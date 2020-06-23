import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CourierHomeComponent } from './courier-home/courier-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import {EmployeeSalDetailsComponent } from './employee-sal-details/employee-sal-details.component';
import {CustomerQueryViewAllComponent } from './customer-query-view-all/customer-query-view-all.component';
import {EmpLoginComponent } from './employee/emp-login/emp-login.component';
import {EmpHomeComponent } from './employee/emp-home/emp-home.component';
import {ChangeAdminPwdComponent } from './admin/change-admin-pwd/change-admin-pwd.component';
import { ChangeEmpPasswordComponent} from './employee/change-emp-password/change-emp-password.component';
import { CalculateEmpSalaryComponent} from './admin/calculate-emp-salary/calculate-emp-salary.component';
import { ViewEmpDetailsComponent} from './employee/view-emp-details/view-emp-details.component';
import {ViewEmpSalaryComponent} from './employee/view-emp-salary/view-emp-salary.component';
import {CustomerRegisterComponent} from './customer/customer-register/customer-register.component';
import {CustomerLoginComponent} from './customer/customer-login/customer-login.component';
import {CustomerHomeComponent} from './customer/customer-home/customer-home.component';
import {CustomerQueryComponent} from './customer/customer-query/customer-query.component';
import {ChangeCustomerPwdComponent} from './customer/change-customer-pwd/change-customer-pwd.component';
import {CourierBookingInfoComponent} from './courier/courier-booking-info/courier-booking-info.component';
import {CourierPrivilegesComponent} from './courier/courier-privileges/courier-privileges.component';
import {CustomerRequestViewComponent} from './admin/customer-request-view/customer-request-view.component';
import {AdminRequestViewComponent} from './employee/admin-request-view/admin-request-view.component';
import {ViewStatusComponent} from './customer/view-status/view-status.component';
import {AboutCourierComponent} from './about-courier/about-courier.component';
import {ContactCourierComponent} from './contact-courier/contact-courier.component';



const routes: Routes = [
  {path:'', component: CourierHomeComponent},
  {path:'admin_login', component: AdminLoginComponent},
  {path:'admin_home', component: AdminHomeComponent},
  {path:'emp_reg', component: EmployeeRegisterComponent},
  {path:'emp_details', component: EmployeeDetailsComponent},
  {path:'emp_update', component: EmployeeUpdateComponent},
  {path:'emp_sal_details', component: EmployeeSalDetailsComponent},
  {path:'view_cust_query', component: CustomerQueryViewAllComponent},
  {path:'emp_login', component: EmpLoginComponent},
  {path:'emp_home', component: EmpHomeComponent},
  {path:'admin_pwd_cng', component: ChangeAdminPwdComponent},
  {path:'emp_pwd_cng', component:ChangeEmpPasswordComponent },
  {path:'emp_cal_sal', component: CalculateEmpSalaryComponent },
  {path:'view_emp_detail', component:  ViewEmpDetailsComponent},
  {path:'view_emp_salary', component:  ViewEmpSalaryComponent},
  {path:'cust_register', component:  CustomerRegisterComponent},
  {path:'cust_login', component:  CustomerLoginComponent},
  {path:'cust_home', component:  CustomerHomeComponent},
  {path:'cust_query', component:  CustomerQueryComponent},
  {path:'cust_pwd_cng', component: ChangeCustomerPwdComponent },
  {path:'book_info', component: CourierBookingInfoComponent },
  {path:'courier_privilage', component: CourierPrivilegesComponent },
  {path:'cust_req_view', component: CustomerRequestViewComponent },
  {path:'view_admin_req', component: AdminRequestViewComponent  },
  {path:'view_status', component:  ViewStatusComponent },
  {path:'about_courier', component: AboutCourierComponent  },
  {path:'contact_courier', component:  ContactCourierComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
