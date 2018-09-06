import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [],
})
export class MaterialModule {}
