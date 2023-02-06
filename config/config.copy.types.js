const { resolve } = require('path');
const fs = require('fs-extra');
const { sync } = require('glob');

try {
  fs.copy(
    resolve(__dirname + '/../src/index.d.ts'),
    resolve(__dirname + '/../lib/index.d.ts')
  );
  console.log('types---------------copy');
} catch (error) {
  throw error;
}
