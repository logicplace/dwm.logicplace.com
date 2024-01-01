/** 
 * @typedef {Object.<string,*>} options
 * @typedef {(string|options)} textOrOptions
 */

function first(fn) {
	return x => fn(x);
}

/** 
 * @function
 * @param {string} tag
 * @param {textOrOptions} [opts]
 * @param {Element[]} children
 * @returns Element
 */
function make_element(tag, opts, children) {
	let elem = document.createElement(tag);
	children = [...(children ?? [])].filter(n => typeof n !== "undefined");
	if (typeof opts === "string" || opts instanceof Element) {
		children = [opts, ...children];
	}
	else if (opts) {
		elem = Object.assign(elem, opts);
	}
	elem.append(...children);
	return elem;
}

/**
 * @function
 * @param {textOrOptions} opts
 * @returns {boolean}
 */
function isopts(opts) {
	return !(opts instanceof Element) && typeof opts === "object";
}

/**
 * @function
 * @param {textOrOptions} opts
 * @param {string} key
 * @returns *
 */
function get(opts, key) {
	if (isopts(opts)) {
		return opts[key];
	}
}

/** 
 * @function
 * @param {options} [opts]
 * @param {...(HTMLTableRowElement|HTMLTableCellElement[]|string[])} rows
 * @returns HTMLTableElement
 */
export function $table(opts, ...rows) {
	/** @type HTMLTableElement */
	const ret = make_element("table", opts, rows.map(first($tr)));
	return ret;
}

/** 
 * @function
 * @param {options} [opts]
 * @param {...(HTMLTableCellElement|string)} cells
 * @returns HTMLTableRowElement
 */
export function $tr(opts, ...cells) {
	if (opts instanceof HTMLTableRowElement) {
		// Call from $table, ignore cells
		return opts;
	}
	const fn = get(opts, "th") ? $th : $td;
	/** @type HTMLTableRowElement */
	const ret = make_element("tr", opts, cells.map(first(fn)));
	return ret;
}

/** 
 * @function
 * @param {} [opts]
 * @param {string|Element} [text]
 * @returns HTMLTableCellElement
 */
export function $th(opts, text) {
	if (opts instanceof HTMLTableCellElement) {
		// Call from $tr, ignore text
		return opts;
	}
	/** @type HTMLTableCellElement */
	const ret = make_element("th", opts, [text]);
	return ret;
}

/** 
 * @function
 * @param {options} [opts]
 * @param {string|Element} [text]
 * @returns HTMLTableCellElement
 */
export function $td(opts, text) {
	if (opts instanceof HTMLTableCellElement) {
		// Call from $tr, ignore text
		return opts;
	}
	/** @type HTMLTableCellElement */
	const ret = make_element("td", opts, [text]);
	return ret;
}

/** 
 * @function
 * @param {options} [opts]
 * @param {string} [text]
 * @returns HTMLParagraphElement
 */
export function $p(opts, text) {
	/** @type HTMLParagraphElement */
	const ret = make_element("p", opts, [text]);
	return ret;
}

/** 
 * @function
 * @param {options} [opts]
 * @param {string} [text]
 * @returns HTMLDivElement
 */
export function $div(opts, text) {
	/** @type HTMLDivElement */
	const ret = make_element("div", opts, [text]);
	return ret;
}

/** 
 * @function
 * @param {options} [opts]
 * @param {...(HTMLOptionElement|string)} options
 * @returns HTMLSelectElement
 */
export function $select(opts, ...options) {
	if (options.length == 1 && typeof options[0] == "object") {
		let newopts = [];
		for (const [v, t] of options[0]) {
			newopts.push($option(v, t));
		}
		options = newopts;
	} else {
		options = [...(options ?? [])].map(first($option));
	}
	/** @type HTMLSelectElement */
	const ret =  make_element("select", opts, options);
	return ret;
}

/** 
 * @function
 * @param {options} [opts]
 * @param {string} value
 * @param {string} [text]
 * @returns HTMLOptionElement
 */
export function $option(opts, value, text) {
	if (opts instanceof HTMLOptionElement) {
		// Call from $select, ignore options
		return opts;
	}
	if (!isopts(opts)) [opts, value, text] = [{}, opts, value];
	opts.value = value;
	opts.text = text ?? value;
	/** @type HTMLOptionElement */
	const ret = make_element("option", opts);
	return ret;
}
