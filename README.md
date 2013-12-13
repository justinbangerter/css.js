css.js
======

Cross-Browser CSS Injection

I needed a way to create CSS dynamically from javascript so I could encapsulate some widget styling with its implementation.

Just include css.js and pass a string to CSS();  The string will be interpreted as css and injected into the page.

Example use:

    Widget.CSS([
      '.defaultText { color: #666; }',
      '.defaultText:focus { color: #111; }'
    ].join(' '));


Credit goes out to [This Guy](http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript#answer-524721).
