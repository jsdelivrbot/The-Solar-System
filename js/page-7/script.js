// TODO: Anchor overides do not work from an sandboxed iframes. On Safari at least.

// Overide the traget blank functionality for the sake of Content's index page.
// var anchors = document.getElementsByTagName('a');
// for (var i = 0; i < anchors.length; i++) {
//   $(anchors[i]).on('tap click', function(e) {
//     var link = $(this).attr('href');
//     window.open(link, ' '); 
//     return false;
//   });
// }