import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CustomSelectComponent} from './custom-dropdown/custom-select.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {UpgradeModule} from "@angular/upgrade/static";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, UpgradeModule],
    declarations: [AppComponent, CustomSelectComponent],
    bootstrap: [AppComponent],
    providers: []
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) { }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, [name], { strictDi: true });
    }
}
