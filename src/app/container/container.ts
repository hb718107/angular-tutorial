import { Component, ViewChild } from '@angular/core';
import { Search } from './search/search';
import { CommonModule } from '@angular/common';
import { ProductList } from "./product-list/product-list";
import { ProductDetails } from './product-details/product-details';


@Component({
  selector: 'container',
  imports: [Search, CommonModule, ProductList,ProductDetails],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {

    somenames : string[] = ['tony stark','bruce banner','thor','steve rogers','natasha romanoff','Fury','Odin'];

searchText : string = '';
  
  @ViewChild(ProductList) productListComponent : ProductList


setSearchText(value : string){
  this.searchText = value;
}
}
