# The-Solar-System

A quick and immersive journey through our Solar System with a soft primer on Gravitational Physics. Must read for aspiring astronomers, young star-gazers and all the little science enthusiasts out there. 

Learn how our planetary system works, what it's like in space and how astronomy connects all pieces of science together! 

## A Quick Tutorial:
If you've been on Codepen for front-end experiments then you'll surely find writing superbooks *super easy*. Check out some of the [demos](http://codepen.io/marvindanig/public/) that we did up there that are now a part of this book.

*Feel free to use any of the code from Github or Codepen for your own project.*

### Tut-1 
It's very likely that you're going to need [CSS](https://github.com/bubblin/The-Solar-System/blob/master/css/page-9/style.css) that scales the text in a page across mobile, tablets and desktop. This is in use on [page-9](https://bubbl.in/book/the-solar-system-by-marvin-danig/9) of the book. 


Observe we're using vw or `viewport width` to handle the size of the text within the book. Also note the very little CSS that is required!

### Tut-2
Adding images is one of the simplest task on bubblin. Set `src` attribute to the correct path for your `<img>` tag and give it 100% width. You're all set. 

Note: All assets on Bubblin are served over https. Make sure your host returns a secured url for the image you wish to add to your book. 


## The Project: Pages & Their Resources:
How things work here:

Each page of the book is an iframe (full score webpage) that may or may not have all of following resources:

* HEAD

* HTML

* CSS

* JS

Each directory has pages of the book with requisite HTML, CSS, HEAD and JavaScript. The following tree describes the project structure mostly:

Tree:

```

The-Solar-System/
├── README.md
├── css
│   ├── page-1
│   │   └── style.css
│   ├── page-2
│   │   └── style.css
│   ├── page-3
│   │   └── style.css
│   ├── page-4
│   │   └── style.css
├── head
│   ├── page-4
│   │   └── head.html
│   ├── page-6
│   │   └── head.html
│   ├── page-7
│   │   └── head.html
│   └── page-8
│       └── head.html
├── html
│   ├── page-1
│   │   └── body.html
│   ├── page-2
│   │   └── body.html
│   ├── page-3
│   │   └── body.html
│   ├── page-4
│   │   └── body.html
├── images
│   └── page-3
│       └── bubblin-publishers-icon-96x96.png
├── js
│   ├── page-13
│   │   └── script.js
│   ├── page-17
│   │   └── script.js
│   ├── page-7
│   │   └── script.js
│   └── page-8
│       └── script.js

218 directories, 235 files



```


## Contributing

Feel free to contribute, fix or improve code of this book. Astronomy is a never ending field, and any piece of knowelegde or visual or scientific explanation ismore than welcome from you.

1. Fork it ( https://github.com/bubblin/The-Solar-System/fork )
2. Create your feature branch (`git checkout -b my-new-page`)
3. Commit your changes (`git commit -am 'Added a page on (/topic)'`)
4. Push to the branch (`git push origin my-new-page`)
5. Create a new Pull Request
6. <a href = "mailto:marvin@bubbl.in">Contact me</a> if I don't respond within 24 hours.

## License
The content of this project itself is licensed under the <a href="http://creativecommons.org/licenses/by/3.0/us/deed.en_US">Creative Commons Attribution 3.0 </a> license, and the underlying source code used to format and display that content is licensed under the <a href="http://opensource.org/licenses/mit-license.php">MIT license </a>.