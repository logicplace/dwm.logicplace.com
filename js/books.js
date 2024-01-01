/** 
 * @typedef Book
 * @type {object}
 * @property {string} name - Internal name
 * @property {[number,number]} change - Stat ID and amount
*/
/** @type {Book[]} */
export default
[
	// Order is in order of the text strings in the US ROM
	{
		name: "QuestBK",
		change: [0, 1],
	},
	{
		name: "HorrorBK",
		change: [0, -1],
	},
	{
		name: "BeNiceBK",
		change: [2, 1],
	},
	{
		name: "CheaterBK",
		change: [2, -1],
	},
	{
		name: "SmartBK",
		change: [1, 1],
	},
	{
		name: "ComedyBK",
		change: [1, -1],
	},
]
