import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('albums');
  },

  model() {
    return this.store.findAll('album', {
      include: 'songs'
    });
  }
});
