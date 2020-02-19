// @ts-ignore
import {NgModule} from '@angular/core';

// @ts-ignore
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CustomSelectComponent} from './custom-dropdown/custom-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, CustomSelectComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
}
