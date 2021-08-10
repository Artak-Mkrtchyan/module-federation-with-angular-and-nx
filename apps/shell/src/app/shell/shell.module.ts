import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@micronx/shared';
import { ShellComponentComponent } from './shell.component';

@NgModule({
  declarations: [ShellComponentComponent],
  imports: [CommonModule, SharedModule],
})
export class ShellComponentModule {}
