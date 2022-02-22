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
       <div v-if="newStore.length===0">
              <p>no data show</p>
          </div>
          <div v-else>
      <div v-for="item in newStore" :key="item">
          

          {{item.name}} {{item.prefix}}  
          </div>
      </div>
      <!-- {{newStore}} -->
  </div> 
</template>


<script>
    // import {store} from '../formbuilder/store'
export default {
    props:["store"],
    data() {
        return {
           newStore:this.store
        }
    },
//  props: ["new"],
//  mounted() {
//      console.log(this.new)
//      console.log('store',this.new);
//  },
}
</script>