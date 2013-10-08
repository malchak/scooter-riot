App = Ember.Application.create();

App.Post = Ember.Object.extend();

App.Post.reopenClass({
	all: function() {
		return $.getJSON('http://api.tumblr.com/v2/blog/functionsandfairways.tumblr.com/posts?api_key=MphXjKkks4VvLTLD2vfhuOKwfw2aK6oYRmDEIaMPSBcWZTAQZn&callback=?').then(function(response){
			var blogPosts = [];
			response.response.posts.forEach(function(post) {
				blogPosts.push(App.Post.create(post))
			});
			return blogPosts;
		});
	}
});

Ember.Handlebars.helper('format-date', function(date) {
  return moment(date).format('l');
});