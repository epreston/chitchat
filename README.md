# ChitChat

ChatGPT Chatbot Experiments with OpenAI's public API.

## Setup

Install [Node.js](https://nodejs.org/en/download/) and create an [OpenAI API key](https://platform.openai.com/account/api-keys).

Create a file named `.env` in both the root and `cli` directory with the following contents:

```
OPENAI_API_KEY=YOURKEY
```

Validate the API key and configuration using the CLI:

```bash
# move to cli directory
cd cli

# install dependencies
npm install

# start the cli
npm run start
```

Run web application using the following commands:

```bash
# install dependencies
npm install

# start a local server in development mode
npm run dev
```

## Commands

| Action        | Command                 | Description                                               |
| ------------- | ----------------------- | --------------------------------------------------------- |
| dev           | `npm run dev`           | Start a development server                                |
| dev-host      | `npm run dev-host`      | Start a development server and host                       |
| build         | `npm run build`         | Create a production build into "dist"                     |
| preview       | `npm run preview`       | Start a local server to preview production build          |
| preview-host  | `npm run preview-host`  | Start a local server to preview production build and host |
| start         | `npm run start`         | Start a dev server and open in web browser                |
| lint          | `npm run lint`          | Run static code analysis                                  |
| test          | `npm run test`          | Run unit tests                                            |
| test-run      | `npm run test-run`      | Run unit tests and exit                                   |
| test-coverage | `npm run test-coverage` | Generate a test coverage report                           |

## References

| Item         | Reference                |
| ------------ | ------------------------ |
| OpenAI       | https://openai.com/      |
| Node.js      | https://nodejs.org/      |
| Vite         | https://vitejs.dev/      |
| Vitest       | https://vitest.dev/      |
| ESLint       | https://eslint.org/      |
| Prettier     | https://prettier.io      |
| EditorConfig | https://editorconfig.org |

## License

This template is released under the MIT [License](LICENSE).
