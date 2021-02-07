/* eslint-disable @typescript-eslint/no-unused-vars */
/// <reference types="react-scripts" />

// Custom type created directly at the Typescript Models Object
// for ease of use and to remove the necessity for import statements in the components
namespace Models {
	interface RootObject {
		count?: number;
		next?: any;
		previous?: any;
		results?: result[];
	}

	interface result {
		city: string;
		city_ibge_code: number;
		date?: string;
		epidemiological_week?: number;
		estimated_population: number;
		estimated_population_2019?: number;
		is_last?: boolean;
		is_repeated?: boolean;
		last_available_confirmed: number;
		last_available_confirmed_per_100k_inhabitants: number;
		last_available_date?: string;
		last_available_death_rate?: number;
		last_available_deaths: number;
		new_confirmed: number;
		new_deaths?: number;
		order_for_place?: number;
		place_type?: string;
		state: string;
	}
}
