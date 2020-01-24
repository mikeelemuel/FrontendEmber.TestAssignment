import Model from '@ember-data/model';
import DS from 'ember-data';

const { hasMany, attr } = DS;

export default Model.extend({
  songs:        hasMany('song'),

  artistName:   attr('string'),
  composerName: attr('string'),
});
