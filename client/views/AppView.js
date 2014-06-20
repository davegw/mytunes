// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.currentSongView = new CurrentSongView({model: this.model.get('currentSong')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'

    this.model.on('change:currentSong', function(){
      this.displayCurrentSong();
    }, this);

    if (this.model.get('currentSong')) {
      this.displayCurrentSong();
    }

    this.model.get('songQueue').on('add', function(model) {
      this.songQueueView.render();
    }, this);

    this.model.get('songQueue').on('remove', function(model) {
      this.songQueueView.render();
    }, this);
  },

  displayCurrentSong: function() {
    this.playerView.setSong(this.model.get('currentSong'));
    this.currentSongView.setSong(this.model.get('currentSong'));
  },

  render: function(){
    return this.$el.html([
      this.currentSongView.$el,
      this.playerView.$el,
      $('<h3 class="category">Library</h3>'),
      this.libraryView.$el,
      $('<h3 class="category">Queue</h3>'),
      this.songQueueView.$el
    ]);
  }

});
