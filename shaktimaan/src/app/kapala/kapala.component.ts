import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
    selector: 'app-kapala',
    // template: `
    //     thisd as,dnasd
    //     asdgasd zsmdbaskjdj
    //     {{myStory}}
    // `,
    templateUrl: './kapala.component.html'
})
export class KapalaComponent {
    // interpolation ?
    public myStory: string;
    private mySal: number;
    private mySal2: any;
    newDate = new Date();
    protected user = {
        name: 'manoj',
        age: 15
    };
    constructor(public decimalpipe: DecimalPipe) {
        this.myStory = 'My NAME IS khan AnD and I am Not A CHaiWala';
        this.mySal = 212545.3265695;
        // this.mySal2 = new DecimalPipe('en-US').transform(212545.3265695);
        this.mySal2 = this.decimalpipe.transform(212545.3265695);
        this.registerationForm.valueChanges.subscribe((data) => {
            console.log('form', data);
        });
        this.registerationForm.get('name').valueChanges.subscribe((data) => {
            console.log('control', data);
        })
    }
    // lifecycle hooks

    // registartion form
    registerationForm = new FormGroup({
        name: new FormControl('', Validators.required),  // default is null
        email: new FormControl('xyz@zyx.xom', [Validators.required, Validators.email]),
        address: new FormGroup({
            line1: new FormControl('', this.mycustom),  // default is null
            line2: new FormControl('xyz@zyx.xom'),
            line3: new FormGroup({
                pincode: new FormControl(),
                state: new FormControl()
            })
        }),
        phone: new FormArray([new FormControl('', Validators.required), new FormControl('', Validators.required)]),
        bankAccount: new FormArray([
            new FormGroup({
                name: new FormControl(),
                pincode: new FormControl(),
            })]),
    });
    mycustom(control: AbstractControl): ValidationErrors | null {
        console.log(control.value)
        if (control.value.length < 5) {
            return { error5: true };
        } else {
            return null;
        }
    }
    get name() {
        return this.registerationForm.get('name') as AbstractControl;
    }
    get line1() {
        return this.registerationForm.get('address.line1') as AbstractControl;
    }
    get phone() {
        return this.registerationForm.get('phone') as FormArray;
    }
    get bankAccount() {
        return this.registerationForm.get('bankAccount') as FormArray;
    }
    getControl(cont) {
        return this.registerationForm.get(cont);
    }
    addMoreButtonAddress() {
        this.bankAccount.push(new FormGroup({
            name: new FormControl(),
            pincode: new FormControl(),
        }))
    }
    delForm(i) {
        this.bankAccount.removeAt(i);
    }
    addMoreButton() {
        this.phone.push(new FormControl('', Validators.required));
    }
    del(i) {
        this.phone.removeAt(i)
    }
    /**
     * {
     * name:''
     * age:'',
     * address:{
     *      line1:'',
     *      line2:''
     *  }
     * }
     */
    onClick() {
        console.log(this.registerationForm);
        console.log(this.registerationForm.value);

    }
}