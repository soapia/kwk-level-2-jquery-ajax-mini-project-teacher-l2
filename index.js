// API Related Globals
const APIKEY = "your api key here!"
const BASE = "https://api.giphy.com"
const SEARCH = BASE + "/v1/gifs/search"

// Make sure to have a reference to your gallery DOM element so we can add newly
// created <img> elements to it!

// this array will hold the urls of the gifs we get back from Giphy. 
// it is currently populated with placeholder gifs.
let gifURLs = [
  "https://www.tipeeestream.com/bundles/widget/images/animation/default.gif",
  "https://www.tipeeestream.com/bundles/widget/images/animation/default.gif",
  "https://www.tipeeestream.com/bundles/widget/images/animation/default.gif"
]

function renderGallery() {
  // this function should replace the existing DOM gallery with newly created gif <img> dom elements
  
  const styleWidth = (100.0/gifURLs.length).toString() + "%" // make sure to assign this width to your newly created <img> element so they can dynamically size no matter how many GIFs you are rendering!
  
  // TODO: generate your GIFs <img> dom elements with jquery
  
  // TODO: populate the gallery with the elements so they display in the browser
}
  
function getGifURL(query, idx) {
  $.ajax({
    url: SEARCH,
    dataType: "json",
    data: {
      api_key: APIKEY, 
      q: query, 
      limit: 1, 
      rating: "PG-13" 
    },
    success: (resp) => {
      const url = resp.data[0].images.original.url // as an example, this would grab the url we need from the first gif returned (if the limit is set to 1, there will only be a single result)
      // TODO: use the info that our ajax request has successfully returned from Giphy. We recommending invoking another function here which can make use of the urls
    }
  })
}
  
function handleSubmit() {
  // TODO: use the value from the input field $("#query-input") to make our ajax request
  
  // TODO: if multiple keywords are provided, we should make multiple ajax requests!
}
  
// this jQuery method waits for the document to finish loading before invoking its callback
$( document ).ready(() => {
  renderGallery() // renders the placeholders
  // TODO: we need to make sure our "#search-button" has a 'click' event listener attached to it. See: https://api.jquery.com/click/
});
