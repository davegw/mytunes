// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change:counter', function(){
      this.render();
    }, this);

    this.model.on('change:rating', function(){
      this.render();
    }, this);
  },

  tagName: 'tr',

  template: _.template('<td class="enqueue"><%= artist %></td>'+
                       '<td class="enqueue"><%= title %></td>'+
                       '<td class="enqueue"><%= counter %></td>'+
                       '<td><span class="upvote glyphicon glyphicon-arrow-up"></span>'+
                       '<%= rating %>'+
                       '<span class="downvote glyphicon glyphicon-arrow-down"></span></td>'),

  events: {
    'click .enqueue': function() {
      this.model.enqueue();
    },
    'click .upvote': function () {
      this.model.upvote();
    },
    'click .downvote': function () {
      this.model.downvote();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
