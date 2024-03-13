<script setup lang="ts">
import WeblogPage from "../conponents/WeblogPage.vue";
import DefaultLayout from "../../../layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <template v-slot:header>茶飯事</template>
    <WeblogPage
        title="気分屋茶飯事開設日"
        year-month-day="2024/03/13"
    >
      <div>はじめまして。</div>
      <div>自分の絵をまとめて見れる場所が欲しいなと思い、個人サイトを作ることにしました。</div>
      <div>Pixiv や Twitter でも良かったんですけど、UI も含めて全部自分好みにカスタムしたい欲があふれてしまい、このような形になりました。スマホもわざわざショートカットアプリを使って自分好みにカスタムを頑張ったりするので、私は 自分専用！ みたいなものが大好きなんでしょうね。このサイトは Vue やら Typescript やらで作っています。動いててすごい～～～。</div>
      <div>このサイト上で動くゲームをいつか作りたいと思っているので、行く末は開発記録とかを記事にして残していきたいですね。それまでは日常のどうでもいいことをつぶやきます。Twitter で呟けばいいんでしょうけど、Twitter はいろんな数字が出るので苦手です。</div>
      <div>記事を書きながら Twitter を X と呼ぶか Twitter と呼ぶかで悩んで Twitter にしました。どうでもいいですね。</div>
      <div>
        詳しい案内は
        <router-link to="/guide">案内板</router-link>
        にあります。気分屋茶飯事をよろしくお願いします。
      </div>
    </WeblogPage>
  </DefaultLayout>
</template>

<style scoped>

</style>