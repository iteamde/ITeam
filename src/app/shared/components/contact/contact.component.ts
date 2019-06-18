import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  private emailUrl = '../action_send.php';

  constructor(private http: HttpClient,
              private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.setupContactForm();
  }

  sendEmail() {
    if (this.contactForm.valid) {
      const contactFormValues = this.contactForm.getRawValue();
      this.toastr.success('Your application is accepted. We will contact you', 'Success');
      return this.http.post(this.emailUrl, contactFormValues)
        .subscribe(response => {
          return response;
        });
    }  else {
      this.toastr.warning('Fill in all the fields', 'Warning', {
        timeOut: 2000
      });
    }
  }

  private setupContactForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

}
