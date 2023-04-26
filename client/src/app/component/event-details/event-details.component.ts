import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../service/event.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: any;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
  ) {
  }
  ngOnInit(): void {
    this.getEvent();
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
}
