<template>
  <div class="new_form_demo">
    <div class="form_btn">
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
    <div class="form_content">
      <draggable
        class="content_block"
        :list="newElements"
        group="elements"
        item-key="name"
      >
        <template #item="{ element,index }">
          <div>
          <FormItem :el="element" :index="index" :items="newElements"></FormItem>
          {{ element.name }}
          {{index}}
          {{element}}
          </div>
        </template>
      </draggable>

      
    </div>
    <div class="form_property">
      <div class="flex justify-between">
        <json-display class="w-64 mr-1" :value="elements" />
        <json-display class="w-64" :value="newElements" />
      </div>
    </div>
  </div>
</template>

<script>
// import { VueDraggableNext } from "vue-draggable-next";
import draggable from "vuedraggable";
// import FormItem from './FormItem.vue'
import jsonDisplay from "./jsonDisplay.vue";
export default {
  components: {
    draggable,
    jsonDisplay,
    // FormItem
  },
  data() {
    return {
      drag: false,
      elements: [
        {
          type: "container",
          name: "Container",
          container: true,
          items: [],
          id: 0,
        },
        {
          type: "row",
          name: "Row",
          container: true,
          row: true,
          items: [],
          id: 0,
        },
        {
          type: "column",
          columnSize: 6,
          name: "Column",
          container: true,
          column: true,
          items: [],
          id: 0,
        },
        { type: "panel", name: "Panel", container: true, items: [], id: 0 },
        { type: "input", name: "Text Input", id: 0 },
        { type: "textarea", name: "Textarea", id: 0 },
        { type: "button", name: "Button", id: 0 },
        { type: "text", name: "Text Block", id: 0, body: "Sample Text" },
      ],
      newElements: [],
      draggable: false,
      elIndex: 0,
    };
  },
  methods: {
    onClone: function (el) {
      this.elIndex++;
      console.log(el);
      if (el.type == "container" || el.type == "panel") {
        return {
          type: el.type,
          name: el.name,
          id: this.elIndex,
          container: true,
          items: [],
        };
      } else if (el.type == "column") {
        return {
          type: el.type,
          columnSize: el.columnSize,
          name: el.name,
          id: this.elIndex,
          container: true,
          column: true,
          items: [],
        };
      } else if (el.type == "row") {
        return {
          type: el.type,
          columnSize: el.columnSize,
          name: el.name,
          id: this.elIndex,
          container: true,
          row: true,
          items: [],
        };
      } else if (el.type == "button") {
        return {
          type: el.type,
          name: el.name,
          id: this.elIndex,
          buttonText: "Submit",
          buttonType: "primary",
        };
      } else if (el.type == "text") {
        return {
          type: el.type,
          name: el.name,
          id: this.elIndex,
          body: "Sample text",
        };
      } else if (el.type == "panel") {
        return {
          type: el.type,
          name: el.name,
          id: this.elIndex,
          backgroundColor: "",
        };
      } else {
        return {
          type: el.type,
          showLabel: true,
          labelText: el.name,
          name: el.name,
          id: this.elIndex,
          label: true,
          placeholder: false,
          placeholderText: "",
          class: "",
          classId: "",
          className: "",
          required: false,
          readOnly: false,
        };
      }
    },
  },
};
</script>

<style scoped>
.new_form_demo {
  display: flex;
}
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
  background: gray;
}
</style>
