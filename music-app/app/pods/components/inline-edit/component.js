import Component from '@ember/component';
import { run } from '@ember/runloop';
import { typeOf, isPresent } from '@ember/utils';

export default Component.extend({
  classNames: ['inline-edit'],

  init() {
    this._super(...arguments);

    this.isEditing = false;
    this.isSaving = false;
  },

  focusOut() {
    if (!this.get('isSaving')) {
      this.set('isEditing', false);

      if(this.revert){
        this.revert.rollbackAttributes();
      }
    }
  },

  actions: {
    activate() {
      this.set('isEditing', true);

      run.later(() => this.$().find('input, select').focus());
    },

    save() {
      if (typeOf(this.save) === 'function') {
        this.set('isSaving', true);
        const result = this.save(this);
        if (isPresent(result) && typeOf(result.then) === 'function') {
          result.then(() => this.setProperties({ isEditing: false, isSaving: false }));
        } else {
          run.later(() => this.set('isSaving', false));
        }
      }
    }
  }
});
