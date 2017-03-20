import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { IsPlayFilterPipe } from './../pages/filter/is-play-filter.pipe';
import { IsJoinFilterPipe } from './../pages/filter/is-join-filter.pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IsJoinFilterPipe,
    IsPlayFilterPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
