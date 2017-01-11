<template>
  <div>
    <div class="control has-addons">
      <input class="input is-expanded" type="text" placeholder="Please Enter Character." v-model="message">
      <button class="button is-info" @click="addToList(message)">Add</button>
    </div>
    <item v-for="(value, index) in getListData" :message="value" :index="index+1" ></item>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Item from './Item';

export default {
  name: 'anotherList',
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
    ...mapActions([
      'addToList',
    ]),
  },
  computed: {
    ...mapGetters([
      'getListData',
    ]),
  },
};
</script>