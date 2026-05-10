import antfu from "@antfu/eslint-config";

const config = antfu({
  type: "app",
  typescript: true,
  react: false,
  formatters: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: "double",
  },
}, {
  rules: {
    "ts/no-redeclare": "off",
    "ts/consistent-type-definitions": ["error", "type"],
    "no-console": ["warn"],
    "antfu/no-top-level-await": ["off"],
    "node/prefer-global/process": ["off"],
    "node/no-process-env": ["error"],
    "unicorn/filename-case": ["error", {
      case: "kebabCase",
      ignore: ["README.md"],
    }],
  },
});

// Ignore patterns (replacement for .eslintignore, used by flat config)
config.ignores = [
  "node_modules/",
  "dist/",
  "build/",
  ".cache/",
  ".turbo/",
  ".prisma/",
  "prisma/migrations/",
  ".vscode/",
  ".idea/",
  "coverage/",
  "*.log",
  ".env",
  ".DS_Store",
];

export default config;
