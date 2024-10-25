import {StateAnimal, stateAnimals} from "@/data/stateAnimals";
import {StateBird, stateBirds} from "@/data/stateBirds";
import {District, stateDistricts} from "@/data/stateDistricts";
import {StateFlower, stateFlowers} from "@/data/stateFlowers";
import {StateTree, stateTrees} from "@/data/stateTrees";

export interface StateInfo {
    name?: string;
    code?: string;
    capital?: string;
    districts?: District[];
    stateBird?: StateBird;
    stateFlower?: StateFlower;
    stateTree?: StateTree;
    stateAnimal?: StateAnimal;
}

export const stateDetailsProvider = (stateId: string) => {
    const state = stateDistricts.find((state) => state.id === stateId);
    const stateBird = stateBirds.find((stateBird) => stateBird.id === stateId);
    const stateFlower = stateFlowers.find((stateFlower) => stateFlower.id === stateId);
    const stateTree = stateTrees.find((stateTree) => stateTree.id === stateId);
    const stateAnimal = stateAnimals.find((stateAnimal) => stateAnimal.id === stateId);

    const name = state?.name;
    const stateCode = state?.code;
    const capital = state?.capital;
    const districts = state?.districts;

    const stateInfo: StateInfo = {
        name: name,
        code: stateCode,
        capital: capital,
        districts: districts,
        stateBird: stateBird,
        stateFlower: stateFlower,
        stateTree: stateTree,
        stateAnimal: stateAnimal
    }
    return stateInfo;
}