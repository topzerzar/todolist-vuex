<template>
  <div>
    <div class="control has-addons">
      <input class="input is-expanded" type="text" placeholder="Please Enter Character." v-model="message">
      <button class="button is-info" @click="addToList">Add</button>
    </div>
    <item v-for="item in listMessage" :headertitle="item" ></item>
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'todo',
  components: {
    Item,
  },
  data() {
    return {
      message: '',
      listMessage: [],
    };
  },
  methods: {
    addToList() {
      // this.$store.state.listDatas.push(this.message);
      this.listMessage.push(this.message);
      this.message = '';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.css"></link>
<style scoped>

</style>
