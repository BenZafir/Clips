import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe } from '@angular/common';
import { Auth, signOut } from '@angular/fire/auth';
import { RouterLink, RouterLinkActive,Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  modal = inject(ModalService);
  auth = inject(AuthService);
  authFB = inject(Auth);
  router = inject(Router);

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggle('auth');
  }

}
