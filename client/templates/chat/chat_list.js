Template.chatList.helpers({
  item: function() {
    return Comments.find();
  }
});