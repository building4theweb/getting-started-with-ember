import Ember from 'ember';

export default Ember.ObjectController.extend({
  previewVisible: true,

  getCurrentDocument: function() {
    return this.store.find('document', this.get('model.id'));
  },

  actions: {
    deleteDocument: function(model) {
      var self = this;
      model.destroyRecord().then(function() {
        self.transitionToRoute('documents');
      });
    },

    saveDocument: function() {
      var self = this;

      this.getCurrentDocument()
        .then(function(record) {
          return record.setProperties({name: self.get('name'), text: self.get('text')});
        }).then(function(record) {
          return record.save();
        }).then(function() {
          self.set('previewVisible', true);
        });
    },

    cancelDocument: function() {
      var cachedModel = this.get('cachedModel');
      this.setProperties({name: cachedModel.name, text: cachedModel.text});
      this.set('previewVisible', true);
    },

    togglePreview: function() {
      this.toggleProperty('previewVisible');
    }
  }
});
