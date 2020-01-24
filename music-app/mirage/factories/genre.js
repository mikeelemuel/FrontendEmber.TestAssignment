import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  genreName() {
    return faker.name.lastName();
  },

  // afterCreate(genre, server) {
  //   server.createList('song', 10, {
  //     genre
  //   });
  // }

  // withSong: trait({
  //   afterCreate(genre, server) {
  //     server.create('genre', {
  //       song
  //     })
  //   }
  // })
});
