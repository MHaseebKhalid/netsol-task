<template>
  <header class="app_header">
    <div class="header_main">
      <div class="adjust_content">
        <div class="header_inner">
          <div class="logo">
            <NuxtLink :to="`/${language}`">
              <svg width="90" height="16" viewBox="0 0 90 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.5631 9.06294H28.4904V6.45754H20.5631V3.18881H29.201V0.367631H16.9676V15.6324H29.3722V12.8112H20.5546L20.5631 9.06294ZM30.5108 3.18881H35.4161V15.6324H39.0031V3.18881H43.9085V0.367631H30.5108V3.18881ZM10.4271 10.5894H10.3757L3.55274 0.35165H0V15.6164H3.35584V5.39461H3.41577L10.2216 15.6164H13.8086V0.35165H10.4528V10.5894H10.4271ZM67.9644 0C62.8964 0 59.9344 3.53247 59.9344 8.06394C59.9344 12.4595 62.905 15.992 67.9644 15.992C73.0324 15.992 75.9945 12.4755 75.9945 8.06394C76.003 3.51649 73.0324 0 67.9644 0ZM67.9644 13.1548C64.7284 13.1548 63.5214 10.5814 63.5214 8.04795C63.5214 5.37862 64.7284 2.80519 67.9644 2.80519C71.2004 2.80519 72.4075 5.37862 72.4075 8.04795C72.4075 10.5894 71.2004 13.1548 67.9644 13.1548ZM53.6593 6.64136C49.5586 5.66633 48.7882 5.51448 48.7882 4.33167C48.7882 3.05294 50.1237 2.60539 51.2622 2.60539C52.983 2.60539 54.3698 3.06893 54.4982 4.91509H57.9825C57.9825 1.38262 54.8578 0.00799006 51.442 0.00799006C48.4885 0.00799006 45.3296 1.50249 45.3296 4.61938C45.3296 7.48851 47.778 8.35165 50.2007 8.96703C52.5977 9.56643 55.0547 9.84615 55.0547 11.4845C55.0547 13.043 53.1371 13.3946 51.8701 13.3946C49.9524 13.3946 48.2488 12.5954 48.2488 10.5734H44.7646C44.7132 14.3377 48.1033 16 51.7331 16C56.1762 16 58.539 13.9061 58.539 11.1089C58.5133 7.61639 54.8578 6.92108 53.6593 6.64136ZM82.0384 0.35165H78.4514V15.6164H90V12.7952H82.0384V0.35165Z"
                  fill="white" />
              </svg>

            </NuxtLink>
          </div>
         
          
            <div class="header_info">
              <div class="language_dropdown">
                <span class="header_button_content custom_buttom" id="lanDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {{$t('regions')}}
                </span>
                <ul class="dropdown-menu dropdown_custome_menu" aria-labelledby="lanDropdown">
                  <li>
                    <button @click="setLocale('en-US')" class="dropdown-item"><span class="dropdown-text">USA</span></button>
                 
                  </li>
                
                  <li>
                    <button @click="setLocale('zh-CN')" class="dropdown-item"><span class="dropdown-text">China</span></button>
                   </li>
                
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  </header>
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

<style>
.dropdown-text{
  font-size: 16px;
  color: white;
  border-bottom: white 1px solid;
  width: 100%;
  line-height: 35px;
}
</style>