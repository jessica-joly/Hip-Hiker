import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveReview() {
      var params = {
        user: this.get('user'),
        image: this.get('image'),
        rating: this.get('rating'),
        content: this.get('content'),
        date: this.get('date'),
        trail: this.get('trail')
      }
      this.sendAction('saveReview', params);
    }
  }
});
