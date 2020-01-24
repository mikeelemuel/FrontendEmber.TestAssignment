import Component from '@ember/component';
import { computed } from '@ember/object';
import { compare } from '@ember/utils';

export default Component.extend({
  showSongForm: false,

  init() {
    this._super(...arguments);

    this.sortProperties = this.sortProperties || ['albumName'];
  },

  sortAscending: true,
  arrangedContent: computed('model.album.songs', 'sortProperties', 'sortAscending', function(){
    return this.get('model.album.songs').toArray().sort((a, b)=>{
      let sortProperty = this.get('sortProperties')[0];
      if(this.get('sortAscending')){
        return compare(a.get(sortProperty), b.get(sortProperty));
      } else {
        return compare(b.get(sortProperty), a.get(sortProperty));
      }
    })
  }),

  actions: {
    delete(song) {
      song.destroyRecord();
    },

    sortAlbums(property) {
      this.set('sortProperties', [property]);
      this.toggleProperty('sortAscending');
      this.set('model.album.songs', this.get('arrangedContent'));  // set the model to the sorted array
    },

    saveSong(record) {
      record.save();
    },
  }
});
