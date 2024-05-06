/** 
 * @typedef Monster
 * @type {object}
 * @property {string} name - Internal English name
 * @property {string} [search] - For monsters with duplicate names, define this
 * @property {string} short - Internal English short/suggested name
 * @property {string} [dq8_name] - Modern English name
 * @property {number} family - Family ID
 * @property {number} level_cap - Initial maximum level
 * @property {number} exp_table - ID of table for experience requirements by level
 * @property {number} percent_f - Percent of eggs which are female (dividend with a divisor of 256)
 * @property {[number,number,number]} skills - IDs of naturally learnable skills
 * @property {Array<number>} resistances - Base resistances.
*/
/** @type {Monster[]} */
export default
[
	{
		"name": "DrakSlime",
		"short": "DS",
		"family": 0,
		"level_cap": 45,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [67, 92, 213],
		"resistances": [1, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "SpotSlime",
		"short": "SP",
		"family": 0,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [82, 121, 127],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "WingSlime",
		"short": "WS",
		"family": 0,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [85, 88, 138],
		"resistances": [0, 0, 0, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "TreeSlime",
		"short": "TS",
		"family": 0,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [28, 105, 106],
		"resistances": [0, 0, 0, 1, 1, 0, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
	},
	{
		"name": "Snaily",
		"short": "SN",
		"family": 0,
		"level_cap": 30,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [12, 52, 82],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "SlimeNite",
		"short": "KN",
		"family": 0,
		"level_cap": 40,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [30, 43, 74],
		"resistances": [1, 1, 1, 1, 1, 1, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Babble",
		"short": "BB",
		"family": 0,
		"level_cap": 45,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [24, 103, 116],
		"resistances": [0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 3, 2, 2, 2, 2, 0, 0, 3, 1, 1, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "BoxSlime",
		"short": "BX",
		"family": 0,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [0, 30, 60],
		"resistances": [0, 0, 1, 0, 0, 1, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Slime",
		"short": "SL",
		"family": 0,
		"level_cap": 40,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [3, 102, 115],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Healer",
		"short": "HL",
		"family": 0,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [30, 43, 46],
		"resistances": [0, 0, 0, 1, 1, 0, 2, 2, 2, 3, 3, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 0]
	},
	{
		"name": "FangSlime",
		"short": "FS",
		"family": 0,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [65, 82, 125],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 3, 2, 2, 2, 3, 3, 3, 2, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "RockSlime",
		"short": "RS",
		"family": 0,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [66, 91, 142],
		"resistances": [0, 0, 1, 0, 0, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "SlimeBorg",
		"short": "SB",
		"family": 0,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [87, 90, 144],
		"resistances": [1, 1, 0, 1, 2, 1, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Slabbit",
		"short": "ST",
		"family": 0,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [119, 123, 126],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0, 0, 2, 1, 1, 2, 1, 0]
	},
	{
		"name": "SpotKing",
		"short": "SK",
		"family": 0,
		"level_cap": 40,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [78, 104, 146],
		"resistances": [1, 1, 1, 0, 0, 1, 3, 2, 3, 2, 2, 3, 3, 3, 3, 2, 1, 1, 0, 1, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "KingSlime",
		"short": "KS",
		"family": 0,
		"level_cap": 40,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [36, 43, 48],
		"resistances": [1, 1, 1, 1, 1, 1, 3, 2, 3, 2, 2, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Metaly",
		"short": "MK",
		"family": 0,
		"level_cap": 20,
		"exp_table": 25,
		"percent_f": 2,
		"skills": [0, 12, 18],
		"resistances": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0]
	},
	{
		"name": "Metabble",
		"short": "MB",
		"family": 0,
		"level_cap": 40,
		"exp_table": 27,
		"percent_f": 2,
		"skills": [3, 6, 20],
		"resistances": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 0, 0, 0, 3, 0, 0]
	},
	{
		"name": "MetalKing",
		"short": "MT",
		"family": 0,
		"level_cap": 60,
		"exp_table": 29,
		"percent_f": 2,
		"skills": [15, 42, 100],
		"resistances": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 0, 0, 0, 3, 1, 0]
	},
	{
		"name": "GoldSlime",
		"short": "GS",
		"family": 0,
		"level_cap": 80,
		"exp_table": 31,
		"percent_f": 2,
		"skills": [57, 101, 129],
		"resistances": [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 1, 1, 1, 3, 2, 0]
	},
	{
		"name": "DragonKid",
		"short": "DK",
		"family": 1,
		"level_cap": 25,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [92, 106, 140],
		"resistances": [1, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Tortragon",
		"short": "TG",
		"family": 1,
		"level_cap": 35,
		"exp_table": 17,
		"percent_f": 2,
		"skills": [39, 42, 90],
		"resistances": [2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 2, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Pteranod",
		"short": "PT",
		"family": 1,
		"level_cap": 35,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [3, 88, 138],
		"resistances": [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Gasgon",
		"short": "BG",
		"family": 1,
		"level_cap": 50,
		"exp_table": 18,
		"percent_f": 2,
		"skills": [20, 50, 61],
		"resistances": [2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
	},
	{
		"name": "FairyDrak",
		"short": "BD",
		"family": 1,
		"level_cap": 30,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [24, 106, 121],
		"resistances": [2, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "LizardMan",
		"short": "LM",
		"family": 1,
		"level_cap": 40,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [64, 74, 217],
		"resistances": [2, 2, 2, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Poisongon",
		"short": "PG",
		"family": 1,
		"level_cap": 45,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [103, 108, 121],
		"resistances": [2, 2, 2, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 2, 0, 2, 0, 2, 1, 1, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Swordgon",
		"short": "SD",
		"family": 1,
		"level_cap": 50,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [78, 87, 144],
		"resistances": [2, 2, 3, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Dragon",
		"short": "DR",
		"family": 1,
		"level_cap": 40,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [68, 92, 143],
		"resistances": [2, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "MiniDrak",
		"short": "MD",
		"family": 1,
		"level_cap": 35,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [60, 82, 114],
		"resistances": [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 1, 2, 1, 1, 0]
	},
	{
		"name": "MadDragon",
		"short": "DK",
		"family": 1,
		"level_cap": 35,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [63, 64, 120],
		"resistances": [2, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 2, 0, 2, 0, 0, 0, 0, 2, 2, 1, 2, 2, 0]
	},
	{
		"name": "Rayburn",
		"short": "RB",
		"family": 1,
		"level_cap": 35,
		"exp_table": 17,
		"percent_f": 2,
		"skills": [70, 76, 103],
		"resistances": [2, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0, 2, 1, 0, 0, 0, 0, 2, 1, 2, 1, 0]
	},
	{
		"name": "Chamelgon",
		"short": "CH",
		"family": 1,
		"level_cap": 50,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [25, 105, 107],
		"resistances": [1, 2, 2, 0, 0, 0, 0, 0, 2, 1, 0, 3, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "LizardFly",
		"short": "LF",
		"family": 1,
		"level_cap": 30,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [3, 88, 92],
		"resistances": [1, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 2, 0, 3, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "Andreal",
		"short": "AD",
		"family": 1,
		"level_cap": 50,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [9, 24, 108],
		"resistances": [2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 0, 2, 0, 0, 2, 0, 2, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0]
	},
	{
		"name": "KingCobra",
		"short": "LC",
		"family": 1,
		"level_cap": 40,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [103, 111, 113],
		"resistances": [1, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Spikerous",
		"short": "SS",
		"family": 1,
		"level_cap": 30,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [61, 62, 91],
		"resistances": [2, 2, 2, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 3, 0, 2, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "GreatDrak",
		"short": "GD",
		"family": 1,
		"level_cap": 60,
		"exp_table": 23,
		"percent_f": 2,
		"skills": [71, 96, 143],
		"resistances": [2, 3, 2, 1, 1, 1, 1, 2, 3, 1, 1, 2, 1, 1, 3, 0, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Crestpent",
		"short": "CP",
		"family": 1,
		"level_cap": 35,
		"exp_table": 18,
		"percent_f": 2,
		"skills": [23, 103, 213],
		"resistances": [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 2, 1, 1, 1, 0]
	},
	{
		"name": "WingSnake",
		"short": "WS",
		"family": 1,
		"level_cap": 45,
		"exp_table": 20,
		"percent_f": 1,
		"skills": [66, 85, 108],
		"resistances": [3, 3, 2, 1, 1, 0, 0, 0, 2, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 2, 2, 1, 1, 1, 0]
	},
	{
		"name": "Coatol",
		"short": "CT",
		"family": 1,
		"level_cap": 60,
		"exp_table": 23,
		"percent_f": 2,
		"skills": [6, 64, 69],
		"resistances": [2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 3, 1, 3, 1, 1, 1, 1, 2, 2, 1, 1, 1, 0]
	},
	{
		"name": "Orochi",
		"short": "OR",
		"family": 1,
		"level_cap": 60,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [68, 80, 92],
		"resistances": [2, 2, 2, 1, 1, 1, 2, 2, 2, 1, 1, 3, 1, 1, 3, 0, 3, 1, 2, 2, 2, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "BattleRex",
		"short": "BR",
		"family": 1,
		"level_cap": 60,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [64, 72, 92],
		"resistances": [2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 3, 0, 3, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "SkyDragon",
		"short": "SD",
		"family": 1,
		"level_cap": 35,
		"exp_table": 18,
		"percent_f": 3,
		"skills": [67, 79, 92],
		"resistances": [1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 1, 3, 0, 3, 1, 1, 2, 1, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Divinegon",
		"short": "DG",
		"family": 1,
		"level_cap": 80,
		"exp_table": 28,
		"percent_f": 3,
		"skills": [96, 101, 147],
		"resistances": [2, 3, 3, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 3, 1, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Tonguella",
		"short": "TG",
		"family": 2,
		"level_cap": 40,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [104, 106, 121],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Almiraj",
		"short": "HB",
		"family": 2,
		"level_cap": 45,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [21, 61, 65],
		"resistances": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "CatFly",
		"short": "CF",
		"family": 2,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [23, 32, 117],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "PillowRat",
		"short": "PR",
		"family": 2,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [60, 82, 119],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "Saccer",
		"short": "SC",
		"family": 2,
		"level_cap": 40,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [30, 86, 107],
		"resistances": [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 2, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 0]
	},
	{
		"name": "GulpBeast",
		"short": "GB",
		"family": 2,
		"level_cap": 45,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [60, 63, 125],
		"resistances": [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Skullroo",
		"short": "SL",
		"family": 2,
		"level_cap": 45,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [65, 73, 110],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 2, 2, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "WindBeast",
		"short": "WB",
		"family": 2,
		"level_cap": 50,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [9, 12, 70],
		"resistances": [0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 2, 2, 1, 0, 0, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Anteater",
		"short": "AE",
		"family": 2,
		"level_cap": 40,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [72, 85, 121],
		"resistances": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "SuperTen",
		"short": "ST",
		"family": 2,
		"level_cap": 45,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [113, 127, 148],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "IronTurt",
		"short": "IT",
		"family": 2,
		"level_cap": 45,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [39, 136, 142],
		"resistances": [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Mommonja",
		"short": "MM",
		"family": 2,
		"level_cap": 35,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [12, 120, 146],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "HammerMan",
		"short": "HM",
		"family": 2,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [62, 64, 65],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "Grizzly",
		"short": "GZ",
		"family": 2,
		"level_cap": 40,
		"exp_table": 14,
		"percent_f": 2,
		"skills": [59, 85, 123],
		"resistances": [1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 2, 2, 3, 2, 0]
	},
	{
		"name": "Yeti",
		"short": "YT",
		"family": 2,
		"level_cap": 40,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [12, 71, 125],
		"resistances": [1, 1, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 2, 2, 1, 0, 0, 3, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "MadGopher",
		"short": "MG",
		"family": 2,
		"level_cap": 50,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [65, 75, 77],
		"resistances": [1, 1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "FairyRat",
		"short": "FR",
		"family": 2,
		"level_cap": 45,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [24, 32, 214],
		"resistances": [1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 2, 2, 1, 0, 1, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Unicorn",
		"short": "UC",
		"family": 2,
		"level_cap": 50,
		"exp_table": 14,
		"percent_f": 2,
		"skills": [43, 48, 51],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 2, 2, 1, 1, 2, 3, 3, 1, 1, 0, 2, 0, 1, 1, 3, 2, 2, 3, 2, 0]
	},
	{
		"name": "Goategon",
		"short": "GG",
		"family": 2,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [3, 32, 106],
		"resistances": [0, 1, 1, 0, 0, 2, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "WildApe",
		"short": "KA",
		"family": 2,
		"level_cap": 35,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [59, 82, 123],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "Trumpeter",
		"short": "TP",
		"family": 2,
		"level_cap": 50,
		"exp_table": 14,
		"percent_f": 2,
		"skills": [61, 114, 125],
		"resistances": [0, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 2, 3, 1, 0, 0, 1, 0, 0, 0, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "KingLeo",
		"short": "KL",
		"family": 2,
		"level_cap": 70,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [3, 80, 96],
		"resistances": [1, 1, 1, 2, 2, 1, 1, 1, 3, 1, 1, 2, 3, 3, 3, 1, 1, 2, 1, 2, 1, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "DarkHorn",
		"short": "DH",
		"family": 2,
		"level_cap": 50,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [21, 23, 86],
		"resistances": [1, 1, 0, 0, 0, 1, 1, 2, 3, 1, 3, 1, 3, 3, 3, 1, 1, 1, 0, 2, 1, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "MadCat",
		"short": "MC",
		"family": 2,
		"level_cap": 40,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [70, 85, 123],
		"resistances": [1, 1, 1, 0, 0, 1, 0, 1, 3, 0, 0, 0, 2, 2, 3, 0, 1, 1, 0, 1, 0, 3, 2, 2, 2, 2, 0]
	},
	{
		"name": "BigEye",
		"short": "BE",
		"family": 2,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [12, 43, 96],
		"resistances": [1, 1, 1, 1, 1, 1, 0, 1, 3, 0, 2, 0, 2, 2, 3, 0, 0, 0, 0, 1, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Picky",
		"short": "PK",
		"family": 3,
		"level_cap": 40,
		"exp_table": 4,
		"percent_f": 2,
		"skills": [24, 28, 215],
		"resistances": [0, 0, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Wyvern",
		"short": "WV",
		"family": 3,
		"level_cap": 45,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [21, 43, 96],
		"resistances": [1, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "BullBird",
		"short": "BB",
		"family": 3,
		"level_cap": 35,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [60, 65, 216],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "Florajay",
		"short": "FJ",
		"family": 3,
		"level_cap": 50,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [34, 74, 149],
		"resistances": [0, 0, 0, 3, 3, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "DuckKite",
		"short": "DK",
		"family": 3,
		"level_cap": 30,
		"exp_table": 3,
		"percent_f": 2,
		"skills": [21, 25, 111],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 0]
	},
	{
		"name": "MadPecker",
		"short": "MP",
		"family": 3,
		"level_cap": 40,
		"exp_table": 4,
		"percent_f": 2,
		"skills": [9, 28, 70],
		"resistances": [1, 1, 1, 3, 3, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "MadRaven",
		"short": "MR",
		"family": 3,
		"level_cap": 45,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [66, 73, 138],
		"resistances": [0, 0, 0, 2, 2, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "MistyWing",
		"short": "MW",
		"family": 3,
		"level_cap": 50,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [24, 36, 116],
		"resistances": [0, 0, 0, 2, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Dracky",
		"short": "DK",
		"family": 3,
		"level_cap": 40,
		"exp_table": 2,
		"percent_f": 2,
		"skills": [21, 26, 51],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "BigRoost",
		"short": "BR",
		"family": 3,
		"level_cap": 40,
		"exp_table": 3,
		"percent_f": 2,
		"skills": [70, 114, 140],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "StubBird",
		"short": "SB",
		"family": 3,
		"level_cap": 40,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [37, 87, 215],
		"resistances": [0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "LandOwl",
		"short": "LO",
		"family": 3,
		"level_cap": 35,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [9, 69, 119],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "MadGoose",
		"short": "MG",
		"family": 3,
		"level_cap": 30,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [25, 117, 120],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 2, 2, 3, 3, 0]
	},
	{
		"name": "MadCondor",
		"short": "MC",
		"family": 3,
		"level_cap": 50,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [3, 46, 79],
		"resistances": [1, 1, 0, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0, 0, 2, 0, 1, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Blizzardy",
		"short": "BZ",
		"family": 3,
		"level_cap": 50,
		"exp_table": 7,
		"percent_f": 3,
		"skills": [18, 71, 96],
		"resistances": [1, 1, 0, 2, 2, 3, 0, 0, 2, 0, 0, 1, 0, 0, 1, 0, 1, 3, 0, 1, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Phoenix",
		"short": "PN",
		"family": 3,
		"level_cap": 50,
		"exp_table": 7,
		"percent_f": 1,
		"skills": [85, 92, 138],
		"resistances": [2, 2, 2, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "ZapBird",
		"short": "TH",
		"family": 3,
		"level_cap": 50,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [69, 90, 100],
		"resistances": [1, 1, 1, 3, 3, 1, 0, 0, 1, 2, 0, 2, 0, 0, 1, 0, 1, 1, 0, 1, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "WhipBird",
		"short": "WH",
		"family": 3,
		"level_cap": 60,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [42, 131, 132],
		"resistances": [1, 1, 1, 2, 2, 1, 1, 1, 2, 0, 0, 1, 0, 0, 2, 0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "FunkyBird",
		"short": "FB",
		"family": 3,
		"level_cap": 50,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [110, 148, 150],
		"resistances": [0, 0, 0, 3, 3, 0, 1, 0, 2, 1, 1, 1, 0, 0, 3, 0, 0, 0, 0, 2, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "RainHawk",
		"short": "RB",
		"family": 3,
		"level_cap": 70,
		"exp_table": 24,
		"percent_f": 1,
		"skills": [102, 129, 142],
		"resistances": [2, 2, 2, 3, 2, 2, 1, 1, 2, 1, 1, 3, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "MadPlant",
		"short": "MP",
		"family": 4,
		"level_cap": 40,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [28, 32, 52],
		"resistances": [0, 0, 0, 2, 2, 0, 1, 1, 1, 3, 3, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "FireWeed",
		"short": "FW",
		"family": 4,
		"level_cap": 45,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [0, 53, 107],
		"resistances": [1, 1, 1, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "FloraMan",
		"short": "FM",
		"family": 4,
		"level_cap": 35,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [3, 51, 54],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "WingTree",
		"short": "WT",
		"family": 4,
		"level_cap": 35,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [50, 55, 77],
		"resistances": [0, 0, 0, 3, 3, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "CactiBall",
		"short": "CB",
		"family": 4,
		"level_cap": 30,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [66, 105, 117],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 1, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 0]
	},
	{
		"name": "Gulpple",
		"short": "GP",
		"family": 4,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [9, 21, 104],
		"resistances": [1, 1, 1, 2, 2, 1, 0, 0, 1, 2, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "Toadstool",
		"short": "FG",
		"family": 4,
		"level_cap": 45,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [104, 106, 146],
		"resistances": [0, 0, 0, 2, 2, 0, 1, 1, 1, 2, 2, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "AmberWeed",
		"short": "AW",
		"family": 4,
		"level_cap": 50,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [36, 37, 38],
		"resistances": [0, 0, 0, 2, 2, 1, 0, 0, 1, 2, 2, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "Stubsuck",
		"short": "SS",
		"family": 4,
		"level_cap": 40,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [21, 55, 77],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "Oniono",
		"short": "ON",
		"family": 4,
		"level_cap": 35,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [26, 65, 106],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 1, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 0]
	},
	{
		"name": "DanceVegi",
		"short": "DV",
		"family": 4,
		"level_cap": 50,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [113, 119, 120],
		"resistances": [1, 1, 0, 2, 2, 1, 0, 0, 2, 3, 2, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 2, 3, 3, 0, 0, 0]
	},
	{
		"name": "TreeBoy",
		"short": "TB",
		"family": 4,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [12, 43, 54],
		"resistances": [1, 1, 1, 3, 3, 1, 0, 1, 2, 2, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "FaceTree",
		"short": "FT",
		"family": 4,
		"level_cap": 45,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [23, 111, 117],
		"resistances": [0, 0, 0, 2, 2, 0, 1, 2, 2, 2, 2, 1, 0, 0, 3, 0, 0, 0, 1, 2, 2, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "HerbMan",
		"short": "HM",
		"family": 4,
		"level_cap": 40,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [84, 111, 145],
		"resistances": [0, 0, 0, 3, 3, 0, 0, 0, 2, 2, 2, 0, 0, 0, 3, 0, 0, 0, 0, 2, 0, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "BeanMan",
		"short": "BM",
		"family": 4,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [26, 37, 56],
		"resistances": [0, 0, 0, 2, 2, 0, 0, 0, 1, 2, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 3, 3, 2, 2, 0]
	},
	{
		"name": "EvilSeed",
		"short": "ES",
		"family": 4,
		"level_cap": 30,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [78, 105, 115],
		"resistances": [1, 1, 1, 3, 3, 1, 0, 0, 1, 2, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "ManEater",
		"short": "ME",
		"family": 4,
		"level_cap": 50,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [73, 86, 106],
		"resistances": [1, 1, 1, 2, 2, 1, 0, 0, 1, 3, 3, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0]
	},
	{
		"name": "Snapper",
		"short": "SP",
		"family": 4,
		"level_cap": 60,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [23, 82, 87],
		"resistances": [1, 1, 1, 2, 2, 1, 0, 0, 2, 3, 3, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0]
	},
	{
		"name": "Rosevine",
		"short": "OV",
		"family": 4,
		"level_cap": 80,
		"exp_table": 24,
		"percent_f": 3,
		"skills": [80, 130, 144],
		"resistances": [1, 1, 1, 3, 3, 1, 1, 1, 2, 3, 3, 1, 1, 1, 3, 1, 1, 1, 1, 2, 1, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "Watabou",
		"short": "WT",
		"family": 4,
		"level_cap": 80,
		"exp_table": 0,
		"percent_f": 2,
		"skills": [57, 126, 127],
		"resistances": [2, 2, 2, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1, 1, 3, 1, 2, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "GiantSlug",
		"short": "GS",
		"family": 5,
		"level_cap": 35,
		"exp_table": 2,
		"percent_f": 2,
		"skills": [121, 126, 140],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "Catapila",
		"short": "CP",
		"family": 5,
		"level_cap": 40,
		"exp_table": 4,
		"percent_f": 2,
		"skills": [30, 108, 131],
		"resistances": [1, 1, 1, 0, 0, 1, 0, 2, 0, 0, 0, 2, 0, 0, 1, 0, 1, 1, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "Gophecada",
		"short": "GC",
		"family": 5,
		"level_cap": 30,
		"exp_table": 1,
		"percent_f": 2,
		"skills": [18, 39, 82],
		"resistances": [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 3, 3, 0]
	},
	{
		"name": "Butterfly",
		"short": "BF",
		"family": 5,
		"level_cap": 30,
		"exp_table": 0,
		"percent_f": 2,
		"skills": [24, 82, 111],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 1, 3, 3, 0]
	},
	{
		"name": "WeedBug",
		"short": "WB",
		"family": 5,
		"level_cap": 45,
		"exp_table": 4,
		"percent_f": 2,
		"skills": [26, 36, 38],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 2, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 2, 0]
	},
	{
		"name": "GiantWorm",
		"short": "GW",
		"family": 5,
		"level_cap": 35,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [55, 74, 117],
		"resistances": [1, 1, 1, 1, 1, 1, 0, 2, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "Lipsy",
		"short": "LP",
		"family": 5,
		"level_cap": 40,
		"exp_table": 4,
		"percent_f": 2,
		"skills": [104, 112, 121],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 3, 0, 0, 1, 0, 0, 0, 3, 3, 3, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "StagBug",
		"short": "SB",
		"family": 5,
		"level_cap": 45,
		"exp_table": 3,
		"percent_f": 2,
		"skills": [21, 92, 123],
		"resistances": [1, 1, 0, 0, 0, 1, 0, 2, 1, 0, 0, 2, 0, 0, 1, 0, 1, 1, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "ArmyAnt",
		"short": "AA",
		"family": 5,
		"level_cap": 35,
		"exp_table": 2,
		"percent_f": 2,
		"skills": [62, 82, 104],
		"resistances": [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "GoHopper",
		"short": "GH",
		"family": 5,
		"level_cap": 35,
		"exp_table": 0,
		"percent_f": 2,
		"skills": [26, 65, 82],
		"resistances": [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "TailEater",
		"short": "TE",
		"family": 5,
		"level_cap": 45,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [71, 108, 115],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 2, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 2, 2, 2, 2, 0]
	},
	{
		"name": "ArmorPede",
		"short": "AP",
		"family": 5,
		"level_cap": 30,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [30, 37, 59],
		"resistances": [1, 1, 1, 1, 1, 1, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 1, 3, 3, 0]
	},
	{
		"name": "Eyeder",
		"short": "ED",
		"family": 5,
		"level_cap": 45,
		"exp_table": 4,
		"percent_f": 2,
		"skills": [3, 43, 56],
		"resistances": [0, 0, 0, 1, 1, 0, 0, 2, 1, 1, 1, 2, 0, 0, 1, 0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 2, 0]
	},
	{
		"name": "GiantMoth",
		"short": "GM",
		"family": 5,
		"level_cap": 30,
		"exp_table": 2,
		"percent_f": 2,
		"skills": [88, 105, 115],
		"resistances": [0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 2, 1, 1, 1, 0, 0, 0, 3, 2, 2, 1, 1, 1, 3, 3, 0]
	},
	{
		"name": "Droll",
		"short": "DR",
		"family": 5,
		"level_cap": 40,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [32, 55, 216],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 3, 1, 1, 0, 3, 0, 0, 1, 0, 0, 0, 3, 3, 3, 1, 1, 1, 2, 2, 0]
	},
	{
		"name": "ArmyCrab",
		"short": "AC",
		"family": 5,
		"level_cap": 40,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [30, 72, 82],
		"resistances": [0, 0, 0, 0, 0, 0, 1, 3, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3, 0]
	},
	{
		"name": "MadHornet",
		"short": "MH",
		"family": 5,
		"level_cap": 40,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [103, 105, 138],
		"resistances": [1, 1, 1, 0, 0, 1, 0, 2, 0, 0, 0, 2, 1, 1, 0, 0, 1, 1, 2, 2, 2, 1, 1, 1, 3, 3, 0]
	},
	{
		"name": "HornBeet",
		"short": "HB",
		"family": 5,
		"level_cap": 50,
		"exp_table": 7,
		"percent_f": 2,
		"skills": [69, 76, 91],
		"resistances": [2, 2, 2, 0, 0, 2, 0, 2, 1, 0, 0, 2, 0, 0, 1, 0, 2, 2, 2, 3, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "Armorpion",
		"short": "AP",
		"family": 5,
		"level_cap": 60,
		"exp_table": 24,
		"percent_f": 2,
		"skills": [64, 77, 87],
		"resistances": [2, 2, 2, 1, 1, 2, 1, 3, 2, 1, 1, 3, 1, 1, 3, 1, 2, 2, 3, 3, 3, 1, 1, 1, 3, 3, 0]
	},
	{
		"name": "Digster",
		"short": "DG",
		"family": 5,
		"level_cap": 50,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [50, 142, 143],
		"resistances": [1, 1, 1, 0, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 3, 0, 1, 1, 2, 2, 2, 0, 0, 0, 2, 2, 0]
	},
	{
		"name": "Pixy",
		"short": "PX",
		"family": 6,
		"level_cap": 40,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [34, 37, 51],
		"resistances": [2, 2, 1, 1, 1, 2, 1, 1, 3, 2, 2, 2, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "ArcDemon",
		"short": "AD",
		"family": 6,
		"level_cap": 45,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [6, 69, 75],
		"resistances": [2, 3, 2, 2, 2, 2, 0, 0, 3, 0, 1, 0, 0, 0, 3, 0, 1, 0, 0, 2, 1, 0, 0, 0, 0, 1, 0]
	},
	{
		"name": "AgDevil",
		"short": "AD",
		"family": 6,
		"level_cap": 35,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [3, 20, 106],
		"resistances": [1, 1, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 1, 0]
	},
	{
		"name": "Demonite",
		"short": "DM",
		"family": 6,
		"level_cap": 25,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [0, 68, 96],
		"resistances": [1, 1, 1, 3, 3, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0]
	},
	{
		"name": "DarkEye",
		"short": "DE",
		"family": 6,
		"level_cap": 50,
		"exp_table": 18,
		"percent_f": 2,
		"skills": [72, 107, 115],
		"resistances": [2, 2, 1, 3, 3, 1, 0, 0, 2, 1, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 0, 0]
	},
	{
		"name": "EyeBall",
		"short": "EB",
		"family": 6,
		"level_cap": 35,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [39, 42, 125],
		"resistances": [2, 2, 2, 2, 2, 2, 0, 1, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "SkulRider",
		"short": "BR",
		"family": 6,
		"level_cap": 45,
		"exp_table": 18,
		"percent_f": 2,
		"skills": [68, 87, 123],
		"resistances": [2, 2, 2, 1, 1, 2, 1, 1, 3, 0, 0, 1, 0, 0, 3, 0, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "EvilBeast",
		"short": "EB",
		"family": 6,
		"level_cap": 50,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [3, 42, 96],
		"resistances": [2, 2, 1, 2, 2, 3, 0, 0, 3, 1, 1, 1, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "1EyeClown",
		"short": "1E",
		"family": 6,
		"level_cap": 25,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [0, 3, 12],
		"resistances": [1, 1, 1, 2, 2, 2, 0, 0, 3, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Gremlin",
		"short": "GR",
		"family": 6,
		"level_cap": 25,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [3, 23, 43],
		"resistances": [2, 2, 2, 1, 1, 1, 0, 0, 3, 0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "MedusaEye",
		"short": "MD",
		"family": 6,
		"level_cap": 35,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [24, 28, 216],
		"resistances": [2, 2, 2, 1, 1, 1, 0, 1, 2, 0, 0, 1, 0, 0, 2, 0, 0, 0, 2, 2, 2, 1, 1, 0, 1, 1, 0]
	},
	{
		"name": "Lionex",
		"short": "LX",
		"family": 6,
		"level_cap": 45,
		"exp_table": 21,
		"percent_f": 2,
		"skills": [9, 46, 70],
		"resistances": [3, 3, 2, 2, 2, 2, 0, 0, 3, 1, 1, 1, 0, 0, 3, 0, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "GoatHorn",
		"short": "GH",
		"family": 6,
		"level_cap": 35,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [6, 9, 12],
		"resistances": [2, 2, 2, 2, 2, 2, 0, 0, 3, 0, 1, 1, 2, 2, 3, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0]
	},
	{
		"name": "Orc",
		"short": "OC",
		"family": 6,
		"level_cap": 50,
		"exp_table": 17,
		"percent_f": 2,
		"skills": [28, 48, 75],
		"resistances": [1, 1, 1, 3, 3, 2, 0, 0, 2, 1, 1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "Ogre",
		"short": "OG",
		"family": 6,
		"level_cap": 35,
		"exp_table": 19,
		"percent_f": 2,
		"skills": [63, 72, 87],
		"resistances": [1, 1, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0]
	},
	{
		"name": "GateGuard",
		"short": "GG",
		"family": 6,
		"level_cap": 50,
		"exp_table": 23,
		"percent_f": 2,
		"skills": [0, 78, 131],
		"resistances": [2, 2, 2, 3, 3, 2, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0]
	},
	{
		"name": "ChopClown",
		"short": "CC",
		"family": 6,
		"level_cap": 50,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [37, 70, 85],
		"resistances": [2, 2, 2, 2, 2, 3, 1, 0, 3, 1, 1, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Grendal",
		"short": "GR",
		"family": 6,
		"level_cap": 60,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [68, 73, 136],
		"resistances": [2, 2, 2, 2, 2, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Akubar",
		"short": "AK",
		"family": 6,
		"level_cap": 80,
		"exp_table": 30,
		"percent_f": 2,
		"skills": [6, 84, 96],
		"resistances": [2, 2, 3, 2, 2, 2, 1, 2, 3, 1, 3, 2, 1, 1, 3, 0, 2, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0]
	},
	{
		"name": "MadKnight",
		"short": "MK",
		"family": 6,
		"level_cap": 50,
		"exp_table": 23,
		"percent_f": 2,
		"skills": [63, 74, 217],
		"resistances": [2, 2, 1, 1, 1, 2, 1, 1, 3, 0, 1, 1, 1, 1, 3, 0, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0]
	},
	{
		"name": "Gigantes",
		"short": "GG",
		"family": 6,
		"level_cap": 35,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [64, 65, 77],
		"resistances": [1, 1, 1, 1, 1, 1, 0, 1, 3, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0, 2, 0, 2, 1, 1, 1, 1, 0]
	},
	{
		"name": "Centasaur",
		"short": "CS",
		"family": 6,
		"level_cap": 45,
		"exp_table": 23,
		"percent_f": 2,
		"skills": [23, 68, 87],
		"resistances": [3, 3, 2, 1, 1, 2, 0, 0, 2, 0, 1, 1, 1, 1, 3, 0, 1, 1, 0, 2, 0, 1, 0, 0, 0, 0, 0]
	},
	{
		"name": "EvilArmor",
		"short": "EA",
		"family": 6,
		"level_cap": 30,
		"exp_table": 22,
		"percent_f": 2,
		"skills": [68, 69, 73],
		"resistances": [2, 2, 2, 2, 2, 1, 0, 1, 3, 0, 0, 1, 0, 0, 2, 0, 0, 0, 1, 2, 1, 1, 0, 0, 1, 1, 0]
	},
	{
		"name": "Jamirus",
		"short": "JA",
		"family": 6,
		"level_cap": 60,
		"exp_table": 21,
		"percent_f": 2,
		"skills": [0, 80, 138],
		"resistances": [2, 2, 2, 3, 3, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Durran",
		"short": "DR",
		"family": 6,
		"level_cap": 70,
		"exp_table": 28,
		"percent_f": 2,
		"skills": [73, 75, 88],
		"resistances": [2, 2, 3, 2, 1, 3, 2, 2, 3, 1, 2, 2, 1, 1, 3, 1, 1, 1, 3, 3, 2, 1, 0, 0, 0, 0, 0]
	},
	{
		"name": "Spooky",
		"short": "SP",
		"family": 7,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [115, 121, 146],
		"resistances": [0, 0, 0, 0, 0, 0, 3, 3, 3, 1, 1, 3, 1, 1, 3, 1, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Skullgon",
		"short": "SK",
		"family": 7,
		"level_cap": 45,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [59, 71, 96],
		"resistances": [1, 1, 1, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 0, 3, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Putrepup",
		"short": "DZ",
		"family": 7,
		"level_cap": 35,
		"exp_table": 6,
		"percent_f": 2,
		"skills": [28, 32, 39],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 1, 1, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "RotRaven",
		"short": "RR",
		"family": 7,
		"level_cap": 35,
		"exp_table": 5,
		"percent_f": 2,
		"skills": [62, 69, 90],
		"resistances": [0, 0, 0, 1, 1, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Mummy",
		"short": "MM",
		"family": 7,
		"level_cap": 50,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [64, 82, 105],
		"resistances": [0, 0, 0, 1, 1, 0, 2, 2, 2, 1, 1, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 0, 0, 0]
	},
	{
		"name": "DarkCrab",
		"short": "DC",
		"family": 7,
		"level_cap": 30,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [38, 42, 55],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 3, 0, 0, 2, 0, 0, 0, 3, 3, 3, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "DeadNite",
		"short": "DN",
		"family": 7,
		"level_cap": 45,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [43, 53, 54],
		"resistances": [1, 1, 1, 1, 1, 1, 2, 2, 3, 0, 0, 2, 0, 0, 3, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Shadow",
		"short": "SH",
		"family": 7,
		"level_cap": 50,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [96, 113, 131],
		"resistances": [0, 0, 0, 0, 0, 1, 2, 2, 3, 0, 0, 2, 0, 0, 3, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Hork",
		"short": "PT",
		"family": 7,
		"level_cap": 40,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [108, 116, 121],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Mudron",
		"short": "MD",
		"family": 7,
		"level_cap": 30,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [18, 43, 48],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 3, 2, 0, 0, 3, 1, 1, 2, 0, 0, 0, 3, 3, 3, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "NiteWhip",
		"short": "NW",
		"family": 7,
		"level_cap": 35,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [88, 90, 92],
		"resistances": [0, 0, 0, 2, 1, 1, 2, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "MadSpirit",
		"short": "ES",
		"family": 7,
		"level_cap": 50,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [106, 115, 131],
		"resistances": [0, 0, 0, 1, 1, 1, 2, 2, 3, 1, 1, 3, 0, 0, 3, 0, 0, 0, 2, 2, 2, 1, 1, 1, 0, 0, 0]
	},
	{
		"name": "WindMerge",
		"short": "WM",
		"family": 7,
		"level_cap": 35,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [9, 36, 54],
		"resistances": [0, 0, 0, 3, 1, 0, 2, 2, 2, 0, 0, 2, 1, 1, 2, 0, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Reaper",
		"short": "ST",
		"family": 7,
		"level_cap": 50,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [76, 111, 116],
		"resistances": [0, 0, 0, 1, 1, 0, 2, 3, 2, 1, 1, 3, 0, 0, 2, 0, 0, 1, 3, 3, 3, 1, 1, 0, 1, 1, 0]
	},
	{
		"name": "DeadNoble",
		"short": "DN",
		"family": 7,
		"level_cap": 50,
		"exp_table": 16,
		"percent_f": 2,
		"skills": [18, 46, 132],
		"resistances": [1, 1, 1, 2, 1, 2, 2, 2, 3, 1, 1, 2, 0, 0, 3, 0, 0, 2, 2, 3, 2, 1, 0, 0, 0, 0, 0]
	},
	{
		"name": "WhiteKing",
		"short": "IK",
		"family": 7,
		"level_cap": 70,
		"exp_table": 25,
		"percent_f": 2,
		"skills": [9, 15, 57],
		"resistances": [1, 1, 2, 3, 1, 3, 2, 2, 3, 1, 1, 3, 1, 1, 3, 1, 1, 2, 3, 3, 3, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "BoneSlave",
		"short": "BS",
		"family": 7,
		"level_cap": 40,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [6, 69, 75],
		"resistances": [0, 0, 0, 1, 0, 1, 2, 2, 2, 1, 1, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Skeletor",
		"short": "SK",
		"family": 7,
		"level_cap": 60,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [28, 75, 80],
		"resistances": [0, 0, 1, 2, 0, 2, 2, 2, 3, 1, 1, 2, 0, 0, 3, 0, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Servant",
		"short": "SV",
		"family": 7,
		"level_cap": 80,
		"exp_table": 20,
		"percent_f": 2,
		"skills": [0, 12, 84],
		"resistances": [1, 1, 3, 2, 1, 2, 2, 2, 3, 1, 1, 3, 1, 1, 3, 1, 1, 2, 3, 3, 3, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Copycat",
		"short": "CC",
		"family": 7,
		"level_cap": 40,
		"exp_table": 1,
		"percent_f": 2,
		"skills": [41, 117, 127],
		"resistances": [0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 3, 2, 1, 0, 0, 0, 0, 0]
	},
	{
		"name": "JewelBag",
		"short": "JB",
		"family": 8,
		"level_cap": 40,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [3, 23, 25],
		"resistances": [0, 0, 0, 0, 0, 2, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "EvilWand",
		"short": "EW",
		"family": 8,
		"level_cap": 50,
		"exp_table": 14,
		"percent_f": 2,
		"skills": [53, 56, 96],
		"resistances": [1, 1, 1, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "MadCandle",
		"short": "MC",
		"family": 8,
		"level_cap": 35,
		"exp_table": 10,
		"percent_f": 2,
		"skills": [0, 86, 126],
		"resistances": [2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 2, 0, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "CoilBird",
		"short": "CB",
		"family": 8,
		"level_cap": 35,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [52, 53, 143],
		"resistances": [0, 0, 0, 1, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Facer",
		"short": "MK",
		"family": 8,
		"level_cap": 50,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [9, 20, 149],
		"resistances": [0, 0, 0, 1, 1, 2, 0, 0, 2, 1, 1, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1, 1, 1, 0, 0, 0]
	},
	{
		"name": "SpikyBoy",
		"short": "SB",
		"family": 8,
		"level_cap": 30,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [20, 66, 214],
		"resistances": [0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 0, 1, 0, 0, 2, 0, 0, 2, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "MadMirror",
		"short": "MM",
		"family": 8,
		"level_cap": 45,
		"exp_table": 14,
		"percent_f": 2,
		"skills": [39, 41, 56],
		"resistances": [1, 1, 1, 1, 1, 2, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "RogueNite",
		"short": "RA",
		"family": 8,
		"level_cap": 45,
		"exp_table": 12,
		"percent_f": 2,
		"skills": [43, 64, 72],
		"resistances": [0, 0, 0, 0, 0, 2, 1, 1, 3, 0, 0, 1, 0, 0, 3, 0, 0, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Goopi",
		"short": "MH",
		"family": 8,
		"level_cap": 40,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [82, 123, 140],
		"resistances": [0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Voodoll",
		"short": "VD",
		"family": 8,
		"level_cap": 35,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [24, 25, 28],
		"resistances": [0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 0, 1, 0, 0, 2, 0, 0, 2, 2, 2, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "MetalDrak",
		"short": "DM",
		"family": 8,
		"level_cap": 45,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [63, 91, 114],
		"resistances": [1, 1, 1, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 1, 3, 2, 2, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Balzak",
		"short": "BZ",
		"family": 8,
		"level_cap": 35,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [6, 15, 79],
		"resistances": [0, 0, 0, 0, 0, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 0, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "SabreMan",
		"short": "SM",
		"family": 8,
		"level_cap": 30,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [26, 76, 105],
		"resistances": [0, 0, 1, 1, 0, 2, 0, 1, 2, 1, 1, 1, 0, 0, 2, 0, 0, 2, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "CurseLamp",
		"short": "CL",
		"family": 8,
		"level_cap": 50,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [30, 34, 37],
		"resistances": [0, 0, 0, 2, 1, 2, 0, 0, 2, 1, 1, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 0]
	},
	{
		"name": "Roboster",
		"short": "KB",
		"family": 8,
		"level_cap": 40,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [80, 85, 87],
		"resistances": [1, 1, 1, 1, 1, 2, 1, 2, 3, 0, 0, 0, 0, 0, 3, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "EvilPot",
		"short": "EP",
		"family": 8,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [18, 21, 63],
		"resistances": [0, 0, 0, 0, 0, 2, 2, 2, 3, 1, 1, 1, 1, 1, 3, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Gismo",
		"short": "GZ",
		"family": 8,
		"level_cap": 40,
		"exp_table": 9,
		"percent_f": 2,
		"skills": [67, 92, 96],
		"resistances": [0, 0, 0, 2, 1, 2, 0, 0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "LavaMan",
		"short": "LM",
		"family": 8,
		"level_cap": 40,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [0, 92, 136],
		"resistances": [3, 3, 1, 2, 0, 1, 0, 0, 3, 0, 0, 1, 0, 0, 3, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "IceMan",
		"short": "IC",
		"family": 8,
		"level_cap": 40,
		"exp_table": 13,
		"percent_f": 2,
		"skills": [12, 96, 142],
		"resistances": [1, 1, 1, 2, 0, 3, 0, 0, 3, 0, 0, 0, 1, 0, 3, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Mimic",
		"short": "MM",
		"family": 8,
		"level_cap": 40,
		"exp_table": 11,
		"percent_f": 2,
		"skills": [0, 18, 55],
		"resistances": [0, 0, 1, 2, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "MudDoll",
		"short": "MD",
		"family": 8,
		"level_cap": 40,
		"exp_table": 8,
		"percent_f": 2,
		"skills": [117, 119, 148],
		"resistances": [0, 0, 1, 1, 0, 3, 1, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	},
	{
		"name": "Golem",
		"short": "GL",
		"family": 8,
		"level_cap": 40,
		"exp_table": 18,
		"percent_f": 2,
		"skills": [65, 86, 142],
		"resistances": [0, 0, 1, 1, 0, 3, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0, 0, 0, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "StoneMan",
		"short": "MS",
		"family": 8,
		"level_cap": 50,
		"exp_table": 15,
		"percent_f": 2,
		"skills": [136, 143, 147],
		"resistances": [1, 1, 1, 1, 0, 3, 1, 1, 3, 0, 1, 0, 0, 0, 3, 0, 1, 3, 0, 2, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "BombCrag",
		"short": "BC",
		"family": 8,
		"level_cap": 50,
		"exp_table": 14,
		"percent_f": 2,
		"skills": [20, 50, 147],
		"resistances": [1, 1, 0, 0, 0, 2, 0, 1, 3, 1, 1, 1, 1, 1, 3, 0, 1, 2, 1, 1, 1, 0, 0, 0, 1, 1, 0]
	},
	{
		"name": "GoldGolem",
		"short": "GG",
		"family": 8,
		"level_cap": 80,
		"exp_table": 18,
		"percent_f": 1,
		"skills": [101, 129, 132],
		"resistances": [2, 2, 2, 2, 1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 1, 2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 0]
	},
	{
		"name": "DracoLord",
		"search": "DracoLord (1)",
		"short": "DL",
		"family": 9,
		"level_cap": 50,
		"exp_table": 24,
		"percent_f": 0,
		"skills": [3, 147, 213],
		"resistances": [1, 1, 0, 0, 0, 1, 3, 3, 3, 2, 3, 3, 3, 3, 3, 0, 1, 1, 3, 2, 3, 3, 3, 3, 0, 0, 0]
	},
	{
		"name": "DracoLord",
		"search": "DracoLord (2)",
		"short": "DL",
		"family": 9,
		"level_cap": 80,
		"exp_table": 25,
		"percent_f": 0,
		"skills": [63, 92, 129],
		"resistances": [2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 2, 2, 3, 3, 3, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "Hargon",
		"short": "HG",
		"family": 9,
		"level_cap": 70,
		"exp_table": 24,
		"percent_f": 0,
		"skills": [3, 6, 132],
		"resistances": [1, 1, 1, 1, 0, 1, 3, 3, 3, 2, 3, 3, 3, 3, 3, 1, 0, 0, 3, 2, 3, 3, 3, 3, 2, 0, 0]
	},
	{
		"name": "Sidoh",
		"short": "SD",
		"family": 9,
		"level_cap": 80,
		"exp_table": 25,
		"percent_f": 0,
		"skills": [92, 96, 100],
		"resistances": [1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 3, 3, 3, 3, 3, 3, 2, 1, 0]
	},
	{
		"name": "Baramos",
		"short": "BM",
		"family": 9,
		"level_cap": 70,
		"exp_table": 24,
		"percent_f": 0,
		"skills": [6, 91, 100],
		"resistances": [1, 1, 1, 2, 0, 2, 3, 3, 3, 2, 3, 3, 2, 2, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 0, 0, 0]
	},
	{
		"name": "Zoma",
		"short": "ZM",
		"family": 9,
		"level_cap": 80,
		"exp_table": 25,
		"percent_f": 0,
		"skills": [96, 101, 128],
		"resistances": [1, 2, 3, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 1, 0]
	},
	{
		"name": "Pizzaro",
		"short": "PZ",
		"family": 9,
		"level_cap": 70,
		"exp_table": 24,
		"percent_f": 0,
		"skills": [80, 92, 100],
		"resistances": [1, 1, 1, 1, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 3, 3, 3, 3, 3, 3, 2, 1, 0]
	},
	{
		"name": "Esterk",
		"short": "ES",
		"family": 9,
		"level_cap": 80,
		"exp_table": 31,
		"percent_f": 0,
		"skills": [87, 128, 217],
		"resistances": [1, 2, 2, 2, 0, 1, 3, 3, 3, 3, 3, 3, 2, 2, 3, 1, 2, 1, 3, 2, 3, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "Mirudraas",
		"search": "Mirudraas (1)",
		"short": "MD",
		"family": 9,
		"level_cap": 70,
		"exp_table": 30,
		"percent_f": 0,
		"skills": [0, 6, 15],
		"resistances": [2, 2, 2, 1, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 1, 1, 2, 3, 2, 3, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "Mirudraas",
		"search": "Mirudraas (2)",
		"short": "MD",
		"family": 9,
		"level_cap": 80,
		"exp_table": 31,
		"percent_f": 0,
		"skills": [67, 92, 128],
		"resistances": [2, 2, 2, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2, 2, 3, 1, 3, 1, 3, 3, 3, 3, 3, 3, 1, 1, 0]
	},
	{
		"name": "Mudou",
		"short": "MD",
		"family": 9,
		"level_cap": 70,
		"exp_table": 28,
		"percent_f": 0,
		"skills": [92, 96, 108],
		"resistances": [1, 1, 1, 3, 0, 1, 3, 3, 3, 2, 3, 3, 2, 3, 3, 0, 3, 3, 3, 2, 3, 3, 3, 3, 0, 0, 0]
	},
	{
		"name": "DeathMore",
		"search": "DeathMore (1)",
		"short": "DM",
		"family": 9,
		"level_cap": 60,
		"exp_table": 27,
		"percent_f": 0,
		"skills": [100, 101, 132],
		"resistances": [1, 2, 2, 1, 1, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 1, 1, 2, 3, 2, 3, 3, 3, 3, 1, 0, 0]
	},
	{
		"name": "DeathMore",
		"search": "DeathMore (2)",
		"short": "DM",
		"family": 9,
		"level_cap": 70,
		"exp_table": 29,
		"percent_f": 0,
		"skills": [60, 92, 130],
		"resistances": [2, 2, 2, 1, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 2, 3, 2, 3, 3, 3, 3, 2, 1, 0]
	},
	{
		"name": "DeathMore",
		"search": "DeathMore (3)",
		"short": "DM",
		"family": 9,
		"level_cap": 80,
		"exp_table": 31,
		"percent_f": 0,
		"skills": [84, 101, 128],
		"resistances": [2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 3, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 2, 0]
	},
	{
		"name": "Darkdrium",
		"short": "DD",
		"family": 9,
		"level_cap": 80,
		"exp_table": 30,
		"percent_f": 0,
		"skills": [15, 92, 96],
		"resistances": [2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 3, 3, 2, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 0]
	},
	{
		"name": "TERRY?",
		"short": null,
		"family": 9,
		"level_cap": 0,
		"exp_table": 0,
		"percent_f": 0,
		"skills": [0, 0, 0],
		"resistances": [1, 2, 1, 1, 0, 1, 2, 3, 3, 1, 1, 2, 0, 0, 2, 0, 1, 1, 0, 3, 0, 1, 0, 0, 1, 1, 0]
	},
	{
		"name": "Tatsu",
		"short": null,
		"family": 9,
		"level_cap": 0,
		"exp_table": 0,
		"percent_f": 0,
		"skills": [0, 0, 0],
		"resistances": [1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Diago",
		"short": null,
		"family": 9,
		"level_cap": 0,
		"exp_table": 0,
		"percent_f": 0,
		"skills": [0, 0, 0],
		"resistances": [3, 2, 2, 0, 0, 1, 1, 1, 2, 1, 0, 1, 1, 1, 0, 0, 3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Samsi",
		"short": null,
		"family": 9,
		"level_cap": 0,
		"exp_table": 0,
		"percent_f": 0,
		"skills": [0, 0, 0],
		"resistances": [1, 2, 1, 3, 0, 1, 2, 2, 3, 1, 1, 1, 0, 1, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0]
	},
	{
		"name": "Bazoo",
		"short": null,
		"family": 9,
		"level_cap": 0,
		"exp_table": 0,
		"percent_f": 0,
		"skills": [0, 0, 0],
		"resistances": [1, 2, 2, 1, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 0, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 0]
	},
]
