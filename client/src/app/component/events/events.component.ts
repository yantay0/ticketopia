import {Component, OnInit} from '@angular/core';
// import {categories} from "../../TempDB";
// import {events} from "../../TempDB";
import {Category} from "../../model/Category";
import {Router} from "@angular/router";
import {DOMAIN} from "../../config";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  categories : Category[] = [];
  selectedCategory: Category;
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[])=>{
      this.categories = data;
      this.selectedCategory = data[0];
    })
  }

  constructor(private router: Router, private categoryService: CategoryService) {
    this.selectedCategory = {} as Category;
  }
  onSelect(category: Category) {
    this.selectedCategory = category;
    console.log(this.selectedCategory)
    if(category.id == 1) this.router.navigate([DOMAIN]);
    else this.router.navigate([`${DOMAIN}/${category.name.toLowerCase()}`])
  }

}
