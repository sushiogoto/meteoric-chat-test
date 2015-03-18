Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.route('/', {
  name: 'chatList'
});

Router.route('/new', {
  name: 'chatPost'
});

// Router.map(function() {
//   this.route('forms', {
//     data: function () {
//       return {
//         post: Comments.find().fetch()[0]
//       };
//     }
//   });
// });