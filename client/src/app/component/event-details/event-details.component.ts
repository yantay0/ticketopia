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
<<<<<<< HEAD
        this.eventService.getEventDetail(+id).subscribe((data) => {
=======
        this.eventService.getEventDetail(id).subscribe((data) => {
>>>>>>> 19d2bc383e3f82e517204bea0709e0310542dcf2
          this.event = data;
        });
      }
    });
  }
<<<<<<< HEAD
=======

  addToCart(event: Event) {
    this.eventService.addToCart(event);
    window.alert('Your product has been added to the cart!');
  }

  // onClick(): void {
  //   if (!this.isLiked) {
  //     this.event.like += 1;
  //     this.isLiked = true;
  //   } else {
  //     this.event.like -= 1;
  //     this.isLiked = false;
  //   }
  // }

  // share(event: { name: any; }): void {
  //   window.alert(`The event ${this.event.name} has been shared!`);
  //   window.open(`https://t.me/share/url?url=http://localhost:4200/events/${this.event.id}&text=Share it!`);
  // }

>>>>>>> 19d2bc383e3f82e517204bea0709e0310542dcf2
}
