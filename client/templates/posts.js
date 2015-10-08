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
        by:Meteor.userId(), // current user
        up:0,
        down:0
      });
      event.target.text.value = ""; // clear the text field
    },
  "click .up": function (event) {
    Posts.update(this._id, {
      $inc: {"up": 1}
    });
  },
  "click .down": function (event) {
    Posts.update(this._id, {
      $inc: {"down": 1}
    });
  }
});

Template.post.helpers({
  by: function() {
    return Meteor.users.findOne(this.by).username;
  }
})
