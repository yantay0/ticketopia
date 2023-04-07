import {Component, OnInit} from '@angular/core';
import {categories} from "../../TempDB";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  categories = categories;
  filteredCategories = [];
  ngOnInit(): void {

  }

}
