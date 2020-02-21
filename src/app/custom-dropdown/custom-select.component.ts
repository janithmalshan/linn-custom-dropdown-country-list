import {Component, Input} from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
    selector: 'custom-select',
    templateUrl: 'src/app/custom-dropdown/custom-select.html',
    styleUrls: ['src/app/custom-dropdown/_custom-select.css']
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
        // console.log(this.opt);
        return this.opt.filter((option: any) => option.toLowerCase().includes(filterValue));
    }

    public open(event: any) {
        // event.srcElement.classList.add("rotate");
        // this.addClass('');

        this.filteredOptions = this.myControl.valueChanges
            .pipe(
                startWith(''),
                map(value => this._filter(value))
            );
    }

    // addClass(option) {
    //     this.selectedOption = option;
    //     this.status = !this.status;
    // }

}
