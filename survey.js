const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const ans = {};

rl.question('What\'s your name? ', (answer1) => {
   ans.name = answer1;  
   rl.question('What\'s an activity you like doing? ', (answer2) => {
    ans.activity = answer2;
    rl.question('What do you listen to while doing that? ', (answer3) => {
      ans.music = answer3;
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)', (answer4) => {
        ans.meal = answer4;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          ans.food = answer5;
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            ans.sport = answer6;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              ans.power = answer7;
              rl.close();
              // console.log(answers);
              console.log(`My name is ${ans.name}. I like to ${ans.activity} while listening to the ${ans.music}.
              \rMy favorite meal time is a ${ans.meal} and I like to eat ${ans.food}. I love to play ${ans.sport} and my
              \rsuper power is ${ans.power}.`);
              process.exit();
            });
          });
        });
      });
    });
  });
});









