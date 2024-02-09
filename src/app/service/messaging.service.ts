import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject<any>(null);

  constructor(private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.onMessage((payload) => {
      console.log("new message received. ", payload);
      this.currentMessage.next(payload);
    });
  }

  requestPermission() {
    this.angularFireMessaging.requestPermission.subscribe(
      () => {
        console.log('Notification permission granted.');
        this.angularFireMessaging.getToken.subscribe((token) => {
          console.log('Token received: ', token);
        });
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }



  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("New message received: ", payload);
        this.currentMessage.next(payload);
      },
      (error) => {
        console.error('Error receiving message: ', error);
      }
    );
  }
}
