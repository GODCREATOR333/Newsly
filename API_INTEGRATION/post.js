const GhostAdminAPI = require('@tryghost/admin-api');

const api = new GhostAdminAPI({
    url: 'http://localhost:2368',
    key: '677357fd6fdb05d2a4552f5c:940e0b8fd264043422a9612de7176e26a41e7b06defc78ce712c61a2aa4fc4eb',
    version: "v5.0",
  });



// Utility function to find and upload any images in an HTML string
function processImagesInHTML(html) {
    // Find images that Ghost Upload supports
    let imageRegex = /="([^"]*?(?:\.jpg|\.jpeg|\.gif|\.png|\.svg|\.sgvz))"/gmi;
    let imagePromises = [];

    while((result = imageRegex.exec(html)) !== null) {
        let file = result[1];
            // Upload the image, using the original matched filename as a reference
            imagePromises.push(api.images.upload({
                ref: file,
                file: path.resolve(file)
            }));
    }

    return Promise
        .all(imagePromises)
        .then(images => {
            images.forEach(image => html = html.replace(image.ref, image.url));
            return html;
        });
}

// Your content
let html = '<p>My test post content.</p><figure><img src="/path/to/my/image.jpg" /><figcaption>My awesome photo</figcaption></figure>';

return processImagesInHTML(html)
    .then(html => {
        return api.posts
            .add(
                {title: 'My Test Post', html},
                {source: 'html'} // Tell the API to use HTML as the content source, instead of Lexical
            )
            .then(res => console.log(JSON.stringify(res)))
            .catch(err => console.log(err));

    })
    .catch(err => console.log(err));


