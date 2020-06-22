import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor() {}

  setLocalStorage(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

  removeLocalStorage(key: string) {
    localStorage.removeItem(key);
  }

  setFormGroup(form: FormGroup, target: object) {
    for (const [key, value] of Object.entries(target)) {
      form.patchValue({
        [key]: value
      });
    }

    return form;
  }
}
