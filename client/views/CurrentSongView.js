var CurrentSongView = Backbone.View.extend({
  initialize: function() {
  },

  tagName: 'div',

  className: 'current',

  template: _.template('<h2><%= artist %></h2><h3><%= title %></h3>'),

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
