import {OnInit, Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {IPolicy} from '../old-policies/old-policies.component';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(items: IPolicy[], searchTerm: string): any {
    if (!items) {
      return [];
    }
    if (!searchTerm) {
      return items;
    }
    searchTerm = searchTerm.toLowerCase();
    return items.filter(item => {
     return item.name.toLowerCase().includes(searchTerm) || item.age === +searchTerm || item.address.toLowerCase().includes(searchTerm);

    });

  }

}
