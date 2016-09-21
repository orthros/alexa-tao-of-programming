'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Tao of Programming';

var TAOS = [
    "Something mysterious is formed, born in the silent void. waiting alone and unmoving," +
    " it is at once still and yet in constant motion. It is the source of all programs. " +
    "I do not know its name, so I will call it the Tao of Programming. " +
    "If the Tao is great, then the operating system is great. " +
    "If the operating system is great, then the compiler is great. "+
    "If the compiler is great, then the application is great. "+
    "The user is pleased, and there is harmony in the world. "+
    "The Tao of Programming flows far away and returns on the wind of morning.",


    "The Tao gave birth to machine language. Machine language gave birth to the assembler. " +
    "The assembler gave birth to the compiler. Now there are ten thousand languages. " +
    "Each language has its purpose, however humble. " +
    "Each language expresses the Yin and Yang of software. Each language has its place within the Tao. " +
    "But do not program in COBOL if you can avoid it.",

    "In the beginning was the Tao. "+
    "The Tao gave birth to Space and Time.Therefore Space and Time are the Yin and Yang of programming. "+
    "Programmers that do not comprehend the Tao are always running out of time and space for their programs. "+
    "Programmers that comprehend the Tao always have enough time and space to accomplish their goals. "+
    "How could it be otherwise?",

    "The wise programmer is told about Tao and follows it. " +
    "The average programmer is told about Tao and searches for it. " +
    "The foolish programmer is told about Tao and laughs at it. " +
    "If it were not for laughter, there would be no Tao. " +
    "The highest sounds are hardest to hear. Going forward is a way to retreat. " +
    "Great talent shows itself late in life. Even a perfect program still has bugs.",

    "Thus spake the Master Programmer: " +
    "After three days without programming, life becomes meaningless.",

    "The programmers of old were mysterious and profound. "+
    "We cannot fathom their thoughts, so all we do is describe their appearance." +
    "Aware, like a fox crossing the water. "+
    "Alert, like a general on the battlefield. " +
    "Kind, like a hostess greeting her guests. " +
    "Simple, like uncarved blocks of wood. "+
    "Opaque, like black pools in darkened caves."+
    "Who can tell the secrets of their hearts and minds?"+
    "The answer exists only in Tao.",

    "The Grand Master Turing once dreamed that he was a machine. "+
    "When he awoke, he exclaimed: "+
    "I don't know whether I am Turing dreaming that I am a machine, or a machine dreaming that I am Turing!",

    "A programmer from a very large computer company went to a software conference "+
    "and then returned to report to his manager, saying: "+
    "What sort of programmers work for other companies? "+
    "They behaved badly and were unconcerned with appearances. "+
    "Their hair was long and unkempt and their clothes were wrinkled and old. "+
    "They crashed our hospitality suite and they made rude noises during my presentation." +
    "The manager said: "+
    "I should have never sent you to the conference. "+
    "Those programmers live beyond the physical world. "+
    "They consider life absurd, an accidental coincidence. "+
    "They come and go without knowing limitations. "+
    "Without a care, they live only for their programs. "+
    "Why should they bother with social conventions? "+
    "They are alive within the Tao.",

    "A novice asked the Master: "+
    "Here is a programmer that never designs, documents or tests his programs. "+
    "Yet all who know him consider him one of the best programmers in the world. "+
    "Why is this?" +
    "The Master replied: "+
    "That programmer has mastered the Tao. "+
    "He has gone beyond the need for design; "+
    "he does not become angry when the system crashes, but accepts the universe without concern. "+
    "He has gone beyond the need for documentation; "+
    "he no longer cares if anyone else sees his code. "+
    "He has gone beyond the need for testing; "+
    "each of his programs are perfect within themselves, serene and elegant, their purpose self-evident. "+
    "Truly, he has entered the mystery of Tao.",

    "Thus spake the Master Programmer:"+
    "When a program is being tested, it is too late to make design changes.",

    "There once was a man who went to a computer trade show. Each day as he entered, the man told the guard at the door:"+
    "I am a great thief, renowned for my feats of shoplifting. Be forewarned, for this trade show shall not escape unplundered." +
    "This speech disturbed the guard greatly, because there were millions of dollars of computer equipment inside, "+
    "so he watched the man carefully. But the man merely wandered from booth to booth, humming quietly to himself. "+
    "When the man left, the guard took him aside and searched his clothes, but nothing was to be found. "+
    "On the next day of the trade show, the man returned and chided the guard, saying: " +
    "I escaped with a vast booty yesterday, but today will be even better. " +
    "So the guard watched him ever more closely, but to no avail. "+
    "On the final day of the trade show, the guard could restrain his curiosity no longer. "+
    "Sir Thief, he said, I am so perplexed, I cannot live in peace. Please enlighten me. What is it that you are stealing? " +
    "The man smiled. I am stealing ideas, he said.",

    "There once was a Master Programmer who wrote unstructured programs. " +
    "A novice programmer, seeking to imitate him, also began to write unstructured programs. "+
    "When the novice asked the Master to evaluate his progress, the Master criticized him for writing unstructured programs, saying, " +
    "What is appropriate for the Master is not appropriate for the novice. You must understand Tao before transcending structure.",

    "There was once a programmer who was attached to the court of the warlord of Wu. "+
    "The warlord asked the programmer: Which is easier to design: an accounting package or an operating system? " +
    "An operating system, replied the programmer. "+
    "The warlord uttered an exclamation of disbelief. "+
    "Surely an accounting package is trivial next to the complexity of an operating system, " +
    "he said."+
    "Not so, said the programmer, "+
    "When designing an accounting package, the programmer operates as a mediator between people having different ideas: "+
    "how it must operate, how its reports must appear, and how it must conform to the tax laws. "+
    "By contrast, an operating system is not limited by outside appearances. "+
    "When designing an operating system, the programmer seeks the simplest harmony between machine and ideas. "+
    "This is why an operating system is easier to design." +
    "The warlord of Wu nodded and smiled. That is all good and well, but which is easier to debug?" +
    "The programmer made no reply.",

    "A manager went to the Master Programmer and showed him the requirements document for a new application. "+
    "The manager asked the Master: "+
    "How long will it take to design this system if I assign five programmers to it? "+
    "It will take one year, said the Master promptly. "+
    "But we need this system immediately or even sooner! "+
    "How long will it take if I assign ten programmers to it?" +
    "The Master Programmer frowned. In that case, it will take two years." +
    "And what if I assign a hundred programmers to it?" +
    "The Master Programmer shrugged. Then the design will never be completed, he said.",

    "Thus spake the Master Programmer: "+
    "A well-written program is its own Heaven; a poorly-written program is its own Hell.",

    "A program should be light and agile, its subroutines connected like a string of pearls. "+
    "The spirit and intent of the program should be retained throughout. "+
    "There should be neither too little nor too much. Neither needless loops nor useless variables; "+
    "neither lack of structure nor overwhelming rigidity. "+
    "A program should follow the Law of Least Astonishment. "+
    "What is this law? It is simply that the program should always respond to the users in the way that least astonishes them. "+
    "A program, no matter how complex, should act as a single unit. " +
    "The program should be directed by the logic within rather than by outward appearances. " +
    "If the program fails in these requirements, it will be in a state of disorder and confusion. "+
    "The only way to correct this is to rewrite the program.",

    "A novice asked the Master: " +
    "I have a program that sometimes runs and sometimes aborts. "+
    "I have followed the rules of programming, yet I am totally baffled. What is the reason for this?" +
    "The Master replied: "+
    "You are confused because you do not understand Tao. "+
    "Only a fool expects rational behavior from his fellow humans. " +
    "Why do you expect it from a machine that humans have constructed? "+
    "Computers simulate determinism; only Tao is perfect. "+
    "The rules of programming are transitory; only Tao is eternal. "+
    "Therefore, you must contemplate Tao before you receive Enlightenment." +
    " But how will I know when I have received Enlightenment?" +
    "asked the novice."+
    "Your program will run correctly, replied the Master.",

    "The Master was explaining the nature of Tao to one of his novices. "+
    "The Tao is embodied in all software -- regardless of how insignificant, said the Master."+
    "Is the Tao in a hand-held calculator? asked the novice. "+
    "It is, came the reply. "+
    "Is the Tao in a video game? asked the novice. " +
    "It is even in a video game, said the Master. "+
    "Is the Tao in the DOS for a personal computer? asked the novice. "+
    "The Master coughed and shifted his position slightly. The lesson is over for today, he said.",

    "Prince Wang's programmer was coding software. His fingers danced upon the keyboard. "+
    "The program compiled without and error message, and the program ran like a gentle wind. "+
    "Excellent! the Prince exclaimed. Your technique is faultless!" +
    "Technique? said the programmer, turning from his terminal, "+
    "What I follow is Tao -- beyond all techniques! "+
    "When I first began to program, I would see before me the whole problem in one mass. "+
    "After three years, I no longer saw this mass. "+
    "Instead, I used subroutines. But now I see nothing. "+
    "My whole being exists in a formless void. My senses are idle. "+
    "My spirit, free to work without a plan, follows its own instinct. "+
    "In short, my program writes itself. "+
    "True, sometimes there are difficult problems. "+
    "I see them coming, I slow down, I watch silently. "+
    "Then I change a single line of code and the difficulties vanish like puffs of idle smoke. "+
    "I then compile the program. I sit still and let the joy of the work fill my being. "+
    "I close my eyes for a moment and then log off. "+
    "Prince Wang said, Would that all of my programmers were as wise!",

    "Thus spake the Master Programmer: " +
    "Though a program be but three lines long, someday it will have to be maintained.",

    "A well-used door needs no oil on its hinges. " +
    "A swift-flowing stream does not grow stagnant. " +
    "A deer blends perfectly into the forest colors. "+
    "Software rots if not used. "+
    "These are great mysteries.",

    "A manager asked a programmer how long it would take him to finish the program on which he was working. "+
    "I will be finished tomorrow, the programmer promptly replied. "+
    "I think you are being unrealistic, said the manager, Truthfully, how long will it take?" +
    "The programmer thought for a moment. I have some features that I wish to add. "+
    "This will take at least two weeks, he finally said. "+
    "Even that is too much to expect, insisted the manager, "+
    "I will be satisfied if you simply tell me when the program is complete."+
    "The programmer agreed to this. "+
    "Several years later, the manager retired. "+
    "On the way to his retirement luncheon, he discovered the programmer asleep at his terminal. "+
    "He had been programming all night.",

    "A novice programmer was once assigned to code a simple financial package."+
    "The novice worked furiously for many days, "+
    "but when his Master reviewed his program, "+
    "he discovered it contained a screen editor, "+
    "a set of generalized graphics routines, "+
    "and an artificial intelligence interface, but not the slightest hint of anything financial. "+
    "When the Master asked about this, the novice became indignant. " +
    "Don't be so impatient, he said, I'll put in the financial stuff eventually.",

    "Does a good farmer neglect a crop he has planted? "+
    "Does a good teacher overlook even the most humble student? "+
    "Does a good father allow a single child to starve? "+
    "Does a good programmer refuse to maintain his code?",

    "Thus spake the Master Programmer: " +
    "Let the programmers be many and the managers few -- then all will be productive.",

    "When managers hold endless meetings, the programmers write games. " +
    "When accountants speak of quarterly profits, the development budget is about to be cut. " +
    "When senior scientists talk blue sky, the clouds are about to roll in. "+
    "Truly, this is not the Tao of Programming. "+
    "When managers make commitments, game programs are ignored. " +
    "When accountants make long-range plans, harmony and order are about to be restored. " +
    "When senior scientists address the problems at hand, the problems will soon be solved. " +
    "Truly, this is the Tao of Programming.",

    "Why are programmers non-productive? Because their time is wasted in meetings. " +
    "Why are programmers rebellious? Because the management interferes too much. "+
    "Why are the programmers resigning one by one? Because they are burnt out. " +
    "Having worked for poor management, they no longer value their jobs.",

    "A manager was about to be fired, but a programmer who worked for him wrote a new program that became popular and sold well. "+
    "As a result, the manager retained his job. "+
    "The manager tried to give the programmer a bonus, but the programmer refused it, saying, "+
    "I wrote the program because I thought it was an interesting concept, and thus I expect no reward. "+
    "The manager upon hearing this remarked, "+
    "This programmer, though he holds a position of small esteem, "+
    "understands well the proper duty of an employee. "+
    "Let us promote him to the exalted position of management consultant!" +
    "But when told this, the programmer once more refused, saying, "+
    "I exist so that I can program. "+
    "If I were promoted, I would do nothing but waste everyone's time. "+
    "Can I go now? I have a program that I am working on.",

    "A manager went to his programmers and told them: "+
    "As regards to your work hours: "+
    "you are going to have to come in at nine in the morning and leave at five in the afternoon." +
    "At this, all of them became angry and several resigned on the spot. "+
    "So the manager said: "+
    "All right, in that case you may set your own working hours, as long as you finish your projects on schedule. " +
    "The programmers, now satisfied, began to come in at noon and work to the wee hours of the morning.",
    
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];



exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random quote from the tao of programming
        var quoteIndex = Math.floor(Math.random() * TAOS.length);
        var randomQuote = FACTS[quoteIndex];

        // Create speech output
        var speechOutput = "According to the Tao: " + randomQuote;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomQuote)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me something about the Tao, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Go with the Tao!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Go with the Tao!');
    }
};
