import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('trail', params.trail_id);
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      params.trail.save().then(function(trail) {
      location.reload();
      });
      this.transitionTo('trail');
    }
  }
});
