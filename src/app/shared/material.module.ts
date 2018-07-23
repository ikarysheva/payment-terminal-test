import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatTableModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';

const MATERIAL_MODULES: any[] = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatInputModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatTableModule,
  MatDialogModule,
  MatProgressBarModule
];

@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES]
})
export class MaterialModule {}
