import books from "./data_en/books.js";
import breeding from "./data_en/breeding.js";
import families from "./data_en/families.js";
import monsters from "./data_en/monsters.js";
import personalities from "./data_en/personalities.js";
import {
	$table, $tr, $th, $td,
	$p, $div, $select, $option
} from "./dom.js"

/**
 * @function
 * @param {string} target - Selector for document.querySelector
 */
export function populate_personality_suggestions(target) {
	let elem = document.querySelector(target);
	elem.replaceChildren();
	for (const [_, p] of get_sorted_personalities("key")) {
		elem.append($option(p.name));
	}
}

/**
 * @function
 * @param {string} target - Selector for document.querySelector
 */
export function populate_monsters_suggestions(target) {
	let elem = document.querySelector(target);
	elem.replaceChildren();
	for (const [_, m] of get_sorted_monsters()) {
		elem.append($option(m.search ?? m.name));
	}
}

////////////////// Utilities

/**
 * @typedef {import("./data_en/breeding.js").BreedingPair} BreedingPair
 * @typedef {import("./data_en/monsters.js").Monster} Monster
 * @typedef {import("./data_en/personalities.js").Personality} Personality
 */

/**
 * @function
 * @param {string} name
 * @returns {[string,Personality]}
 */
function lookup_personality_by_name(name) {
	name = name.toUpperCase();
	for (let [k, v] of Object.entries(personalities)) {
		if (
			v.name.startsWith(name)
			|| v.en_adj?.toUpperCase().startsWith(name)
			|| v.en_noun?.toUpperCase().startsWith(name)
		) {
			return [k, v];
		}
	}
	return [undefined, {name}];
}

/**
 * @function
 * @param {string} name
 * @returns {[number,Monster]}
 */
function lookup_monster_by_name(name) {
	let ret = [undefined, undefined];
	name = name.toUpperCase().replace(/ /g, "");
	for (const [k, v] of monsters.entries()) {
		if (
			(v.search ?? v.name).toUpperCase().startsWith(name)
			|| v.dq8_name?.toUpperCase().startsWith(name)
		) {
			ret = [k, v];
			if ((v.search ?? v.name).toUpperCase() == name) {
				return ret;
			}
		}
	}
	return ret;
}

/**
 * @callback personalityIndexer
 * @param {Personality} personality
 * @param {string} key
 * @returns {number}
 */

/** @type {Object.<string, personalityIndexer>} */
const personality_indexer = {
	"key": (p, k) => -Number.parseInt(k, 10),
	"charge": (p, k) => -Number.parseInt(k[0]),
	"mixed": (p, k) => -Number.parseInt(k[1]),
	"cautious": (p, k) => -Number.parseInt(k[2]),
	"count": (p) => p.hates.length,
	"name": (p) => {
		let result = 0, mul = Math.pow(27, 8);
		for (let c of p.name) {
			result += c.charCodeAt(0) * mul;
			mul /= 27;
		}
		return result;
	},
}

/**
 * @function
 * @param {string} sort_by
 * @param {boolean} [reverse=false]
 * @returns {[string,Personality][]}
 */
function get_sorted_personalities(sort_by, reverse) {
	reverse ??= false;
	let index_fn = personality_indexer[sort_by ?? "count"];
	let idx2keys = {}, result = [];

	for (const [k, v] of Object.entries(personalities)) {
		let idx = index_fn(v, k) * (reverse ? -1 : 1);
		if (idx in idx2keys) idx2keys[idx].push(k);
		else idx2keys[idx] = [k];
	}

	let indexes = Object.entries(idx2keys);
	indexes.sort((a, b) => a[0] - b[0]);

	for (const [_, v] of indexes) {
		for (const x of v) {
			result.push([x, personalities[x]])
		}
	}

	return result;
}

/**
 * @callback monsterIndexer
 * @param {Monster} monster
 * @param {string} key
 * @returns {number}
 */

/** @type {Object.<string, monsterIndexer>} */
const monster_indexer = {
	"id": (m, k) => -Number.parseInt(k, 10),
	"name": (m) => {
		let result = 0, mul = Math.pow(27, 8);
		for (let c of (m.search ?? m.name)) {
			result += c.charCodeAt(0) * mul;
			mul /= 27;
		}
		return result;
	},
}

