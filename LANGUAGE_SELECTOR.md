# Language Selector Feature

The HITL System now supports multiple languages with a language selector dropdown in the header.

## Supported Languages

- 🇺🇸 English
- 🇪🇸 Español (Spanish)
- 🇫🇷 Français (French)
- 🇩🇪 Deutsch (German)
- 🇮🇹 Italiano (Italian)
- 🇵🇹 Português (Portuguese)
- 🇯🇵 日本語 (Japanese)
- 🇨🇳 中文 (Chinese)

## Features

- **Language Selector**: Located in the header next to "Admin Access" button
- **Persistent Selection**: Your language choice is saved in browser local storage
- **Dynamic Updates**: All UI elements update instantly when language is changed
- **Full Localization**: Includes headers, buttons, placeholders, messages, and status labels

## How It Works

1. Select a language from the dropdown in the top-right corner
2. The entire interface updates to your chosen language
3. Your preference is automatically saved and applied on future visits

## Adding New Languages

To add a new language:

1. Add a new language code and translations object in `translations` in `script.js`
2. Add the `<option>` tag to the language selector in `index.html`
3. All strings are centralized in the `translations` object for easy maintenance

## Technical Details

- Translation function: `t(key, replacements)` 
- Uses browser localStorage to persist language preference
- No external libraries required
- All translations are inline for quick loading
