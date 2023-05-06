import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import en from '@angular/common/locales/en';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { ActivatedRoute, RouterModule } from '@angular/router';
registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    DemoNgZorroAntdModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