/**
 * @function
 * @param {string} sort_by
 * @param {boolean} [reverse=false]
 * @returns {[string,Monster][]}
 */
function get_sorted_monsters(sort_by, reverse) {
	reverse ??= false;
	let index_fn = monster_indexer[sort_by ?? "name"];
	let idx2keys = {}, result = [];

	for (const [k, v] of monsters.entries()) {
		let idx = index_fn(v, k) * (reverse ? -1 : 1);
		if (idx in idx2keys) idx2keys[idx].push(k);
		else idx2keys[idx] = [k];
	}

	let indexes = Object.entries(idx2keys);
	indexes.sort((a, b) => a[0] - b[0]);

	for (const [_, v] of indexes) {
		for (const x of v) {
			result.push([x, monsters[x]])
		}
	}

	return result;
}


/**
 * @function
 * @param {Array[]} arr
 * @returns {number}
 */
function sum_lengths(arr) {
	return arr.reduce((t, n) => t + n.length, 0)
}


/**
 * @function
 * @param {KeyboardEvent} e
 * @param {string} last_handled
 * @returns {[bool, string]}
 */
function handle_suggest_input(e, last_handled) {
	const is_kb_event = (
		e instanceof KeyboardEvent
		&& !e.getModifierState("Alt")
		&& !e.getModifierState("Control")
		&& !e.getModifierState("Meta")
		&& e.key.length == 1
	);

	/** @type HTMLInputElement */
	const target = e.target;
	if (is_kb_event && (!target.selectionEnd || target.selectionEnd == target.value.length)) {
		const partial = (
			target.selectionStart
			? target.value.substring(0, target.selectionStart)
			: target.value
		).toUpperCase();
		if (partial === last_handled) return;
		last_handled = partial;
	}

	return [is_kb_event, last_handled]
}


////////////////// Personality table generators

/**
 * @function
 * @param {string} sort_by
 * @returns {[string[],boolean[][]]} - labels, rows
 The first array is the labels (for cols AND rows)
 The second is an array of arrays of:
  * false - incompatible pair
  * true  - compatible pair
 */
function personalities_to_breedability_rows(sort_by) {
	// TODO: get_sorted_personalities
	let index_fn = personality_indexer[sort_by ?? "count"];
	let idx2keys = {}, data = {};

	for (const [k, v] of Object.entries(personalities)) {
		let idx = index_fn(v, k);
		if (idx in idx2keys) idx2keys[idx].push(k);
		else idx2keys[idx] = [k];

		let d = data[k] = {};
		for (const x of v.hates) {
			d[x] = false;
		}
	}

	let indexes = Object.entries(idx2keys);
	indexes.sort((a, b) => a[0] - b[0]);

	let order = [], headers = [];
	for (const [_, v] of indexes) {
		order.push(...v);
		for (const x of v) {
			headers.push(personalities[x].name)
		}
	}

	let rows = [];
	for (const key of order) {
		const d = data[key];
		let row = [];

		for (const k of order) {
			row.push(d[k] ?? true);
		}
		rows.push(row);
	}
	return [headers, rows];
}

/**
 * @function
 * @param {string} target - Selector for document.querySelector
 * @param {string} sort_by - key from personality_indexer
 */
export function generate_breeding_table(target, sort_by) {
	const [headers, rows] = personalities_to_breedability_rows(sort_by);

	let result = $table({className: "breeding-table"});

	// Make header
	let tr = $tr();

	// Sorting selector
	let sel = $select();
	for (const k of Object.keys(personality_indexer)) {
		sel.append($option(k));
	}
	sel.value = sort_by ?? "count";
	sel.addEventListener("change", (x) => generate_breeding_table(target, x.target.value));
	tr.append($th($div("Sort by:"), sel));

	// Add header elements for columns
	for (const header of headers) {
		tr.append($th({className: "column-header"}, $p(header)));
	}
	result.append(tr);

	// Add rows
	for (const  [i, row] of rows.entries()) {
		let tr = $tr($th({className: "row-header"}, headers[i]));
		for (const e of row) {
			tr.append($td({
				className: e ? "compatible" : "incompatible",
				textContent: e ? "O" : "X",
			}));
		}
		result.append(tr);
	}

	/** @type {Element} */
	const elem = document.querySelector(target);
	elem.replaceChildren(result);
}

