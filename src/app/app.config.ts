import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAB2CQJEL2nWNBo0O1XNmLsOuzI9-InTXk',
        authDomain: 'clips-cdbbc.firebaseapp.com',
        projectId: 'clips-cdbbc',
        storageBucket: 'clips-cdbbc.appspot.com',
        messagingSenderId: '210752259345',
        appId: '1:210752259345:web:e152e74c66f4362244b8b0',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
