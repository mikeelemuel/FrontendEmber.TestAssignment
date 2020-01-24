import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  songName() {
    return faker.name.lastName();
  },

  createdAt() {
    return faker.date.past().toLocaleDateString();
  },

  afterCreate(song, server) {
    song.update({
      genre: server.create('genre')
    })
  },

  // withGenre: trait({
  //   genre: association()
  // }),

  // afterCreate(songs, server) {
  //   server.createList('artist', 2, { songs });
  // },
  //
  // withArtists: trait({
  //   afterCreate(song, server) {
  //     server.createList('artist', 10, 'withGenre', {
  //       song
  //     })
  //   }
  // }),

  withArtists: trait({
    afterCreate(song, server) {
      server.createList('artist', 2, { song });
    }
  })
  // genre: association()
});
