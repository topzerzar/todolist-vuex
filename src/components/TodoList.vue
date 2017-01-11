<template>
  <div>
    <div class="control has-addons">
      <input class="input is-expanded" type="text" placeholder="Please Enter Character." v-model="message">
      <button class="button is-info" @click="addToList(message), clearData()">Add</button>
    </div>
    <item v-for="(value, index) in getListData" :message="value" :index="index+1" ></item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
    ...mapActions({
      addToList: 'addToList',
    }),
    clearData() {
      this.message = '';
    },
    // addToList(message) {
    //   this.$store.dispatch('addToList', message);
    // }
    // ...mapMutations([
    //     'addToList', // this.$store.commit('addToList', this.message);
    //     'remove',
    // ]),
    // addToList() {
    //   // ### Call mutation don't have action
    //   this.$store.commit('addToList', this.message);
    //   // ### call store
    //   // this.$store.state.listData.push(this.message);
    //   this.message = '';
    // },
  },
  computed: {
    ...mapGetters([
      'getListData',
    ]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.css"></link>
<style scoped>

</style>
