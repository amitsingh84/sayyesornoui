<template>
  <div>
    <div class="name_container">
      <button class="editNameBtn" @click="showOption">Edit</button>
      <h3>{{ headingName ? headingName : "Heading Name" }}</h3>
      <!-- <h3>{{headingName}}</h3> -->
      <div class="name_input_row">
        <div class="select_style" v-if="showPrifix">
          <select class="form-select" aria-label="Default select example">
            <option selected value="1">Mr</option>
            <option value="2">Mrs</option>
          </select>
        </div>
        <div>
          <input type="text" placeholder="First Name" />
          <p>First Name</p>
        </div>
        <div v-if="showMiddlename">
          <input type="text" placeholder="Middle Name" />
          <p>Middle Name</p>
        </div>
        <div>
          <input type="text" placeholder="Last Name" />
          <p>Last Name</p>
        </div>
      </div>
    </div>

    <div class="advanceSetting">
      <div class="headingDynamic">
        <p>Enter Your Heading</p>
        <input type="text" v-model="headingName" />
      </div>
      <div class="setPrifixtOption">
        <p>Show Prefix</p>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            @click="showHidePrefix"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">{{
            showPrifix ? "on" : "off"
          }}</label>
        </div>
      </div>
      <div class="setPrifixtOption">
        <p>Show Middle Name</p>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexMiddleCheckDefault"
            @click="showHideMiddlename"
          />
          <label class="form-check-label" for="flexMiddleCheckDefault">{{
            showMiddlename ? "on" : "off"
          }}</label>
        </div>
      </div>
      <button >Change Data</button>
      <div class="flex justify-between"> 
        <!-- <json-display class="w-64"  :value="item" /> -->
        {{id}}
      </div>
    </div>
  </div>
</template>
<script>
"use strict"
    // import jsonDisplay from "../../formbuilder/jsonDisplay.vue";
     import {store} from '../../formbuilder/store'
export default {
    components: { 
    // jsonDisplay, 
  },
  data() {
    return {
      headingName: "",
      showPrifix: false,
      showMiddlename: false,
      store,
    //  items:this.item

      
    };
  },
  props: ["item","id"],
  methods: {
    showOption() {},
    showHidePrefix() {
      this.showPrifix = !this.showPrifix; 
    // eslint-disable-next-line vue/no-mutating-props
    this.item.prefix=this.showPrifix
    
    },
    showHideMiddlename() {
      this.showMiddlename = !this.showMiddlename;
       // eslint-disable-next-line vue/no-mutating-props
       this.item.middleName=this.showMiddlename
    },
     
          
    },
  
  mounted() {
      console.log('testing',this.showPrifix)
       this.store.push(this.item)
    // this.jsonDisplay.push(this.id)
  },
};
</script>

<style scoped>
.name_input_row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
.name_input_row > div {
  flex: 1;
  flex-shrink: 0.2;
}
div.select_style {
  flex: 0.4;
}
.name_container.container-fluid {
  padding: 0;
}
.name_input_row p {
  padding: 0;
  margin: 0;
}
.name_input_row input {
  height: 35px;
  margin-bottom: 7px;
  width: 100%;
}
.name_container {
  padding: 17px;
  background: #d2eeeb;
  box-shadow: 0px 0px 15px 4px #ccb5b5;
  border-radius: 10px;
  cursor: move;
}
@media (max-width: 767px) {
  .name_input_row {
    display: block;
  }
  .name_input_row > div {
    width: 48%;
    float: left;
    padding: 0 4px;
  }
  div.select_style {
    width: 48%;
    float: left;
  }
}
</style>
