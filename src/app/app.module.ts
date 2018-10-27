import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { MaterializeComponentModule } from './materialize.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { ViewHistoryComponent } from './components/view-history/view-history.component';
import { HeaderComponent } from './components/header/header.component';

import { appRoutes } from './routes/app.route';
import { ConversionState } from './store/conversion.state';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ExchangeHistoryComponent } from './components/exchange-history/exchange-history.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CurrencyConverterComponent,
    ViewHistoryComponent,
    HeaderComponent,
    ExchangeRateComponent,
    ExchangeHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterializeComponentModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    ),
    NgxsModule.forRoot([ConversionState])
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


