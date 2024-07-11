import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
// Import NotFoundComponent
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
