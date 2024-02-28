import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

}

let categories;
categories = [
  {
    name: 'Category 1',
    products: [
      {image: '...', name: 'Product 1', description: '...', rating: 4, likes: 0},
      // more products...
    ]
  },
  // more categories...
];
