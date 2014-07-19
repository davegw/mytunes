// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    // Use local storage to persist song count and rating.
    var storedCount = window.localStorage[this.get('title') + 'Counter'] || 0;
    var storedRating = window.localStorage[this.get('title') + 'Rating'] || 0;
    
    this.set('counter', Number(storedCount));
    this.set('rating', Number(storedRating));
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.increment();
  },

  increment: function () {
    this.set('counter', this.get('counter')+1);
    window.localStorage.setItem(this.get('title') + 'Counter', this.get('counter'));
  },

  upvote: function () {
    this.set('rating', this.get('rating')+1);
    window.localStorage.setItem(this.get('title') + 'Rating', this.get('rating'));
  },

  downvote: function () {
    this.set('rating', this.get('rating')-1);
    window.localStorage.setItem(this.get('title') + 'Rating', this.get('rating'));
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
