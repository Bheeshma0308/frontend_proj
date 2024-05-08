import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SelfReportPopUpComponent } from './user-details/self-report-pop-up/self-report-pop-up.component';
import { SavePopUpComponent } from './user-details/self-report-pop-up/save-pop-up/save-pop-up.component';
import { AppRoutingModule } from './app-routing.module';
import { CancelPopUpComponent } from './user-details/self-report-pop-up/cancel-pop-up/cancel-pop-up.component';

import { KpisListComponent } from './kpis-list/kpis-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule} from '@angular/material/table';
import { KpiDialogComponent } from './kpi-dialog/kpi-dialog.component';
import { DeleteDailogComponent } from './delete-dailog/delete-dailog.component';
import { TopAchieversComponent } from './top-achievers/top-achievers.component';
import { AllTopAchieversComponent } from './all-top-achievers/all-top-achievers.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { KpiWeightsComponent } from './kpi-weights/kpi-weights.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TopScorerComponent } from './top-scorer/top-scorer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SuccessCriteriaCoeComponent } from './success-criteria-coe/success-criteria-coe.component';
import { SuccessCriteriaComponent } from './success-criteria/success-criteria.component';
import { TableDataComponent } from './table-data/table-data.component';


@NgModule({
  declarations: [
    AppComponent,
    KpisListComponent,
    HeaderComponent,
    KpiDialogComponent,
    DeleteDailogComponent,
    FooterComponent,
    LoginPageComponent,
    TopAchieversComponent,
    AllTopAchieversComponent,
    KpisListComponent,
    KpiDialogComponent,
    TopAchieversComponent,
    DeleteDailogComponent,
    AllTopAchieversComponent,
    UserDetailsComponent,
    BoxComponent,
    KpiWeightsComponent,
    TopScorerComponent,
    CancelPopUpComponent,
    SavePopUpComponent,
    SelfReportPopUpComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    SuccessCriteriaCoeComponent,
    SuccessCriteriaComponent,
    TableDataComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }