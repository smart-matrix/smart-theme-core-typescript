import { SmartThemeSCSSCompilerService } from './smart-theme-scss-compiler';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class SmartThemeModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SmartThemeModule,
      providers: [ 
        SmartThemeSCSSCompilerService,
      ]
    }
  }
}
