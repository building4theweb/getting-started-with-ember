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
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
```

### Markup

```handlebars
{{!-- application.hbs --}}
<h2 id='title'>Document Editor</h2>

{{outlet}}
```

