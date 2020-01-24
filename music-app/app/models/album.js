import Model from '@ember-data/model';
import DS from 'ember-data';

const { hasMany, attr } = DS;

export default Model.extend({
  songs:         hasMany('song'),

  albumName:     attr('string'),
  albumDetails:  attr('string'),
  albumImageUrl: attr('string'),
  sales:         attr('number'),
  releasedAt:    attr('string'),
  createdAt:     attr('date')
});
