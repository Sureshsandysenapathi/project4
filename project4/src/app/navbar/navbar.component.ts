import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',

})
export class NavbarComponent {
  name='suresh senapathi';
  reg='221801340007';
  domain='software technology';
  isheadingtag:boolean=false;
  mycolor="blue"
  mystyle:object={
    color:'white',
    background:'green',
    border:'5px solid red',
  }
  userName(e:any){
    this.name=e.target.value
  }
myName='senapathi suresh'

nameChange(e:any){
  this.myName=e.target.value
}

mycount:number=0;


increment() {
  this.mycount+=1
}

decrement() {
  this.mycount-=1
 
}

a=10
b=20
items=[
  {name:'ganesh',regno:5},
  {name:'suresh',regno:7},
  {name:'pavan',regno:8},
  {name:'vamsi',regno:9},
  {name:'vasu',regno:10},
  {name:'giri',regno:11},
  {name:'karthik',regno:12},
  {name:'koti',regno:13},
  {name:'rakesh',regno:14},
  {name:'srjuna',regno:15},
  {name:'gani',regno:16},
  {name:'laya',regno:17},
  {name:'jagadessh',regno:18},
  {name:'mahesh',regno:19},
  {name:'jasuu',regno:20},
  {name:'harsitha',regno:21},
  {name:'varsitha',regno:22},
  
]
condition:string='1'

}
