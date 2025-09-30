var posts=["2025/09/15/Java-API/","2025/09/17/Java-Exceptoin/","2025/09/16/Java-Lambda/","2025/09/17/Java-File/","2025/09/17/Java-MethodRef/","2025/09/16/Java-Collection/","2025/09/17/Java-IO/","2025/09/17/Java-Stream/","2025/09/08/hello-world/","2025/09/18/Java-Thread/","2025/09/30/sz-bxsb/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };