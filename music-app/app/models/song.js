import Model from '@ember-data/model';
import DS from 'ember-data';

const { hasMany, belongsTo, attr } = DS;

export default Model.extend({
  artists: hasMany('artist'),
  album:   belongsTo('album'),
  genre:   belongsTo('genre'),

  songName:  attr('string'),
  createdAt: attr('date'),
});
