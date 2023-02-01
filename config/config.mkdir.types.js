const { resolve } = require('path');
const fs = require('fs-extra');
const { sync } = require('glob');

/**
 *mkdir  types
 */
const components = sync(
  resolve(__dirname + '/../src/packages/**/index.?(ts|vue|tsx)'),
  { nodir: false }
);
let INPORT = `import { App } from 'vue';
declare class UIComponent {
    static install(vue: App): void;
}`;

const packages = [];
components.forEach((element) => {
  const name = element.match(/\/packages\/(\S*)\/index/)[1];
  const array = name.indexOf('-') >= 0 ? name.split('-') : [name];
  let componentName = '';
  array.forEach((element) => {
    componentName += element.charAt(0).toUpperCase() + element.slice(1);
  });
  if (!packages.includes(componentName)) {
    packages.push(componentName);
    INPORT += `\ndeclare class ${componentName} extends UIComponent { }`;
  }
});

let INSTALL = `\nexport interface InstallationOptions {
    locale?: any;
    lang?: any;
}
declare function install(app: App, options?: InstallationOptions): void;
export { ${packages.join(',')}};
declare const _default: {
    install: typeof install;
    version: string;
};
export default _default;`;

fs.outputFile(
  resolve(__dirname, '../src/index.d.ts'),
  INPORT + INSTALL,
  'utf8'
);
