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
