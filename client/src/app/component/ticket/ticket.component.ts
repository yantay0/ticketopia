import {Component, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() eventId: number;
  @Output() showTickets: boolean = true

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

