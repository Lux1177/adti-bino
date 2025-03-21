<template>
	<div
		class="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
		:class="{ 'animate-slide-up': shouldAnimate }"
	>
		<div class="container mx-auto px-4 py-12">
			<NuxtLink
				to="/"
				class="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors duration-200"
			>
				<Icon name="mdi:arrow-left" class="w-5 h-5 mr-2 text-pink-400" />
				Орқага қайтиш
			</NuxtLink>

			<div
				v-if="building"
				class="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl overflow-hidden border border-gray-700/30"
				:class="{ 'animate-fade-scale-up': shouldAnimate }"
			>
				<div class="relative h-96">
					<img
						:src="building.image"
						:alt="building.name"
						class="w-full h-full object-cover opacity-90"
					/>
					<div class="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
				</div>

				<div class="p-8">
					<div class="animate-content-in">
						<h1 class="text-4xl font-medium bg-gradient-to-r from-gray-200 to-blue-300 bg-clip-text text-transparent mb-6">{{ building.name }}</h1>

						<div class="grid gap-6">
							<div class="flex items-start text-gray-300">
								<Icon name="mdi:map-marker" class="w-6 h-6 mr-2 mt-1 flex-shrink-0 text-pink-400" />
								<span class="text-lg">{{ building.location }}</span>
							</div>

							<div class="flex items-center text-gray-300">
								<Icon name="mdi:account-tie" class="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
								<span class="text-lg">{{ building.manager }}</span>
							</div>

							<div class="flex items-center text-gray-300">
								<Icon name="mdi:account-school" class="w-6 h-6 mr-2 flex-shrink-0 text-blue-400" />
								<span class="text-lg">{{ building.head_teacher }}</span>
							</div>

							<a
								:href="building.location_map"
								target="_blank"
								class="inline-flex items-center text-pink-400 hover:text-blue-400 transition-colors"
							>
								<Icon name="mdi:map" class="w-6 h-6 mr-2" />
								<span class="text-lg">Харитада кўриш</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			<div v-else class="text-center py-12">
				<p class="text-gray-300">Маълумот топилмади</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const { getBuildingById } = useBuildings();
const shouldAnimate = ref(false);

const building = computed(() => {
	return getBuildingById(parseInt(route.params.id as string));
});

onMounted(() => {
	const clickPosition = localStorage.getItem('clickPosition');
	if (clickPosition) {
		const { buildingId } = JSON.parse(clickPosition);
		shouldAnimate.value = buildingId === parseInt(route.params.id as string);
		localStorage.removeItem('clickPosition');
	}
});
</script>

<style scoped>
.animate-fade-scale-up {
	animation: fadeScaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.animate-content-in > * {
	opacity: 0;
	transform: translateY(20px);
	animation: contentFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeScaleUp {
	0% {
		opacity: 0;
		transform: scale(0.95);
	}
	100% {
		opacity: 1;
		transform: scale(1);
	}
}

@keyframes contentFadeIn {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-slide-up {
	animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>