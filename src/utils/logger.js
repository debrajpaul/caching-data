import debug from "debug";

export default function log(scope, ...args) {
	debug(scope)(...args);
}
