export default function(/* server */server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  server.createList('album', 10, 'withSongs');
}
