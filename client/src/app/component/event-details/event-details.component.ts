import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventService} from "../../service/event.service";

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  event: any;
  // @Input() isLiked = false;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
        if (id !== null) {
          this.eventService.getEventDetail(id).subscribe((data) => {
            this.event = data;
          });
        }
    });
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




}
