import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // the arguments are needed inside the transform function !
  transform(items: any[], searchText: string): any[] {
    if ( !items ) {
      return [];
    }
    if ( !searchText ) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }

}

// this is a custom pipe for filtering through for a search option
