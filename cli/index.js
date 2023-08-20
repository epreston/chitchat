import openai from './config/open-ai.js';
import readlineSync from 'readline-sync';
import chalk from 'chalk';

async function main() {
  console.clear();
  console.log(chalk.bold.green('ChatGPT ChitChat - CTRL+C or type exit'));

  const chatHistory = [];
  let doLoop = true;

  process.on('SIGINT', () => {
    doLoop = false;
    process.exit();
  });

  const context = [{ role: 'system', content: 'Answer in a brief style.' }];
  console.log(chalk.grey('System: ') + context[0].content);

  while (doLoop) {
    const userInput = readlineSync.question(chalk.yellow('User: '));

    try {
      // Construct messages by iterating over the history
      const history = chatHistory.map(([role, content]) => ({
        role,
        content
      }));

      const messages = [...context, ...history];

      // Add latest user input
      messages.push({ role: 'user', content: userInput });

      // Call the API with user input & history
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages
      });

      // Get completion text/content
      const completionText = completion.choices[0].message.content;

      if (userInput.toLowerCase() === 'exit') {
        console.log(chalk.blue('Assistant: ') + completionText);
        return;
      }

      console.log(chalk.blue('Assistant: ') + completionText);

      // Update history with user input and assistant response
      chatHistory.push(['user', userInput]);
      chatHistory.push(['assistant', completionText]);
    } catch (error) {
      console.error(chalk.red(error));
      process.exit(1);
    }
  }
}

main();
