<template>
    <div class="item" v-show="isVisible">
        <article class="message is-primary">
            <div class="message-header">
                <p>{{ index }}</p>
                <button class="delete" @click="removeItemList(message)"></button>
            </div>
            <div class="message-body">
                {{ message }}
            </div>
        </article>
    </div>

</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'item',
    props: ['message', 'index'],
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        ...mapActions([
            'removeItemList',
        ]),
    },
};
</script>

<style>
    .item {
        padding: 5px 0px;
    }
</style>