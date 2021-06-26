import {Injectable} from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  form: FormGroup;
  submittedForm: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(null);

  constructor(private fb: FormBuilder) {
  }

  initializeForm(): FormGroup {
    this.form = this.fb.group({
      name: [''],
      age: [''],
      address: ['']
    });
    return this.form;
  }

  setFormValues(form: FormGroup): void {
    this.form.patchValue(form);
    this.submittedForm.next(this.form);

  }

  getFormValues(): Observable<FormGroup> {
    return this.submittedForm.asObservable();
  }

}
