# brief-es6

#### find() helper

##### find helperr will return the exact one item after the function

ex)

const posts = [
    {id: 1, title: "New Post"},
    {id: 2, title: "Old Post"}
];

let comment = { postId: 1, content: "Good Post"};

const postForComment = (posts, comment) => {
    return posts.find((post) => {
        return post.id == comment.postId;
    
    });
 };

 