const num_to_emote = ["❌", "⚪", "⭐"];

/**
 * @function
 * @param {string} target - Selector for document.querySelector
 * @param {string} [sort_by="key"] - key from personality_indexer
 * @param {boolean} [reverse=false] - reverse sort order
 */
export function generate_personality_table(target, sort_by, reverse) {
	sort_by ??= "key";
	reverse ??= false;

	const result = $table({className: "nice-table"});

	// Make header
	const th_key = $th({className: "upper-left"}, "⭐>⚪>❌");
	const th_c = $th("C"), th_m = $th("M"), th_d = $th("D");
	result.append($tr({className: "header-row"}, th_key, th_c, th_m, th_d));

	function sort_col(mode) {
		return generate_personality_table.bind(null, target, mode, (mode == sort_by) != (reverse));
	}

	th_key.addEventListener("click", sort_col("name"));
	th_c.addEventListener("click", sort_col("key"));
	th_m.addEventListener("click", sort_col("mixed"));
	th_d.addEventListener("click", sort_col("cautious"));

	// Add rows
	for (const [k, p] of get_sorted_personalities(sort_by, reverse)) {
		const [c, m, d] = split_pkey(k);
		result.append($tr($th(p.name), num_to_emote[c], num_to_emote[m], num_to_emote[d]));
	}

	document.querySelector(target)?.replaceChildren(result);
}

/**
 * @function
 * @param {string} target - Selector for document.querySelector
 */
export function generate_book_table(target) {
	const result = $table({className: "nice-table"});

	// Make header
	const th_key = $th({className: "upper-left"}, "🕮Books🕮");
	const th_c = $th("C"), th_m = $th("M"), th_d = $th("D");
	result.append($tr({className: "header-row"}, th_key, th_c, th_m, th_d));

	// Add rows
	const bks = [...books].sort((a, b) => (a.change[0] - a.change[1] * 10) - (b.change[0] - b.change[1] * 10));
	for (const b of bks) {
		const [stat, amt] = b.change;
		const emote = {[-1]: "⬇️", [1]: "⬆️"}[amt] ?? amt.toString()
		const c = (stat == 0 ? emote : "　");
		const m = (stat == 1 ? emote : "　");
		const d = (stat == 2 ? emote : "　");
		result.append($tr($th(b.name), c, m, d));
	}

	document.querySelector(target)?.replaceChildren(result);
}


////////////////// Compatibility calculator

/**
 * @typedef {[number,number,number]} splitKey
 * @function
 * @param {(string|splitKey)} pkey
 * @returns {splitKey}
 */
function split_pkey(pkey) {
	return pkey instanceof Array ? pkey : pkey.split("").map(x => Number.parseInt(x))
}

/**
 * @function
 * @param {string} personality
 * @returns {string[]}
 */
function get_one_away(personality) {
	let result = [];
	const [c, m, d] = split_pkey(personality);
	if (c < 2) result.push(`${c+1}${m}${d}`);
	if (c > 0) result.push(`${c-1}${m}${d}`);
	if (m < 2) result.push(`${c}${m+1}${d}`);
	if (m > 0) result.push(`${c}${m-1}${d}`);
	if (d < 2) result.push(`${c}${m}${d+1}`);
	if (d > 0) result.push(`${c}${m}${d-1}`);
	return result
}

/**
 * @function
 * @param {string} personality
 * @returns {string[]}
 */
