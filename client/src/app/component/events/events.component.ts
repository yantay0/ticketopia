import { Component, OnInit } from '@angular/core';
import { Category } from "../../model/Category";
import { ActivatedRoute } from "@angular/router";
import { EventService } from "../../service/event.service";
import { Event } from "../../model/Event";
import {DOMAIN} from "../../config";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  event: any;
  events: Event[] = [];
  category: Category;
  filteredEvents: Event[] = [];

  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.category = {} as Category
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category.name = <string>params.get('category');
      this.allEvents();
    });
  }

  private allEvents() {
    this.eventService.getAllEvents().subscribe(events => {
      this.events = events;
      this.applyFilter();
    });
  }

  private applyFilter() {
    this.filteredEvents = this.events.filter(e => e.category.name.toLowerCase() === this.category.name);
    console.log(this.filteredEvents);
    console.log(this.category)
  }

  getEvent(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.eventService.getEventDetail(+id).subscribe((data) => {
          this.event = data;
        });
      }
    });
  }

  protected readonly DOMAIN = DOMAIN;
}
