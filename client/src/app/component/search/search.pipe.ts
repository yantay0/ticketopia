import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name:'search'
})

export class SearchPipe implements PipeTransform {
  transform(events: string[], searchInput: string): any[]{
    if(!searchInput) {
      return  [];
    }

    searchInput = searchInput.toLowerCase();
    return events.filter(
      x =>x.toLowerCase().includes(searchInput)
    )
  }
}
