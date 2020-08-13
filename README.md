# react-site

### This project represents the SPA made with the help of the following technologies:
+ React
+ Redux
+ Redux-saga
+ Typescript
+ Sass
+ Atomic structure
+ Storybook
+ Jest

### Commit rules:
| Commit type   | Description |
| ------------- |:-------------:|
| build         | Build a project or change external dependencies |
| ci            | CI configuration and scripting |
| docs          | Documentation update |
| feat          | Adding new functionality |
| fix           | Error fixes |
| perf          | Changes which are aimed at improving performance |
| refactor      | Editing code without fixing bugs or adding new features |
| revert        | Rollback to previous commits |
| style         | Code style edits (tabs, indents, periods, commas, etc.) |
| test          | Adding Tests |
| upd           | Updates in the code without adding new functionality |

### Commit example
```
git commit -m 'build(integration): add public API'
```

### Branch example
A branch`s name begins with the type of changes(see commit types) and then the changes description is written:
```
git checkout -b feat_themes
```

### Tests
Show test coverage: `npm test -- --coverage`

Presentational report: `react-boilerplate/coverage/lcov-report/index.html`

### Linting
Linting is set on the precommit script.

Eslint errors and warnings: `npm run eslint`

Eslint config: `npm run eslint:dump`

VSCode Eslint config:
`
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
`
