import {CommonModule} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';

import {IonicModule} from 'ionic-angular';
import {IonAuthFirebaseUiComponent} from './components/main/ion-auth-firebaseui.component';

// Export module's public API
export {IonAuthFirebaseUiComponent} from './components/main/ion-auth-firebaseui.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [IonAuthFirebaseUiComponent],
  declarations: [IonAuthFirebaseUiComponent]
})
export class IonicAuthFirebaseUIModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicAuthFirebaseUIModule,
      providers: []
    };
  }
}
