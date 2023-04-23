import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../model/Category";
import {Event} from "../../model/Event";
import {ActivatedRoute} from "@angular/router";
import {CategoryService} from "../../service/category.service";


@Component({
  selector: 'app-category-events',
  templateUrl: './category-events.component.html',
  styleUrls: ['./category-events.component.css']
})
export class CategoryEventsComponent implements OnInit{
  categories: Category[] = []
  private selectedCategory: Category;
  filteredEvents: Event [] = [];


  constructor(private categoryService: CategoryService, private route: ActivatedRoute) {
    this.selectedCategory = {} as Category
  }

  ngOnInit(): void {
    this.getCategories();
    this.route.paramMap.subscribe(params => {
      const selectedCategoryName = params.get('category');
      const selectedCategory = selectedCategoryName ? this.categories
        .find(c => c.name.toLowerCase() === selectedCategoryName.toLowerCase()) : this.categories[0];
      if(selectedCategory)
        this.selectedCategory = selectedCategory;
      if (selectedCategory) {
        this.selectedCategory = selectedCategory;
        this.getEventsByCategory(selectedCategory.id);
      }
    });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data: Category[])=>{
      this.categories = data;
      this.selectedCategory = data[0];
    })
  }

  getEventsByCategory(categoryId: number){
    this.categoryService.getEventsByCategory(categoryId).subscribe((data: Event[])=>{
      this.filteredEvents = data;
      console.log(data)
    })
  }


}
