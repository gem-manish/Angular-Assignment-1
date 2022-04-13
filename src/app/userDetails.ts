import { Injectable } from "@angular/core";

@Injectable()
export class userDetails{
    name:string="";
    gender:string="";
    email:string="";
    mobile:number=0
    category:string="";
    profilePhoto : string="";
    ct:boolean=false;
    cplus:boolean=false;
    java:boolean=false;
    python:boolean=false;
    javascript:boolean=false;
    filterdata: any;

    constructor() { }

   get data(): any{
    return this.filterdata;
    }

    set data(val: any){
        this.filterdata = val;
        console.log(this.filterdata);
    }
}