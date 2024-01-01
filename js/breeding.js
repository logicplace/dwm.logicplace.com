import books from "./books.js";
import personalities from "./personalities.js";
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

////////////////// Utilities

/** @typedef {import("./personalities").Personality} Personality */

/**
 * @function
 * @param {string} name
 * @returns {[string,Personality]}
 */
function lookup_by_name(name) {
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
 * @function
 * @param {Array[]} arr
 * @returns {number}
 */
function sum_lengths(arr) {
	return arr.reduce((t, n) => t + n.length, 0)
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
 * @returns {[statChanges,statChanges][]}
 */
function find_steps_to_compatible(personality1, personality2) {
	// We're assuming p1.hates.includes(k2) implies p2.hates.includes(k1)
	const [k1, p1] = lookup_by_name(personality1);
	const [k2, p2] = lookup_by_name(personality2);
	if (!k1 || !k2) return undefined;

	// Easy win
	if (!p1.hates.includes(k2)) return [];

	// One step away
	/** @type {[statChanges,statChanges]} */
	let options = [[[],[],[]], [[],[],[]]];
	/** @type {[splitKey, Personality, number][]} */
	const fopts = [
		[split_pkey(k2), p1, 1],
		[split_pkey(k1), p2, 0],
	];
	for (const [kn, po, pn] of fopts) {
		for (const x of get_one_away(kn)) {
			if (!po.hates.includes(x)) {
				// Diff of 1
				const [_, diff] = personality_diff(kn, x);
				switch (diff.toString()) {
					case "1,0,0": case "-1,0,0":
						options[pn][0].push(diff[0]);
						break;
					case "0,1,0": case "0,-1,0":
						options[pn][1].push(diff[1]);
						break;
					case "0,0,1": case "0,0,-1":
						options[pn][2].push(diff[2]);
						break;
				}
			}
		}

		if (options.length) {
			for (const v of options[pn]) v.sort();
			return [options];
		}
	}

	// TODO: Two steps away
	console.error("2+ steps away");
	return [];
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
	let last_handled = "";

	let handler = (e) => {
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

		if (in1.value.length >= 3 && in2.value.length >= 3) {
			// Start creating output
			let ul = document.createElement("ul");
			const compat_steps = find_steps_to_compatible(in1.value, in2.value);
			if (!compat_steps) {
				res.replaceChildren("");
				return;
			}

			// Update inputs
			if (is_kb_event) {
				const initial = target.value.length;
				const full = lookup_by_name(target.value)[1].name;
				target.value = full;
				target.setSelectionRange(initial, full.length);
			}

			for (const opts of compat_steps) {
				let li = document.createElement("li"), br = false;
				let which, stats;
				switch (`${!!sum_lengths(opts[0])},${!!sum_lengths(opts[1])}`) {
					case "false,true":
						which = "other mon";
						stats = opts[1];
						break;
					case "true,false":
						which = "pedigree";
						stats = opts[0];
						break;
					default:
						res.replaceChildren("wtf?");
						return;
				}
				for (const s of stat_changes_to_english(which, stats)) {
					li.append($p(br ? `OR ${s}` : s[0].toUpperCase() + s.substring(1)));
					br = true;
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
