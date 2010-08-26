Typekit Bookmarklet
-------------------

This is an example API client written in Javascript. It is a bookmarklet that gives information on the Typekit fonts are used on a website.

To install, create a bookmark in your browser toolbar containing the following url:

    javascript:(function(){var s=document.createElement('script');s.setAttribute('src','https://github.com/typekit/typekit-api-examples/raw/master/bookmarklet/bookmarklet.js');document.getElementsByTagName('head')[0].appendChild(s);})();

The code uses jQuery, and is heavily commented.

Documentation on the Typekit API is available from http://typekit.com/docs/api