import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
import {Category} from "../../../model/Category";
import {ActivatedRoute, Router} from "@angular/router";
import {DOMAIN} from "../../../config";

// import * as DOMAIN from "domain";

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit{
  categories: Category[] = [];
  selectedCategory: string;
  protected readonly DOMAIN = DOMAIN;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
    this.categoryService.getCategories().subscribe((data: Category[])=>{
      this.categories = data;
      // console.log((data))
    })
    this.selectedCategory  = 'All events'
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = <string>params.get('category');
      if (!this.selectedCategory) {
        this.selectedCategory = 'All events'
      }
    });
  }

  changeCategory(categoryName: string) {
    this.route.paramMap.subscribe(params => {
      this.selectedCategory = <string>params.get('category');
      if (!categoryName) {
        this.selectedCategory = 'All events'
      }
    });
  }
  logOut() {
    localStorage.removeItem('token');
    // this.logged = false;
  }
}
