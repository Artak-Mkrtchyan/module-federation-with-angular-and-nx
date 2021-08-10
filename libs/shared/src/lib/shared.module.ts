import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { ButtonComponent } from './button/button.component';
import { WindowService } from './window.service';
import { ConfigerService } from './configer.service';

@NgModule({
  imports: [CommonModule],
  providers: [SharedService, WindowService, ConfigerService],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
})
export class SharedModule {}
