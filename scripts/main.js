var myImage=document.querySelector('img');

myImage.onclick = function() {    //當點即到img時
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './book.png') {
      myImage.setAttribute ('src','./brokentable.jpg');
    }
    else {
      myImage.setAttribute ('src','./book.png');
      bookToTable();
    }
}
