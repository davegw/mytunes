// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('counter', 0);

    this.on('play', function () {
      this.increment();
    }, this);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  increment: function () {
    this.set('counter' , this.get('counter')+1);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  unqueue: function(){
    this.trigger('unqueue', this);
  }

});
