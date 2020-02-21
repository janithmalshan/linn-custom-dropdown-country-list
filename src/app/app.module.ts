import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CustomSelectComponent} from './custom-dropdown/custom-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, CustomSelectComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}