function get_two_away(personality) {
	let result = [];
	const [c, m, d] = split_pkey(personality);
	if (c == 0) result.push(`2${m}${d}`);
	if (c < 2 && m < 2) result.push(`${c+1}${m+1}${d}`);
	if (c < 2 && m > 0) result.push(`${c+1}${m-1}${d}`);
	if (c < 2 && d < 2) result.push(`${c+1}${m}${d+1}`);
	if (c < 2 && d > 0) result.push(`${c+1}${m}${d-1}`);
	if (c == 2) result.push(`0${m}${d}`);
	if (c > 0 && m < 2) result.push(`${c-1}${m+1}${d}`);
	if (c > 0 && m > 0) result.push(`${c-1}${m-1}${d}`);
	if (c > 0 && d < 2) result.push(`${c-1}${m}${d+1}`);
	if (c > 0 && d > 0) result.push(`${c-1}${m}${d-1}`);

	if (m == 0) result.push(`${c}2${d}`);
	if (m < 2 && d < 2) result.push(`${c}${m+1}${d+1}`);
	if (m < 2 && d > 0) result.push(`${c}${m+1}${d-1}`);
	if (m == 2) result.push(`${c}0${d}`);
	if (m > 0 && d < 2) result.push(`${c}${m-1}${d+1}`);
	if (m > 0 && d > 0) result.push(`${c}${m-1}${d-1}`);

	if (d == 0) result.push(`${c}${m}2`);
	if (d == 2) result.push(`${c}${m}0`);
	return result
}

/**
 * @function
 * @param {(string|splitKey)} p1
 * @param {(string|splitKey)} p2
 * @returns {[number,splitKey]}
 */
function personality_diff(p1, p2) {
	const [c1, m1, d1] = split_pkey(p1);
	const [c2, m2, d2] = split_pkey(p2);
	let df1, df2, df3;
	const diff = [df1, df2, df3] = [c2 - c1, m2 - m1, d2 - d1];
	return [df1 + df2 + df3, diff]
}

/**
 * @typedef {number[]} statChange
 * @typedef {[statChange,statChange,statChange]} statChanges
 * @function
 * @param {string} personality1
 * @param {string} personality2
 * @returns {[statChanges,statChanges][], [splitKey,splitKey][]}
 */
function find_steps_to_compatible(personality1, personality2) {
	// We're assuming p1.hates.includes(k2) implies p2.hates.includes(k1)
	const [k1, p1] = lookup_personality_by_name(personality1);
	const [k2, p2] = lookup_personality_by_name(personality2);
	if (!k1 || !k2) return undefined;

	// Easy win
	if (!p1.hates.includes(k2)) return [[], []];

	/** @type {[statChanges,statChanges][]} */
	let ones = [];
	/** @type {[splitKey, Personality, number][]} */
	const split_k1 = split_pkey(k1);
	const split_k2 = split_pkey(k2);
	const fopts = [
		[split_k2, p1, 1],
		[split_k1, p2, 0],
	];
	const ones_away_from_k1 = get_one_away(split_k1);
	const ones_away_from_k2 = get_one_away(split_k2);

	// One step away
	const ones_away = [ones_away_from_k1, ones_away_from_k2]
	let did_set = false;
	let options = [[[],[],[]], [[],[],[]]];
	for (const [kn, po, pn] of fopts) {
		/** @type {[statChanges,statChanges]} */
		for (const x of ones_away[pn]) {
			if (!po.hates.includes(x)) {
				// Diff of 1
				const [_, diff] = personality_diff(kn, x);
				switch (diff.toString()) {
					case "1,0,0": case "-1,0,0":
						options[pn][0].push(diff[0]);
						did_set = true;
						break;
					case "0,1,0": case "0,-1,0":
						options[pn][1].push(diff[1]);
						did_set = true;
						break;
					case "0,0,1": case "0,0,-1":
						options[pn][2].push(diff[2]);
						did_set = true;
						break;
				}
			}
		}
	}

	if (did_set) {
		for (const v of options[0]) v.sort();
		for (const v of options[1]) v.sort();
		ones.push(options);
	}

	// Two steps away
	let twos = [];
	const blank = [0,0,0];
	for (const [kn, po, pn] of fopts) {
		for (const x of get_two_away(kn)) {
			if (!po.hates.includes(x)) {
				// Diff of 2
				const [_, diff] = personality_diff(kn, x);
				twos.push(pn == 0 ? [diff, blank] : [blank, diff]);
			}
		}
	}

	// One step away on both
	let diff_from_k1 = [];
	for (const x in ones_away_from_k1) {
		// Confirm p2 itself hates this one (ones it likes are already in options)
		if (p2.hates.includes(x)) {
			diff_from_k1.push([x, personality_diff(split_k1, x)[1]]);
		}
	}
	for (const x in ones_away_from_k2) {
		if (p1.hates.includes(x)) {
			for (const [y, ydiff] in diff_from_k1) {
				if (!p1.hates.includes(y)) {
					const [_, diff] = personality_diff(split_k2, x);
					twos.push([ydiff, diff]);
				}
			}
		}
	}

	return [ones, twos];
}

