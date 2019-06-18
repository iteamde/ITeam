import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PricesConstants } from './constants/prices.constant';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  teamTable = [];
  private emailUrl = '../action_send.php';

  pricesConstants = PricesConstants;
  totalSaveAmount: number;

  teamForm: FormGroup;
  contactForm: FormGroup;

  constructor(private http: HttpClient,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.setupTeamForm();
    this.setupContactForm();
  }

  private setupTeamForm(): void {
    this.teamForm = new FormGroup({
      specification: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      count: new FormControl('', [Validators.required])
    });
  }

  private setupContactForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }

  addToMyTeam(): void {
    if (this.teamForm.valid) {
      const teamFormValues = this.teamForm.getRawValue();
      this.teamTable.push({
        position: teamFormValues.specification.name,
        number: teamFormValues.count,
        costInUa: teamFormValues.specification.price[teamFormValues.level] * teamFormValues.count,
        costInIsrael: 5000 * teamFormValues.count,
        saving: (5000 - teamFormValues.specification.price[teamFormValues.level]) * teamFormValues.count
      });
      this.calculateTotalSaveAmount();
    }
  }

  calculateTotalSaveAmount(): void {
    this.totalSaveAmount = 0;
    this.teamTable.forEach(element => { this.totalSaveAmount += element.saving; });
  }

  deleteItem(index: number): void {
    this.teamTable.splice(index, 1);
    this.calculateTotalSaveAmount();
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const contactFormValues = this.contactForm.getRawValue();
      this.toastr.success('Your application is accepted. We will contact you', 'Success', {
        timeOut: 5000
      });
      return this.http.post(this.emailUrl, { ...contactFormValues, message: '' })
        .subscribe(response => {
          return response;
        });
    } else {
      this.toastr.warning('Fill in all the fields', 'Warning', {
        timeOut: 2000
      });
    }
  }
}
