function myKeyPress(e){
  let keynum;

  if(window.event) {                 
    keynum = e.keyCode;
  } else if(e.which){               
    keynum = e.which;
  }

  console.log(keynum);
}

export default myKeyPress;