import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('document', params.document_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);

    // Cache model props
    controller.set('cachedModel', {
      name: model.get('name'),
      text: model.get('text')
    });
  }
});
