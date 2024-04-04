<template>
  <div class="content human-rights-policy">
    <p>{{ $t('aboutHeading')}}</p>
    <ul>
      <li>{{ $t('aboutLine1')}}</li>
      <li>{{ $t('aboutLine2')}}</li>
      <li>{{ $t('aboutLine3')}}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

</script>

<style scoped>
.human-rights-policy{
  margin: 30px;
}
.human-rights-policy h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
  
}

.human-rights-policy p {
  margin-bottom: 1em;
}

.human-rights-policy ul {
  list-style: inside;
  padding-left: 0;
}

.human-rights-policy li {
  margin-bottom: 0.5em;
}
</style>
