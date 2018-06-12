<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/firebaseui/authentication/master/demo/src/assets/logo.svg">
</p>

# authentication - Ionic UI component for firebase authentication

[![npm version](https://badge.fury.io/js/@firebaseui/ionic-authentication.svg)](https://badge.fury.io/js/@firebaseui/ionic-authentication),
[![Build Status](https://travis-ci.org/firebaseui/ionic-authentication.svg?branch=master)](https://travis-ci.org/firebaseui/ionic-authentication)
[![Coverage Status](https://coveralls.io/repos/github/firebaseui/ionic-authentication/badge.svg?branch=master)](https://coveralls.io/github/firebaseui/ionic-authentication?branch=master)
[![dependency Status](https://david-dm.org/firebaseui/ionic-authentication/status.svg)](https://david-dm.org/firebaseui/ionic-authentication)
[![devDependency Status](https://david-dm.org/firebaseui/ionic-authentication/dev-status.svg?branch=master)](https://david-dm.org/firebaseui/ionic-authentication#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/firebaseui/ionic-authentication.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://firebaseui.github.io/ionic-authentication

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher)

## Installation
Install above dependencies via *npm*. 

Now install `@firebaseui/ionic-authentication` via:
```shell
npm install --save @firebaseui/ionic-authentication
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `@firebaseui/ionic-authentication`:
```js
map: {
  '@firebaseui/ionic-authentication': 'node_modules/@firebaseui/ionic-authentication/bundles/authentication.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { IonicAuthFirebaseUIModule } from '@firebaseui/ionic-authentication';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` IonicAuthFirebaseUIModule .forRoot()`):
```js
import { IonicAuthFirebaseUIModule } from '@firebaseui/ionic-authentication';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [IonicAuthFirebaseUIModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` IonicAuthFirebaseUIModule `:

```js
import { IonicAuthFirebaseUIModule } from '@firebaseui/ionic-authentication';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [IonicAuthFirebaseUIModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 Anthony Nahas. Licensed under the MIT License (MIT)

