import { createTemplate, FileProps, FilePropsPath } from '../../mod.ts';

export const contributing = createTemplate<
  FilePropsPath,
  FileProps
>`# Contributing

Thank you for your interest in contributing to the kz.io libraries. There
are multiple ways to contribute, including reporting or resolving issues,
requesting or adding new features, improving documentation, creating guides,
adding translations, and more.

## Found an issue?

If you find an issue in a kz.io libraries source code, you can help by
[submitting an issue][issues] to its GitHub Repository. If you have a fix for
the issue, you can submit a Pull Request.

## Want a feature?

You can request a new feature in a library by [submitting an issue][feature] to
a kz.io library's GitHub Repository. If you are unsure which library a
feature should be requested in, you can [submit an issue][feature-new] on the
&grave;kz.io/please&grave; repo.

## What you need to know

If you are interested in contributing with code, you only need to be familiar
with [TypeScript][typescript] and [Deno][deno].

You can contribute to documentation by looking at
[documentation issues][documentation].

# Making code contributions

New to contributing to open source projects?

Find an issue of interest, or a feature that you'd like to implement. You can
use [the "good first issue" view][first-issue] to help ease into the project.

## 1. Fork it

Fork the repository to your GitHub organization. This means that you'll have a
copy of the repository under _**username/repo-name**_.

## 2. Clone it

&grave;&grave;&grave;bash
git clone https://github.com/{username}/repo-name.git
&grave;&grave;&grave;

## 3. Branch it

Create a new branch for your fix or feature.

&grave;&grave;&grave;bash
git checkout -b branch-name-here
&grave;&grave;&grave;

## 4. Setup dev environment

Set up the development environment:

1. [Deno][deno] v1.20.x is installed.

## 5. Do it

Update the code with your issue fix or new feature implementation.

## 6. Stage it

Stage the changes to be committed:

&grave;&grave;&grave;bash
git add .
&grave;&grave;&grave;

## 7. Commit it

Commit the changes with a brief message. (See
[commit messages](#commit-messages) how to structure commit messages)

&grave;&grave;&grave;bash
git commit -m "<type>: <description>"
&grave;&grave;&grave;

## 8. Push it

Push the changes.

&grave;&grave;&grave;bash
git push origin branch-name-here
&grave;&grave;&grave;

## 9. Create a pull request

1. Create a pull request.
   - Title the pull request and provide a brief summary of the changes made.
   - Reference the issue the change is associated with.
   - Explain the changes made, and any potential issues that may arise with the
     pull request.
2. Wait for the pull request to be reviewed.
3. Make any changes recommended to the pull request.

## Commit messages

We follow the [Conventional Commits][conventional-commit] commit message
convention. The core kz.io libraries do not have any scopes.

Commit messages should be structured like this:

&grave;&grave;&grave;bash
<type>: <description>
&grave;&grave;&grave;

Example

&grave;&grave;&grave;
fix: fix IPv4 CIDR-to-mask resolution on /32 masks.
&grave;&grave;&grave;

### Types:

- **chore**: Changes to the build process or auxiliary tools and libraries such
  as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc...)
- **test**: Adding missing or correcting existing tests

## Code of conduct

Please note that this project is released with a Contributor Code of Conduct. By
participating in this project you agree to abide by its terms.

[Code of Conduct][code-of-conduct]

Our Code of Conduct means that you are responsible for treating everyone on the
project with respect and courtesy.

[typescript]: https://www.typescriptlang.org/docs "TypeScript: The JavaScript superset for the future"
[deno]: https://deno.land "Deno: A modern web platform for writing JavaScript"
[conventional-commit]: https://www.conventionalcommits.org/en/v1.0.0/ "Conventional Commits: A guide to commit messages"
[code-of-conduct]: https://github.com/kz-io/.github/blob/main/.github/CODE_OF_CONDUCT.md "Contributor Code of Conduct"
[feature-new]: https://github.com/kz-io/please/issues/new?template=feature.yaml&title= "Request a new feature in kz.io"
[issues]: https://github.com/kz-io/${'pkg.name'}/issues/new?template=issue.yaml&title= "Report an issue in kz.io/${'pkg.name'}"
[feature]: https://github.com/kz-io/${'pkg.name'}/issues/new?template=feature.md&title= "Request a new feature in kz.io/${'pkg.name'}"
[documentation]: https://github.com/kz-io/${'pkg.name'}/labels/type%3A%20docs "Documentation issues in kz.io/${'pkg.name'}"
[first-issue]: https://github.com/kz-io/${'pkg.name'}/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22 "Good first issues in kz.io/${'pkg.name'}"
`;
