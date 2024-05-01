import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
	input: "./src/Magnifier.tsx",
	output: [
		{
			file: pkg.main,
			format: "cjs",
		},
		{
			file: pkg.module,
			format: "esm",
		},
	],
	external: ["react", "lodash"],
	plugins: [postcss(), typescript()],
};
