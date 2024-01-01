/** 
 * @typedef Personality
 * @type {object}
 * @property {string} name - Internal name
 * @property {string} [en_noun] - Name as a natural English noun
 * @property {string} [en_adj] - Name as a natural English adjective
 * @property {string[]} hates - Incompatible personality types (by key)
*/
/** @type {Object.<string, Personality>} */
export default
{
	// Order is in order of the text strings in the US ROM
	"222": {
		"name": "HOTBLOOD",
		"en_noun": "Hotblood",
		"en_adj": "Hot-blooded",
		// These orders are arbitrary atm
		"hates": ["220", "211", "210", "110", "100", "020", "012", "010", "000"]
	},
	"212": {
		"name": "DARING",
		"en_adj": "Daring",
		"hates": ["220", "210", "010", "000"]
	},
	"202": {
		"name": "DAREDEVIL",
		"en_noun": "Daredevil",
		"hates": ["220", "210", "111", "102", "010", "000"]
	},
	"221": {
		"name": "LONE WOLF",
		"en_noun": "Lone Wolf",
		"hates": ["221", "220", "211", "210", "201", "111", "110", "102", "101", "100", "012", "011", "010", "002", "000"]
	},
	"211": {
		"name": "VAIN",
		"en_adj": "Vain",
		"hates": ["222", "221", "211", "210", "200", "122", "120", "111", "110", "101", "100", "002", "000"]
	},
	"201": {
		"name": "EZ GOING",
		"en_adj": "Easy-going",
		"hates": ["221", "122", "120", "110", "000"]
	},
	"220": {
		"name": "SMUG",
		"en_adj": "Smug",
		"hates": ["222", "221", "220", "212", "210", "202", "200", "122", "120", "111", "110", "101", "100", "002", "000"]
	},
	"210": {
		"name": "SNOBBY",
		"en_noun": "Snob",
		"en_adj": "Snobby",
		"hates": ["222", "221", "220", "212", "211", "210", "202", "200", "122", "120", "111", "110", "101", "100", "002", "000"]
	},
	"200": {
		"name": "RECKLESS",
		"en_adj": "Reckless",
		"hates": ["220", "211", "210", "111", "110", "100", "012", "010", "000"]
	},
	"122": {
		"name": "COOL/CALM",
		"en_adj": "Chill",
		"hates": ["220", "211", "210", "201", "120", "112", "110", "102", "101", "020", "012", "001", "000"]
	},
	"112": {
		"name": "WHIMSY",
		"en_adj": "Whimsical",
		"hates": ["122", "120", "111", "000"]
	},
	"102": {
		"name": "NOSY",
		"en_adj": "Nosy",
		"hates": ["221", "202", "122", "000"]
	},
	"121": {
		"name": "WHIZ KID",
		"en_noun": "Whiz Kid",
		"hates": ["001", "000"]
	},
	"111": {
		"name": "ORDINARY",
		"en_adj": "Ordinary",
		"hates": ["221", "220", "211", "210", "202", "200", "120", "112", "110", "100", "010", "000"]
	},
	"101": {
		"name": "HASTY",
		"en_adj": "Hasty",
		"hates": ["221", "220", "211", "210", "122", "120", "110", "100", "012", "011", "010", "002", "000"]
	},
	"120": {
		"name": "STUBBORN",
		"en_adj": "Stubborn",
		"hates": ["220", "211", "210", "201", "122", "120", "112", "111", "110", "101", "100", "012", "010", "002", "000"]
	},
	"110": {
		"name": "REBEL",
		"en_noun": "Rebel",
		"hates": ["222", "221", "220", "211", "210", "201", "200", "122", "120", "111", "110", "101", "100", "012", "000"]
	},
	"100": {
		"name": "SPOILED",
		"en_adj": "Spoiled",
		"hates": ["222", "221", "220", "211", "210", "200", "120", "111", "110", "101", "012", "011", "010", "002", "001", "000"]
	},
	"022": {
		"name": "HUMANE",
		"en_adj": "Humane",
		"hates": []
	},
	"012": {
		"name": "UNCERTAIN",
		"en_adj": "Uncertain",
		"hates": ["222", "221", "200", "122", "120", "110", "101", "100", "000"]
	},
	"002": {
		"name": "CARELESS",
		"en_adj": "Careless",
		"hates": ["221", "220", "211", "210", "120", "101", "100"]
	},
	"021": {
		"name": "SHREWED",
		"en_adj": "Shrewd",
		"hates": ["000"]
	},
	"011": {
		"name": "CAREFREE",
		"en_adj": "Carefree",
		"hates": ["221", "101", "100"]
	},
	"001": {
		"name": "GULLIBLE",
		"en_adj": "Gullible",
		"hates": ["122", "121", "100"]
	},
	"020": {
		"name": "SLY",
		"en_adj": "Sly",
		"hates": ["222", "122", "020", "000"]
	},
	"010": {
		"name": "COWARD",
		"en_noun": "Coward",
		"en_adj": "Cowardly",
		"hates": ["222", "221", "212", "202", "200", "120", "111", "101", "100", "000"]
	},
	"000": {
		"name": "LAZY",
		"en_adj": "Lazy",
		"hates": ["222", "221", "220", "212", "211", "210", "202", "201", "200", "122", "121", "120", "112", "111", "110", "102", "101", "100", "021", "020", "012", "010", "000"]
	}
}
