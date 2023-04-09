import {Component, Input, OnInit} from '@angular/core';
import {categories, events, events as allEvents} from "../../TempDB";
import {Category} from "../../model/Category";
import {Event} from "../../model/Event";
import {ActivatedRoute} from "@angular/router";
import {DOMAIN} from "../../config";

@Component({
  selector: 'app-category-events',
  templateUrl: './category-events.component.html',
  styleUrls: ['./category-events.component.css']
})
export class CategoryEventsComponent implements OnInit{
  private selectedCategory?: Category = categories[0];
  filteredEvents?: Event [];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const selectedCategoryName = params.get('category');
      const selectedCategory = selectedCategoryName ?  categories
        .find(c => c.name.toLowerCase() === selectedCategoryName.toLowerCase()) : categories[0];
      this.selectedCategory = selectedCategory;
      if (selectedCategory) {
        this.selectedCategory = selectedCategory;
        this.filterByCategory(selectedCategory.id);
      }
    });
  }
  constructor(private route: ActivatedRoute) {}

  filterByCategory(categoryId: number){
    this.filteredEvents = events.filter(e => e.category.id === categoryId);
  }

}
