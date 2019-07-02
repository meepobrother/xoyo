import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, Injector, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LayoutBackComponent } from './layout-back/layout-back.component';
import { EmailSettingComponent } from './email-setting/email-setting.component';
import { PhoneSettingComponent } from './phone-setting/phone-setting.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutBackComponent,
    EmailSettingComponent,
    PhoneSettingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppService,
    {
      provide: APP_INITIALIZER,
      useFactory: (inject: Injector) => {
        return async () => {
          return await inject.get(AppService).init();
        };
      },
      deps: [Injector],
      multi: true
    }],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
