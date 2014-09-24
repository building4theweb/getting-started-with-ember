import DS from 'ember-data';
import config from '../config/environment';

export default DS.LSAdapter.extend({
  namespace: config.modulePrefix
});
