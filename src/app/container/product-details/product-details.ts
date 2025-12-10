import { Component } from '@angular/core';
import { ProductLister } from '../../Models/Product';

@Component({
  selector: 'product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {
  product:ProductLister;

}
