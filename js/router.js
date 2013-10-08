App.Router.map(function(){
	this.resource('about', {path: 'about_me'});
	this.resource('posts', {path:'functionsandfairways'});
});

App.IndexRoute = Ember.Route.extend({
 setupController: function(controller) {
		controller.set('time', moment().format('h:mm A'));
		controller.set('today', moment().format('MMMM Do, YYYY.'));
	}
});

App.PostsRoute = Ember.Route.extend({
	model: function() {
		return App.Post.all();
	}
});



