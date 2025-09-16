var posts=["2025/09/16/Java-Collection/","2025/09/15/Java-API/","2025/09/16/Java-Lambda/","2025/09/08/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };