var classes = document.getElementsByClassName("outputConsole");
var party = "";
var pingPongRunning = false,
    pingPongClient;
var person = function () {
    this.coins = 50;
}
person.prototype.addCoins = function (amount) {
    this.coins += amount;
}
var hardeep = new person();
var riyaj = new person();
var lit = new person();
var crypton = new person();
var nucleus = new person();
var sheep = new person();
var touka = new person();
var jaws = new person();
var reaper = new person();
var goku = new person();
var anna = new person();
var sway = new person();
var peripsis = new person();
var odyssey = new person();
var cursed = new person();
var acryuz = new person();
var rampage = new person();
var rubik = new person();
var legend = new person();

function getEmail() {
    if(document.getElementById("email").value)
        return document.getElementById("email").value;
    else
        return prompt("Email?")
}
function getPassword() {
    if(document.getElementById("password").value)
        return document.getElementById("password").value;
    else
        return prompt("Password?")
}
function toggleStateOfPingPong() {
    if(pingPongRunning) {
        pingPongClient.logout();
        pingPongClient = null;
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
    pingPongClient.once("ready", function () {
        output("ready! send the message <u><i>ping</i></u> in any of the following servers:");
        for(var sid in pingPongClient.servers) {
            output("<span class='light'> " + pingPongClient.servers[sid].name + "</span>");
        }
    });

    pingPongClient.on("message", function (msg) {
        if(msg.content.substring(0, 7) == "getcoin") {

        }
        if(msg.content.substring(0, 7) == "addcoin") {
            if(!isNaN(parseFloat(n)) && isFinite(n)) {
                if(msg.content.substring(8, 15) == "hardeep") {
                    var ammount = parseInt(msg.content.substring(16));
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        hardeep.addCoins(ammount);
                } else if(msg.content.substring(8, 11) == "1it") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        lit.addCoins(ammount);
                } else if(msg.content.substring(8, 15) == "crypton") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        crypton.addCoins(ammount);
                } else if(msg.content.substring(8, 15) == "nucleus") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        nucleus.addCoins(ammount);
                } else if(msg.content.substring(8, 13) == "sheep") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        sheep.addCoins(ammount);
                } else if(msg.content.substring(8, 13) == "riyaj") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        riyaj.addCoins(ammount);
                } else if(msg.content.substring(8, 13) == "touka") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        touka.addCoins(ammount);
                } else if(msg.content.substring(8, 12) == "jaws") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        jaws.addCoins(ammount);
                } else if(msg.content.substring(8, 14) == "reaper") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        reaper.addCoins(ammount);
                } else if(msg.content.substring(8, 12) == "goku") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        goku.addCoins(ammount);
                } else if(msg.content.substring(8, 12) == "anna") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        anna.addCoins(ammount);
                } else if(msg.content.substring(8, 12) == "sway") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        sway.addCoins(ammount);
                } else if(msg.content.substring(8, 16) == "peripsis") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        peripsis.addCoins(ammount);
                } else if(msg.content.substring(8, 15) == "odyssey") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        odyssey.addCoins(ammount);
                } else if(msg.content.substring(8, 14) == "cursed") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        cursed.addCoins(ammount);
                } else if(msg.content.substring(8, 14) == "acryuz") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        acryuz.addCoins(ammount);
                } else if(msg.content.substring(8, 15) == "rampage") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        rampage.addCoins(ammount);
                } else if(msg.content.substring(8, 13) == "rubik") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        rubik.addCoins(ammount);
                } else if(msg.content.substring(8, 14) == "legend") {
                    var ammount = parseInt(msg.content.substring());
                    if(isNaN(ammount)) {
                        this.reply(msg, "no ammount to be added found");
                    } else
                        legend.addCoins(ammount);
                } else {
                    this.reply(msg, "no user found");
                }
            } else {
                this.reply(msg, "no ammount to be added found");
            }
        }

        if(msg.content === "party") {
            this.reply(msg, party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if(msg.content.substring(0, 9) == "setparty") {
            party = msg.content.substring(10, msg.content.length);
            this.reply(msg, "party set to " + party);
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if(msg.content == "hardeep") {
            this.reply(msg, "'I've never watched porn' - Hardeep 2016");
        }
        if(msg.content === "cursed") {
            this.reply(msg, "u have been cursed 4 lyfe now go die in a hole and jump into traffic no one cares and KYS");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }
        if(msg.content === "acryuz") {
            this.reply(msg, "Cursed, I'm gonna find you and shove a corn dog up your ass.");
            output("pong'd <b>" + msg.sender.username + "</b>");
        }

        if(msg.content === "!tag") {
            this.reply(msg, "〈ɪɳȷ〉                                                                                 (aka iguana jizz)");
        }
        if(msg.content.substring(0,3) ==="bet"){
            var ammount = parseInt();
            if(!isNaN(ammount)){
            betMoney(ammount);
            } else {
                reply(msg,"Please insert an ammount to bet");
            }
        }
        if(msg.content.substring(0, 5) === "penis") {
            if(msg.content.substring(6, 10) == "anna") {
                this.reply(msg, "You have a vagina! (!)");

            } else {
                var penis = "";
                var penislength = ((Math.random() * 20) + 1);
                for(var i = 0; i < penislength; i++) {
                    penis = penis + "三"
                }
                this.reply(msg, msg.content.substring(5, msg.content.length) + " 8" + penis + "D");
            }
        }
    });

    function betMoney(ammount){
        
    }

    pingPongClient.login(getEmail(), getPassword()).catch(error);
    output("logging in...");

}



var fn = function () {
    this.innerHTML = "";
}
for(var i = 0; i < classes.length; i++) {
    classes[i].addEventListener("dblclick", fn, false);
}
