# brief-es6

### `find` Helper
##### find helper will return the exact the item after the function
``` js 
ex)

const posts = [
    {id: 1, title: "New Post"},
    {id: 2, title: "Old Post"}
]
let comment = { postId: 1, content: "Good Post"}
const postForComment = (posts, comment) => {
    return posts.find((post) => {
        return post.id == comment.postId;  
    })
 }
 postForComment(posts, comment);
{id: 1, title: "New Post"};
```
 

