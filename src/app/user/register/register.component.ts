import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../../shared/input/input.component';
import { AlertComponent } from '../../shared/alert/alert.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent, AlertComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  auth = inject(AuthService);
  inSubmition = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    age: [18, [Validators.required, Validators.min(18), Validators.max(120)]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ],
    ],
    confirmPassword: ['', [Validators.required]],
    phoneNumber: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(10)],
    ],
  });
  showAlert = signal(false);
  alertMgs = signal('please wait, registering...');
  alertColor = signal('blue');
  async register() {
    this.showAlert.set(true);
    this.alertMgs.set('please wait, registering...');
    this.alertColor.set('blue');
    this.inSubmition.set(true);
    const { email, password, name, phoneNumber, age } = this.form.getRawValue();
    try {
      await this.auth.createUser({ email, password, name, phoneNumber, age });
    } catch (error) {
      console.log(error);
      this.alertMgs.set('an unexpected error occured');
      this.alertColor.set('red');
      this.inSubmition.set(false);
      return;
    }
    this.inSubmition.set(false);
    this.alertMgs.set('registration successful');
    this.alertColor.set('green');
  }
}
