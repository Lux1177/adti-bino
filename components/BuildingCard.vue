<template>
	<div class="building-card">
		<NuxtLink
			:to="`/building/${building.id}`"
			custom
			v-slot="{ navigate }"
		>
			<div
				@click="handleCardClick(navigate, $event)"
				class="cursor-pointer bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl overflow-hidden border border-gray-700/30 transform transition-all duration-300 hover:scale-105"
			>
				<div class="relative h-32 sm:h-40 md:h-48 overflow-hidden">
					<img
						:src="building.image"
						:alt="building.name"
						class="w-full h-full object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
				</div>
				<div class="p-3 sm:p-4 md:p-6">
					<h2 class="text-base sm:text-lg md:text-xl font-medium bg-gradient-to-r from-gray-200 to-blue-300 bg-clip-text text-transparent mb-2 line-clamp-2">
						{{ building.name }}
					</h2>
					<div class="flex items-start text-gray-300 gap-1">
						<Icon name="mdi:map-marker" class="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 mt-1 flex-shrink-0 text-pink-400" />
						<span class="text-sm sm:text-base line-clamp-2">{{ building.location }}</span>
					</div>
				</div>
			</div>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { Building } from '~/types/building';

interface BuildingProps {
	building: Building
}

const props = defineProps<BuildingProps>();

const handleCardClick = (navigate: Function, event: MouseEvent) => {
	const card = (event.currentTarget as HTMLElement);
	const rect = card.getBoundingClientRect();
	const x = rect.left;
	const y = rect.top;

	localStorage.setItem('clickPosition', JSON.stringify({
		x,
		y,
		buildingId: props.building.id
	}));

	card.style.transform = 'scale(1.1)';
	card.style.opacity = '0';

	setTimeout(() => {
		navigate();
	}, 300);
};
</script>

<style scoped>
.building-card {
	perspective: 1000px;
}
</style>