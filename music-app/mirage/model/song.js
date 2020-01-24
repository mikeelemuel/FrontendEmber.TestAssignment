import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  artists: hasMany(),
  genre: belongsTo()
});