/**
 * @function
 * @param {string} mon
 * @param {statChanges} stat_changes
 * @returns {string[]}
 */
function stat_changes_to_english(mon, stat_changes) {
	/* Concept:
	   Find patterns to reduce the number of disjunctions
	   If multiple stats have the same changes, group them into one line
	   Otherwise if one stat has multiple changes, group those into one line
	 */
	// Assume already sorted
	const s1 = stat_changes[0].toString();
	const s2 = stat_changes[1].toString();
	const s3 = stat_changes[2].toString();
	let results = [];

	const gen_english = (stat_text, changes) => {
		let res_amt = {}, res_rl = {};
		for (const x of changes) {
			// Primary key of amount
			const ax = Math.abs(x);
			if (!(ax in res_amt)) res_amt[ax] = [false, false];
			res_amt[ax][+(x > 0)] = true;
		}

		for (const [k, v] of Object.entries(res_amt)) {
			// Primary key of raise and/or lower
			const rl = v.toString();
			if (rl in res_rl) res_rl[rl].push(k);
			else res_rl[rl] = [k];
		}

		for (const [rl, amts] of Object.entries(res_rl)) {
			const sRL = raise_or_lower[rl] ?? "wtf";
			results.push(`${sRL} ${mon}'s ${stat_text} by ${amts.join("/")}`);
		}
	}

	if (s1 && s1 == s2 && s2 == s3) {
		// All three match
		gen_english("Charge, Mixed, or Cautious", stat_changes[0])
	}
	else if (s1 && s1 == s2) {
		gen_english("Charge or Mixed", stat_changes[0])
		if (s3) gen_english("Cautious", stat_changes[2])
	}
	else if (s1 && s1 == s3) {
		gen_english("Charge or Cautious", stat_changes[0])
		if (s2) gen_english("Mixed", stat_changes[1])
	}
	else if (s2 && s2 == s3) {
		if (s1) gen_english("Charge", stat_changes[0])
		gen_english("Mixed or Cautious", stat_changes[1])
	}
	else {
		// Can't unify all on stats... TODO: better
		if (s1) gen_english("Charge", stat_changes[0])
		if (s2) gen_english("Mixed", stat_changes[1])
		if (s3) gen_english("Cautious", stat_changes[2])
	}

	return results;
}

/**
 * @function
 * @param {string} mon
 * @param {splitKey} stat_changes
 * @returns {string}
 */
function conj_stat_changes_to_english(mon, stat_changes) {
	const [c, m, d] = stat_changes;
	let results = [];

	let first = true;
	mon += "'s";

	const gen_english = (stat_text, change) => {
		const sRL = raise_or_lower[`${change < 0},${change > 0}`] ?? "wtf";
		results.push(`${sRL} ${first ? mon : "its"} ${stat_text} by ${Math.abs(change)}`);
		first = false;
	}

	if (!c && !m && !d) {
		return "";
	}

	if (c == m && m == d) {
		// All three match
		gen_english("Charge, Mixed, and Cautious", c)
	}
	else if (c && c == m) {
		gen_english("Charge and Mixed", c)
		if (d) gen_english("Cautious", d)
	}
	else if (c && c == d) {
		gen_english("Charge and Cautious", c)
		if (m) gen_english("Mixed", m)
	}
	else if (m && m == d) {
		if (c) gen_english("Charge", c)
		gen_english("Mixed and Cautious", m)
	}
	else {
		// Can't unify all on stats... TODO: better
		if (c) gen_english("Charge", c)
		if (m) gen_english("Mixed", m)
		if (d) gen_english("Cautious", d)
	}

	return results.join(" AND ")
}

const raise_or_lower = {
	"true,true": "raise or lower",
	"false,true": "raise",
	"true,false": "lower",
}

/**
 * @function
 * @param {string} input1 - Selector for first personality input element
 * @param {string} input2 - Selector for second personality input element
 * @param {string} results - Selector for element to put results into
 */
