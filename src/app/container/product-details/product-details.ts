import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductLister } from '../../Models/Product';
import { ProductList } from '../product-list/product-list';
import { CommonModule } from '@angular/common';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'product-details',
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
   @Input() productListComp : ProductList;
  
     product:ProductLister;

    ngOnInit(){
      this.product = this.productListComp.selectedProduct;
    }

    icons={
      buy:faCartShopping
    }

}
