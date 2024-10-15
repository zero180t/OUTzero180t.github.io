var posts=["2024/08/01/hello-world/","2024/10/15/成人高考 专升本 常考题型/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };