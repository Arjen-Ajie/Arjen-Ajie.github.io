var posts=["2025/09/08/hello-world/","2025/09/15/Java-API/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };