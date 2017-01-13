<template>
  <div id="app">
    <HeaderView></HeaderView>
    <TodoList class="container listBody"></TodoList>
    <FooterView></FooterView>
  </div>
</template>

<script>
import TodoList from './components/TodoList';
import FooterView from './components/Footer';
import HeaderView from './components/Header';

export default {
  name: 'app',
  components: {
    HeaderView,
    TodoList,
    FooterView,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding: 40px;
}

.listBody {
  min-height: 500px;
}
</style>
