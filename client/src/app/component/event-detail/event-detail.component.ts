import {Component, OnInit} from '@angular/core';
import {Event} from "../../model/Event";
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../service/event.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit{
  event: Event;
  showTickets = false;

  constructor(private route: ActivatedRoute, private eventService: EventService) {
    this.event = {} as Event
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'))
      this.eventService.getEvent(id).subscribe((event)=>{
        this.event = event;
        // this.event.premiere_date = event.premiere_date
        console.log(event)
      });
    })
  }

}
