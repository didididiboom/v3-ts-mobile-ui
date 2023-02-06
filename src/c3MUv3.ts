import '@/style.scss';
import { version } from '../package.json';
import { App } from 'vue';

import Utils from '@/packages/utils';
import CButton from './packages/CButton/index.vue';
import CDownload from './packages/CDownload/index.vue';

function install(app: App, options: any) {
  const packages = [CButton, CDownload];
  packages.forEach((item: any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
}

export { CButton, CDownload, Utils };
export default { install, version: `c3-mobile-ui-v3-${version}` };
