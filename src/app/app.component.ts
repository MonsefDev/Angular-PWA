import { Component, OnInit } from '@angular/core';
import { ApiService, Item } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PwaDemo';
  items:Array<Item>;

  constructor(private apiservice:ApiService){

  }

  ngOnInit(){
    this.fetchData();
  }
  fetchData(){
    this.apiservice.fetch().subscribe(
      (data: Array<Item>)=>{
      console.log(data);
      this.items=data;
      },
      (err)=>{
      console.log(err);
    });
  }
}
