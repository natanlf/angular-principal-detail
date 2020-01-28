
import { Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { ContainerComponent } from './container/container.component'

export const ROUTES: Routes = [
   { path: '', component: ContainerComponent },
   { path: 'sobre', component: AboutComponent }
] 