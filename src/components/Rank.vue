<template>
  <div>
    <p>男生</p>
    <ul class="rank-type">
      <li v-for="item in ranklist.male" v-if="!item.collapse" :key="item._id">
        <RankItem :rankInfo="item"></RankItem>
      </li>
      <li class="other-rank" @click="showMoreMaleBank">
        <span>
          <Icon name="bar-chart"></Icon>
          别人家的排行榜
        </span>
        <span class="angle">
          <Icon v-if="maleOtherRankIsShow" name="angle-up"></Icon>
          <Icon v-else name="angle-down"></Icon>
        </span>
      </li>
      <ul v-show="maleOtherRankIsShow" class="rank-type">
        <li v-for="item in ranklist.male" v-if="item.collapse" :key="item._id">
          <RankItem :rankInfo="item"></RankItem>
        </li>
      </ul>
    </ul>
    <p>女生</p>
    <ul class="rank-type">
      <li v-for="item in ranklist.female" v-if="!item.collapse" :key="item._id">
        <RankItem :rankInfo="item"></RankItem>
      </li>
      <li class="other-rank" @click="showMoreFemaleRank">
        <span>
          <Icon name="bar-chart"></Icon>
          别人家的排行榜
        </span>
        <span class="angle">
          <Icon v-if="femaleOtherRankIsShow" name="angle-up"></Icon>
          <Icon v-else name="angle-down"></Icon>
        </span>
      </li>
      <ul v-show="femaleOtherRankIsShow" class="rank-type">
        <li v-for="item in ranklist.female" v-if="item.collapse" :key="item._id">
          <RankItem></RankItem>
        </li>
      </ul>
    </ul>
  </div>
</template>
