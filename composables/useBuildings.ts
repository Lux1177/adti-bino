import {buildings} from "~/data/buildingsData";
import {faculties} from "~/data/facultiesData";

export const getBuildingById = (id: number, type:string="faculty") => {
		if(type == 'building') {
			return buildings.find(b => b.id === id);
		} else {
			return faculties.find(b => b.id === id);
		}
}


