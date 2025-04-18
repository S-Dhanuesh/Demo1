import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BudgetListComponent } from './components/budget/budget-list/budget-list.component';
import { BudgetFormComponent } from './components/budget-form/budget-form.component';
import { ExpensesPageComponent } from './pages/expenses-page/expenses-page.component'; // ✅ Add this import
import { AnalysisComponent } from './pages/analysis-page/analysis-page.component'; // ✅ Add this import

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirect to dashboard
  { path: 'dashboard', component: DashboardComponent },      // Dashboard page
  { path: 'budgets', component: BudgetListComponent },       // Budget list page
  { path: 'add-budget', component: BudgetFormComponent },    // Add budget page
  { path: 'expenses', component: ExpensesPageComponent },    // ✅ Expenses page
  { path: 'analysis', component: AnalysisComponent },    // ✅ Add Analysis page route here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
