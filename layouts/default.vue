<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
		<header class="left-0 right-0 sticky top-0 z-50 bg-gradient-to-r from-gray-900/90 via-gray-800/90 to-gray-900/90 border-b border-gray-700/30">
			<div class="container mx-auto px-4">
				<nav class="flex overflow-x-auto">
					<button
						v-for="tab in tabs"
						:key="tab.id"
						@click="handleTabChange(tab.id)"
						class="group relative flex items-center justify-center px-4 py-5 text-sm font-medium whitespace-nowrap transition-colors duration-300"
						:class="[
							activeTab === tab.id
								? 'text-white'
								: 'text-gray-300 hover:text-white'
						]"
					>
						<Icon
							:name="tab.icon"
							class="w-5 h-5 mr-2 transition-colors duration-300"
							:class="{'text-pink-400': activeTab === tab.id}"
						/>
						{{ tab.name }}
						<div
							class="absolute bottom-0 left-0 w-full h-0.5 transition-all duration-300 ease-out"
							:class="[
								activeTab === tab.id
									? 'bg-gradient-to-r from-pink-400 to-blue-400 scale-x-100'
									: 'bg-transparent scale-x-0 group-hover:scale-x-100 group-hover:bg-gray-600'
							]"
						/>
					</button>
				</nav>
			</div>
		</header>

		<main class="relative">
			<TransitionGroup
				name="tab-transition"
				mode="out-in"
				class="relative"
			>
				<div
					v-show="activeTab === 'buildings'"
					:key="'buildings'"
					class="tab-content"
				>
					<slot />
				</div>
				<div
					v-show="activeTab === 'favorites'"
					:key="'favorites'"
					class="tab-content container mx-auto px-4 py-12"
				>
					<div class="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg p-8 text-center border border-gray-700/30">
						<Icon
							name="mdi:heart"
							class="w-16 h-16 mx-auto text-pink-400 mb-4 transition-colors duration-300"
						/>
						<h2 class="text-2xl font-medium text-white mb-2 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Favorites</h2>
						<p class="text-gray-300">
							This is where you'll see your favorite buildings.
							Start exploring and add some to your collection!
						</p>
					</div>
				</div>
				<div
					v-show="activeTab === 'settings'"
					:key="'settings'"
					class="tab-content container mx-auto px-4 py-12"
				>
					<div class="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg p-8 text-center border border-gray-700/30">
						<Icon
							name="mdi:cog"
							class="w-16 h-16 mx-auto text-blue-400 mb-4 transition-colors duration-300"
						/>
						<h2 class="text-2xl font-medium text-white mb-2 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Settings</h2>
						<p class="text-gray-300">
							Customize your experience and manage your preferences here.
							More options coming soon!
						</p>
					</div>
				</div>
			</TransitionGroup>
		</main>
	</div>
</template>

<script setup lang="ts">
const tabs = [
	{
		id: 'buildings',
		name: 'Buildings',
		icon: 'mdi:office-building'
	},
	{
		id: 'favorites',
		name: 'Favorites',
		icon: 'mdi:heart'
	},
	{
		id: 'settings',
		name: 'Settings',
		icon: 'mdi:cog'
	}
];

const activeTab = ref('buildings');

const handleTabChange = (tabId: string) => {
	if (activeTab.value === tabId) return;
	activeTab.value = tabId;
};
</script>

<style scoped>
/* Tab content transitions */
.tab-transition-enter-active,
.tab-transition-leave-active {
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.tab-transition-enter-from {
	opacity: 0;
	transform: translateY(10px);
}

.tab-transition-leave-to {
	opacity: 0;
	transform: translateY(-10px);
}

/* Ensure tab content is absolutely positioned for smooth transitions */
.tab-content {
	width: 100%;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Hide scrollbar but keep functionality */
nav {
	scrollbar-width: none;
	-ms-overflow-style: none;
}

nav::-webkit-scrollbar {
	display: none;
}

/* Ensure animations respect user preferences */
@media (prefers-reduced-motion: reduce) {
	.tab-transition-enter-active,
	.tab-transition-leave-active,
	.tab-content {
		transition: none !important;
	}
}
</style>