let linkOne = document.getElementById("link-one"); 
let linkTwo = document.getElementById("link-two"); 

function changeVariableOnClick(id) {
  var rand = Math.random();
  if (id === 1) {
    if (rand <= .7) {
      window.location.href = 'win.html';
    } else {
      window.location.href = 'lose.html';
    }
  } else if (id === 2) {
    if (rand <= .4) {
      window.location.href = 'win.html';
    } else {
      window.location.href = 'lose.html';
    }
  } 
}

/*
linkOne.addEventListener('click', function() {
  changeVariableOnClick('link-one');
});

linkTwo.addEventListener('click', function() {
  changeVariableOnClick(2);
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