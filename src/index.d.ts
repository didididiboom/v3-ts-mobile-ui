import { App } from 'vue';
declare class UIComponent {
  static install(vue: App): void;
}

declare class Button extends UIComponent {}
declare class Utils {
  static find(a: [], b: [], c?: string): void;
  static sort(a: [], b?: boolean): void;
  static split(a: [], b?: string): void;
  static join(a: [], b?: string): void;
  static concat(...arr: []): void;
  static remove(a: [], b: any): void;
  static shuffle(a: []): void;
  static includes(a: Array<any>, b: any): void;
  static createAssign(...obj: any): void;
  static Keys(obj: object | Array<any>): void;
  static debounce(fn: Function, wait: number, immediate?: boolean): void;
  static throttle(fn: Function, wait?: number, type?: number): void;
  static getScrollHeight(a: any): void;
  static getWindowHeight(a: any): void;
  static getScrollTop(a: any): void;
  static DateConfig: any;
}
export interface InstallationOptions {
  locale?: any;
  lang?: any;
}
declare function install(app: App, options?: InstallationOptions): void;
export { Button, Utils };
declare const _default: {
  install: typeof install;
  version: string;
};
export default _default;
