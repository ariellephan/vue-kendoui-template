<template>
  <div id="DropdownStyles">
    <h1>KendoUI dropdown instances with different templates</h1>
    <Dropdown
  v-for="dropdown in dropdowns"
  v-bind:key="dropdown.id"
  v-bind:title="dropdown.title"
  v-bind:data-source-array="dropdown.dataSourceArray"
  v-bind:template="dropdown.template"
  v-bind:headerTemplate="dropdown.headerTemplate"
></Dropdown>
  </div>
</template>

<script>
import Dropdown from "./Dropdown";
import DropdownTemplate from "./DropdownTemplate";

export default {
  name: "DropdownStyles",
  components: { Dropdown },
  data() {
    return {
      dropdowns: [
        {
          id: 1,
          title: "x style",
          dataSourceArray: [
            "Football",
            "Tennis",
            "Basketball",
            "Baseball",
            "Cricket",
            "Field Hockey",
            "Volleyball"
          ],
          template: `<strong class="custom-dropdown">x #:data#</strong>`,
          headerTemplate: DropdownTemplate.template
        },
        {
          id: 2,
          title: "+ style",
          dataSourceArray: [
            "Football",
            "Tennis",
            "Basketball",
            "Baseball",
            "Cricket",
            "Field Hockey",
            "Volleyball"
          ],
          template: `<strong class="custom-dropdown">+ #:data#</strong>`,
          headerTemplate: `<div><h3 style="padding-left:10px;">Sports 2</h3></div>`
        }
      ]
    };
  }
};
</script>
