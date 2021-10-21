'use strict';

// es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

let data = new AttachedPost('Alex', '', '21/10/2021');

console.log(data);
data.edit('hi');
data.makeTextHighlighted();
console.log(data);


// es6
class Post_2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost_2 extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted_2() {
        this.highlighted = true;
    }
}

let data_2 = new AttachedPost_2('Sam', 'Hello', '21/10/2021');

console.log(data_2);
data_2.edit('Hi');
data_2.makeTextHighlighted_2();
console.log(data_2);