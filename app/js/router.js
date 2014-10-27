Venue.Router.map(function() {
  this.route('band');
});

Venue.BandRoute = Ember.Route.extend({

  model: function(){
      return this.store.find('venue');
  }
});
