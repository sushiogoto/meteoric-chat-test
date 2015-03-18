Meteor.startup(function () {

  if (Comments.find({}).count() === 0) {
    Comments.insert({
      title: Fake.sentence(),
      body: Fake.paragraph(),
      published: Fake.fromArray([true, false])
    });
  }

});