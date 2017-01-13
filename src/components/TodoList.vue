<template>
  <div>
    <div class="columns">
      <div class="column is-half">
        <div class="control has-addons">
          <input class="input is-expanded" type="text" placeholder="Please Enter Character." v-model="message">
          <button class="button is-info" @click="addToList(message), clearData()">Add</button>
        </div>
        <div style="display: block;">
            <ul class="list-group">
              <li class="list-item" v-for="item in listFilterForSugesstion" @click="selectItem(item)">{{ item }}</li>
            </ul>
          </div>
      </div>
      <div class="column is-half">
        <div class="result">
          <p class="textResult">Result</p>
        </div>
        <item v-for="(value, index) in getListData" :message="value" :index="index+1" ></item>
      </div>
    </div>
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
      listSuggesstion: [],
      listFilterForSugesstion: [],
    };
  },
  beforeCreate() {
    this.$http.get('https://testfirebase-86be2.firebaseio.com/skile.json')
        .then(response => response.json()
        , (error) => {
          // eslint-disable-next-line
          console.log(error);
        })
        .then((data) => {
          const resultArray = [];
          if (data.length > 0) {
            for (const key in data) {
              resultArray.push(data[key]);
            }
          }
          // eslint-disable-next-line
          // console.log(resultArray);
          this.listSuggesstion = resultArray;
        });
  },
  methods: {
    ...mapActions({
      addToList: 'addToList',
    }),
    clearData() {
      this.message = '';
    },
    selectItem(text) {
      this.message = text;
      this.listFilterForSugesstion = [];
    },
    filterList(text) {
      this.listFilterForSugesstion = [];
      if (text.length > 0) {
        for (var i = 0 ; i < this.listSuggesstion.length ; i++) {
          var check = this.listSuggesstion[i].toLowerCase().indexOf(text.toLowerCase());
          if(check > -1 ) {
            this.listFilterForSugesstion.push(this.listSuggesstion[i]);
          }
        }
      }
    }
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
  watch: {
    message : function(text) {
      this.filterList(text);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.0/css/bulma.css"></link>
<style scoped>
  .result {
    height: 35px; 
    width: 100%; 
    border-bottom: 1px solid #363636;
    margin-bottom: 10px;
  }

  .textResult {
    color: #000; 
    font-size: 16px;
  }

  .list-item {
    padding: 12px 0px;
    border: 1px solid #d2d2d2;
    position: relative;
    display: block;
    margin-bottom: -1px;
  }

  .list-group {
  }
</style>
