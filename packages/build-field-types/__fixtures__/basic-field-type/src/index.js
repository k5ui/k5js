import { importView } from '@ksjs/build-field-types';

export let MyCoolFieldType = {
  views: {
    Field: importView('./views/Field'),
  },
};
