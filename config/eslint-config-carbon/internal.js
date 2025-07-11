/**
 * Copyright IBM Corp. 2018, 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    require.resolve('./plugins/jest'),
    require.resolve('./plugins/react'),
    require.resolve('./plugins/storybook'),
    require.resolve('./plugins/testing-library'),
    require.resolve('./plugins/eslint-plugin-playwright'),
  ],
};
