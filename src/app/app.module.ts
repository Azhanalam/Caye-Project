import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { FormsModule }   from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';


import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { HeaderAfterComponent } from './header-after/header-after.component';
import { FooterComponent } from './footer/footer.component';
import { MatListModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatCardModule } from '@angular/material/card';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { SummaryComponent } from './summary/summary.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { ApplicationForm2Component } from './application-form2/application-form2.component';
import { ApplyCayeComponent } from './apply-caye/apply-caye.component';
import { Summary2Component } from './summary2/summary2.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CayeContributionComponent } from './caye-contribution/caye-contribution.component';
import { ContributionFormComponent } from './contribution-form/contribution-form.component';
import { ContributionfilledComponent } from './contributionfilled/contributionfilled.component';
import { TotalcontributionComponent } from './totalcontribution/totalcontribution.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { RefundRequestComponent } from './refund-request/refund-request.component';
import { RefundRequest2Component } from './refund-request2/refund-request2.component';
import { Acknowledgement2Component } from './acknowledgement2/acknowledgement2.component';
import { Acknowledgement3Component } from './acknowledgement3/acknowledgement3.component';
import { EnetsComponent } from './enets/enets.component';
import { AppSuccessfulComponent } from './app-successful/app-successful.component';
import { SubmitStatusComponent } from './submit-status/submit-status.component';
import { HeaderMakecayeComponent } from './header-makecaye/header-makecaye.component';
import { DraftsubmissionComponent } from './draftsubmission/draftsubmission.component';
import { HeaderRegloginComponent } from './header-reglogin/header-reglogin.component';
import { DeductionComponent } from './deduction/deduction.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { HeaderTransactionComponent } from './header-transaction/header-transaction.component';
import { ViewCayeContributionComponent } from './view-caye-contribution/view-caye-contribution.component';
import { ViewCayeRefundReqComponent } from './view-caye-refund-req/view-caye-refund-req.component';
import { ApplyCayeSubmissionNewComponent } from './apply-caye-submission-new/apply-caye-submission-new.component';
import { ApplicationformnewComponent } from './applicationformnew/applicationformnew.component';
import { SummarynewComponent } from './summarynew/summarynew.component';
import { AcknowledgenewComponent } from './acknowledgenew/acknowledgenew.component';
import { RequeststatusnewComponent } from './requeststatusnew/requeststatusnew.component';
import {HeaderModifiedComponent} from './header-modified/header-modified.component';

import { HeaderMakecayeModifiedComponent } from './header-makecaye-modified/header-makecaye-modified.component';
import { HeaderRegloginModifiedComponent } from './header-reglogin-modified/header-reglogin-modified.component';

import { ApplycayenewComponent } from './applycayenew/applycayenew.component';
import { TransactionhistorynewComponent } from './transactionhistorynew/transactionhistorynew.component';
import { HeaderTransactionModifiedComponent } from './header-transaction-modified/header-transaction-modified.component';
import { TablehistoryComponent } from './tablehistory/tablehistory.component';
import { FooternewComponent } from './footernew/footernew.component';
import { Footernew2Component } from './footernew2/footernew2.component';
import { FooterModifiedComponent } from './footer-modified/footer-modified.component';

// import { HeaderReuseComponent } from './header-reuse/header-reuse.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HeaderAfterComponent,
    FooterComponent,
    LoginComponent,
    WelcomeComponent,
    ApplicationFormComponent,
    SummaryComponent,
    AcknowledgementComponent,
    ApplicationForm2Component,
    ApplyCayeComponent,
    Summary2Component,
    UserpageComponent,
    CayeContributionComponent,
    ContributionFormComponent,
    ContributionfilledComponent,
    TotalcontributionComponent,
    TransactionStatusComponent,
    RefundRequestComponent,
    RefundRequest2Component,
    Acknowledgement2Component,
    Acknowledgement3Component,
    EnetsComponent,
    AppSuccessfulComponent,
    SubmitStatusComponent,
    HeaderMakecayeComponent,
    DraftsubmissionComponent,
    HeaderRegloginComponent,
    DeductionComponent,
    TransactionHistoryComponent,
    HeaderTransactionComponent,
    ViewCayeContributionComponent,
    ViewCayeRefundReqComponent,
    ApplyCayeSubmissionNewComponent,
    ApplicationformnewComponent,
    SummarynewComponent,
    AcknowledgenewComponent,
    RequeststatusnewComponent,
    HeaderModifiedComponent,
    ViewCayeRefundReqComponent,
    ApplycayenewComponent,
    HeaderModifiedComponent,
    ViewCayeRefundReqComponent,
    HeaderMakecayeModifiedComponent,
    HeaderRegloginModifiedComponent,

    HeaderTransactionModifiedComponent,

    TransactionhistorynewComponent,
    HeaderTransactionModifiedComponent,
    TablehistoryComponent,
    FooternewComponent,
    Footernew2Component,
    TablehistoryComponent,
    FooterModifiedComponent
  ],
  imports: [
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  // {provide: LocationStrategy, useClass: HashLocationStrategy}
  bootstrap: [AppComponent]
})
export class AppModule { }
