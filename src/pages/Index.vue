<template>
  <div class="root">
    <span class="question">
      <font-awesome-icon
        class="question-circle"
        icon="question-circle"
        size="2x"
        @click="handleClickQuestionButton"
      ></font-awesome-icon>
      <div :class="{ tooltip: true, active: state.isActive }">
        <div class="tooltip-content">
          <p>Multiple Web Tools</p>
          <p>ツールチップの表示検証</p>
        </div>
        <font-awesome-icon
          class="times"
          icon="times"
          size="lg"
          @click="handleClickCloseButton"
        ></font-awesome-icon>
      </div>
    </span>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({ isActive: false });

    const handleClickQuestionButton = () => {
      state.isActive = true;
    };
    const handleClickCloseButton = () => {
      state.isActive = false;
    };
    return {
      state,
      handleClickQuestionButton,
      handleClickCloseButton,
    };
  },
});
</script>

<style lang="scss" scoped>
@keyframes fadein {
  0% {
    display: none;
    opacity: 0;
  }

  1% {
    display: block;
  }

  100% {
    display: block;
    opacity: 1;
  }
}
.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.question {
  position: relative;
  > svg.question-circle {
    cursor: pointer;
  }
}

.tooltip {
  width: 340px;
  line-height: 160%;
  background: #fff;
  padding: 3rem;
  border: 1px solid #dcdfe2;
  position: absolute;
  bottom: 3.6rem;
  left: -1rem;
  z-index: 1000;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 11px 0 11px;
    border-color: #dcdfe2 transparent transparent transparent;
    position: absolute;
    bottom: -18px;
    left: 1.2rem;
    z-index: 1001;
  }
  &::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 18px 11px 0 11px;
    border-color: #fff transparent transparent transparent;
    position: absolute;
    bottom: -16px;
    left: 1.2rem;
    z-index: 1001;
  }
  &.active {
    opacity: 0;
    animation-name: fadein;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
  }

  svg.times {
    color: hsl(0, 1%, 86%);
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: hsl(0, 1%, 76%);
    }
  }
}
</style>
