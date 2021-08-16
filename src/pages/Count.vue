<template>
  <div class="root">
    <h1>文字数カウント</h1>
    <p class="description">
      文字をカウントするのは簡単だと思っていませんか。幼い頃を思い出せば、私たちは小さな数字を指折り数えていました。両手の指の数以上は砂に線を描いたり友達の指を貸してもらって工夫をしましたね。私達は日常的に数える行為に麻痺してしまい、文字をカウントするということが本来難しいことを忘れています。私は役割上、文字をカウントする仕事についていますが、得意ではないことを知ってください。専門職でもないのに上司から圧力をかけられ対外的には「文字カウント？任せてください！」と言わされているだけです。お仕事に従事しているそこのあなた、共感してくださるなら、ただ文字を数えることしかできない私をお許しください。
    </p>
    <textarea cols="30" rows="10" v-model="state.userInputText"></textarea>
    <div class="text-line-wrapper">
      <span></span>
    </div>
    <div class="results-wrapper">
      <table>
        <tr>
          <th>文字数：</th>
          <td>{{ textCount }}</td>
        </tr>
        <tr>
          <th>バイト数：</th>
          <td>{{ biteCount }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";
const state = reactive({ userInputText: "" });

const textCount = computed(() => state.userInputText.length || 0);

const biteCount = computed(
  () => encodeURIComponent(state.userInputText).replace(/%../g, "x").length || 0
);
</script>

<style lang="scss">
h1 {
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  color: var(--c-primary);
  padding-bottom: 2rem;
}

.description {
  font-size: 1.1rem;
  line-height: 1.6rem;
  padding-bottom: 2rem;
}

textarea {
  width: 100%;
  padding: 16px;
  border: 1px solid #fafafa;
  background: #fff;
  resize: vertical;
}

.text-line-wrapper {
  width: 100%;
  height: 56px;
  font-size: 1.6rem;
  line-height: 56px;
  color: #fff;
  padding: 0 20px;
  background: var(--c-primary);
  overflow: hidden;
}

.results-wrapper {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 24px 0;
  table {
    width: 100%;
    th,
    td {
      padding: 8px 0;
    }
    th {
      width: 200px;
    }
  }
}
</style>
