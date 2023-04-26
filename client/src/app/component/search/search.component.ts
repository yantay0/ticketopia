import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : any = '';
  @Output() searchEmitter = new EventEmitter<string>();

  // onSearch() {
  //   this.searchEmitter.emit(this.search.value);
  // }
}
