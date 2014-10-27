(function(){
	'use strict';
	window.Venue = Ember.Application.create();

  Venue.fireRef = new Firebase("https://premature-optimization.firebaseio.com/");

	Venue.ApplicationAdapter = DS.FirebaseAdapter.extend({
	  firebase: Venue.fireRef
	});

  filepicker.setKey("ARZytQTzJQdG7LD1IrsCiz");

})();

Venue.IndexController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
  addPhoto: function() {
    var self = this;
    filepicker.pickAndStore({mimetype:"image/*"},{},
    function(InkBlobs){
      var url = InkBlobs[0].url;
      self.set('url', url);
    });
  }
},

  createVenue: function() {
    var venue = this.store.createRecord('venue', {
      venueName: this.get('venueName'),
      venueAddress: this.get('venueAddress'),
      venueDescription: this.get('venueDescription'),
      venueImgUrl: this.get('url')
    });
    venue.save();
    this.set('venueName', '');
    this.set('venueAddress', '');
    this.set('venueDescription', '');
  }
});

Venue.BandController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    createBand: function() {
      var bandVenue = this.get('venue');
      var band = this.store.createRecord('band', {
        bandName: this.get("bandName"),
        bandImgUrl: this.get("bandImgUrl"),
        bandBio: this.get('bandBio'),
        bandSetTime: this.get("bandSetTime"),
      });
      band.set('bandVenue', bandVenue);
      // var serializer = this.store.serializerFor('band');
      // var data = serializer.serialize(band);
      console.log(band);
      band.save();
      bandVenue.set('band', band);
      bandVenue.save();
    }
  }


});

Venue.Venue = DS.Model.extend({
  venueName: DS.attr('string'),
  venueAddress: DS.attr('string'),
  venueDescription: DS.attr('string'),
  venueImgUrl: DS.attr('string'),
  venueBands: DS.hasMany('band')
});

Venue.Band = DS.Model.extend({
  bandName: DS.attr('string'),
  bandBio: DS.attr('string'),
  bandImgUrl: DS.attr('string'),
  bandSetTime: DS.attr('string'),
  bandVenue: DS.belongsTo('venue')
});

Venue.Router.map(function() {
  this.route('band');
});

Venue.BandRoute = Ember.Route.extend({

  model: function(){
      return this.store.find('venue');
  }
});