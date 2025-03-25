<template>
  <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-auto max-h-svh lg:min-w-96 flex-1 top-8">
    <div class="bg-primary-light px-4 py-1 border-b border-neutral-200">
      <h2 class="text-lg font-semibold text-primary">WCAG 2.2</h2>
    </div>

    <nav aria-label="WCAG-kriterier" class="py-2">
      <div v-if="isLoading" class="px-4 py-2 text-neutral-500 text-sm">
        Laddar...
      </div>

      <div v-else-if="error" class="px-4 py-2 text-red-500 text-sm">
        {{ error }}
      </div>

      <template v-else>
        <!-- POUR Principles -->
        <div v-for="(principle, principleIndex) in wcagStructure" :key="principleIndex">
          <!-- Principle header -->
          <div class="px-4 py-2 text-xs font-semibold text-neutral-600 uppercase tracking-wider">
            {{ principle.number }}. {{ principle.name }}
          </div>

          <!-- Guidelines under this principle -->
          <div v-for="(guideline, guidelineIndex) in principle.guidelines" :key="`${principleIndex}-${guidelineIndex}`">
            <!-- Guideline header -->
            <button
              class="w-full text-left px-4 py-3 flex items-center justify-between text-sm font-medium hover:bg-neutral-50"
              :class="isGuidelineOpen(principle.number, guideline.number) ? 'text-primary' : 'text-secondary'"
              @click="toggleGuideline(principle.number, guideline.number)"
              :aria-expanded="isGuidelineOpen(principle.number, guideline.number)"
              :aria-controls="`guideline-${principle.number}-${guideline.number}`">
              <span>{{ principle.number }}.{{ guideline.number }} {{ guideline.name }}</span>
              <svg class="h-4 w-4 transition-transform"
                :class="isGuidelineOpen(principle.number, guideline.number) ? 'transform rotate-180' : ''" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Success Criteria under this guideline -->
            <div v-if="isGuidelineOpen(principle.number, guideline.number)"
              :id="`guideline-${principle.number}-${guideline.number}`" class="mt-1 pl-4 pr-4">
              <ul class="space-y-1 border-l border-neutral-200">
                <li v-for="criterion in guideline.criteria" :key="criterion.path">
                  <NuxtLink :to="criterion.path"
                    class="flex items-center pl-2 py-2 lg:pl-4 lg:py-3 text-sm border-l-2 hover:bg-neutral-50"
                    :class="isActivePath(criterion.path) ? 'border-primary text-primary font-medium' : 'border-transparent text-neutral-600 hover:text-primary hover:border-neutral-300'">
                    <div class="flex items-center flex-1">
                      <span>{{ principle.number }}.{{ guideline.number }}.{{ criterion.number }} {{
                        criterion.name }}</span>
                      <WcagLevelBadge :level="criterion.level" class="ml-2" />
                    </div>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import WcagLevelBadge from '~/components/WcagLevelBadge.vue'

const route = useRoute();
const isLoading = ref(true);
const error = ref(null);
const wcagData = ref([]);

// State to track which guidelines are open
const openGuidelines = ref([]);

// Fetch WCAG structure from content directory
const fetchWcagStructure = async () => {
  isLoading.value = true;
  error.value = null;

  try {
    // Query the content directory to get WCAG structure
    const wcagCollection = await queryCollection('wcag').all();

    // Parse the content into the structure we need
    wcagData.value = processWcagContent(wcagCollection);

    // Nu när data har laddats, kontrollera om vi ska öppna alla riktlinjer
    if (route.path === '/wcag' || route.path === '/wcag/') {
      openAllGuidelines();
    } else {
      autoOpenGuideline();
    }
  } catch (err) {
    console.error('Error fetching WCAG structure:', err);
    error.value = 'Det gick inte att ladda WCAG-strukturen.';
  } finally {
    isLoading.value = false;
  }
};

// Process content data into a structured format
const processWcagContent = (content) => {
  // Sort content by path to ensure correct order
  const sortedContent = [...content].sort((a, b) => a.path.localeCompare(b.path));

  // Group by principle and guideline
  const principles = {};

  for (const item of sortedContent) {

    // Extract principle, guideline, and criterion from path
    const pathParts = item.path.split('/');

    // Expected format: /wcag/[principle]/[guideline]/[criterion]/file-name
    if (pathParts.length >= 5) {
      const principleNum = pathParts[2];
      const guidelineNum = pathParts[3];
      const criterionNum = pathParts[4];

      // Initialize principle if not exists
      if (!principles[principleNum]) {
        principles[principleNum] = {
          number: principleNum,
          name: getPrincipleName(principleNum),
          guidelines: {}
        };
      }

      // Initialize guideline if not exists
      if (!principles[principleNum].guidelines[guidelineNum]) {
        principles[principleNum].guidelines[guidelineNum] = {
          number: guidelineNum,
          name: item.guidelineName || `Guideline ${principleNum}.${guidelineNum}`,
          criteria: []
        };
      }

      // Add criterion
      principles[principleNum].guidelines[guidelineNum].criteria.push({
        number: criterionNum,
        name: item.title || `Criterion ${principleNum}.${guidelineNum}.${criterionNum}`,
        level: item.level || 'A',
        path: item.path
      });
    }
  }

  return formatPrinciplesForSidebar(principles);
};

