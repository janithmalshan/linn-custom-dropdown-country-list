// @ts-ignore
import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
    moduleId: __filename,
    selector: 'custom-select',
    templateUrl: './custom-select.html',
    styleUrls: ['./_custom-select.css']
})
export class CustomSelectComponent {

    @Input()
    public label: string;

    @Input()
    public placeholder: string;

    @Input()
    public opt: any;

    selectedOption: string;
    status: boolean = false;
    myControl = new FormControl();
    filteredOptions: Observable<string[]>;

    private _filter(value: any): string[] {
        let filterValue = value.toString();
        console.log(this.opt);
        return this.opt.filter(option => option.toLowerCase().includes(filterValue));
    }

    public open(event) {
        event.srcElement.classList.add("rotate");
        this.addClass('');

        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    addClass(option) {
        this.selectedOption = option;
        this.status = !this.status;
    }

}
