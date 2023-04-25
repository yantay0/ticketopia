import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {DOMAIN} from "../../../config";

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit{
  @Input('category') category:string='All events';
  categories: Category[] = [];
  selectedCategory: string = 'All events';
  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.categoryService.getCategories().subscribe((data: Category[])=>{
      this.categories = data;
      console.log((data))
    })

  }

  ngOnInit(): void {

    }

  changeCategoryColor(categoryName: string) {
    this.selectedCategory = categoryName; // Update the selected category variable
    console.log(this.selectedCategory)
  }

  protected readonly DOMAIN = DOMAIN;
}
