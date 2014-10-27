Venue.Band = DS.Model.extend({
  bandName: DS.attr('string'),
  bandBio: DS.attr('string'),
  bandImgUrl: DS.attr('string'),
  bandSetTime: DS.attr('string'),
  bandVenue: DS.belongsTo('venue')
});
