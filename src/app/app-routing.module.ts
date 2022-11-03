import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsViewComponent } from './accounts-view/accounts-view.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionViewComponent } from './transaction-view/transaction-view.component';

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "accounts-view", component: AccountsViewComponent },
  { path: "transaction-view", component: TransactionViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
