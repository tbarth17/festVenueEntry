Venue.BandController = Ember.Controller.extend({
  needs: ['application'],

  actions: {
    createBand: function() {
      var bandVenue = this.get('venue');
      var band = this.store.createRecord('band', {
        bandName: this.get("bandName"),
        bandImgUrl: this.get("bandImgUrl"),
        bandEmbedUrl: this.get("bandEmbedUrl"),
        bandLinkUrl: this.get('bandLinkUrl'),
        bandText: this.get('bandText'),
        bandBio: this.get('bandBio'),
        bandStartTime: new Date(this.get("bandStartTime")),
        bandEndTime: new Date(this.get("bandEndTime"))
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
