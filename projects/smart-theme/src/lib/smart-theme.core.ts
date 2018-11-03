import { ThemeConfiguration } from '@smart-matrix/smart-schema';

export abstract class IThemeCompiler {
    public abstract CompileTheme(theme: ThemeConfiguration): string;
}
  