export function listen_compat_calc(input1, input2, results) {
	let in1 = document.querySelector(input1);
	let in2 = document.querySelector(input2);
	let res = document.querySelector(results);
	let last_handled = "", is_kb_event;

	let handler = (e) => {
		const target = e.target;
		[is_kb_event, last_handled] = handle_suggest_input(e, last_handled);

		if (in1.value.length >= 3 && in2.value.length >= 3) {
			// Start creating output
			let ul = document.createElement("ul");
			const compat_steps = find_steps_to_compatible(in1.value, in2.value);
			if (!compat_steps) {
				res.replaceChildren("");
				return;
			}
			const [compat_steps1, compat_steps2] = compat_steps;

			// Update inputs
			if (is_kb_event) {
				const initial = target.value.length;
				const full = lookup_personality_by_name(target.value)[1].name;
				target.value = full;
				target.setSelectionRange(initial, full.length);
			}

			for (const opts of compat_steps1) {
				let li = document.createElement("li"), br = false;
				let lines;
				switch (`${!!sum_lengths(opts[0])},${!!sum_lengths(opts[1])}`) {
					case "false,true":
						lines = stat_changes_to_english("other mon", opts[1]);
						break;
					case "true,false":
						lines = stat_changes_to_english("pedigree", opts[0]);
						break;
					case "true,true":
						lines = stat_changes_to_english("pedigree", opts[0]);
						lines.push(...stat_changes_to_english("other mon", opts[0]));
						break;
					default:
						res.replaceChildren("wtf?");
						return;
				}
				for (const s of lines) {
					li.append($p(br ? `OR ${s}` : s[0].toUpperCase() + s.substring(1)));
					br = true;
				}
				ul.append(li);
			}

			for (const [pedigree, other] of compat_steps2) {
				let li = document.createElement("li");
				const p_en = conj_stat_changes_to_english("pedigree", pedigree);
				const o_en = conj_stat_changes_to_english("other mon", other);
				if (p_en && o_en) {
					li.append($p(
						p_en[0].toUpperCase() + p_en.substring(1)
						+ ` AND ${o_en}`
					));
				}
				else if (p_en) {
					li.append($p(p_en[0].toUpperCase() + p_en.substring(1)));
				}
				else if (o_en) {
					li.append($p(o_en[0].toUpperCase() + o_en.substring(1)));
				}
				else {
					li.append($p("how did we get here"));
				}
				ul.append(li);
			}

			if (ul.children.length) {
				res.replaceChildren(ul);
			} else {
				res.replaceChildren("These personalities are compatible!");
			}
		} else {
			res.replaceChildren("");
		}
	}

	in1.addEventListener("keyup", handler);
	in2.addEventListener("keyup", handler);
	in1.addEventListener("change", handler);
	in2.addEventListener("change", handler);
}


////////////////// Breeding pairs

/**
 * @function
 * @param {string|number} mon1 - Pedigree
 * @param {string|number} mon2 - Other monster
 * @returns {Array<[Monster, number]>}
 */
function get_breeding_results(mon1, mon2) {
	/** @type {Array<[Monster, number]>} */
	const res = [];

	/** @type {number} */
	const id1 = typeof mon1 === "string" ? lookup_monster_by_name(mon1)[0] : mon1;

	/** @type {number} */
	const id2 = typeof mon2 === "string" ? lookup_monster_by_name(mon2)[0] : mon2;

	if (typeof mon1 === "string") {
		id1, _ = lookup_monster_by_name(mon1);
	}

	if (typeof mon2 === "string") {
		id2, _ = lookup_monster_by_name(mon2);
	}

	const fam1 = 0xf0 + monsters[id1].family;
	const fam2 = 0xf0 + monsters[id2].family;

	for (const row of breeding) {
		if (
			(row[0] == id1 || row[0] == fam1)
			&& (row[1] == id2 || row[1] == fam2)
		) {
			res.push([monsters[row[2]], row[4] ?? 0]);
			if (row[3] ?? 0 == 0) break;
		}
	}

	if (res.length == 0) {
		res.push([monsters[id1], 0])
	}

	return res;
}

/**
 * @function
 * @param {string|number} mon - Resulting monster
 * @returns {Array<[Monster|string, Monster|string, number, number]>}
 */
