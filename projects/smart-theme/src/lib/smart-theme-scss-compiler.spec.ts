import { TestBed } from '@angular/core/testing';

import { SmartThemeSCSSCompilerService } from './smart-theme-scss-compiler';
import { ThemeConfiguration } from '@smart-matrix/smart-schema';

describe('SmartThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartThemeSCSSCompilerService = TestBed.get(SmartThemeSCSSCompilerService);

    expect(service).toBeTruthy();
  });

  it('should have a value', () => {
    const service: SmartThemeSCSSCompilerService = TestBed.get(SmartThemeSCSSCompilerService);

    var config: ThemeConfiguration = {
      Theme: {
        "body": {
          "background-color": "red",
          ".page": {
            "color": "white"
          }
        }
      }
    }

    var theme = service.CompileTheme(config);
    
    expect(theme).toBeTruthy();
    
    expect(theme).toBe(`\r\nbody {\r\n\tbackground-color: red;\r\n\r\n\t.page {\r\n\t\tcolor: white;\r\n\t}\r\n}\r\n`);
  });
});
