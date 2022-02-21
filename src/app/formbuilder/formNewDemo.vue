<template>
<div class="container-fluid">
  <div class="new_form_demo row">
    <div class="form_btn col-sm-12 col-md-2">
      <draggable
        class="dragArea list-group"
        :list="elements"
        :group="{ name: 'elements', pull: 'clone', put: false }"
        item-key="name"
         :clone="onClone"
      >
        <template #item="{ element }">
          <div class="list-group-item">
           {{ element.name }} 
          </div>
        </template>
      </draggable>
    </div>
    <div class="form_content  col-sm-12 col-md-8">
      <draggable
        class="content_block"
        :list="newElements"
        group="elements"
        item-key="name"
        
      >
        <template #item="{ element, index }">
          <div>
            <FormItemEdit
              :item="element"
              :index="index"
              :items="newElements"
              :id="index+4"
            ></FormItemEdit>
            
          </div>
        </template>
      </draggable>
     
    </div>
    <div class="form_property col-sm-12 col-md-2">
      <div class="flex justify-between">
        <json-display class="w-64 mr-1" :value="elements" />
        <json-display class="w-64" :value="newElements" />
      </div>
    </div>
    <div class="col-md-4">
       <preview :new="newElements"/> 
      
    </div>
  </div>
  
  </div>
</template>

<script>
// import { VueDraggableNext } from "vue-draggable-next";
import draggable from "vuedraggable";
import FormItemEdit from "./FormItemEdit.vue";
import jsonDisplay from "./jsonDisplay.vue";
import { elements } from "./componentConfig.js";
// import { store } from "./store.js";
import Preview from './Preview.vue';
export default {
  components: {
    draggable,
    jsonDisplay,
    FormItemEdit,
    Preview,
  },
  data() {
    return {
      elements,
      drag: false,
      // elements: [
      //   {
      //     type: "container",
      //     name: "Container",
      //     container: true,
      //     items: [],
      //     id: 0,
      //   },
      //   {
      //     type: "row",
      //     name: "Row",
      //     container: true,
      //     row: true,
      //     items: [],
      //     id: 0,
      //   },
      //   {
      //     type: "column",
      //     columnSize: 6,
      //     name: "Column",
      //     container: true,
      //     column: true,
      //     items: [],
      //     id: 0,
      //   },
      //   { type: "panel", name: "Panel", container: true, items: [], id: 0 },
      //   { type: "input", name: "Text Input", id: 0 },
      //   { type: "textarea", name: "Textarea", id: 0 },
      //   { type: "button", name: "Button", id: 0 },
      //   { type: "text", name: "Text Block", id: 0, body: "Sample Text" },
      // ],
      newElements: [],
      draggable: false,
      elIndex: 0,
      // store,
      uID:0
    };
  },

  mounted() {
    this._loadComponents();
    // this.store.push(this.newElements)
  },
  methods: {
    _loadComponents() {
      this.elements = this.elements.map((item) => {
        return {
          ...item,
          // name: this.$t(`fm.components.fields.${item.type}`),
        };
      });
    },
    onClone(item){
      this.elIndex++;
      console.log(item);

      if(item.formType=='name'){
        return{formType:item.formType,
          type: item.type,
          name: item.name,
          id: this.elIndex,
          container: true,
          prefix:item.prefix,
          isRequired:item.isRequired,}
      //  this.uID=this.elIndex
      //  console.log(this.uID);
      //  this.elements.push(this.uID)
      }
    }
    // checkTypes: function (el, parent) {
    //   console.log("element", el, parent);
    // },
//     onClone: function (el) {
//       this.checkTypes();
//       console.log("clone");
//       this.elIndex++;
//       console.log('clone',el);
//       if(el.formType=='name'){
// return {
//           formType:el.formType,
//           type: el.type,
//           name: el.name,
//           id: this.elIndex,
//           container: true,
//           prefix:el.prefix,
//           isRequired:el.isRequired,
//         };
//       }
//       else if (el.type == "container" || el.type == "panel") {
//         return {
//           type: el.type,
//           name: el.name,
//           id: this.elIndex,
//           container: true,
//           items: [],
//         };
//       } else if (el.type == "column") {
//         return {
//           type: el.type,
//           columnSize: el.columnSize,
//           name: el.name,
//           id: this.elIndex,
//           container: true,
//           column: true,
//           items: [],
//         };
//       } else if (el.type == "row") {
//         return {
//           type: el.type,
//           columnSize: el.columnSize,
//           name: el.name,
//           id: this.elIndex,
//           container: true,
//           row: true,
//           items: [],
//         };
//       } else if (el.type == "button") {
//         return {
//           type: el.type,
//           name: el.name,
//           id: this.elIndex,
//           buttonText: "Submit",
//           buttonType: "primary",
//         };
//       } else if (el.type == "text") {
//         return {
//           type: el.type,
//           name: el.name,
//           id: this.elIndex,
//           body: "Sample text",
//         };
//       } else if (el.type == "panel") {
//         return {
//           type: el.type,
//           name: el.name,
//           id: this.elIndex,
//           backgroundColor: "",
//         };
//       } else {
//         return {
//           type: el.type,
//           showLabel: true,
//           labelText: el.name,
//           name: el.name,
//           id: this.elIndex,
//           label: true,
//           placeholder: false,
//           placeholderText: "",
//           class: "",
//           classId: "",
//           className: "",
//           required: false,
//           readOnly: false,
//         };
//       }
//     },
  },
};
</script>

<style scoped>
/* .new_form_demo {
  display: flex;
} */
.form_btn,
.form_property {
  flex: 0.2;
  border: 1px solid #000;
}
.form_content {
  flex: 1;
  border: 1px solid #000;
}
.content_block {
  height: 100vh;
  /* background: gray; */
}
</style>
