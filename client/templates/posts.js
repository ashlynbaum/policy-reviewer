Template.posts.helpers({
  posts: function () {
    return Posts.find().fetch();
  }
});

Template.posts.events({
 "submit .new-post": function (event) {
      event.preventDefault();
      var text = event.target.text.value;
      Posts.insert({
        text: text,
        createdAt: new Date(), // current time
        by:Meteor.userId() // current user
      });
      event.target.text.value = ""; // clear the text field
    }
});

Template.post.helpers({
  by: function() {
    return Meteor.users.findOne(this.by).username;
  }
})
