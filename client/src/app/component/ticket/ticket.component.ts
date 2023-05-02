import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  eventId: number;

  constructor(private route: ActivatedRoute) {
    this.eventId = 0; // or some default value
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.eventId = parseInt(params.get('eventId')!, 10);
      // rest of your code
    });
  }
}

