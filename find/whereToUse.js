

/* When there is a webpage and that contains bunch of lists of posts,
  and uesr click a specific item to see details, server should return the detauls, 
  in this case, lists are obviously an array(state?), and you should select 
  the particular item that user clicked, at this time you can use find helper


  ex) 

  const posts = [

    { id: 1, title: "post title"},
    { id: 2, title: "post title"},
    { id: 3, title: "post title"},
    { id: 4, title: "post title"},
    { id: 5, title: "post title"},
    { id: 6, title: "post title"},
    { id: 7, title: "post title"},
  ];

  const postId = getIdFromURL();
   
  posts.find( post => post.id === postId);
*/