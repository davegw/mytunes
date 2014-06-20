// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(){
      this.dequeue();
    }, this);

    this.on('unqueue', function(song){
      if (this.at(0) === song) {
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);

    this.on('ended', function(){
      this.dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function(song) {
    this.add(song);
  },

  dequeue: function() {
    this.remove(this.at(0));
  }
});
