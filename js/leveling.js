import StatTable from "./data_en/stat.js";
import { lookup_monster_by_name } from "./breeding.js";
import {
	$table, $tr, $th, $td
} from "./dom.js"

function stat_bonus_for_level(amt) {
	return [
		amt, (
			amt
			+ Math.max(1, Math.min(Math.floor(amt / 6), 255))
			+ Math.max(1, Math.min(Math.floor(amt / 8), 255))
			+ Math.max(1, Math.min(Math.floor(amt / 6), 255))
			+ Math.max(1, Math.min(Math.floor(amt / 5), 255))
		)
	];
}

function no_bonus(amt) {
	return [amt, amt];
}

function stat_change_for_level(tables, level) {
	// Assumes we're not past the cap
	return {
		hp: stat_bonus_for_level(tables.hp[level]),
		mp: no_bonus(tables.mp[level]),
		atk: stat_bonus_for_level(tables.atk[level]),
		def: no_bonus(tables.def[level]),
		agl: no_bonus(tables.agl[level]),
		int: no_bonus(tables.int[level]),
	};
}

function calculate_stats_down(level, want, stats, tables) {
	// TODO:
	return [level, stats, stats];
}

function calculate_stats_up(level, want, stats, tables) {
	let minStats = {...stats};
	let maxStats = {...stats};
	want = Math.min(want - 1, 98);
	for (; level <= want; ++level) {
		const changes = stat_change_for_level(tables, level);
		for (const [stat, [mn, mx]] of Object.entries(changes)) {
			minStats[stat] += mn;
			maxStats[stat] += mx;
		}
	}
	return [level, minStats, maxStats];
}

/**
 * @function
 * @param {string} monster - Selector for monster name input
 * @param {string} current - Selector for curent level input
 * @param {string} maxlvl - Selector for max level input
 * @param {string} viewlvl - Selector for view level input
 * @param {string} stat - Pattern for selector for current stat inputs
 * @param {string} index - Pattern for selector for stat table index inputs
 * @param {string} results - Selector for element to put results into
 */
export function listen_stat_inputs(monster, current, maxlvl, viewlvl, stat, index, results) {
	const inMonster = document.querySelector(monster);
	const inCurrentLvl = document.querySelector(current);
	const inMaxLvl = document.querySelector(maxlvl);
	const inViewLvl = document.querySelector(viewlvl);
	const inStats = {
		hp: document.querySelector(stat.replace("%s", "hp")),
		mp: document.querySelector(stat.replace("%s", "mp")),
		atk: document.querySelector(stat.replace("%s", "atk")),
		def: document.querySelector(stat.replace("%s", "def")),
		agl: document.querySelector(stat.replace("%s", "agl")),
		int: document.querySelector(stat.replace("%s", "int")),
	};
	const inTblIdx = {
		hp: document.querySelector(index.replace("%s", "hp")),
		mp: document.querySelector(index.replace("%s", "mp")),
		atk: document.querySelector(index.replace("%s", "atk")),
		def: document.querySelector(index.replace("%s", "def")),
		agl: document.querySelector(index.replace("%s", "agl")),
		int: document.querySelector(index.replace("%s", "int")),
	};
	const outResults = document.querySelector(results);

	const monsterHandler = (e) => {
		const mon = lookup_monster_by_name(e.target.value)[1];
		inMaxLvl.value = mon.level_cap.toString();
		inTblIdx.hp.value = mon.stat_table[0].toString();
		inTblIdx.mp.value = mon.stat_table[1].toString();
		inTblIdx.atk.value = mon.stat_table[2].toString();
		inTblIdx.def.value = mon.stat_table[3].toString();
		inTblIdx.agl.value = mon.stat_table[4].toString();
		inTblIdx.int.value = mon.stat_table[5].toString();
	}
	inMonster.addEventListener("change", monsterHandler);

	const queryHandler = (e) => {
		let level = parseInt(inCurrentLvl.value);
		const viewlvl = parseInt(inViewLvl.value);
		const stats = {
			hp: parseInt(inStats.hp.value),
			mp: parseInt(inStats.mp.value),
			atk: parseInt(inStats.atk.value),
			def: parseInt(inStats.def.value),
			agl: parseInt(inStats.agl.value),
			int: parseInt(inStats.int.value),
		};
		const tables = {
			hp: StatTable[parseInt(inTblIdx.hp.value)],
			mp: StatTable[parseInt(inTblIdx.mp.value)],
			atk: StatTable[parseInt(inTblIdx.atk.value)],
			def: StatTable[parseInt(inTblIdx.def.value)],
			agl: StatTable[parseInt(inTblIdx.agl.value)],
			int: StatTable[parseInt(inTblIdx.int.value)],
		};

		// Calculate changes
		let minStats, maxStats;
		if (viewlvl < level) {
			[level, minStats, maxStats] = calculate_stats_down(level, viewlvl, stats, tables);
		}
		else if (viewlvl > level) {
			[level, minStats, maxStats] = calculate_stats_up(level, viewlvl, stats, tables);
		}
		else {
			minStats = maxStats = stats;
		}

		const tbl = $table(
			$tr({th: true}, "Stat", "Value"),
			$tr("Level", level.toString())
		);
		for (let stat of ["hp", "mp", "atk", "def", "agl", "int"]) {
			const minValue = minStats[stat];
			const maxValue = maxStats[stat];
			let res;
			if (minValue == maxValue) {
				res = minValue.toString();
			} else {
				res = minValue.toString() + " ~ " + maxValue.toString();
			}
			tbl.appendChild($tr(stat.toUpperCase(), res));
		}

		outResults.replaceChildren(tbl);
	}
	inViewLvl.addEventListener("change", queryHandler);
}
 