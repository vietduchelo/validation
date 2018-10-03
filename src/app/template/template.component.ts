import { Component, OnInit } from '@angular/core';
import {Suport} from './../models/support'
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  // ListUser : IUser[]=[];
  // user: any = {
  //   id: this.ListUser.length +1,
  //   name: '',
  //   email: '',
  //   contact: ''
  // };
  support : Suport = <Suport>{
    description:''
  }
  constructor() { }

  ngOnInit() {
  }
  addUser(){
    // this.ListUser.push(this.user)
}
}