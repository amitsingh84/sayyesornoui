<template>
  <div class="preview_testing">
      <div class="preview_row">
         <!-- <div v-for="(item,index) in newValue" :key="index">
            <div v-if="item.formType==='name'">
                {{index}}
            </div>
         </div> -->
         <!-- {{new}} -->
      </div>
  </div> 
</template>


<script>
    // import {store} from '../formbuilder/store'
export default {
    data() {
        return {
            // store
        }
    },
 props: ["new"],
 mounted() {
     console.log(this.new)
     console.log('store',this.new);
 },
}
</script>