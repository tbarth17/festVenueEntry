(function(){
	'use strict';
	window.Venue = Ember.Application.create();

  Venue.fireRef = new Firebase("https://fest2.firebaseio.com/");

	Venue.ApplicationAdapter = DS.FirebaseAdapter.extend({
	  firebase: Venue.fireRef
	});

  filepicker.setKey("ARZytQTzJQdG7LD1IrsCiz");

})();
