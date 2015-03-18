Comments = new Mongo.Collection('comments');

// Comments.helpers({
//   author: function () {
//     return Meteor.users.findOne({_id: this.userId});
//   }
// });

Comments.attachSchema(new SimpleSchema({
  title: {
    type: String,
    autoform: {
      rows: 3,
      'label-type': 'placeholder',
      placeholder: 'Add your comment…'
    }
  },
  // userId: {
  //   type: String,
  //   autoValue: function () {
  //     if (this.isInsert) {
  //       return Meteor.userId();
  //     } else {
  //       this.unset();
  //     }
  //   }
  // },
  // createdAt: {
  //   type: Date,
  //   autoValue: function () {
  //     if (this.isInsert) {
  //       return new Date();
  //     } else {
  //       this.unset();
  //     }
  //   }
  // }
  user: {
    type: String,
    autoform: {
      rows: 1,
      'label-type': 'placeholder',
      placeholder: 'Your username'
    }
  }
}));