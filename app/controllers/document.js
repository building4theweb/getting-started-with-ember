import Ember from 'ember';

export default Ember.ObjectController.extend({
  previewVisible: true,

  actions: {
    deleteDocument: function(model) {
      var self = this,
          name = this.get('name'),
          message = 'Do you really want to delete the document "' + name + '"?';

      if (confirm(message)) {
        model.destroyRecord().then(function() {
          self.transitionToRoute('documents');
        });
      }
    },

    saveDocument: function() {
      var self = this;

      this.store.find('document', this.get('model.id'))
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
