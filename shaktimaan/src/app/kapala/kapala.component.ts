import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
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
    }
    // lifecycle hooks
}