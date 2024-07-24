# ChitChat

ChatGPT Chatbot Experiments with OpenAI's public API.

![chitchat](https://github.com/epreston/chitchat/assets/347224/9810dc09-7f3e-44af-b9c8-ac74ffef5db5)

[![CI][ci-badge]][ci-url]

## Setup

Install [Node.js](https://nodejs.org/en/download/) and create an [OpenAI API key](https://platform.openai.com/account/api-keys).

Create a file named `.env` in the root directory with the following contents:

```sh
OPENAI_API_KEY=YOURKEY
```

Validate the API key and configuration using the CLI:

```bash
# install dependencies
npm install

# start the cli
npm run start
```

## Scripts

| Action | Command          | Description                    |
| ------ | ---------------- | ------------------------------ |
| start  | `npm run start`  | CLI ChatGPT Chatbot Experiment |
| lint   | `npm run lint`   | Run static code analysis       |
| format | `npm run format` | Format source files            |

## Libraries

| Library       | Reference                                    |
| ------------- | -------------------------------------------- |
| openai        | https://github.com/openai/openai-node        |
| dotenv        | https://github.com/motdotla/dotenv           |
| picocolors    | https://github.com/alexeyraspopov/picocolors |
| readline-sync | https://github.com/anseki/readline-sync      |

## Tools

| Item         | Reference                |
| ------------ | ------------------------ |
| Node.js      | https://nodejs.org       |
| ESLint       | https://eslint.org       |
| Prettier     | https://prettier.io      |
| EditorConfig | https://editorconfig.org |

## References

| Item        | Reference                             |
| ----------- | ------------------------------------- |
| OpenAI      | https://openai.com                    |
| OpenAI Node | https://github.com/openai/openai-node |

## License

This project is released under the MIT [License](LICENSE).

[ci-badge]: https://github.com/epreston/chitchat/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/epreston/chitchat/actions
