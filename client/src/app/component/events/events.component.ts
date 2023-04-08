import {Component, OnInit} from '@angular/core';
import {categories} from "../../TempDB";
import {events} from "../../TempDB";
import {Category} from "../../model/Category";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  categories = categories;

  filteredCategories = events;
  allEvents = events;
  selectedCategory: String;

  ngOnInit(): void {

  }

  constructor() {
    this.selectedCategory = "Concert";
  }


  displayEventsByCategory(){

  }

  selectCategory(category: Category) {
    this.categories.forEach(c => c.selected = false)
    category.selected = true;
  }

}
