function rmHtmlTags(param) {
    if (typeof param !== 'string') {
        throw new TypeError('Parameter is not a string');
    } else {
        console.log(param.replace(/(<([^>]+)>)/ig, ''));
    }
}

rmHtmlTags('<p><strong><em>Content</em></strong></p>');