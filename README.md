# The-Solar-System

A quick and immersive journey through our Solar System with a soft primer on Gravitational Physics. Must read for aspiring astronomers, star-gazers and   science enthusiasts of all ages out there. 

Learn how our planetary system works, what it's like in space and how astronomy connects all pieces of science together! 

## A Quick Tutorial:
It is utter simple to write a book on bubblin. Each page of the book is effectively a webpage (an iframe) that holds your HTML, CSS, JavaScript and external resources (Like jQuery over CDN) together to render a page. It is *sandboxed* by default.

If you've been on Codepen before you'll find writing superbooks *super easy*. Check out some of the [demos](http://codepen.io/marvindanig/public/) that we did there that are now a part of this book.

*Feel free to use any of the code from Github or Codepen for your own project.*


Note: you'll require at least working knowledge of HTML, CSS and JavaScript to be able to compose pages of your book on Bubblin. If you're completely new to frontend development you might want to quickly [grab the basics](http://www.codecademy.com/en/tracks/web) now. 


#### Tut-1 
It's very likely that you'll need default [styles](https://github.com/bubblin/The-Solar-System/blob/master/css/page-9/style.css) to scale text of a page across multiple devices - a.k.a. mobile, tablets and desktops. Try viewing [page-9](https://bubbl.in/book/the-solar-system-by-marvin-danig/9) of the book on your iPhone, iPad and Desktop, for example. 


Observe that we're using `VW` or `viewport width` to scale the text here. Also  the very little amount CSS that is required! :-)

#### Tut-2
Adding image to a page is very simple. Set `src` attribute to the correct path under https, and give `<img>` tag a `width = 100%`. You're all set. 

Note: Bubblin is forced over https. Make sure your resource provider returns a secured url for the assets you wish to add into your book. You can also use Github to host images of your book if you like.

#### Tut-3
JavaScript libraries can be flexibly [added inside a page via the `HEAD`](https://medium.com/bubblin-superbooks/head-72e72d772a8c). Or you can put them inside `BODY`of your HTML too. Whatever works for you! 

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