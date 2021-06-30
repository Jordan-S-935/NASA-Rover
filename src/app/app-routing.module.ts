import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuriosityComponent } from './curiosity/curiosity.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { SpiritComponent } from './spirit/spirit.component';

const routes: Routes = [
  {path: 'curiosity', component: CuriosityComponent},
  {path: 'opporunity', component: OpportunityComponent},
  {path: 'spirit', component: SpiritComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