function get_breeding_options(mon) {
	/** @type {Array<[Monster|string, Monster|string, number, number]>} */
	const res = [];

	/** @type {number} */
	const id3 = typeof mon === "string" ? lookup_monster_by_name(mon)[0] : mon;

	for (const row of breeding) {
		const id1 = row[0];
		const id2 = row[1];
		if (row[2] == id3) {
			res.push([
				id1 >= 0xf0 ? "any " + families[id1 - 0xf0] : monsters[id1],
				id2 >= 0xf0 ? "any " + families[id2 - 0xf0] : monsters[id2],
				row[3] ?? 0,
				row[4] ?? 0
			]);
		}
	}

	return res;
}


/**
 * @function
 * @param {string} input1 - Selector for pedigree input element
 * @param {string} input2 - Selector for breeding partner input element
 * @param {string} input3 - Selector for resulting monster input element
 * @param {string} results - Selector for element to put results into
 */
export function listen_breeding_inputs(input1, input2, input3, results1, results2) {
	const in1 = document.querySelector(input1);
	const in2 = document.querySelector(input2);
	const in3 = document.querySelector(input3);
	const res1 = document.querySelector(results1);
	const res2 = document.querySelector(results2);
	let last_handled = "", is_kb_event;

	const forward_handler = (e) => {
		const target = e.target;
		[is_kb_event, last_handled] = handle_suggest_input(e, last_handled);

		if (in1.value.length >= 3 && in2.value.length >= 3) {
			// Start creating output
			const table = $table({class: "breeding-table"},
				$tr($th("Pedigree"), $th("+"), $th("Partner"), $th("="), $th("Baby")));

			const [id1, mon1] = lookup_monster_by_name(in1.value);
			const [id2, mon2] = lookup_monster_by_name(in2.value);

			// Update inputs
			if (is_kb_event) {
				const initial = target.value.length;
				const mon = target === in1 ? mon1 : mon2;
				const full = mon.search ?? mon.name;
				target.value = full;
				target.setSelectionRange(initial, full.length);
			}

			for (const [mon3, pluses] of get_breeding_results(id1, id2)) {
				let name = mon3.search ?? mon3.name;
				if (pluses) name += ` +${pluses}`
				table.append($tr(
					$td(mon1.search ?? mon1.name),
					$td("+"), $td(mon2.search ?? mon2.name),
					$td("="), $td(name),
				));
			}

			res1.replaceChildren(table);
		} else {
			res1.replaceChildren("");
		}
	}

	in1.addEventListener("keyup", forward_handler);
	in2.addEventListener("keyup", forward_handler);
	in1.addEventListener("change", forward_handler);
	in2.addEventListener("change", forward_handler);

	const backward_handler = (e) => {
		const target = e.target;
		[is_kb_event, last_handled] = handle_suggest_input(e, last_handled);

		if (in3.value.length >= 3) {
			// Start creating output
			const table = $table({class: "breeding-table"},
				$tr($th("Pedigree"), $th("+"), $th("Other mon"), $th("="), $th("Baby")));

			const [id3, mon3] = lookup_monster_by_name(in3.value);

			// Update inputs
			if (is_kb_event) {
				const initial = target.value.length;
				const full = mon3.search ?? mon3.name;
				target.value = full;
				target.setSelectionRange(initial, full.length);
			}

			let warning = "";
			for (const [mon1, mon2, required, pluses] of get_breeding_options(id3)) {
				let name = mon3.search ?? mon3.name;
				const m1str = typeof mon1 === "string";
				const m2str = typeof mon2 === "string";
				if (pluses) name += ` +${pluses}`
				table.append($tr(
					$td(m1str ? mon1 : mon1.search ?? mon1.name),
					$td("+"),
					$td(m2str ? mon2 : mon2.search ?? mon2.name),
					$td(required ? `if +${required} then` : "="),
					$td(name),
				));

				if (m1str || m2str) {
					warning = 'Warning: For "any [family]" pairs, check your specific monsters before breeding!'
				}
			}

			if (warning) {
				res2.replaceChildren(table, $div({class: "warning"}, warning));
			}
			else {
				res2.replaceChildren(table);
			}

		} else {
			res2.replaceChildren("");
		}
	}

	in3.addEventListener("keyup", backward_handler);
	in3.addEventListener("change", backward_handler);
}
