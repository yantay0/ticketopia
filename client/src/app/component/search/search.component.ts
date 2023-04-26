import {Component, OnInit} from '@angular/core';
import {EventService} from "../../service/event.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  public searchInput: string = '';
  events: string[] = []

  constructor(private eventService: EventService) {
  }
  search() {
    console.log(this.searchInput)
    this.searchInput= ''
  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events)=>{
      this.events = events.map(e=>e.name)
      console.log(this.events)
    })
  }
}
