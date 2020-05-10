# **Google One Tap 2.0**

To run the demo : 
- clone the repo
- change the client id to your provided `google client id` in `google-yolo.html` file.
- start a server using
```
    python -m SimpleHTTPServer 8080
```

### Usage

`index.html` shows how to use the iframe. The iframe if present at multiple places on the same page can be used having *class name* `google-iframe-mul` and if used once every page then it can be used having *id* `google-iframe`.

`event.js` shows that how the events from the google one tap login are handled. Use this once every page whether you have multiple iframes or single.

`google-yolo.html` shows how the google one tap 2.0 is implemented using **JavaScript API**. This has multiple functions handling different tasks in the script added internally into the html.

### Important Points to Remember

- *onGoogleYoloLoad* function is changed to *onGoogleLibraryLoad*
- Rather than having yolo as a callback param now google has added its generic functions to it global object **google** i.e.
--  passing configuration params to yolo object now it is passed using **google.accounts.id.initialize**
-- yolo promisified function is changed to **google.accounts.id.prompt**
- *openyolo.setRenderMode* is changed to **ui_mode** key in the initialize object having value bottom_sheet and card for mobile and desktop view respectively. by default it handles itself. But you can force it by passing it. (optional) (NOT MENTIONED IN THE OFFICIAL DOCS)
- **context** key can be passed in initialize object with value *use*, *signup* or *signin* to change the ui text prompting for the message for its usage. (optional)

And many more...
You can visit [Google One Tap Reference](https://developers.google.com/identity/one-tap/web/reference/html-reference)