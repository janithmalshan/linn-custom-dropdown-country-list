import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'src/app/app.component.html',
    styleUrls: ['src/app/_app.css']
})

export class AppComponent {

    @Input()
    opt: string;
    listOne: any = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium",
        "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Georgia", "Hungary", "Ireland", "Italy"];
    listTwo: any = ["Belgium", "Bulgaria", "Croatia", "Denmark", "Estonia", "Finland", "France", "Georgia"];

}
