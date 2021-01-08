# Vue.js



### 1. el, data, methods, this

```js
//새롭게 Vue 선언
new Vue({
    el: '#app', //어떤 요소에 적용 할 지 정함. 이 경우 아이디 app인 요소.
    data: { //해당 VueJs에서 사용할 정보들을 선언해주는 역할.
        title: 'todolist'
    },
    
    methods:{ //함수 지정
        howAre: function() {
            return "기분이 어때?"
        },
        sayHi: function() {
            return this.title //this -> data에 저장된 값을 꺼내서 쓸 수 있음.
        }
    }
})
```



### 2. 디렉티브 Diretive

- HTML 태그 안에 들어갈 수 있는 속성의 역할
- v-가 붙는 것이 특징

##### 1) v-vind

```html
<div id="app">
    <a v-bind:href = "link"> 네이버 </a>
</div>
```

```js
new Vue({
    el : '#app',
    data: {
        link = "https://naver.com"
    }
})
```

<약어>

```html
<div id="app">
    <a :href = "link"> 네이버 </a>
</div>
```

##### 2) v-on

```html
<div id="app">
    <a v-on:click = "doSomething"> ... </a>
</div>
```

<약어>

```html
<div id="app">
    <a @click = "doSomething"> ... </a>
</div>
```







