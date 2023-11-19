let linkOne = document.getElementById("link-one"); //+1
let linkTwo = document.getElementById("link-two"); //-1
let linkThree = document.getElementById("link-three"); //+2
let linkFour = document.getElementById("link-four"); //-2
let linkFive = document.getElementById("link-five"); //-3
let linkSix = document.getElementById("link-six"); //0

let points = 0;

function changeVariableOnClick(id) {
  if (id === 'link-one') {
    points = points + 1;

    localStorage.setItem('points', points + 1);
    console.log("in function changeVar")
  } else if (id === 'link-two') {
    points = points - 1;
  } else if (id === 'link-three') {
    points = points + 2;
  } else if (id === 'link-four') {
    points = points - 2;
  } else if (id === 'link-five') {
    points = points - 3;
  } else if (id === 'link-six') {
    points = points - 0;
  }
}

/*
linkOne.addEventListener('click', function() {
  changeVariableOnClick('link-one');
  console.log("in eventlistenr")
});*/

linkOne.addEventListener('click', console.log("test"))

linkTwo.addEventListener('click', function() {
  changeVariableOnClick('link-two');
});

linkThree.addEventListener('click', function() {
    changeVariableOnClick('link-three');
  });

linkFour.addEventListener('click', function() {
    changeVariableOnClick('link-four');
  });

  linkFive.addEventListener('click', function() {
    changeVariableOnClick('link-five');
  });

  linkSix.addEventListener('click', function() {
    changeVariableOnClick('link-six');
  });

  
  function first() {
    localStorage.setItem('points', 1);
  }

  function second() {
    myValue = null;
    if (localStorage.getItem('points')) {
      myValue = localStorage.getItem('points');
    }

    console.log(myValue);
  }