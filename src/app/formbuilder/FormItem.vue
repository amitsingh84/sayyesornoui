<template>
    <div :class="['element element-'+ el.type]"><span>{{ el.type !== "text" ? el.name : el.body }}</span>
        <span class="element-col" v-if="el.type == 'column'">({{ el.columnSize }} of 12)</span>
        <div class="element-tools">
            <!-- <FormItemEdit :item="el" v-show="noEdit"></FormItemEdit> -->
            <!-- <button @click="deleteItem" color="danger" vs-size="small" vs-type="flat">&#x2715;</button> -->
             
        </div>

        <draggableChild :items="el.items" :parent="items" v-if="el.container == true"></draggableChild>

    </div>
</template>
<script>
import draggableChild from './draggable-child.vue'
export default {
    props: ["el", "index", "items"],
    name: "FormItem",
    components: {
        draggableChild, 
    },
    mounted() {
        console.log(this.el);
    } 
}
</script>