---
title: Vuex
type: word
tags: [word]
---

## 상태 관리 라이브러리임

Store라는 파일을 통해 데이터를 관리하고 프로젝트 전체에 걸쳐 활용할 수 있게 해줌.


- 💡상태 관리 패턴이란?

단순한 앱이면 상관 없지만, 규모가 크고 복잡한 앱일수록 상태관리를 잘 정리해놔야함.

잘 정리 해놔야 컴포넌트 간의 통신이나 데이터 전달을 좀 더 유기적으로 관리할 수 있음.


>앱의 규모가 커질수록, props, emit이 거쳐야 할 컴포넌트가 많아지고
EventBus를 사용한다고 하더라도 이벤트를 어디서 보내고 받았는지 데이터 흐름을 파악하기에 어렵다.

---

### 🔥Vuex 구조

![img_8.png](static/img_8.png)
vuex는 state, mutations, actions, getter 4가지 형태로 관리가 된다.

#### 🎈State
- state는 쉽게 말하면 프로젝트에서 공통으로 사용할 변수를 정의한다.
- 프로젝트 내의 모든 곳에서 참조 및 사용이 가능하다.
- state를 통해 각 컴포넌트에서 동일한 값 사용 가능하다.
- state는 mutations를 통해서만 변경이 가능하다.

#### 🎈Mutations
-  Mutations의 주요 목적은 state를 변경시키는 것이다.
-  비동기 처리가 아닌 동기 처리를 한다.
-  위의 함수가 실행되고 종료된 후 그 다음 아래의 함수가 실행된다.
-  commit('함수명', '전달인자')으로 실행 시킨다.
-  mutations 내에 함수 형태로 작성한다.
#### 🎈Actions
-  Actions의 주요 목적은 mutations를 실행시키는 것 이다.
-  동기 처리가 아닌 비동기 처리를 한다. 순서에 상관없이 먼저 종료된 함수의 피드백을 받아 후속 처리 하게 된다.
-  dispatch('함수명','전달인자')로 실행시킬 수 있다.
-  ex) dispatch('함수명', '전달인자', {root:true})
-  actions 내에 함수 형태로 작성한다.
-  비동기 처리이기 때문에 콜백 함수로 주로 작성한다.
####  🎈Getters
-  각 components의 계산된 속성의 공통 사용 정의
-  여러 components에서 동일한 computed가 사용 될 경우 Getters에 정의하여 공통으로 쉽게 사용할 수 있다.
-  하위 모듈의 getters를 불러오기 위해서는,
-  this.$store.getters["경로명/함수명"];을 사용해야 한다.

---


### 🔥Components에서 각 store 모듈에 접근하는 방법


#### 🎈**state**
component의 computed 내에 작성을 해야한다.
1. 접근 방법 : this.$store.state.items
2. mapState 접근 방법

```js
computed: {
...mapState({
items: state => state.items,
}),
}
```

#### 🎈**mutations**
mutations를 실행하기 위해서는 component의 methods 영역에서 작성을 해야한다.
1. 접근 방법 : this.$store.commit('경로명/함수명')
2. mapMutations 접근 방법
```js
methods: { //methos 영역에서 호출해야 함
...mapMutations({
add: 'item/increment' //this.add()를this.$store.commit('item/incremetn')에 매핑한다.
}),
}
```
#### 🎈**actions**
Actions를 실행하기 위해서는 component의 methods 영역에서 작성을 해야한다.
1. 접근 방법 : this.$store.dispatch('경로명/함수명')
2. mapActions 접근 방법
```js
methods: { //methos 영역에서 호출해야 함
...mapActions({
add: 'item/increment' //this.add()를this.$store.dispatch('item/incremetn')에 매핑한다.
}),
}
```
#### 🎈**Getters**
Getters를 실행하기 위해서는 component의 computed 영역에서 작성을 해야한다.
1. 접근 방법 : this.$store.getters["경로명/함수명"];
2. mapGetters 접근 방법
```js
methods: {
...mapActions({
doneCount : 'item/doneTodosCount'
})
}
```

