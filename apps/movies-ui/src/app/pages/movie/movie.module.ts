import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'
import * as fromComponents from './index'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoggedInAuthGuard, SaveEditedWorkGuard } from '../../auth/auth.guards'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: fromComponents.MovieListComponent },
  {
    path: 'new',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    canDeactivate: [SaveEditedWorkGuard],
    component: fromComponents.MovieEditComponent
  },
  {
    path: ':id',
    pathMatch: 'full',
    component: fromComponents.MovieDetailComponent
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    canActivate: [LoggedInAuthGuard],
    canDeactivate: [SaveEditedWorkGuard],
    component: fromComponents.MovieEditComponent
  }
]

@NgModule({
  declarations: [...fromComponents.components],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forChild(routes)
  ]
})
export class MovieModule {}
