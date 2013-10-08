App.ApplicationController = Ember.ObjectController.extend({
	firstName: 'Michael ',
	lastName: 'Malchak',
	title: ' Web Developer',

	fullName: function() {
		return this.firstName + ' ' + this.lastName
	}.property('firstName', 'lastName')
});