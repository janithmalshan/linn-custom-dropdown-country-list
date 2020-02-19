// @ts-ignore
import {Component, Input} from '@angular/core';

@Component({
    moduleId: __filename,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./_app.css']
})

export class AppComponent {

    @Input()
    opt: string;
    listOne: any = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium",
        "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Georgia", "Hungary", "Ireland", "Italy"];
    listTwo: any = ["Belgium", "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Georgia"];

}
