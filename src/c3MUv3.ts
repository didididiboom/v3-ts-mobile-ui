import '@/style.scss';
import { version } from '../package.json';
import { App } from 'vue';

import Utils from '@/packages/utils';
import CButton from './packages/CButton/index.vue';

function install(app: App, options: any) {
  const packages = [CButton];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export { CButton, Utils };
export default { install, version: `c3-mobile-ui-v3-${version}` };