// Format principles object into array suitable for sidebar
const formatPrinciplesForSidebar = (principles) => {
  const formattedPrinciples = Object.values(principles).map(principle => {
    const formattedGuidelines = Object.values(principle.guidelines).map(guideline => {
      // Sort criteria by number
      const sortedCriteria = guideline.criteria.sort((a, b) => {
        return Number(a.number) - Number(b.number);
      });

      return {
        ...guideline,
        criteria: sortedCriteria
      };
    });

    // Sort guidelines by number
    const sortedGuidelines = formattedGuidelines.sort((a, b) => {
      return Number(a.number) - Number(b.number);
    });

    return {
      ...principle,
      guidelines: sortedGuidelines
    };
  });

  // Sort principles by number
  return formattedPrinciples.sort((a, b) => {
    return Number(a.number) - Number(b.number);
  });
};

// Helper to get principle name
const getPrincipleName = (principleNum) => {
  const principleNames = {
    '1': 'Möjlig att uppfatta',
    '2': 'Hanterbar',
    '3': 'Begriplig',
    '4': 'Robust'
  };

  return principleNames[principleNum] || `Principle ${principleNum}`;
};

// Computed property to get the structured WCAG data
const wcagStructure = computed(() => {
  return wcagData.value;
});

// Toggle a guideline's open state
const toggleGuideline = (principleNum, guidelineNum) => {
  const key = `${principleNum}-${guidelineNum}`;

  if (openGuidelines.value.includes(key)) {
    openGuidelines.value = openGuidelines.value.filter(item => item !== key);
  } else {
    openGuidelines.value.push(key);
  }
};

// Check if a guideline is open
const isGuidelineOpen = (principleNum, guidelineNum) => {
  const key = `${principleNum}-${guidelineNum}`;
  return openGuidelines.value.includes(key);
};

// Check if a path is the current route
const isActivePath = (path) => {
  return route.path === path;
};

// Auto-open the guideline for the current route
const autoOpenGuideline = () => {
  if (!route.path.includes('/wcag/')) return;

  const pathParts = route.path.split('/');

  // If we're on a specific criterion page
  if (pathParts.length >= 5) {
    const principleNum = pathParts[2];
    const guidelineNum = pathParts[3];

    const key = `${principleNum}-${guidelineNum}`;

    if (!openGuidelines.value.includes(key)) {
      openGuidelines.value.push(key);
    }
  }
  // If we're on the main WCAG page or a principle page, open all guidelines
  else if (pathParts.length >= 2 && pathParts[1] === 'wcag') {
    openAllGuidelines();
  }
};

// Helper function to open all guidelines
const openAllGuidelines = () => {
  if (wcagData.value.length === 0) return;

  wcagData.value.forEach(principle => {
    principle.guidelines.forEach(guideline => {
      const key = `${principle.number}-${guideline.number}`;
      if (!openGuidelines.value.includes(key)) {
        openGuidelines.value.push(key);
      }
    });
  });
};

// Fetch data on mount
onMounted(async () => {
  await fetchWcagStructure();
  //autoOpenGuideline();
  //openAllGuidelines();
  // Nu när data är laddad, öppna alla riktlinjer om vi är på WCAG-översiktssidan
  /*if (route.path === '/wcag' || route.path === '/wcag/') {
    
  } else {
    autoOpenGuideline();
  }*/
});

// Watch for when wcagData changes
watch(
  () => wcagData.value,
  (newValue) => {
    if (newValue.length > 0) {
      // Om vi är på WCAG-huvudsidan, öppna alla riktlinjer
      if (route.path === '/wcag' || route.path === '/wcag/') {
        openAllGuidelines();
      } else {
        autoOpenGuideline();
      }
    }
  },
  { immediate: true } // Detta gör att watcher körs direkt vid montering
);

// Watch for route changes to update open guidelines
watch(
  () => route.path,
  () => {
    autoOpenGuideline();
  }
);
</script>