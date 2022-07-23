<script setup lang="ts">
import { ILink } from "~/types";
const lists = computed<ILink[]>(() => [
  { id: 1, title: "about", url: "about", icon: "i-carbon-store" },
  { id: 1, title: "blog", url: "blog", icon: "i-carbon-milestone" },
  {
    id: 1,
    title: "projects",
    url: "projects",
    icon: "i-carbon-collapse-all",
  },
  { id: 1, title: "store", url: "store", icon: "i-carbon-menu" },
]);
</script>

<template>
  <div class="mx-auto mt-4 max-w-sm">
    <div class="mb-10 flex items-center justify-between">
      <a target="_blank" href="https://miancho.com">miancho.com</a>
      <div class="flex space-x-2">
        <!-- <TemLanguageChange /> -->
        <TemColorChange />
      </div>
    </div>
    <div class="flex flex-col">
      <h1>Prueba</h1>
      <div class="flex w-full items-center justify-between py-2">
        <img
          class="h-20 w-20"
          height="160"
          width="160"
          src="https://res.cloudinary.com/miancho/image/upload/v1658502733/web/logo_h1dkci.svg"
          alt="productdevbook"
        />

        <div
          class="place-items-centerr grid grid-cols-2 justify-items-center gap-4 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:rounded-md [&>*]:bg-gray-100 [&>*]:p-3 dark:[&>*]:bg-gray-600"
        >
          <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://github.com/miancho"
          >
            <UnoIcon class="i-ph-github-logo-duotone" />
          </a>

          <a
            class="hover:bg-gray-300 dark:hover:bg-gray-400"
            href="https://twitter.com/miancho"
            target="_blank"
          >
            <UnoIcon class="i-ph-twitter-logo-duotone" />
          </a>

          <!-- <a
            target="blank"
            class="font-bold text-gray-900 hover:bg-gray-300 dark:text-white dark:hover:bg-gray-400"
            href="https://discord.gg/miancho"
          >
            <UnoIcon class="i-ph-discord-logo-duotone" />
          </a> -->
        </div>
      </div>
    </div>

    <ul role="list" class="mt-10 space-y-4">
      <li v-for="item in lists" :key="item.id">
        <List
          :link="{
            id: item.id,
            title: item.title,
            url: item.url,
            icon: item.icon,
          }"
        />
      </li>
    </ul>
  </div>
</template>