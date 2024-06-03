import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ResultComponent } from './result/result.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitorService } from './visitor.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZXingScannerModule,
    HttpClientModule
  ],
  providers: [VisitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
