(function() {
  'use strict';

  /* ------------------------------
  // 1. 画面に時刻を表示する
  // ------------------------------
  var timerElem = document.getElementById('timer');
  timerElem.textContent = new Date();
  // */


  /* ------------------------------
  // 2. 1秒ごとに更新する
  // ------------------------------
  var timerElem = document.getElementById('timer');
  setInterval(function() {
    timerElem.textContent = new Date();
  }, 1000);
  // */


  /* ------------------------------
  // 3. 時刻フォーマットを変更する
  // ------------------------------
  var timerElem = document.getElementById('timer');
  setInterval(function() {
    timerElem.textContent = formatTime(new Date());
  }, 1000);

  function formatTime(date) {
    return zeroFill(date.getHours())
      + ':' + zeroFill(date.getMinutes())
      + ':' + zeroFill(date.getSeconds());
  }

  function zeroFill(num) {
    return ('0' + num).slice(-2);
  }
  // */


  //* ------------------------------
  // 4. ストップウォッチをつくる
  // ------------------------------
  var passedTime = 0;
  var intervalId = null;
  var timerElem = document.getElementById('timer');

  document.getElementById('start').addEventListener('click', start);
  document.getElementById('stop').addEventListener('click', stop);
  document.getElementById('reset').addEventListener('click', reset);
  render();

  function start() {
    if (intervalId !== null) {
      return;
    }

    intervalId = setInterval(function() {
      passedTime++;
      render();
    }, 1000);
  }

  function stop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function reset() {
    stop();
    passedTime = 0;
    render();
  }

  function render() {
    var minutes = Math.floor(passedTime / 60);
    var seconds = passedTime % 60;
    timerElem.textContent = zeroFill(minutes) + ':' + zeroFill(seconds);
  }

  function zeroFill(num) {
    return ('0' + num).slice(-2);
  }
  // */


  /* ------------------------------
  // 5. クラス化する
  // ------------------------------
  function Timer(elem) {
    this.timerElem = elem;
    this.passedTime = 0;
    this.intervalId = null;
    this.reset();
  }

  Timer.prototype = {
    start: function() {
      if (this.intervalId !== null) {
        return;
      }
      var self = this;
      this.intervalId = setInterval(function() {
        self.passedTime++;
        self.render();
      }, 1000);
    },
    stop: function() {
      if (this.intervalId !== null) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    reset: function() {
      this.stop();
      this.passedTime = 0;
      this.render();
    },
    render: function() {
      var minutes = Math.floor(this.passedTime / 60);
      var seconds = this.passedTime % 60;
      this.timerElem.textContent = this.zeroFill(minutes) + ':' + this.zeroFill(seconds);
    },
    zeroFill: function(num) {
      return ('0' + num).slice(-2);
    }
  };

  var timer = new Timer(document.getElementById('timer'));
  var startButton = document.getElementById('start');
  var stopButton = document.getElementById('stop');
  var resetButton = document.getElementById('reset');

  startButton.addEventListener('click', function() { timer.start(); });
  stopButton.addEventListener('click', function() { timer.stop(); });
  resetButton.addEventListener('click', function() { timer.reset(); });
  // */
}());
