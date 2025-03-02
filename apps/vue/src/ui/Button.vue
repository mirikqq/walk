<script lang="ts" setup>
import { counter } from '../../../../packages/state/src/index';
import { useStore } from '@nanostores/vue';

const store = useStore(counter);
const increment = () => {
  counter.set(counter.get() + 1);
};
</script>

<template>
  <button @click="increment">test vue ++ {{ store }}</button>
</template>
