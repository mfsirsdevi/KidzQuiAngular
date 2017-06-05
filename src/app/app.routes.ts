// Import our dependencies
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EvaluatorComponent } from './components/evaluator/evaluator.component';
import { DefaultpageComponent } from './components/defaultpage/defaultpage.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './common/auth.guard';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'home',   component: HomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: 'defaultpage',
        component: DefaultpageComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'evaluators',
        component: EvaluatorComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'defaultpage',
        pathMatch: 'full'
      }
    ]
  },
  { path: '**',     component: LoginComponent },
];
