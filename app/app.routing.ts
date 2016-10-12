import {ModuleWithProviders}		from '@angular/core';
import {Routes, RouterModule} 	from '@angular/router';
import {ClassEditor}						from 'modules/class-editor/class-editor';

export const appRoutes: Routes = [
	{path: '', redirectTo: '/class', pathMatch: 'full', data: {label: false}},
	{path: 'class', component: ClassEditor, data: {label: "Class Editor"}}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);