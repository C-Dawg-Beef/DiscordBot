var classes = document.getElementsByClassName("outputConsole");
var party = "";
var pingPongRunning = false, pingPongClient;
var person = function(name,penis) {
    this.coins = 50;
  //  this.bet = 0;  <-- betting function 
    this.name = name;
 this.penis = penis;
}
person.prototype.addCoins = function(ammount) {
    this.coins += ammount;
}
person.prototype.betCoins = function(ammount) {
    this.bet += ammount;
}
person.prototype.subtractCoins = function(ammount) {
    this.coins -= ammount;
}
person.prototype.getName = function() {
    return this.name;
}
var cuffin = new person("cuffin",15);
var blazingfire = new person("@BlazingFire007",12);
var gabidou = new person("@Gabidou99",7);
var pike = new person("pike",20);
var rh1 = new person("@RH1-N0",0);
var teyru = new person("@Teyru",2);
var cavalry = new person("@The Cavalry",9);
var demic = new person("@killdemic",13);
var gigglingbuns = new person("@Gigglingbuns",16);
var eclipse = new person("@[RDT] Eclipse",7);
var flames = new person("@Fl🔥mes",4);
var drflash55 = new person("@Drflash55",7);
var nickmushu = new person("@nickmushu",16);
var zuppyterra = new person("@Zuppyterra",6);
var haidere = new person("@[RDT] Hai Dere",10);
var GenerikShadow = new person("@GenerikShadow",9);
var killer = new person("@The Killer",11);

var people = [cuffin,blazingfire,gabidou,pike,rh1,teyru,cavalry,demic,gigglingbuns,eclipse,flames,drflash55,nickmushu,zuppyterra,haidere,GenerikShadow,killer];

