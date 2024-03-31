"use strict";

// Function component
function Component(radius, color, x, y, type) {
  this.type = type;
  this.radius = radius;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.gravity = 0.1;
  this.gravitySpeed = 0;
  this.bounce = 0.6;
  this.color = color;

  this.update = function () {
    var ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  };

  this.newPos = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
  };

  this.hitBottom = function () {
    var rockbottom = myGameArea.canvas.height - this.radius;

    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    }
  };

  this.crashWith = function (otherobj) {
    var distanceX = this.x - otherobj.x;
    var distanceY = this.y - otherobj.y;
    var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    return distance < this.radius + otherobj.radius;
  };
} // Game area


var myGameArea = {
  canvas: document.getElementById("myCanvas"),
  start: function start() {
    this.context = this.canvas.getContext("2d");
    this.frameNo = 0;
    this.score = 0;
    this.bestScores = JSON.parse(localStorage.getItem("bestScores")) || []; // Завантаження кращих результатів з localStorage

    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('keydown', function (e) {
      e.preventDefault(); // Заборона дії за замовчуванням

      myGameArea.keys = myGameArea.keys || [];
      myGameArea.keys[e.keyCode] = true;
    });
    window.addEventListener('keyup', function (e) {
      myGameArea.keys[e.keyCode] = false;
    });
  },
  clear: function clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function stop() {
    clearInterval(this.interval);
  },
  updateBestScores: function updateBestScores() {
    this.bestScores.push(this.score);
    this.bestScores.sort(function (a, b) {
      return b - a;
    });
    this.bestScores = this.bestScores.slice(0, 3); // Обмеження масиву до трьох найкращих результатів

    localStorage.setItem("bestScores", JSON.stringify(this.bestScores)); // Збереження кращих результатів в localStorage
  }
};
var myBall;
var myBalls = [];

function startGame() {
  myGameArea.start();
  myBall = new Component(15, "red", 10, 120);
}

function updateGameArea() {
  myGameArea.clear();
  myGameArea.frameNo += 1;

  if (myGameArea.frameNo === 1 || everyinterval(150)) {
    var x = myGameArea.canvas.width;
    var y = Math.floor(Math.random() * myGameArea.canvas.height);
    var minRadius = 10;
    var maxRadius = 20;
    var radius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
    var speedX = Math.floor(Math.random() * 4) - 2;
    myBalls.push(new Component(radius, "blue", x, y, "ball"));
  } // Додавання червоної перешкоди кожних 10 секунд


  if (everyinterval(200)) {
    var x = myGameArea.canvas.width;
    var y = Math.floor(Math.random() * myGameArea.canvas.height);
    var minRadius = 10;
    var maxRadius = 20;
    var radius = Math.floor(Math.random() * (maxRadius - minRadius + 1)) + minRadius;
    var speedX = Math.floor(Math.random() * 4) - 2;
    myBalls.push(new Component(radius, "red", x, y, "obstacle"));
  }

  for (var i = 0; i < myBalls.length; i++) {
    myBalls[i].x -= 1;
    myBalls[i].update();
  } // Покращене управління м'ячиком


  myBall.speedX = 0;
  myBall.speedY = 0;

  if (myGameArea.keys && (myGameArea.keys[37] || myGameArea.keys[65])) {
    myBall.speedX = -4;
  } // Вліво


  if (myGameArea.keys && (myGameArea.keys[39] || myGameArea.keys[68])) {
    myBall.speedX = 4;
  } // Вправо


  if (myGameArea.keys && (myGameArea.keys[38] || myGameArea.keys[87])) {
    myBall.gravitySpeed = -4;
  } // Вверх


  if (myGameArea.keys && (myGameArea.keys[40] || myGameArea.keys[83])) {
    myBall.gravitySpeed = 4;
  } // Вниз


  myBall.newPos();
  myBall.update();
  checkGameOver();
  updateScore(); // Виклик функції для виведення статистики результатів
}

function everyinterval(n) {
  if (myGameArea.frameNo / n % 1 === 0) {
    return true;
  }

  return false;
}

function checkGameOver() {
  for (var i = 0; i < myBalls.length; i++) {
    if (myBall.crashWith(myBalls[i])) {
      if (myBalls[i].color === "red") {
        myGameArea.updateBestScores(); // Оновлення кращих результатів

        alert("Game Over");
        myGameArea.clear();
        myGameArea.stop();
        return;
      } else {
        myGameArea.score += 10; // Нарахування балів при зіткненні з синьою кулькою

        myBalls.splice(i, 1);
        break;
      }
    }
  }
}

function updateScore() {
  var stats = document.getElementById("stats");
  stats.innerHTML = ""; // Очистка статистики перед виведенням нових даних

  stats.innerHTML += "<div>Score: " + myGameArea.score + "</div>";
  stats.innerHTML += "<div>Best Scores:</div>";

  for (var i = 0; i < myGameArea.bestScores.length; i++) {
    stats.innerHTML += "<div>" + (i + 1) + ". " + myGameArea.bestScores[i] + "</div>";
  } // Додаємо статистику трьох найгірших результатів


  var worstScores = myGameArea.bestScores.slice(); // Копіюємо масив, щоб не змінювати оригінал

  worstScores.sort(function (a, b) {
    return a - b;
  }); // Сортуємо за зростанням

  worstScores = worstScores.slice(0, 3); // Вибираємо перші три елементи (найменші значення)

  stats.innerHTML += "<div>Worst Scores:</div>";

  for (var i = 0; i < worstScores.length; i++) {
    stats.innerHTML += "<div>" + (i + 1) + ". " + worstScores[i] + "</div>";
  }
}

startGame();
//# sourceMappingURL=script.dev.js.map
