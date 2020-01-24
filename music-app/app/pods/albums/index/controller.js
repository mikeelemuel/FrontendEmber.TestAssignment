import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  albums: computed.alias('model')
});
