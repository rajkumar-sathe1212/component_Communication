import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  list:any;
  data:any;

  constructor(private api:ApiService){
    window.addEventListener('click', ()=>{
      this.api.get("users").subscribe((result:any)=>{
        this.list = result;
      })
    })
   }


  load(){
    this.api.get("users").subscribe((result:any)=>{
      this.list = result;
    })
  }

  ngOnInit(): void {
    this.load();

  }

  remove(data:any){
    this.api.delete("users",data).subscribe((result:any)=>{
      this.data = result;
      this.load();
    })
  }


  //
  count:any = 0;

  increase(){
    this.count++;
  }

  commentCount:any = 0;

  comments:any = [];


  inputName:any = "";


  submit(){
    this.comments.push(this.inputName);
    this.inputName = "";

    this.commentCount++;
  }

}
