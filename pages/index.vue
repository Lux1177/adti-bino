<template>
	<div class="container mx-auto px-4 py-12">
		<div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
			<BuildingCard
				v-for="building in buildings"
				:key="building.id"
				:building="building"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const { buildings } = useBuildings();
</script>