<template>
    <div class="home_main_section">
        <div class="home_container" >
            
                <div class="home_inner_content">
                    <div class="home_header">
                        <div class="home_header_container"><span>{{$t('newsAndInsights')}}</span></div>
                        <h2>{{$t('latestInsights')}}</h2>
                        <h6>{{$t('introText')}}</h6>
                        <NuxtLink class="home_header_links" to="/">{{ $t('viewAllNews') }}</NuxtLink>
                    </div>
                    <div class="home_content_main home_content_container_main">
                        <NuxtLink :to="`${language}/about`" class="home_sub_view">
                                    <div class="home_sub_view_img">
                                        <img src="@/assets/images/home_1.png" alt="#">
                                    </div>
                                    <div class="home_sub_view_text">
                                        <span class="home_sub_view_text_label mb-3">
                                            {{$t('news')}}
                                        </span>
                                        <h2>{{$t('leasingLifeConference')}}</h2>
                                        <p>{{ $t('solvingProblemsText') }}
                                        </p>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="`${language}/about`" class="home_sub_view">
                                    <div class="home_sub_view_img">
                                        <img src="@/assets/images/home_2.png" alt="#">
                                    </div>
                                    <div class="home_sub_view_text">
                                        <span class="home_sub_view_text_label mb-3">
                                            {{$t('blog')}}
                                        </span>
                                        <h2>{{$t('autoFinanceSummit')}}</h2>
                                        <p>{{$t('solvingProblemsText')}}
                                        </p>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="`${language}/about`" class="home_sub_view">
                                    <div class="home_sub_view_img">
                                        <img src="@/assets/images/home_3.png" alt="#">
                                    </div>
                                    <div class="home_sub_view_text">
                                        <span class="home_sub_view_text_label mb-3">
                                            {{$t('news')}}
                                        </span>
                                        <h2>{{$t('careerAtNetsol')}}</h2>
                                        <p>{{$t('solvingProblemsText')}} </p>
                                    </div>
                                </NuxtLink>
                                <NuxtLink :to="`${language}/about`" class="home_sub_view">
                                    <div class="home_sub_view_img">
                                        <img src="@/assets/images/home_4.png" alt="#">
                                    </div>
                                    <div class="home_sub_view_text">
                                        <span class="home_sub_view_text_label mb-3">
                                            {{$t('blog')}}
                                        </span>
                                        <h2>{{ $t('leasingLifeConference') }}</h2>
                                        <p>{{$t('solvingProblemsText')}} </p>
                                    </div>
                                </NuxtLink>
                            </div>
                </div>
           
        </div>
    </div>
</template>
 
 
<style>
.home_content_container_main {
    display: flex;
    flex-direction: row;
    width: 90%;
    align-self: center;
    margin-left: 5%;
}
</style>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});

</script>