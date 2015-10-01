import Ember from 'ember';

export default Ember.Component.extend({
  averageRating: Ember.computed('trail.reviews.@each.rating', function() {
    var sum=0;
    for(var i=-0; i<this.get('trail.reviews').get('length'); i++) {
      var rating = this.get('trail.reviews').objectAt(i).get('rating');
      sum += rating;
    }
    var average = sum / (this.get('trail.reviews').get('length'));
    return average.toFixed(2);
  }),
  actions: {
    saveReview(params) {
      this.sendAction('saveReview', params);
    }
  }
});
