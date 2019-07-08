import { Injectable } from '@angular/core';
import {Items} from './amazon';
@Injectable()
export class AmazonService {
  items_list : Items[]=[
    {name: "samsung a70" , values:[10000,12000]},
    {name: "mi" , values:[13000,19000]},
  ]

  constructor() { }
  getPrice(str : String): Array[]{
      for(var i=0;i<this.items_list.length;i++){
        if(this.items_list[i].name==str){
          return this.items_list[i].values;
        }
      }
  }
}
