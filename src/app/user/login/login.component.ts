import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, AlertComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  auth = inject(Auth);
  credentials = {
    email: '',
    password: '',
  };

  showAlert = signal(false);
  alertMgs = signal('please wait, logging in...');
  alertColor = signal('blue');
  inSubmition = signal(false);

  async login() {
    this.showAlert.set(true);
    this.alertMgs.set('please wait, logging in...');
    this.alertColor.set('blue');
    this.inSubmition.set(true);
    try {
      await signInWithEmailAndPassword(
        this.auth,
        this.credentials.email,
        this.credentials.password
      );
    } catch (error) {
      this.inSubmition.set(false);
      this.alertMgs.set('an unexpected error occured');
      this.alertColor.set('red');
      return;
    }
    this.inSubmition.set(false);
    this.alertMgs.set('login successful');
    this.alertColor.set('green');
  }
}
