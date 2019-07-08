import { Component, OnInit } from '@angular/core';
import {Items} from '../amazon';
import {AmazonService} from '../amazon.service';
@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent implements OnInit {
  search_item:string;
  str1: String;
  item = new AmazonService;
  item_price[];
  print=0;
  constructor() {

     }

     search(){
            this.item_price=this.item.getPrice(this.search_item);
            this.print=1;
     }
  ngOnInit() {
  }
}
