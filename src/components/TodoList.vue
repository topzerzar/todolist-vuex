<template>
  <div>
    <div class="control has-addons">
      <input class="input is-expanded" type="text" placeholder="Please Enter Character." v-model="message">
      <button class="button is-info" @click="addToList">Add</button>
    </div>
    <item v-for="item in getValue" :headertitle="item" ></item>
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
      // ### Call mutation don't have action
      this.$store.commit('addToList', this.message);
      // ### call store
      // this.$store.state.listData.push(this.message);
      this.message = '';
    },
  },
  computed: {
    getValue() {
      return this.$store.state.listData;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.css"></link>
<style scoped>

</style>
