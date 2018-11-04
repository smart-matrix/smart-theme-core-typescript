import { Injectable } from '@angular/core';
import { ThemeConfiguration } from '@smart-matrix/smart-schema';
import { IThemeCompiler } from './smart-theme.core';

@Injectable({
  providedIn: 'root'
})
export class SmartThemeSCSSCompilerService extends IThemeCompiler {
    //  API Methods
    public CompileTheme(theme: ThemeConfiguration): string {
        if (!theme)
            return 'body {}';
            
        return this.processThemeNode(theme.Theme, null, -1);
    }
  
    //  Helpers
    protected calculateLevelIndent(level: number) {
        const parts = [];

        for (var i = 0; i < level; i++)
            parts.push('\t');

            return parts.join('');
    }
    
    protected processThemeNode(node: string | any, key: string, level: number) {
        var indent = this.calculateLevelIndent(level);
        
        if (node.substring && !key)
            return `${indent}${node}\r\n`;
        else if (node.substring && key)
            return `${indent}${key}: ${node};\r\n`;
        else {
            const nodeKeys = Object.keys(node);

            const computed: string[] = [];

            if (key)
                computed.push(`\r\n${indent}${key} {\r\n`);

            computed.push(nodeKeys.map((k) => this.processThemeNode(node[k], k, level + 1)).join(''));

            if (key)
                computed.push(indent + '}\r\n');

            return computed.join('');
        }
    }
}
