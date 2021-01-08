# vue practice 2



### 1. 일회성 디렉티브 v-once

```html
<div id="app">
    <h1>{{ title }}</h1>
    <p>{{ sayHi() }}</p>
</div>
```

```js
new Vue({
    el: '#app', 
    data: { 
        title: '안녕 Vue.js!'
    },
    
    methods:{ 
        sayHi: function() {
            this.title = '안녕하십니까!'
            return this.title
        }
    }
})
```

<출력>

h1 --> 안녕하십니까!

p --> 안녕하십니까!

##### Q. 위의 title은 변경 전 값이 출력되고, sayHi는 변경 후 값이 출력되게끔 하려면? v-once

```html
<div id="app">
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHi() }}</p>
</div>
```

<출력>

h1 --> 안녕 Vue.js!

p --> 안녕하십니까!



### 2. HTML 코드를 직접 template에 넣어주는 v-html

```html
<div id="app">
    <p v-html="aLinkTo"></p>
</div>
```

```js
new Vue({
    el : "#app",
    data : {
        aLinkTo : "<a href = 'https://naver.com'>네이버</a>"
    }
})
```



### 3. 이벤트 리스너 v-on

##### <주사위 던지기>

- 주사위를 던져 1-6 사이의 랜덤 값 반환하기.

```js
new Vue({
    el : "#app",
    data : {
        number : 0 // 주사위 숫자를 저장할 변수
    },
    methods : {
        rollDice : function (){
            
        }
    }
})
```



### 4. v-model

```html
<input v-model="inputText">
```

```js
new Vue({
    data: {
        inputText: ''
    }
})
```

--> input 값이 Vue data 속성에 연결된다.

##### v-model 의 modifier(수식어)

- v-model.lazy

  = 입력된 값이 data에 반영되지 않고 엔터를 누르는 등의 이벤트가 발생하는 경우에만 반영됨.

     (debounce와는 다르다.)

- v-model.number

  = 데이터를 받을 시 원래는 무조건 문자로 나타남 -> 숫자일 때는 number 타입으로 바꿔줌.

- v-model.trim

  = trim 함수와 동일. 입력 값의 앞과 뒤의 공백을 제거.



### 5. v-if

```html
<h1 v-if="ok"> yes </h1>
<h1 v-else> no </h1>
```

- ok의 값이 True이면 yes가 렌더링 되고 false이면 no가 렌더링 된다.

- v-else를 통해서 else블록을 나타낼 수도 있다.

- v-else는 항상 v-if 또는 v-else-if 뒤에 와야 한다.

*template 사용, 조건부 그룹 만들기.

```html
<template v-if="ok">
	<h1> Title </h1>
    <p> block </p>
</template>
```



### 6. v-show

```html
<h1 v-show="ok"> yes </h1>
```

- v-if 와 동작은 거의 비슷.

##### v-if 와 차이점

- v-if 는 실제로 컴포넌트가 제거, 또는 생성.
- v-show는 단순히 css의 display 속성만 변경. (display : none;)







