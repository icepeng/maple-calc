import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArcaneForceModule } from './arcane-force/arcane-force.module';
import { GrindingModule } from './grinding/grinding.module';
import { MaterialModule } from './material/material.module';
import { UpgradeModule } from './upgrade/upgrade.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    UpgradeModule,
    ArcaneForceModule,
    // DealModule,
    GrindingModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
