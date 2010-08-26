// Typekit Information Bookmarklet
//
// This script is intended to be called from the following bookmarklet:
// javascript:(function(){var s=document.createElement('script');s.setAttribute('src','https://github.com/typekit/typekit-api-examples/raw/master/bookmarklet/bookmarklet.js');document.getElementsByTagName('head')[0].appendChild(s);})();
//
// See also:
// http://github.com/typekit/typekit-api-examples/tree/master/bookmarklet/
// http://blog.typekit.com/2010/08/25/json-callbacks/
//
// ***************************************************************************
// Copyright 2010 Small Batch Inc
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ***************************************************************************


// This creates a closure to prevent our code messing with other page data.
(function(){

  // Fetches kit information from the typekit API, generates a HTML popup,
  // then calls display() to display it.
  //
  // Returns nothing.
  function go(){

    var kitId = findKitId();
    if(kitId){

      $.getJSON("https://typekit.com/api/v1/json/kits/" + kitId + "/published?callback=?", function(data){

        if(data.errors) {
          var error = $("<div><p>Oops! Something went wrong!</p></div>");
          display(error);
        } else {
          var box = $("<div><p>Typekit fonts used on this page:</p></div>")
          $.each(data.kit.families, function(i,family){
            var css = "font-family:" + family.css_names.join(',') + ";";
            var item = $('<div><h2><a href="http://typekit.com/fonts/' + family.slug + '">' + family.name + '</a></h2><p class="sample" style="' + css + '">AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRr</p></div>');
            item.appendTo(box);
          });
          display(box);
        }

      });

    } else {
      var message = $("<div><p>No typekit fonts on this page</p></div>");
      display(message);
    }
  }

  // Searches the html page for a script loaded from use.typekit.com.
  //
  // Returns the kit ID as a string.
  function findKitId(){
    var kitId = null;
    $('script').each(function(index){
      var m = this.src.match(/use\.typekit\.com\/(.+)\.js/);
      if (m) {
        kitId = m[1];
        return false
      }
    });
    return kitId;
  }

  // Adds some style to the element then appends it to the body.
  // 
  // Returns nothing.
  function display(box){
    // style tweaks
    box.css({
      'border':"1px solid #ddd",
      'background':"#ffffff",
      'margin':'0',
      'color': '#666',
      'padding': '8px',
      '-moz-border-radius': '8px',
      '-webkit-border-radius': '8px',
      'position': 'absolute',
      'right': '5px',
      'top':'5px',
      'z-index': '10000',
      'width': '210px',
    });
    $('*', box).css({
      'text-align':'left',
      'border':'none',
      'background':'none',
      'font-size':'14px',
      'line-height':'17px',
      'font-weight':'normal',
      'margin':0,
      'padding':0,
    });
    $('*', box).not('.sample').css({
      'font-family': 'arial, sans-serif',
    });
    $('a', box).css({
      'color':"#693",
      'padding':'8px 0',
      'text-decoration':'none',
    });
    $('.sample', box).css({
      'font-size':'24px',
      'color':"#333",
      'line-height':'28px',
      'overflow':'hidden',
    });
    $('div', box).css({
      'margin-top':'8px',
      'border-top':"1px solid #ddd",
      'padding':'8px 0 0'
    });

    // clicks outside the box cause the box to be hidden
    $('body').click(function() {
      box.hide();
    });
    box.click(function(event){
      event.stopPropagation();
    });

    // finally append to body
    box.appendTo('body');
  }

  // Checks for jquery, and loads it if it isn't already loaded. It sets
  // jQuery.noconflict, then sets the private $ variable to the jQuery object
  // so we can use $ as usual in our code without messing with the page data.
  //
  // Returns nothing, calls the supplied callback function when complete.
  function loadJQuery(callback){
    if (typeof jQuery == 'undefined') {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload=function(){
        jQuery.noConflict();
        $ = jQuery;
        callback();
      };
      script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      $ = jQuery;
      callback();
    }
  }

  var $; // We'll use this to store a private reference to the jquery object.

  // Load jquery, then call the go function.
  loadJQuery(go);

})(); // end closure