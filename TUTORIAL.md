# Getting Started With Ember.js
A simple tutorial to guide through your first Ember.js application.

### Create project and run server

```bash
$ ember new getting-started-with-ember
$ cd getting-started-with-ember/
$ ember serve
```
Open [http://localhost:4200](http://localhost:4200)

### Install dependencies

```bash
$ bower install --save bootstrap
$ bower install --save momentjs
$ cd vendor
$ curl -O https://raw.githubusercontent.com/kurko/ember-localstorage-adapter/master/localstorage_adapter.js
```

```js
// Brocfile.js
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/momentjs/moment.js');
app.import('vendor/localstorage_adapter.js');
```

### Router Setup

```js
// router.js
Router.map(function() {
  this.resource('about');
  this.resource('documents');
});
```

### Create templates

```bash
$ ember generate template about
$ ember generate template documents
```

---
---
# work in progress...
---
---


### Markup

```handlebars
{{!-- application.hbs --}}
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h2 id='title'>Document Editor</h2>
    </div>
    <div class="col-sm-8">
      <ul class="nav nav-pills pull-right">
        <li>{{#link-to 'index'}}Home{{/link-to}}</li>
        <li>{{#link-to 'about'}}About{{/link-to}}</li>
        <li>{{#link-to 'documents'}}Documents{{/link-to}}</li>
      </ul>
    </div>
  </div>
</div>

{{outlet}}
```

``` handlebars
{{!-- index.hbs --}}
<div class="container container-text-centered">
  <div class="row">
    <div class="col-sm-12">
      <h3 class="huge-placeholder-text">Welcome to my super awesome markdown editor.</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      {{#link-to 'documents.new' class="btn btn-lg btn-primary"}}Create Document{{/link-to}} or go to {{#link-to 'documents'}}Documents{{/link-to}}
    </div>
  </div>
</div>
```

```handlebars
{{!-- about.hbs --}}
<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <h3 class="header-page-title">About</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-12">
      <p><img src="/images/typing-dog.gif" class="img-thumbnail pull-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac iaculis magna. Aenean accumsan dui id mauris accumsan sodales ut non elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam viverra purus nec iaculis eleifend. Integer vel scelerisque magna, at porttitor magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut nec lobortis magna, ac vestibulum erat. Nullam in leo nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id odio cursus, ullamcorper risus eu, congue mi. Proin ante felis, condimentum in elit vitae, efficitur sollicitudin velit. Integer vel luctus sapien.</p>
      <p>Donec tempus posuere metus vitae suscipit. Phasellus dignissim placerat nibh, eget pellentesque felis sollicitudin et. Donec id volutpat diam, sit amet ornare odio. Morbi porttitor condimentum risus eu viverra. Proin nisi felis, luctus nec magna sit amet, vulputate porta mi. Ut urna tellus, facilisis sit amet ipsum vel, ultrices aliquet erat. Curabitur ac tristique risus. Vivamus semper eget purus quis commodo. Aliquam erat volutpat. Integer nec mollis velit. Curabitur pellentesque ipsum id nisi malesuada, in suscipit lacus egestas. Nam non diam accumsan, ultrices leo et, ultrices arcu. Fusce sit amet lorem massa. Phasellus fermentum enim sapien, vel tincidunt lacus tempus at. Vestibulum sapien neque, maximus ut tincidunt at, aliquet eu eros.</p>
      <p>In sem risus, fringilla in scelerisque id, dignissim id odio. Vestibulum leo ligula, gravida et eros in, euismod interdum dolor. Mauris est ipsum, suscipit vitae pharetra congue, tempus non velit. Curabitur vitae lorem odio. Nam vitae nunc ac sem imperdiet egestas nec et magna. Morbi aliquet nibh leo, a egestas quam vulputate vitae. Maecenas ac blandit tortor. Mauris condimentum gravida cursus.</p>
      <p>In commodo gravida consectetur. Ut dui neque, dignissim sed diam eget, vehicula porta velit. Phasellus dolor risus, tristique at placerat et, maximus eget lorem. Ut vitae elementum dui, eleifend dapibus risus. Donec sagittis vulputate ex, quis viverra odio interdum eu. Ut non enim pulvinar, scelerisque mauris suscipit, suscipit magna. Donec sed gravida libero, vitae iaculis odio.</p>
      <p>Aenean eu venenatis est. In volutpat lacus id diam venenatis, gravida sodales dolor tempor. In posuere sit amet augue a rhoncus. Donec varius nisi ac mollis dapibus. Curabitur et bibendum magna. Sed semper gravida velit, non auctor velit tristique vitae. Ut nisl nunc, mattis dictum euismod vel, congue ac arcu. Nunc imperdiet faucibus dui.</p>
    </div>
  </div>
</div>
```

```handlebars
{{!-- documents.hbs --}}
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      {{#link-to 'documents.new' class="btn btn-default btn-create-document"}}Create Document{{/link-to}}
      <hr>
      <div class="list-group">
        {{#each document in controller}}
          {{#link-to 'document' document class="list-group-item"}}
            <h4 class="list-group-item-heading">{{document.name}}</h4>
            <p class="list-group-item-text">Created {{date-relative document.created}}</p>
          {{/link-to}}
        {{/each}}
      </div>
    </div>
    <div class="col-sm-9">
      {{outlet}}
    </div>
  </div>
</div>
```

```handlebars
{{!-- documents/index.hbs --}}
<h3 class="huge-placeholder-text">Create a new document or select one from the list.</h3>
```

```handlebars
{{!-- documents/new.hbs --}}
<div class="row">
  <div class="col-sm-12">
    {{editor-controls previewVisible=previewVisible toggle="togglePreview" save="saveDocument" cancel="cancelDocument"}}
  </div>
</div>
<hr>
{{#if previewVisible}}
  {{showdown-addon text}}
{{else}}
  <p>{{input type="text" value=name placeholder="Untitled Document" class="form-control" autofocus="autofocus"}}</p>
  {{textarea value=text rows="20" class="form-control"}}
{{/if}}
```

```handlebars
{{!-- document.hbs --}}
<div class="row">
  <div class="col-sm-12">
    {{editor-controls previewVisible=previewVisible toggle="togglePreview" save="saveDocument" cancel="cancelDocument"}}
  </div>
</div>
<hr>
{{#if previewVisible}}
  {{showdown-addon text}}
{{else}}
  <p>{{input type="text" value=name placeholder="Untitled Document" class="form-control" autofocus="autofocus"}}</p>
  {{textarea value=text rows="20" class="form-control"}}
{{/if}}
<hr>
<a href="#" class="btn btn-text link-red pull-right" {{action "deleteDocument" this}}>Delete document</a>
```

### Styles

```css
html, body {
  margin: 20px;
}

a.active,
a.active:hover {
    background-color: #2e75c1 !important;
    color: white;
}

.container-text-centered {
    text-align: center;
}

.huge-placeholder-text {
    font-weight: 100;
    font-size: 90px;
    color: #bfbfbf;
    margin: 50px 0;
}

.header-page-title {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 15px;
}

a.link-red {
    color: red;
}

.btn-create-document.active {
    color: white;
    background-color: #3f3f3f !important;
}
```