<!-- ./pages/blog/index.vue -->

<script setup>
definePageMeta({
  key: (route) => route.fullPath,
});
// get tag query
const {
  query: { tags },
} = useRoute();
const filter = ref(tags?.split(","));
// set meta for page
useHead({
  title: "All articles",
  meta: [{ name: "description", content: "Here's a list of all my great articles" }],
});
</script>
<template>
<div class="bg-white dark:bg-black pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
        <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-4xl">Recent publications</h2>
        <p class="mt-3 text-xl text-gray-200 sm:mt-4">Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.</p>
      </div>
  <main>
    <section class="page-section">
      <!-- <Tags /> -->
      <!-- Render list of all articles in ./content/blog using `path` -->
      <!-- Provide only defined fieldsin the `:query` prop -->
      <ContentList
        path="/blog"
        :query="{
          only: ['title', 'description', 'tags', '_path', 'img'],
          where: {
            tags: {
              $contains: filter,
            },
          },
          $sensitivity: 'base',
        }"
      >
        <!-- Default list slot -->
        <template v-slot="{ list }">
          <ul class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            <li v-for="article in list" :key="article._path">
              <NuxtLink :to="article._path">
                <div class="block mt-4">
                  
                  <!-- <div class="img-cont w-32 shrink-0">
                    <img :src="`/${article.img}`" :alt="article.title" class="rounded-lg max-h-[8rem]" />
                  </div> -->


                <ul >
                      <li class="inline-block" v-for="(tag, n) in article.tags" :key="n">
                      <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium']">
                      {{ tag }}
                      </span>
                      </li>
                    </ul>



                  <header>
                    <h1 class="text-xl font-semibold text-gray-900 dark:text-white">{{ article.title }}</h1>
                    <p class="mt-3 text-base text-white dark:text-gray-900s">{{ article.description }}</p>
                    <!-- <ul class="article-tags">
                      <li class="tag !py-0.5" v-for="(tag, n) in article.tags" :key="n">{{ tag }}</li>
                    </ul> -->
                  </header>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </template>
        <!-- Not found slot to display message when no content us is found -->
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </section>
  </main>
  </div>
  </div>
</template>