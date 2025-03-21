import { ref } from 'vue';
import type { Building } from '~/types/building';
import buildingsData from '~/data/buildings.json';

export const useBuildings = () => {
	const buildings = ref<Building[]>(buildingsData.buildings);

	const getBuildingById = (id: number) => {
		return buildings.value.find(b => b.id === id);
	};

	return {
		buildings,
		getBuildingById
	};
};