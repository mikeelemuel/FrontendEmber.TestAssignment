import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('song');
  },

  actions: {
    save(model) {
      model.save();
    },

    willTransition() {
      this._super(...arguments);
      const record = this.controller.get('model');
      record.rollbackAttributes();
    }
  }
});
