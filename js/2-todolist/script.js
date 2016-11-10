(function() {
  'use strict';

  /* ------------------------------
  // 1. リストに項目を追加する
  // ------------------------------
  var todoList = document.getElementById('todo-list');
  var todoForm = document.getElementById('todo-form');
  // getElementById以外の取得方法
  var todoInput = document.querySelector('#todo-form input');

  var addItem = function(event) {
    // Formの送信による画面遷移を止める
    event.preventDefault();

    // テキストボックスが空なら何もしない
    if (!todoInput.value) {
      return;
    }

    // テキストボックスの内容をリストに追加
    var listItem = document.createElement('li');
    listItem.textContent = todoInput.value;
    todoList.appendChild(listItem);

    // テキストボックスの内容を空にする
    todoInput.value = '';
  };

  todoForm.addEventListener('submit', addItem);
  // */

  /* ------------------------------
  // 2. チェックボックスと削除ボタンを追加する
  // ------------------------------
  var todoList = document.getElementById('todo-list');
  var todoForm = document.getElementById('todo-form');
  // getElementById以外の取得方法
  var todoInput = document.querySelector('#todo-form input');

  var deleteItem = function(event) {
    todoList.removeChild(event.target.parentElement);
  };

  var addItem = function(event) {
    // Formの送信による画面遷移を止める
    event.preventDefault();

    // テキストボックスが空なら何もしない
    if (!todoInput.value) {
      return;
    }

    // テキストボックスの内容をリストに追加
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    var span = document.createElement('span');
    span.textContent = todoInput.value;

    var label = document.createElement('label');
    label.appendChild(checkBox);
    label.appendChild(span);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', deleteItem);

    var listItem = document.createElement('li');
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    // テキストボックスの内容を空にする
    todoInput.value = '';
  };

  todoForm.addEventListener('submit', addItem);
  // */

  /* ------------------------------
  // 3. データを配列に抜き出す
  // ------------------------------
  var todos = [];
  var todoList = document.getElementById('todo-list');
  var todoForm = document.getElementById('todo-form');
  // getElementById以外の取得方法
  var todoInput = document.querySelector('#todo-form input');
  var render = function() {
    todoList.innerHTML = '';
    todos.forEach(function(todo) {
      var checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      if (todo.done) {
        checkBox.checked = true;
      }
      checkBox.addEventListener('change', function(event) {
        todo.done = event.target.checked;
        render();
      });

      var span = document.createElement('span');
      span.textContent = todo.text;

      var label = document.createElement('label');
      label.appendChild(checkBox);
      label.appendChild(span);

      var deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', function() {
        var index = todos.indexOf(todo);
        if (todos[index]) {
          todos.splice(index, 1);
          render();
        }
      });

      var listItem = document.createElement('li');
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
    });
  };
  var addItem = function(event) {
    // Formの送信による画面遷移を止める
    event.preventDefault();

    // テキストボックスが空なら何もしない
    if (!todoInput.value) {
      return;
    }

    todos.push({text: todoInput.value, done: false});
    render();

    // テキストボックスの内容を空にする
    todoInput.value = '';
  };

  todoForm.addEventListener('submit', addItem);
  // */

  //* ------------------------------
  // 4. リストの内容をlocalStorageに保存する
  // ------------------------------
  var todos = JSON.parse(localStorage.getItem('todos')) || [];
  var todoList = document.getElementById('todo-list');
  var todoForm = document.getElementById('todo-form');
  var todoInput = document.querySelector('#todo-form input');
  var render = function() {
    todoList.innerHTML = '';
    todos.forEach(function(todo) {
      var checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      if (todo.done) {
        checkBox.checked = true;
      }
      checkBox.addEventListener('change', function(event) {
        todo.done = event.target.checked;
        render();
      });

      var span = document.createElement('span');
      span.textContent = todo.text;

      var label = document.createElement('label');
      label.appendChild(checkBox);
      label.appendChild(span);

      var deleteButton = document.createElement('button');
      deleteButton.textContent = '削除';
      deleteButton.addEventListener('click', function() {
        var index = todos.indexOf(todo);
        if (todos[index]) {
          todos.splice(index, 1);
          render();
        }
      });

      var listItem = document.createElement('li');
      listItem.appendChild(label);
      listItem.appendChild(deleteButton);
      todoList.appendChild(listItem);
    });

    localStorage.setItem('todos', JSON.stringify(todos));
  };
  var addItem = function(event) {
    // Formの送信による画面遷移を止める
    event.preventDefault();

    // テキストボックスが空なら何もしない
    if (!todoInput.value) {
      return;
    }

    todos.push({text: todoInput.value, done: false});
    render();

    // テキストボックスの内容を空にする
    todoInput.value = '';
  };

  todoForm.addEventListener('submit', addItem);
  render();
  // */
}());
