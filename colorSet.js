var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i=i+1;
    // }
    $('a').css('color', color);
  }
}

var Body = {
  /* 객체의 각 property 사이에는 , 를 써 줘야 함 */
  setColor:function(color){
    //document.querySelector('body').style.color=color;
    $('body').css('color', color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('gray');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  }
  else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('skyblue');
  }
}
