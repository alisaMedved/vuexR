<template>
  <div>
    <div>{{count}}</div>
    <button
        type="button"
        @click="increment"
    >
      increment
    </button>
    <button
        type="button"
        @click="asyncIncrement"
    >
      async
    </button>
    <div
        v-for="(t, ind) in doneTask"
        :key="ind"
    >{{t}}</div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      message: 'Hello world!',
    }
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    doneTask() {
      return this.$store.getters.doneTodos.forEach(t => (t ? 'done' : 'not done'));
    }
  },
  methods: {
    increment() {
      this.$store.commit({
        type: 'increment',
        amount: 10
      })
    },
    asyncIncrement() {
      this.$store.dispatch({
        type: 'incrementAsync',
        amount: 10
      });
    }
  }
}
</script>

<style>

</style>