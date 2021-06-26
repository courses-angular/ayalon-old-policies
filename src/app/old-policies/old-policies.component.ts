import {Component, OnInit} from '@angular/core';
import {FormService} from '../services/form.service';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-old-policies',
  templateUrl: './old-policies.component.html',
  styleUrls: ['./old-policies.component.scss']
})
export class OldPoliciesComponent implements OnInit {
  policies: IPolicy[] = [];
  searchByForm: Observable<FormGroup>;
  name: string = '';
  searchTerm: Observable<any>;

  constructor(private formService: FormService) {
    this.policies.push(new IPolicy(123, 'Yev', 20, 'a'));
    this.policies.push(new IPolicy(234, 'Dev', 21, 'b'));
    this.policies.push(new IPolicy(345, 'Lev', 22, 'c'));
    this.policies.push(new IPolicy(456, 'Fev', 23, 'd'));
  }

  ngOnInit(): void {
    this.searchByForm = this.formService.getFormValues();

    this.searchTerm = this.searchByForm.pipe(
      map(value => {
        if (value) {
          if (value.get('name').value) {
            return value.get('name').value;
          }
          if (value.get('age').value) {
            return value.get('age').value;
          }
          if (value.get('address').value) {
            return value.get('address').value;
          }

        }
      })
    );
  }


}

export class IPolicy {
  id: number;
  name: string;
  age: number;
  address: string;

  constructor(id, name, age, address) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
