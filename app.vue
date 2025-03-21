<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
// Check if the browser supports the View Transitions API
const supportsViewTransitions = typeof document !== 'undefined' && 'startViewTransition' in document;

// Custom router middleware for transitions
const router = useRouter();
router.beforeEach((to, from, next) => {
	if (supportsViewTransitions && !document.startViewTransition) {
		// @ts-ignore - TypeScript doesn't know about startViewTransition yet
		document.startViewTransition(() => {
			next();
		});
	} else {
		next();
	}
});
</script>

<style>
/* Base transitions */
.page-enter-active,
.page-leave-active {
	transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.page-enter-from {
	opacity: 0;
	transform: translateY(20px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

/* Ensure animations are disabled for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
	*,
	::before,
	::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
		scroll-behavior: auto !important;
	}
}
</style>