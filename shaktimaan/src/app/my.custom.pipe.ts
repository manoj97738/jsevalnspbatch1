import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mycustompipe', pure: true })
export class MyCustomPipe implements PipeTransform {
    transform(value: any, val1: any) {
         return value * val1;
    }
}