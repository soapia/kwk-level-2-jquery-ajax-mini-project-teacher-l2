## Introduction

For this mini-project, we will be using the Giphy API to query GIFs that match keywords and dynamically adding them to the DOM! [This link is an example of what your App will look like when complete.][example]

## Register Your App

To use the Giphy API, we will need to register our application with them. This is a very common authorization flow for companies exposing API's to use. Giphy's App registration process is very straightforward:

- visit the [Giphy developers][giphy-dev] page and do one of the following:
  - log in if you already have a Giphy account
  - log in via the Facebook account option
  - create an account and log in with it
- visit the [dashboard][giphy-dashboard] page now that you are logged in to your account
- click on "Create an App", providing a name and simple description
- following, your dashboard should be populated with your registered app:

![](https://curriculum-content.s3.amazonaws.com/KWK/giphy-app-reg.png)
  
The **Api Key** is a special token provided for our app specifically. When our app makes requests to the Giphy API, ("Hey Giphy! Can I please have a GIF of Nyan Cat?"), it will make sure to also send the **Api Key** with the request. This allows Giphy to know who is using the API.

Once your App is registered, replace the `APIKEY` value in `index.js` with the one Giphy generated for your App. This key needs to be sent with every request we make to the Giphy API. 

#### Sample Request

Here is an example search submitted to the API for a single GIF that matches the search for a moose. Take a moment to read the whole request line by line, using the comments as a reference:

```javascript
$.ajax({
  url: "https://api.giphy.com/v1/gifs/search",
  dataType: "json", // informs $.ajax what the type of data we are expecting back will be
  data: { // holds our request parameters in key: value form
    api_key: APIKEY, // our app specific key
    q: "moose", // the search query itself
    limit: 1, // limit to one GIF result
    rating: "PG-13" // limits our results to everything PG-13 and under 
  },
  success: (resp) => {
    // if successful, the JSON response will be automatically turned into a JavaScript object by $.ajax
    // it is here that we can trigger another function to do something with the response data!
  }
})
```

#### Sample Response

Assuming the request we made above was successful, we could expect the response object to look like this:

```javascript
// resp
{
  data: [{ /* one GIF data object! */}], 
  pagination: {…}, 
  meta: {…}
}
```

The information we want out of this lives in `resp.data`, which should be an array with as many GIF data objects as we request via the `limit` parameter in our request.

Following is an example of a returned GIF info object:

```javascript
// resp.data
[
  {
    bitly_gif_url: "https://gph.is/1DPNcfT"
    bitly_url: "https://gph.is/1DPNcfT"
    content_url: ""
    embed_url: "https://giphy.com/embed/RQSuZfuylVNAY"
    id: "RQSuZfuylVNAY"
    images: {fixed_height_still: {…}, original_still: {…}, fixed_width: {…}, fixed_height_small_still: {…}, fixed_height_downsampled: {…}, …}
    import_datetime: "2015-05-04 03:05:40"
    is_sticker: 0
    rating: "pg"
    slug: "RQSuZfuylVNAY"
    source: "https://reddit.com/r/gifs/comments/34s9gt/i_need_a_hero/"
    source_post_url: "https://reddit.com/r/gifs/comments/34s9gt/i_need_a_hero/"
    source_tld: "reddit.com"
    title: "superman costume GIF"
    trending_datetime: "2015-05-04 19:00:36"
    type: "gif"
    url: "https://giphy.com/gifs/RQSuZfuylVNAY"
    username: ""
  }
]
```

We are getting a ton of data back, but all we really need to display the GIF on the DOM is one of the GIF URLs. You will see in the `getGifURL` method of `index.js` that the URL we are extracting from a GIF info object can be accessed as follows: `resp.data[0].images.original.url`

## Getting Started

##### Styling

All of the styling for this project has been provided in `index.css` with additional (minimal) in-line styling found within `index.js`. While you should feel free to change whatever you like, the main focus should be on using the Giphy API and successful rendering results to the DOM!

##### HTML

Take a moment to familiarize yourself with the provided `index.html` file. In addition to already importing jQuery as well as our stylesheet (`index.css`) and script (`index.js`), all of the basic HTML has been provided. If you open your `index.html` file in Chrome now, you should see a minimally framed page.

Pay particular attention to the `#search` div, as well as the `#gallery` div. These will be the two DOM elements our code in `index.js` interacts with. 

## Deliverables

_Comments have been provided throughout the code. More specifically, 'TODOs' are written throughout `index.js` which will help guide you in fulfilling the deliverables._

- Register your App and obtain a Giphy API key by following the steps above
- When a user clicks on your submit button (this image/gif of a lady looking around), the following should happen:
  - The string in the input element is captured
  - An `.ajax` request to Giphy with that string is sent off
  - When data is returned, the GIF URL(s) are captured
  - New `<img>` elements are created (using jQuery) for each returned GIF object
  - The captured GIF URL(s) are added to to the `<img>` elements
  - The newly created `<img>` elements are then inserted into our `#gallery` DOM element
  
Once complete, have some fun with the App! See if you can, from viewing GIF results only, guess what your group/partners used as a query string. 

### Stretch Goals

  - Append the query string that every GIF was associated with underneath the `<img>` element so that you can see it in the browser (i.e. a GIF that was returned for "dog" has the word "dog" underneath it in the browser)
  - Clear the input field text after each search
  - Create an additional input at the bottom of the page that a second user can fill out
  - When a user hits enter/submits the input, the value they provided should be checked against the original search query to see if they guessed correctly based on the GIFs alone

##### Note:
  - Giphy accepts '+' between words and it will search for GIFs that match both words (i.e. the single GIF returned for hamster+snake in the example at the top of this readme)
  - The provided styling will automatically resize `<img>` elements that are children of the `#gallery` DOM element
  

[giphy-dev]: https://developers.giphy.com/
[giphy-dashboard]: https://developers.giphy.com/dashboard/
[example]: https://curriculum-content.s3.amazonaws.com/KWK/sample-giphy-proj.gif
