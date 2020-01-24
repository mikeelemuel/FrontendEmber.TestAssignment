import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  albumName() {
    return faker.name.firstName();
  },

  releasedAt() {
    return faker.date.past().toLocaleDateString();
  },

  albumDetails() {
    return faker.lorem.paragraph();
  },

  sales() {
    return faker.finance.amount();
  },

  albumImageUrl() {
    return faker.image.imageUrl();
  },

  // afterCreate(album, server) {
  //   server.createList('song', 10, { album });
  // },

  // afterCreate(album, server) {
  //   server.createList('song', 10, { album }).forEach(song => {
  //     song.update({
  //       genre: server.create('genre')
  //     })
  //   });
  // }

  // afterCreate(album, server) {
  //   server.createList('song', 10, 'withGenre', { album });
  // }

  withSongs: trait({
    afterCreate(album, server) {
      server.createList('song', 10, {
        album
      })
    }
  })
});
