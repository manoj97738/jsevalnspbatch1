class Myclas {
    public name: string;
    public age: number;
    public getName(params: any) {
        return params;
    }
}
class Myinteface {
    public name: string;
    public age: number;

}
/**
 * sdaskhduhg
 */
export class Student {
    public fruitLiost: Myinteface[]; // [10,20,30] ["As","AS"] [{A:10}] asmhdgashkddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    constructor(a?: string, b?: boolean) {
        this.fruitLiost = [];
        this.fruitLiost.push({ name: "manoj", age: 50 });
    }
    public abc(a?: number): string | void | any {
        return "sasdas";
    }
}

const satish = new Student("satish");
console.log(satish.fruitLiost);
