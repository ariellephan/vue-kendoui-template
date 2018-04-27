<template>
  <div>
    <p>Style with template {{template}}</p>
    <kendo-dropdownlist 
                    :template="template"
                    :headerTemplate="headerTemplate"
                    :data-source="dataSourceArray"
                    :data-text-field="'text'"
                    :data-value-field="'value'"
                    :filter="'contains'">
    </kendo-dropdownlist>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: ["dataSourceArray", "template", "headerTemplate"],
  data() {
    return {
      value: "Click Me",
      text: "I'm in Template template"
    };
  }
};
</script>
<style scoped>

</style>
