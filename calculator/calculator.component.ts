import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
  myImage:string='../assets/greenary.jpg'
  //myImage:string= 'https://explore.zoom.us/docs/image/postattendee/postattendee-groupimg.png'
  heading:string='performing calculations';
  applyClass:boolean=false;
  applyStyle:boolean=true;
  res:any
  add(num1x:any,num2y:any){
   this.res=Number(num1x)+Number(num2y);
    console.log(this.res)
}
sub(num1x:any,num2y:any){
  this.res=Number(num1x)-Number(num2y);
   console.log(this.res)
}
mul(num1x:any,num2y:any){
  this.res=Number(num1x)*Number(num2y);
   console.log(this.res)
}
div(num1x:any,num2y:any){
  this.res=Number(num1x)/Number(num2y);
   console.log(this.res)
}
}
