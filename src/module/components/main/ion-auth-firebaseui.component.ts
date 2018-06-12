import {Component} from '@angular/core';

/**
 * Generated class for the IonAuthFirebaseUiComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ion-auth-firebaseui',
  templateUrl: 'ion-auth-firebaseui.component.html'
})
export class IonAuthFirebaseUiComponent {

  authType = 'login';

  constructor() {
    console.log('Hello IonAuthFirebaseUiComponent Component');
  }

}
