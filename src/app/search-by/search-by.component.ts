import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from '../services/form.service';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss']
})
export class SearchByComponent implements OnInit {
  searchByForm: FormGroup;

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
    this.searchByForm = this.formService.initializeForm();
  }

  onSearch(): void {
    this.formService.setFormValues(this.searchByForm);
  }
}
