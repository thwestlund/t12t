<template>
  <footer class="bg-neutral-100 border-t border-neutral-200">
    <div class="container-main py-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 class="text-lg font-semibold mb-4">T12T</h2>
          <p class="text-neutral-600">Sveriges kunskapsplattform för digital tillgänglighet.</p>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-4">Innehåll</h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/wcag" class="text-neutral-600 hover:text-primary">WCAG</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-neutral-600 hover:text-primary">Bloggen</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-lg font-semibold mb-4">Om oss</h2>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/om" class="text-neutral-600 hover:text-primary">Om T12T</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/om/kontakt" class="text-neutral-600 hover:text-primary">Kontakt</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-neutral-200 text-center text-neutral-600">
        <p>&copy; 2025 T12T. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
