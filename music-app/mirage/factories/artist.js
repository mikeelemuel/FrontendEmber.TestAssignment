import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  artistName() {
    return faker.name.firstName();
  },

  composerName() {
    return faker.name.lastName();
  },
});
