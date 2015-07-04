# The-Solar-System

A quick and immersive journey through our Solar System with a soft primer on Gravitational Physics. Must read for aspiring astronomers, star-gazers and   science enthusiasts of all ages out there. 

Learn how our planetary system works, what it's like in space and how astronomy connects all pieces of science together! 

## A Quick Tutorial:
It's dead simple to write a superbook on bubblin. 

Each page of the book is a virgin webpage (an iframe) that holds your HTML, CSS and JavaScript (and external resources over CDN) together. The iframe is sandboxed by default.

If you've been on Codepen before you'll find writing superbook SUPER EASY. Check out some of the [demos](http://codepen.io/marvindanig/public/) that we did there that are now a part of this book.

Feel *FREE* to use any of the code from Github or Codepen for your own project.


Note: You'll require at least working knowledge of HTML, CSS and JavaScript to be able to compose pages of your book on Bubblin. If you're completely new to frontend development you might want to quickly [grab the basics](http://www.codecademy.com/en/tracks/web) now. 

#### Tut-1 
First things first. It's very likely that you'll need the default [style](https://github.com/bubblin/The-Solar-System/blob/master/css/page-9/style.css) to scale text across multiple devices - a.k.a. mobile, tablets and desktops. Open [page-9](https://bubbl.in/book/the-solar-system-by-marvin-danig/9) of the book on your iPhone, iPad or the Desktop to see what this means, for example. 

Observe that we're using `VW` or `viewport width` here to scale the text. Also  noteworthy is the very little amount CSS that is required for textbooks! :-)

#### Tut-2
Adding an image is very simple on bubblin. In fact a whole set of designer magazines are possible with full-bleed visuals and silky smooth interaction simply by using a little HTML (The `<img>` tag) and minimal CSS. 

Update the `src` attribute with the correct path of image under https, and give the `<img>` tag a `width` of 100%. You're all set. 

```
Note: Bubblin is forced over https. 
```
#### Tut-3
JavaScript libraries can be flexibly [added via the `HEAD`](https://medium.com/bubblin-superbooks/head-72e72d772a8c) of iframe. Or you can wrap them inside `BODY`of your HTML too; whatever works for you! 

Note you can also use serve code into your book via [Github with proper CONTENT-TYPE headers](https://rawgit.com/). This is particularly useful if you want the sourcecode of your book to be available to the community. 


## The Project
Each page of the book is an `iframe` (a full bleed webpage) that may or may not have something on all of the following FIVE resources:

* HEAD

* HTML

* CSS

* JS

* IMAGES

Each directory above has a sub-directory corresponding to a page of the book. This sub-directory usually contains a partial of HTML, CSS, HEAD or JavaScript that is called at the time of `iframe` render.

This is what TREE of this project looks like:

```

The-Solar-System/
├── README.md
├── css
│   ├── page-1
│   │   └── style.css
│   ├── page-2
│   │   └── style.css
│   └── page-8
│       └── style.css
├── head
│   ├── page-4
│   │   └── head.html
│   ├── page-6
│   │   └── head.html
│   └── page-8
│       └── head.html
├── html
│   ├── page-1
│   │   └── body.html
│   ├── page-2
│   │   └── body.html
│   └── page-8
│       └── body.html
├── images
│   └── page-3
│       └── bubblin-publishers-icon-96x96.png
├── js
│   ├── page-13
│   │   └── script.js
│   ├── page-17
│   │   └── script.js
│   └── page-8
│       └── script.js

218 directories, 235 files


```
## TODOs:
List of things to probably do (and would appreciate immediate help on):

1. Add an ellipical orbit depicting equal areas covered by an orbiting planet around the Sun. Between page 11-12.
2. Add tilt to Earth's rotational axis and depict seasons. Between page 14-15.
3. Add an experiment to show differential fluid flow of Sun. Between page 24-25.
4. Add switch to toggle synchronous and asynchronous rotation of Moon. Page 30-31.
5. Demonstrate morning/evening star situations relative to Earth. Page 38-39.
6. Demonstrate the gap between Mars and Jupiter, demonstrate the belt of asteroids in between. Page 51-52.
7. Do a visual experiment to explain projectile motion in gravity. Of Mars, Jupiter and how the trajectory changes from parabolic to circular to hyperbolic as one nears the escape velocity.
8. Do a visual experiment to explain gravity slingshots.

## Contributing

Feel free to contribute, fix or help improve code of this book. Astronomy is a never ending field, therefore, any piece of information or knowledge or visual or  explanation is  simply more than welcome.

1. Fork it ( https://github.com/bubblin/The-Solar-System/fork )
2. Create your feature branch (`git checkout -b my-new-page`)
3. Commit your changes (`git commit -am 'Added a page on (/topic)'`)
4. Push to the branch (`git push origin my-new-page`)
5. Create a new Pull Request
6. <a href = "mailto:marvin@bubbl.in">Contact me</a> if I don't respond within 24 hours.

## License
The content of this project itself is licensed under the <a href="http://creativecommons.org/licenses/by/3.0/us/deed.en_US">Creative Commons Attribution 3.0 </a> license, and the underlying source code used to format and display that content is licensed under the <a href="http://opensource.org/licenses/mit-license.php">MIT license </a>.