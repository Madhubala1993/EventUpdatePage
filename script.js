const time = 1000;

function timer1(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "10";
    console.log("10");
    callback();
  },time);
}

function timer2(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "9";
    console.log("9");
    callback();
  }, time);
}

function timer3(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "8";
    console.log("8");
    callback();
  },time);
}

function timer4(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "7";
    console.log("7");
    callback();
  },time);
}

function timer5(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "6";
    console.log("6");
    callback();
  },time);
}

function timer6(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "5";
    console.log("5");
    callback();
  },time);
}

function timer7(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "4";
    console.log("4");
    callback();
  },time);
}

function timer8(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "3";
    console.log("3");
    callback();
  },time);
}
function timer9(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "2";
    console.log("2");
    callback();
  },time);
}
function timer10(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "1";
    console.log("1");
    callback();
  },time);
}
function timer11(callback) {
  setTimeout(() => {
    document.getElementById("count").innerHTML = "0";
    console.log("0");
    callback();
  },time);
}
// callback hell
let countDown = () => {
  timer1(() => {
    timer2(() => {
      timer3(() => {
        timer4(() => {
          timer5(() => {
            timer6(() => {
              timer7(() => {
                timer8(() => {
                  timer9(() => {
                    timer10(() => {
                      timer11(() => {
                        setTimeout(() => {
                          document.getElementById("count").innerHTML = "HAPPY INDEPENDENCE DAY";
                          console.log("HAPPY INDEPENDENCE DAY");
                        }, time);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}