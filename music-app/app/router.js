import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('albums', function() {
    this.route('show', { path: ':album_id' });

    this.route('songs', { path: ':album_id/songs'}, function() {
      this.route('new');
      this.route('edit', { path: ':song_id/edit' });
    });
  });
});
