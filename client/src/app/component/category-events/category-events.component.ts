import { Component } from '@angular/core';
import {categories, events as allEvents} from "../../TempDB";
import {Category} from "../../model/Category";
import {Event} from "../../model/Event";

@Component({
  selector: 'app-category-events',
  templateUrl: './category-events.component.html',
  styleUrls: ['./category-events.component.css']
})
export class CategoryEventsComponent {
  selectedCategory: Category;
  filteredEvents: Event [];
  // eventsBySelectedCategory : Event[] = events.filter(e => e.category. = this.selectedCategory)
  constructor() {
    this.selectedCategory = categories[0];
    this.filteredEvents = allEvents;
  }
}
