// function Car(model) {
//   this.model = model;
// }

// var cars = [
//   new Car("Buick"),
//   new Car("Camaro"),
//   new Car('Focus')
// ];

// cars.find((car) => {
//   return car.model === 'Focus'
// })

var posts = [
  { id: 1, title: "New Post"},
  { id: 2, title: "Old Post"}
]

var comment = { postId: 1, content: "Great Post"};

function postForComment (posts, comment) {
  return posts.find((post) => {
    return post.id === comment.postId;
  })
}