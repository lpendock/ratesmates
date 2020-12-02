const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.on('message', msg => {
    if (msg.author.bot) {
        return;
    }
    if (msg.content.startsWith("!translate")) {
        newmessage = msg.content.substr(11);
        newmessage = newmessage.replace('ok', 'alrighty rain');
        msg.channel.send(newmessage);
    }
    else if (msg.content.toLowerCase().includes("rates mates")) {
        msg.channel.send('What about rates mates?');
    }
    else if (msg.content.toLowerCase().includes("bianca")) {
        msg.channel.send('What the fuck Bianca?');
    }
    else if (msg.content.toLowerCase().includes("barotrauma")) {
        msg.reply('you should get Barotrauma');
    }
    else if (msg.content.toLowerCase().includes("slut")) {
        msg.channel.send('I love it when Bianca pins me down and calls me a little slut, what can I say?');
    }
    else if (msg.content.toLowerCase().includes("sunday")) {
        msg.channel.send('Wait does he mean next Sunday or this?');
    }
    else if (msg.content.toLowerCase() == "!maunder") {
        msg.author.send("Hey all. So I know a lot of you haven't heard from me in awhile. I don't want to place blame but I can safely say that almost all of it was from anxiety of joining the channel and having Matt be there. For a long time now, whenever he and I gamed together, he would eventually start abusing me, calling me shit and how i'm playing the game wrong or whatever and basically just make me feel like shit. I stopped joining the channel because of this, and I just want to let everyone know that i'm completely fine with everyone else. I've actually really missed hanging out with everyone and people just chilling during the weekends and stuff. A lot.\n\n" +
        "With that said, I didn't want to have to write any of this. I didn't want to have to create a divide between us, and I certainly didn't want to interfere with your relationships with Matt. Unfortunately, he does not feel the same way, and has kicked me from the channel. I won't go into detail about how shitty I think this is. I just want things to be like they were, and unfortunately Matt was a barrier to that becoming a reality.\n\n" +
        "I've created a server. One where I can feel safe to sit in and not fear Matt joining and having to find an excuse to leave. If i'm gonna be a loner in a channel, I shouldn't have to fear one person joining. I wanted to avoid this divide, but unfortunately Matt's severed the biggest link I had with everyone, so i'm doing the only thing I can do. I really hate doing this, I don't want to have to uproot everyone, but you're all still my friends, and I want to maintain and grow my relationships with you all. Sorry that you all had to become involved in matt and I's dispute, but I do really enjoy the company of all of you and would really like to have you all around."
        + "\n\nCommands:\n!hand: Summons the hand\n!translate: Convert a sentence to Michael-talk"
        );
        msg.reply("check your DMs");
    }
    else if (msg.content == "!hand") {
        msg.channel.send("@here", {
            files: [
                "./hand.png"
            ]
        });
    }
    else if (msg.content.toLowerCase().includes("fucked")) {
        msg.channel.send('I haven\'t been fucked in a while');
    }
    else if (msg.content.toLowerCase().includes("fish")) {
        msg.channel.send('Those fish were getting ass blasted harder than me');
    }
    else if (msg.content.toLowerCase().includes("rick and morty")) {
        msg.reply('have you seen the latest episode of Rick and Morty?');
    }
    else if (msg.content.toLowerCase().includes("kyle")) {
        msg.channel.send('Fuckin Kyle');
    }
    else if (msg.content.toLowerCase().includes("anton")) {
        msg.channel.send('Anton\'s a pretty boy');
    }
    else if (msg.content.toLowerCase().includes("fuck") || msg.content.toLowerCase().includes("cunt")) {
        msg.channel.send('Fuck you cunt');
    }
    else if (msg.content.toLowerCase().includes("peg")) {
        msg.channel.send('Hi this is Michael, fuck u bic');
    }
    else if (msg.content.toLowerCase().includes("vr")) {
        msg.channel.send('Be right back. Checking if my package has arrived.');
    }
    else if (msg.content.toLowerCase().includes("d&d")) {
        msg.channel.send('I\'m busy that day sorry.');
    }
    else if (msg.content.toLowerCase().includes("oblivion") || msg.content.toLowerCase().includes("elder scrolls") || msg.content.toLowerCase().includes("champion")) {
        msg.channel.send('By Azura, by Azura, by Azura! It\'s the Grand Champion! I can\'t believe it\'s you!', {
        	files: [
        		"./adoring_fan.jpg"
        	]
        });
    }
    else if (msg.content.toLowerCase().includes("hair")) {
        msg.channel.send('My penchant for bad haircuts has torn my family apart. Bianca left me and is coming for the fish. I\'m all alone. Help me!');
    }
    else if (msg.content.toLowerCase().includes("proz")) {
        msg.channel.send('You\'re laughing. My posts were removed from #general and you\'re laughing.');
    }
    else if (msg.content.toLowerCase().includes("list")) {
        msg.channel.send('That\'s it. You\'re on my shit list.');
    }
    else if (msg.content.toLowerCase().includes("lie")) {
        msg.channel.send('You lied and now I\'ve gone off at Matt. Fuck you.');
    }
});

client.login('NzI1MTYyMDg0ODUzMDg4MzY3.XvLODQ.jW3blLWv90KzYOaZymFKHn-9LHo')