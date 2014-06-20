// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  tagName: 'table',
  className: 'table table-bordered table-striped table-hover queue',

  render: function() {

    this.$el.children().detach();
    this.$el.html('<th>Artist</th><th>Title</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model:song}).render();
      })
    );
  }
});
