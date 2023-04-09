import {Component, OnInit} from '@angular/core';
import {categories} from "../../TempDB";
import {events} from "../../TempDB";
import {Category} from "../../model/Category";
import {Router} from "@angular/router";
import {DOMAIN} from "../../config";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  categories = categories;
  selectedCategory: Category;
  // ngOnInit(): void {
  //
  // }

  constructor(private router: Router) {
    this.selectedCategory = categories[0];
  }
  onSelect(category: Category) {
    this.selectedCategory = category;
    if(category.id == 1) this.router.navigate([DOMAIN]);
    else this.router.navigate([`${DOMAIN}/${category.name.toLowerCase()}`])
  }


}
