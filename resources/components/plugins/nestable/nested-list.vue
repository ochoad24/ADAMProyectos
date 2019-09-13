<template lang="html">
  <vddl-draggable class="panel__body--item"
    :draggable="item"
    :index="index"
    :disable-if="disable"
    :selected="selectedEvent"
    :wrapper="list"
    v-bind:class="{'selected': selectedItem === item}">
    <div class="card padding" v-if="item.type === 'container'">
      <div class="card-header">
        <h3>Container {{item.id}}</h3>
      </div>
      <vddl-list class="card-body"
        :list="item.columns"
        :disable-if="disable"
        :external-sources="true">
        <list v-for="(col, number) in item.columns"
          :key="col.id" :item="col"
          :list="item.columns"
          :index="number"
          :selected="selectedEvent"
          :selected-item="selectedItem"
          :disable="disable" class="p-1 border border-f5 mt-2">
        </list>
      </vddl-list>
    </div>
    <p v-else>
      {{item.type}} {{item.id}}
    </p>
  </vddl-draggable>
</template>

<script>
export default {
  name: 'list',
  props: ['item', 'list', 'index', 'selected', 'selectedItem', 'disable'],
  methods: {
    selectedEvent(item){
      if (typeof(this.selected) === 'function') {
        this.selected(item);
      }
    }
  }
};
</script>

<style lang="css">
</style>
