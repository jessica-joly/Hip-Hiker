import DS from 'ember-data';

export default DS.Model.extend({
  rating: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),
  user: DS.attr(),
  content: DS.attr(),
  trail:DS.belongsTo('trail', {async: true}),
});
