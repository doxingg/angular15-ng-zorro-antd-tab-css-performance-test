import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular15-ng-zorro-antd-tab-css-performance';
  aaa: number[] = [];

  constructor(private changeDetectionRef: ChangeDetectorRef) {}

  addDom() {
    console.time('run loop 10000');

    for (let index = 1; index < 1 * 10000; index++) {
      this.aaa.push(index);
    }

    console.timeLog('run loop 10000', 10000);
    this.changeDetectionRef.detectChanges();
    setTimeout(() => {
      console.timeEnd('run loop 10000');
    }, 0);
  }

  clearDom() {
    console.time('run loop clear');
    this.aaa = [];
    this.changeDetectionRef.detectChanges();
    setTimeout(() => {
      console.timeEnd('run loop clear');
    }, 0);
  }

  replaceTabLinkCss() {
    this.replaceCss(
      'a[nz-tab-link] ~ * { position: relative; }',
      '.ant-tabs-tab a[nz-tab-link] ~ * { position: relative; }'
    );
  }

  replaceCss(searchCss: string, replaceCss: string) {
    // 找到style文件
    const links = document.getElementsByTagName('link');
    // 匹配css
    for (let i = 0; i <= links.length - 1; i++) {
      if (links[i].href.indexOf('styles') === -1) {
        continue;
      }
      const sheet = links[i].sheet;

      const cssRules = sheet?.cssRules;
      if (cssRules) {
        for (let i = 0; i < cssRules.length; i++) {
          const cssRule = cssRules[i];
          if (cssRule.cssText === searchCss) {
            console.log('find css rule', cssRule);
            // 移除，重新覆盖
            sheet.deleteRule(i);
            sheet.insertRule(replaceCss, i);
            break;
          }
        }
      }
    }
  }
}
