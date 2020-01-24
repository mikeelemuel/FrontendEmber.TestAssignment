import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model(params) {
    let album = this.store.findRecord('album', params.album_id, {include: 'songs'});
    let genres = this.store.findAll('genre');
    let artists = this.store.findAll('artist');

    return hash({
      album,
      genres,
      artists
    });
  }
});
