import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { CurrencyConverterComponent } from '../components/currency-converter/currency-converter.component';
import { ViewHistoryComponent } from '../components/view-history/view-history.component';
import { AuthGuard } from '../guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'currency-converter', component: CurrencyConverterComponent, canActivate: [AuthGuard] },
    { path: 'view-history', component: ViewHistoryComponent, canActivate: [AuthGuard] }
];
