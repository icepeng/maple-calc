import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { UpgradeModule } from './upgrade/upgrade.module';
import { HttpClientModule } from '@angular/common/http';
import { ArcaneForceModule } from './arcane-force/arcane-force.module';
import { DealModule } from './deal/deal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    UpgradeModule,
    ArcaneForceModule,
    DealModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
