import Component from '@ember/component';
import { compare, isEmpty } from '@ember/utils';
import { computed } from '@ember/object';

export default Component.extend({
  filter: '',
  sortAscending: true,

  init() {
    this._super(...arguments);

    this.sortProperties = this.sortProperties || [];
  },

  filtered: computed('filter', 'albums', function() {
    const albums = this.get('albums');
    const search = this.get('filter').toLowerCase();

    if (isEmpty(search)) {
      return albums;
    }

    return albums.filter(function(album) {
      const albumName = (album.albumName || '').toLowerCase();
      if (albumName.match(search)) {
        return true;
      }
      return false;
    })
  }),

  arrangedContent: computed('albums', 'sortProperties', 'sortAscending', function(){
    return this.get('albums').toArray().sort((a, b)=>{
      let sortProperty = this.get('sortProperties')[0];
      if(this.get('sortAscending')){
        return compare(a.get(sortProperty), b.get(sortProperty));
      } else {
        return compare(b.get(sortProperty), a.get(sortProperty));
      }
    })
  }),

  actions:{
    sortAlbums: function(property) {
      this.set('sortProperties', [property]);
      this.toggleProperty('sortAscending');
      this.set('albums', this.get('arrangedContent'));  // set the model to the sorted array
    }
  }
});
