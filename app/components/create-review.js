import Ember from 'ember';

export default Ember.Component.extend({
  newReviewForm: false,
  actions: {
    showNewReviewForm() {
      this.set('newReviewForm', true);
    },
    saveReview() {
      var params = {
        user: this.get('user'),
        image: this.get('image'),
        rating: this.get('rating'),
        content: this.get('content'),
        date: this.get('date'),
        trail: this.get('trail')
      }
      this.set('newReviewForm',false);
      this.sendAction('saveReview', params);
    }
  }
});
