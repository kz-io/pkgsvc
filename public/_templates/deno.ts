import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';

export const depsTs = createTemplate<
  FilePropsPath,
  FileProps
>`{
	"name": "${'pkg.name'}",
  "description": "${'pkg.description'}",
  "version": "${'pkg.version'}",
  "author": "integereleven",
  "license": "MIT",
  "status": "${'pkg.status'}",
  "lint": {
    "rules": {
      "tags": ["recommended"],
      "include": [
        "ban-untagged-todo",
        "camelcase",
        "default-param-last",
        "eqeqeq",
        "explicit-function-return-type",
        "explicit-module-boundary-types",
        "no-throw-literal"
      ]
    }
  },
  "fmt": {
    "files": {
      "include": ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.json"],
      "exclude": ["**/vendor/**", "**/build/**"]
    },
    "indentWidth": 2,
    "lineWidth": 80,
    "proseWrap": "preserve",
    "useTabs": false,
    "singleQuote": false,
    "semiColons": true
  },
  "tasks": {
    "new": "deno run -A https://denopkg.com/kz-io/pkgsvc/public/new.ts",
    "release": "deno run -A https://denopkg.com/kz-io/pkgsvc/public/release.ts",
		"bump-versions": "deno run -A https://denopkg.com/kz-io/pkgsvc/public/bump_versions.ts",
    "commit": "deno run -A https://denopkg.com/kz-io/pkgsvc/public/commit.ts",
    "pre-commit": "deno fmt && deno lint && deno test && deno doc ./mod.ts --json > _doc.json",
    "cache": "deno cache --reload --lock=lock.json --lock-write deps.ts"
  }
}
`;
