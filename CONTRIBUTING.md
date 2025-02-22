# Contributing Guide

Thank you guys for your interest in contributing to **Quick Word Definition**! We welcome contributions from everyone. Follow the guide below to get started.

## How It Works

The **Quick Word Definition** extension allows users to:

- Select a word on any webpage.
- Right-click to open a context menu.
- Click on **Define `<selected word>`**.
- A popup appears with the definition, pronunciation (with audio button), phonetics, part of speech, and example sentences.
- If no definition is found, a Google search option is provided in the popup.
- No more need to distract yourself from the reading get the word definition right away.

## Installation for testing

1.  Download or clone this repository.
2.  `npm install`
3.  `npx webpack`
4.  Open Chrome and navigate to `chrome://extensions/`.
5.  Enable "Developer mode" in the top right corner.
6.  Click "Load unpacked" and select the directory of the extension.

## How to Contribute

1. **Fork the Repository** – Click the 'Fork' button at the top of the repository to create your own copy.
2. **Clone Your Fork** – Use `git clone https://github.com/your-username/Quick-Word-Definition-Chrome-Extension.git`.
3. **Create a Branch** – Follow our branch naming convention:
   ```
   git checkout -b <authorname>-<type>-<#issue>/<issue-title>
   ```
   - `authorname`: Your GitHub username.
   - `type`: The type of change (e.g., bugfix, hotfix, feature, docs, refactor, etc.).
   - `#issue/issue-title`: The issue number and title.
4. **Make Changes & Commit** – Implement your changes and commit with a meaningful message.
5. **Push to Your Fork** – Push the changes to your forked repository.
6. **Submit a Pull Request** – Open a pull request (PR) to the main repository.

## Branching Convention Example

- `johndoe-feature-#12/add-dark-mode`
- `janedoe-bugfix-#45/fix-popup-layout`

## Contribution Guidelines

- Keep your commits clean and descriptive.
- Ensure your code follows the project's coding style.
- Update documentation if necessary.
- Test your changes before submitting a PR.
- Be open to feedback and ready to make adjustments.

## Reporting Issues

If you find a bug or have a feature request, please open an issue on GitHub with a clear and detailed description.

---

Thank you for contributing to **Quick Word Definition**!
