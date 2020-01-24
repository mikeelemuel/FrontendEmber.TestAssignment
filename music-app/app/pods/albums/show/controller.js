import Controller from '@ember/controller';
import { isPresent } from '@ember/utils';

export default Controller.extend({
  songName: null,
  isShowError: false,
  error: "Song name must be present!",

  actions: {
    addComment() {
      if (isPresent(this.get('songName'))) {
        const song = this.store.createRecord('song', {
          songName: this.get('songName'),
          createdAt: new Date(),
          album: this.get('model.album'),
          genre: this.get('genre')
        });
        song.save();
        this.set('isShowError', false);
        this.set('songName', null);
      } else {
        this.set('isShowError', true);
      }
    },

    saveSong(record) {
      record.save();
    }
  }
});
