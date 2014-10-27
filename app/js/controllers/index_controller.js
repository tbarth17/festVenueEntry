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