function getEmail() {
    if (document.getElementById("email").value)
        return document.getElementById("email").value;
    else
        return prompt("Email?")
}
function getPassword() {
    if (document.getElementById("password").value)
        return document.getElementById("password").value;
    else
        return prompt("Password?")
}
person.prototype.getCoin = function() {
    var coin = 0;
    for (var i = 0; i < people.length; i++) {
        if (people[i].getName() == this.getName()) {
            coin = people[i].coins;
        }
    }
    if (coin == 0) {
        console.log("COIN NOT FOUND");
        return coin;
    } else {
        return coin;
    }
}
function toggleStateOfPingPong() {
    if (pingPongRunning) {
        pingPongClient.logout();
        pingPongClient = null ;
        document.getElementById("pingpongoutput").innerHTML = "Client farted and died";
        pingPongRunning = false;
        document.getElementById("pingpongbutton").innerHTML = "ACTIVATE YOUR GAY BOT";
        document.getElementById("pingpongbutton").className = "startButton";
    } else {
        document.getElementById("pingpongoutput").innerHTML = "";
        startPingPong();
        pingPongRunning = true;
        document.getElementById("pingpongbutton").innerHTML = "IMMEDIATE SHUTDOWN";
        document.getElementById("pingpongbutton").className = "stopButton";
    }
}
function startPingPong() {
    function output(t) {
        document.getElementById("pingpongoutput").innerHTML += "> " + t + "<br/>"
    }
    function error(e) {
        output(e + " - <i><u>are you sure your user and pass is correct?</u></i>");
    }
    pingPongClient = new Discord.Client();
    pingPongClient.once("ready", function() {
        output("Bot is activated in the following servers:");
        for (var sid in pingPongClient.servers) {
            output("<span class='light'> " + pingPongClient.servers[sid].name + "</span>");
        }
    });
    pingPongClient.on("message", function(msg) {
        if(msg.content=="123"){
            
            for (var i=0;i<2000;i++){
                console.log(i);
            }
           this.sendMessage(msg,"poop");
        }
     
        var dialogues = ["Only pingu knows the answer to that.","Never, never ever ever ever ever.", "yes", "no", "No, not in a million years", "My subconscious tells me no", "Nope, definitely not", "I don't think so, but I could be wrong", "Nope, not a chance", "Probably, I don't see why not", "My spiritual ancestors confirms, it is surely to happen!", "Yes, it will happen 200%", "My level of clairvoyance isn't proficient enough, ask botchan", "Yes, I am completely certain"];
        if (msg.content.substring(0, 6).toLowerCase() == "should" || msg.content.substring(0, 5).toLowerCase() == "would" || msg.content.substring(0, 5).toLowerCase() == "could" || msg.content.substring(0, 5).toLowerCase() == "will"") {
            var picker = Math.floor(Math.random() * (dialogues.length - 1));
            this.reply(msg, dialogues[picker]);
        }
        
        
        if (msg.content.substring(0, 7) == "addcoin") {
            if (msg.content.substring(8, 12) == "doge") {
                var ammount = parseInt(msg.content.substring(13));
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else
                    doge.addCoins(ammount);
          
            } else {
                this.reply(msg, "no user found");
            }
        }
        if (msg.content.substring(0, 7).toLowerCase() == "getcoin") {  //this is SUPER efficient
            var a = msg.content.substring(8);
            var b = false;
            var c;
            for (var i = 0; i < people.length; i++) {
                if (people[i].name == a) {
                    b = true;
                    c = people[i];
                }
            }
            if (b) {
                this.reply(msg, c.getCoin());
                output("pong'd <b>" + msg.sender.username + "</b>");
            } else {
                this.reply(msg, "user not found");
                output("pong'd <b>" + msg.sender.username + "</b>");
            }
        }
      
        if (msg.content === "party" || msg.content === "server?") {
            this.reply(msg, party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if (msg.content.substring(0, 8) == "setparty") {
            party = msg.content.substring(9, msg.content.length);
            this.reply(msg, "party set to " + party + "     Type party to view party code");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }

        if (msg.content.substring(0, 3) === "bet") {
            if (msg.content.substring(4, 11) == "hardeep") {
                //subtract substring parameters by 3	//hardeep
                var ammount = parseInt(msg.content.substring(16));
                //subtract substring parameters by 3
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins")
                    } else
                        hardeep.betCoins(ammount);
                    //Change function to betCoins
                }
            } else if (msg.content.substring(4, 7) == "1it") {
                //1it
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (lit.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        lit.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "ruzyu") {
                //ruzyu
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (lit.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        ruzyu.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "crypton") {
                //crypton
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (crypton.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        crypton.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "nucleus") {
                //nucleus
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (nucleus.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        nucleus.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "sheep") {
                //sheep
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (sheep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        sheep.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "riyaj") {
                //riyaj
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (riyaj.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        riyaj.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "touka") {
                //touka
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (touka.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        touka.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "jaws") {
                //jaws
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (jaws.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        jaws.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "reaper") {
                //reaper
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (reaper.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        reaper.addCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "goku") {
                //goku
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (goku.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        goku.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "anna") {
                //anna
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (anna.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        anna.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 12) == "sway") {
                //sway
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (sway.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        sway.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 16) == "peripsis") {
                //peripsis
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        peripsis.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "odyssey") {
                //odyssey
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        odyssey.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "cursed") {
                //cursed
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        cursed.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "acryuz") {
                //acryuz
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        acryuz.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 15) == "rampage") {
                //rampage
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        rampage.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 13) == "rubik") {
                //rubik
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        rubik.betCoins(ammount);
                }
            } else if (msg.content.substring(8, 14) == "legend") {
                //legend
                var ammount = parseInt(msg.content.substring());
                if (isNaN(ammount)) {
                    this.reply(msg, "no ammount to be added found");
                } else {
                    if (hardeep.coins < ammount) {
                        this.reply(msg, "you don't have enough coins");
                    } else
                        legend.betCoins(ammount);
                }
            }
        }
        if (msg.content == "legend") {
            this.reply(msg, "shoutout to all my hoes, goku, crypton, touka, burnt, cursed and sway");
        }
        if (msg.content.substring(0, 5) === "penis") {
            if (msg.content.substring(6, 10) == "anna" || msg.content.substring(6, 12) == "acryuz") {
                this.reply(msg, "You have a vagina! (!)");
            } else {
                var penis = "";
                var penislength = ((Math.random() * 20) + 1);
                for (var i = 0; i < penislength; i++) {
                    penis = penis + "三"
                }
                this.reply(msg, msg.content.substring(5, msg.content.length) + " 8" + penis + "D");
            }
        }
    });
    pingPongClient.login(getEmail(), getPassword()).catch(error);
    output("logging in...");
}
var fn = function() {
    this.innerHTML = "";
}
for (var i = 0; i < classes.length; i++) {
    classes[i].addEventListener("dblclick", fn, false);
}
