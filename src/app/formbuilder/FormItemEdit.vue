<template>
  <div class="form_edit_">
    <!-- <button
      class="element-edit"
      @click="active = true"
      color="primary"
      type="flat"
      size="small"
    >
      Edit
      
    </button> -->

    <div class="row">
      <div class="edit_option" v-if="item.formType == 'name'">
        <form-name :item='item' :id="id"/>
        <!-- <input class="inputx" label="Display Name" :placeholder="item.name" /> -->
        
      </div>
      <div v-else><p>not input</p></div>
    </div>
  </div>
</template>

<script>
import FormName from "./components/FormName.vue";
export default {
  props: ["item","id"],

  name: "FormItemEdit",
  components: {
    FormName,
  },
  data() {
    return {
      active: false,
    };
  },
  // mounted() {
  //   console.log("item", this.item);
  // },
};
</script>

<style>
.vs-popup-text {
  overflow-x: hidden !important;
}

.edit-options__item {
  margin-bottom: 1.5rem;
}

.edit-options__item--switch {
  display: flex;
  justify-content: space-between;
}

.edit-options__item .vs-con-input-label {
  width: 100%;
}

.edit-options__item-group .edit-options__item {
  margin: 0;
}

.edit-options__preview {
  color: #73b1c7;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecfaff;
}

.element-button .element-edit {
  color: white;
}

.input-select {
  width: 100%;
}

.vs-component .vs-switch {
  border-radius: 12px !important;
}
.edit_option {
    margin: 19px auto; 
}
</style>
