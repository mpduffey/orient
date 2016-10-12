import {NgModule}                         from '@angular/core';
import {BrowserModule}                    from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule}                       from '@angular/http';
import {routing, appRoutingProviders}     from './app.routing';

import {AppComponent}                     from './app.component';
import {DataService}                      from 'modules/data-service/data-service';
import {KeysPipe}	            					  from 'modules/keys-pipe/keys-pipe';
import {ClassEditor}                      from 'modules/class-editor/class-editor';
import {SideMenu}                         from 'modules/side-menu/side-menu';
import {ReactiveForm}                     from 'modules/reactive-form/reactive-form';
import {ReactiveFormInput}                from 'modules/reactive-form-input/reactive-form-input';
import {ReactiveSubform}                  from 'modules/reactive-subform/reactive-subform';

@NgModule({
  imports:      [BrowserModule, routing, FormsModule, ReactiveFormsModule, HttpModule],
  declarations: [AppComponent, KeysPipe, ClassEditor, SideMenu, ReactiveForm, ReactiveFormInput, ReactiveSubform],
  exports:      [ClassEditor, SideMenu, ReactiveForm, ReactiveFormInput, ReactiveSubform],
  bootstrap:    [AppComponent],
  providers:    [appRoutingProviders, DataService]
})

export class AppModule { }