<template>
  <div class="root">
    <h1>確認ボックス</h1>
    {{ itemLength }}
    <div class="inner">
      <ConfirmBox
        class="confirm"
        v-for="(item, index) in items"
        :key="index"
        v-model:value="item.value"
        v-model:isFocus="item.value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, computed, ComputedRef, watch } from "vue";
import ConfirmBox from "@/components/molecules/ConfirmBox.vue";

interface itemInterface {
  id: string;
  value: string;
  isFocus: string;
}

export default defineComponent({
  components: {
    ConfirmBox,
  },
  setup() {
    const state = reactive<{
      items: itemInterface[];
    }>({
      items: [
        { id: "input0", value: "", isFocus: "false" },
        { id: "input1", value: "", isFocus: "false" },
        { id: "input2", value: "", isFocus: "false" },
        { id: "input3", value: "", isFocus: "false" },
        { id: "input4", value: "", isFocus: "false" },
        { id: "input5", value: "", isFocus: "false" },
      ],
    });

    const itemLength: ComputedRef<number> = computed((): number => {
      return state.items.filter((item) => item.value !== "").length;
    });

    watch(state.items, (State) => {
      console.info(itemLength.value);
      console.info("watch");
      console.info(State);
    });

    return {
      items: state.items,
      itemLength: itemLength,
    };
  },
});
</script>

<style lang="scss">
h1 {
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: var(--c-primary);
  padding-bottom: 2rem;
}
.inner {
  padding: 1rem;
}
.confirm {
  margin-right: 0.6rem;
}
</style>
