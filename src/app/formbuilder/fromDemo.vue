<template>
<div>
  <draggable 
  v-model="myArray" 
  group="people" 
  @start="clone=true" 
  @end="clone=false" 
  item-key="id">
  <template #item="{element}">
    <div>{{element.name}}</div>
   </template>
</draggable>

<draggable 
  v-model="myArray2" 
  group="people" 
  @start="clone=true" 
  @end="clone=false" 
  item-key="id">
  <template #item="{element}">
    <div>{{element.name}}</div>
   </template>
</draggable>
</div>
</template>

<script>
  // import { FormBuilder } from 'vue-formio';
    import draggable from 'vuedraggable'

  export default {
    components: {
            draggable,
        },
        data(){
          return{
             myArray: [
        { name: "John 1", id: 0 },
        { name: "Joao 2", id: 1 },
        { name: "Jean 3", id: 2 }
      ],
       myArray2: [
        { name: "John 3", id: 3 },
        { name: "Joao 4", id: 4 },
        { name: "Jean 6", id: 6 }
      ],
       clone: false
          }
        },
        // mounted(  ){
        //   if(this.myArray.id===0){

        //   }
        // }
  }
</script>