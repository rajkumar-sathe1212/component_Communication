import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  formgroup:any;
  formArray:any=[] = [];
  list:any;

  message:String = "*After submitting your data please click anywhere on the page to display your data in table";

  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.load();
    this.func();
  }

  load(){
    this.formgroup = new FormGroup({
      name:new FormControl(""),
      age:new FormControl("")
    })


  }

  func(){
    this.api.get("users").subscribe((result:any)=>{
      console.log(result);

    })
  }



  submit(data:any){


      this.api.post("users",data).subscribe((result:any)=>{
        console.log(result);
      })

      this.load();
      this.func();

  }


}
