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
	"000": {
		"name": "HOTBLOOD",
		"en_noun": "Hotblood",
		"en_adj": "Hot-blooded",
		// These orders are arbitrary atm
		"hates": ["002", "011", "012", "112", "122", "202", "210", "212", "222"]
	},
	"010": {
		"name": "DARING",
		"en_adj": "Daring",
		"hates": ["002", "012", "212", "222"]
	},
	"020": {
		"name": "DAREDEVIL",
		"en_noun": "Daredevil",
		"hates": ["002", "012", "111", "120", "212", "222"]
	},
	"001": {
		"name": "LONE WOLF",
		"en_noun": "Lone Wolf",
		"hates": ["001", "002", "011", "012", "021", "111", "112", "120", "121", "122", "210", "211", "212", "220", "222"]
	},
	"011": {
		"name": "VAIN",
		"en_adj": "Vain",
		"hates": ["000", "001", "011", "012", "022", "100", "102", "111", "112", "121", "122", "220", "222"]
	},
	"021": {
		"name": "EZ GOING",
		"en_adj": "Easy-going",
		"hates": ["001", "100", "102", "112", "222"]
	},
	"002": {
		"name": "SMUG",
		"en_adj": "Smug",
		"hates": ["000", "001", "002", "010", "012", "020", "022", "100", "102", "111", "112", "121", "122", "220", "222"]
	},
	"012": {
		"name": "SNOBBY",
		"en_noun": "Snob",
		"en_adj": "Snobby",
		"hates": ["000", "001", "002", "010", "011", "012", "020", "022", "100", "102", "111", "112", "121", "122", "220", "222"]
	},
	"022": {
		"name": "RECKLESS",
		"en_adj": "Reckless",
		"hates": ["002", "011", "012", "111", "112", "122", "210", "212", "222"]
	},
	"100": {
		"name": "COOL/CALM",
		"en_adj": "Chill",
		"hates": ["002", "011", "012", "021", "102", "110", "112", "120", "121", "202", "210", "221", "222"]
	},
	"110": {
		"name": "WHIMSY",
		"en_adj": "Whimsical",
		"hates": ["100", "102", "111", "222"]
	},
	"120": {
		"name": "NOSY",
		"en_adj": "Nosy",
		"hates": ["001", "020", "100", "222"]
	},
	"101": {
		"name": "WHIZ KID",
		"en_noun": "Whiz Kid",
		"hates": ["221", "222"]
	},
	"111": {
		"name": "ORDINARY",
		"en_adj": "Ordinary",
		"hates": ["001", "002", "011", "012", "020", "022", "102", "110", "112", "122", "212", "222"]
	},
	"121": {
		"name": "HASTY",
		"en_adj": "Hasty",
		"hates": ["001", "002", "011", "012", "100", "102", "112", "122", "210", "211", "212", "220", "222"]
	},
	"102": {
		"name": "STUBBORN",
		"en_adj": "Stubborn",
		"hates": ["002", "011", "012", "021", "100", "102", "110", "111", "112", "121", "122", "210", "212", "220", "222"]
	},
	"112": {
		"name": "REBEL",
		"en_noun": "Rebel",
		"hates": ["000", "001", "002", "011", "012", "021", "022", "100", "102", "111", "112", "121", "122", "210", "222"]
	},
	"122": {
		"name": "SPOILED",
		"en_adj": "Spoiled",
		"hates": ["000", "001", "002", "011", "012", "022", "102", "111", "112", "121", "210", "211", "212", "220", "221", "222"]
	},
	"200": {
		"name": "HUMANE",
		"en_adj": "Humane",
		"hates": []
	},
	"210": {
		"name": "UNCERTAIN",
		"en_adj": "Uncertain",
		"hates": ["000", "001", "022", "100", "102", "112", "121", "122", "222"]
	},
	"220": {
		"name": "CARELESS",
		"en_adj": "Careless",
		"hates": ["001", "002", "011", "012", "102", "121", "122"]
	},
	"201": {
		"name": "SHREWED",
		"en_adj": "Shrewd",
		"hates": ["222"]
	},
	"211": {
		"name": "CAREFREE",
		"en_adj": "Carefree",
		"hates": ["001", "121", "122"]
	},
	"221": {
		"name": "GULLIBLE",
		"en_adj": "Gullible",
		"hates": ["100", "101", "122"]
	},
	"202": {
		"name": "SLY",
		"en_adj": "Sly",
		"hates": ["000", "100", "202", "222"]
	},
	"212": {
		"name": "COWARD",
		"en_noun": "Coward",
		"en_adj": "Cowardly",
		"hates": ["000", "001", "010", "020", "022", "102", "111", "121", "122", "222"]
	},
	"222": {
		"name": "LAZY",
		"en_adj": "Lazy",
		"hates": ["000", "001", "002", "010", "011", "012", "020", "021", "022", "100", "101", "102", "110", "111", "112", "120", "121", "122", "201", "202", "210", "212", "222"]
	}
}
