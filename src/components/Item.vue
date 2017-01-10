<template>
    <div class="item" v-show="isVisible">
        <article class="message is-primary">
            <div class="message-header">
                <p>{{ headertitle }}</p>
                <button class="delete" @click="closeItem()"></button>
            </div>
            <div class="message-body">
                {{ headertitle }}
            </div>
        </article>
    </div>

</template>

<script>
export default {
    name: 'item',
    props: ['headertitle'],
    data() {
        return {
            isVisible: true,
        };
    },
    methods: {
        closeItem() {
            this.isVisible = false;
        },
    },
};
</script>

<style>
    .item {
        padding: 5px 0px;
    }
</style>