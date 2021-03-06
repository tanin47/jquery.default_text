jQuery.default_text
=======================

jQuery.default_text elegantly solves the default text problem. 
It eliminates [the need to remove default text before submission](http://stackoverflow.com/questions/1102895/default-text-on-input).

See demo: http://tanin.nanakorn.com/default_text


Alternative solution
---------------------

Alternative solution is to use HTML5's placeholder attribute. But, sadly, MSIE's family has not supported it yet.


How it works
------------------
A text input, which contains the default text, is cloned (using jQuery.clone()).

Then, it is placed exactly behind the real textbox, and we make the real textbox transparent.

It is only when the real textbox is focused, it is made opaque.

With the duplication of the textbox, It eliminates [the need to remove default text before submission](http://stackoverflow.com/questions/1102895/default-text-on-input).


Tested Browsers
------------------
* MSIE 7.0 and 9.0
* Firefox/5.0 (Mozilla/5.0)
* Chrome/12.0.742.112 Safari/534.30 (Mozilla/5.0)
* iPhone Versionn/5.0.2 Mobile/8G4 Safari/6533.18.5 (Mozilla/5.0)


How to use it
-------------------
Somewhere in your HTML:

```HTML
<input type="text" id="test_textbox" class="test" style="color: green">
```

And somewhere in your Javascript code:

```Javascript
$('#test_textbox').default_text('this is default...', {defaultClass: "default"});
```


The downside
------------------
* Native resizability of a textarea is disabled
* Hiding a textbox (or a textarea) does not make the default element invisible.
If you really to hide a textbox, then put it in a container, e.g. span, and hide the span instead.


Authors
-------------------
* Tanin Na Nakorn
* Sergiu Rata
* Nilobol Ariyamongkollert


License
------------------
jQuery.default_text is under Creative Commons 3.0, 
but it uses [jQuery.sizes](http://www.bramstein.com/projects/jsizes/), which is under the revised BSD License.




