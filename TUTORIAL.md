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
```

```js
// Brocfile.js
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
```

### Markup

```handlebars
{{!-- application.hbs --}}
<div class="container">
  <div class="row">
    <div class="col-sm-3">
      <h2 id='title'>Document Editor</h2>
    </div>
    <div class="col-sm-9">
      <ul class="nav nav-pills pull-right">
        <li>{{#link-to 'home'}}Home{{/link-to}}</li>
        <li>{{#link-to 'editor'}}Editor{{/link-to}}</li>
        <li>{{#link-to 'about'}}About{{/link-to}}</li>
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
      <a href="#" class="btn btn-lg btn-primary">Create Document</a> or go to <a href="#">Editor</a>
    </div>
  </div>
</div>
```

### Styles

```css
/* app.css */
html, body {
  margin: 20px;
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
```