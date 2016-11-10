(function() {
  'use strict';

  /* ------------------------------
  // 1. XHRで同ドメインのデータを取得する
  // ------------------------------
  var request = new XMLHttpRequest();
  request.open('GET', 'data.json');

  request.onload = function() {
    console.log(this.response);
  };

  request.onerror = function() {
    console.error('Error!');
  };

  request.send();
  // */


  /* ------------------------------
  // 2. XHRで別ドメインのデータを取得する（失敗）
  // ------------------------------
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.atnd.org/events/?format=json');

  request.onload = function() {
    console.log(this.response);
  };

  request.onerror = function() {
    console.error('Error!');
  };

  request.send();
  // */


  /* ------------------------------
  // 3. JSONPで別ドメインのデータを取得する
  // ------------------------------
  var element = document.createElement('script');
  element.src = 'http://api.atnd.org/events/?format=jsonp';
  document.body.appendChild(element);

  window.callback = function(data) {
    console.log(data);
  };
  // */


  //* ------------------------------
  // 4. 検索ワードでイベント情報を表示する
  // ------------------------------
  var searchForm = document.getElementById('search-form');
  var searchInput = document.getElementById('search-input');
  var eventList = document.getElementById('event-list');

  var searchEvents = function(event) {
    // Formの送信による画面遷移を止める
    event.preventDefault();
    var keyword = searchInput.value;

    // 検索ワードが空なら何もしない
    if (!keyword) {
      return;
    }

    // 空白をカンマに変換して複数キーワードに対応
    keyword = keyword.replace(/[　\s]/g, ',');

    // 検索中表示
    eventList.innerHTML = '<li>Searching...</li>';

    var element = document.createElement('script');
    element.src = 'http://api.atnd.org/events/?format=jsonp&keyword=' + encodeURI(keyword);
    document.body.appendChild(element);
    document.body.removeChild(element);
  };

  var showEvents = function(data) {
    eventList.innerHTML = '';
    if (data && data.events instanceof Array) {
      data.events.forEach(function(eventData) {
        var eventInfo = eventData.event;
        var li = document.createElement('li');
        var time = document.createElement('time');
        time.textContent = formatDate(eventInfo.started_at);
        var a = document.createElement('a');
        a.href = eventInfo.event_url;
        a.target = '_blank';
        a.textContent = eventInfo.title;
        li.appendChild(time);
        li.appendChild(a);
        eventList.appendChild(li);
      });
    }
  };

  var formatDate = function(dateString) {
    var date = new Date(dateString);
    return (date.getMonth() + 1) + '/' + date.getDate();
  };

  searchForm.addEventListener('submit', searchEvents);
  window.callback = showEvents;

  // */
}());
