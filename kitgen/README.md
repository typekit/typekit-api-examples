Kitgen
======

Kitgen is an example Typekit API client. It can be used to generate new kits
from the command line.

Kitgen requires "curb", a Ruby HTTP client library. To install it, run:

    $ sudo gem install curb

To use Kitgen, call the script with a user token and a font family description:

    $ kitgen --token=4d6141e7c82cb30affebcc392abc2ce3ab0ea4c1 droid-sans:n4,n7
    Kit created; id is zzw0mki

By default it will create a kit called "localhost" serving fonts for
"http://localhost", this can be overridden:

    $ kitgen --token=4d6141e7c82cb30affebcc392abc2ce3ab0ea4c1 \
             --name="My Kit" \
             --domain=example.com --domain=example.org \
             droid-sans:n4,n7 droid-serif:i4
    Kit created; id is zzw0mki

Pass a debug flag to see the API calls made:

    $ kitgen --token=4d6141e7c82cb30affebcc392abc2ce3ab0ea4c1 \
             --debug droid-sans:n4
    debug: parsed options
    debug:   token is 4d6141e7c82cb30affebcc392abc2ce3ab0ea4c1
    debug:   name is localhost
    debug:   domains are localhost
    debug:   families are droid-sans:n4
    debug: making POST request to https://typekit.com/api/v1/json/kits
    debug:   post data is domains=localhost&name=localhost
    debug:   response is 200 {"kit":{"id":"zzw0mki","name":"localhost","domains":["localhost"],"families":[]}}
    debug: making POST request to https://typekit.com/api/v1/json/kits/zzw0mki/families/droid-sans
    debug:   post data is variations=n4
    debug:   response is 200 {"family":{"id":"droid-sans","name":"Droid Sans","css_names":["droid-sans-1","droid-sans-2"],"subset":"default","variations":["n4"]}}
    Kit created; id is zzw0mki

To help understand the details of using the Typekit API all the code is in a
single file, and is heavily documented.

Documentation on the Typekit API is available from http://typekit.com/docs/api