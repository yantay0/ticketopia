import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../model/Category";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../service/event.service";
import {Event} from "../../model/Event";
import {DOMAIN} from "../../config";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  category: Category;
  filteredEvents: Event[] = [];
  // @Input() isLogged: boolean = false;
  logged: boolean = false;

  constructor(private route: ActivatedRoute, private eventService: EventService, private categoryService :CategoryService) {
    this.category = {} as Category
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category.name = <string>params.get('category');
      console.log(this.category.name)
      this.allEvents();
    });
  }

  private allEvents() {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
      this.filteredEvents = events
      if(this.category.name)
        this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredEvents = this.events.filter(e => e.category.name.toLowerCase() === this.category.name);
    console.log(this.filteredEvents);
    console.log(this.category)
  }

  onToggle($event: boolean) {
    this.logged = true;
  }
  logOut() {
    localStorage.removeItem('token');
    this.logged = false;
  }
}
