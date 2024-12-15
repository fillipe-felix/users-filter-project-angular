import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';


@NgModule({
  declarations: [
    PhonePipe
  ],
  exports: [
    PhonePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule {
}
