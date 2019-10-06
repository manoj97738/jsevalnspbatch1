import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AbstractControl } from '@angular/forms';
@Component({
    selector: 'app-form-error',
    templateUrl: './formErrorComp.component.html'
})
export class FormErrorComponent {
    @Input() public controlInstance: AbstractControl;
};