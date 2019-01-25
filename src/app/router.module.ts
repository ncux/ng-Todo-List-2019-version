
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodosComponent } from './components/todos/todos.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const routes: Routes = [
    { path: '', redirectTo: '/todos', pathMatch: 'full'},
    { path: 'todos', component: TodosComponent },
    { path: 'about', component: AboutPageComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})

export class RoutingModule {

}
