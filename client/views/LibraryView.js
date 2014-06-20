// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  tagName: 'table',
  className: 'table table-bordered table-striped table-hover library',

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html("<th>Artist</th><th>Title</th><th>Play Count</th><th>Rating</th>").append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
