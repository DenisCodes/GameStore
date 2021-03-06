var games = [
    {name: 'Devil_may_cry_5', image: 'img/nxnwRA9ePhYHVjnfn406ZXw1Ug0ddELA.png', price: 59.99, genre: 'rpg', scary: true, pc: true, show: true, desc: 'Devil May Cry is an action-adventure hack and slash video game series developed and published by Capcom and created by Hideki Kamiya. The series centers on the demon hunter Dante and his efforts to thwart various demon invasions of Earth.'},
    {name: 'Sekiro_Shadows_Die_Twice', image: 'img/220px-Sekiro_art.jpg', price: 59.99, genre: 'rpg', scary: true, pc: true, show: true, desc: 'In Sekiro: Shadows Die Twice you are the \'one-armed wol\', a disgraced and disfigured warrior rescued from the brink of death. Bound to protect a young lord who is the descendant of an ancient bloodline, you become the target of many vicious enemies, including the dangerous Ashina clan. When the young lord is captured, nothing will stop you on a perilous quest to regain your honor, not even death itself. Explore late 1500s Sengoku Japan, a brutal period of constant life and death conflict, as you come face to face with larger than life foes in a dark and twisted world. Unleash an arsenal of deadly prosthetic tools and powerful ninja abilities while you blend stealth, vertical traversal, and visceral head to head combat in a bloody confrontation.'},
    {name: 'Neir_Automata', image: 'img/O9k8kwZ1hbPiFTXYN2DJ2G5XxLik6gJEBd19vNPN1jSAJIVyD9fgxrkdkUIiErJw.jpg', price: 59.99, genre: 'rpg', scary: false, pc: true, show: true, desc: 'Discover the one-of-a-kind prequel of the critically-acclaimed masterpiece NieR:Automata. Now with a modern upgrade, experience masterfully revived visuals, a fascinating storyline and more! The protagonist is a kind young man living in a remote village. In order to save his sister Yonah, who fell terminally ill to the Black Scrawl, he sets out with Grimoire Weiss, a strange talking tome, to search for the "Sealed verses." Experience the NieR Replicant story for the first time in the west through the eyes of the protagonist as a brother. The original all-star team returns including acclaimed director, YOKO TARO (Drakengard / NieR:Automata), composer Keiichi Okabe (TEKKEN / Drakengard / NieR:Automata), and producer Yosuke Saito (DRAGON QUEST X / NieR:Automata). PlayStation 4 version includes a Dynamic Theme, Avatar Set, and Mini-OST.'},
    {name: 'Monster_hunter_world', image: 'img/MV5BOGU3NTFmNjYtODc3Ny00MWEzLWI3M2ItZjE3NDgwMTI0MzkzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg', price: 39.99, genre: 'mmo', scary: false, pc: true, show: true, desc: 'Monster Hunter: World is an action role-playing game developed and published by Capcom and the fifth mainline installment in the Monster Hunter series. It was released worldwide for PlayStation 4 and Xbox One in January 2018, with a Microsoft Windows version following in August 2018. Wikipedia Initial release date: January 19, 2018 Developer: Capcom Engine: MT Framework Director(s): Yuya Tokuda Composer: Akihiko Narita Awards: The Game Award for Best Role Playing Game'},
    {name: 'Skullgirls_2nd_Encore', image: 'img/download.jpg', price: 19.99, genre: 'fighting', scary: true, pc: true, show: true, desc: 'Multiplayer fighting game with a predominantly female cast in which teams of up to three characters can be chosen to duke it out for victor, or maintain a lead in vitality until the timer runs out.'},
    {name: 'Street_Fighter_5', image: 'img/crop.jpg', price: 29.99, genre: 'fighting', scary: false, pc: false, show: true, desc: 'One-on-one, one to two player fighter with a longtime cult following. Tournament style lobbies are available for numerous players to participate and conduct online tournaments.'},
    {name: 'Mortal_Kombat_11', image: 'img/previewfile_1621314655.jpg', price: 49.99, genre: 'fighting', scary: true, pc: false, show: true, desc: 'One-on-one fighting game based on a story of a martial arts tournament titled Mortal Kombat. Mortal Kombat is known to be a game featuring what can be referred to as trademarked violence, fun, and gore-- too realistic to be rated any less than for mature audiences.'},
    {name: 'Chaos_Code_New_Sign_of_Catastrophe', image: 'img/644499-chaos-code-new-sign-of-catastrophe-nintendo-switch-front-cover.jpg', price: 19.99, genre: 'fighting', scary: true, pc: true, show: true, desc: 'A sequel in the Chaos Code series; one-on-one fighting; Characters can be customized prior to combat, and can choose between "run" and "step" modes which enable players to focus their chose character\'s gameplay on speed or technical strategy.'},
    {name: 'World_of_Warcraft', image: 'img/4949588-2210378418-maxre (1).jpg', price: 29.99, genre: 'mmo', scary: false, pc: true, show: true, desc: 'World of Warcraft or commonly known as ???WoW??? is a MMORPG that takes place in the world of Azeroth. The game allows players to create a character avatar and explore an open game world in third- or first-person view, exploring the landscape, fighting various monsters, completing quests, and interacting with non-player characters (NPCs) or other players. The game encourages players to work together to complete quests, enter dungeons and engage in player versus player (PvP) combat, however the game can also be played solo without interacting with others.'},
    {name: 'League_of_Legends', image: 'img/League-of-legends_resized.jpg', price: 0, genre: 'action', scary: false, pc: true, show: true, desc: 'League of Legends is a 2009 multiplayer online battle arena video game developed and published by Riot Games. In the game, two teams of five players battle in player versus player combat, each team occupying and defending their own half of the map. Each of the ten players controls a character, known as a "champion", with unique abilities and differing styles of play. During a match, champions become more powerful by collecting experience points and purchasing items to defeat the opposing team. In the game\'s main mode, Summoner\'s Rift, a team wins by pushing through to the enemy base and destroying their "nexus", a large structure located within it.'},
    {name: 'Diablo_III', image: 'img/diablo-iii-eternal-collection-switch-hero.jpg', price: 19.99, genre: 'rpg', scary: true, pc: true, show: true, desc: 'Diablo is an action role-playing hack and slash video game. The player moves and interacts with the environment. The player can acquire items, learn spells, defeat enemies, and interact with non-player characters (NPCs) throughout the game. The dungeon levels are procedurally generated with themes for each level; for instance, the catacombs tend to have long corridors and closed rooms, while the caves are more non-linear. The players are assigned a random number of quests from several tiers; these quests are optional but usually offer powerful unique items as rewards and help to level up the character and/or reveal more of the backstory. The final two quests are mandatory to finish the game. Diablo has three character classes: the Warrior, the Rogue, and the Sorcerer. Each class has a different level of assigned attributes along with a unique skill. Each class can use almost all the same items and spells. However, the limitations in the attributes for each class reward play that utilizes them efficiently; for instance the Warrior\'s low maximum level of Magic prevents him from learning the higher levels of powerful spells like the Sorcerer, instead the Warrior is best suited to melee with a faster weapon swing plus a "critical strike" for bonus damage.'},
    {name: 'Call_of_Duty_Warzone', image: 'img/cod-warzopne.jpg', price: 59.99, genre: 'fps', scary: true, pc: false, show: true, desc: 'Warzone features two primary game modes: Battle Royale and Plunder. The Battle Royale mode is where players compete in a continuously shrinking map to be the last player remaining. Players parachute onto a large game map, where they encounter other players. As the game progresses and players are eliminated, the playable area shrinks forcing the remaining players into tighter spaces. Character death in Battle Royale does not necessarily translate to player defeat, instead, the mode offers a respawn mechanic which players can take advantage of in various ways. Players who are killed are transported to the "Gulag", where they engage in one-on-one combat with another defeated player, with both players being given the same weaponry. Players may only enter the gulag after their first death in a match. The winner of this combat is respawned into the game. Other methods of respawn are available using the in-game currency system. Players may use the in-game currency to purchase respawn tokens for other players should they not be revived by the Gulag mechanic. In Plunder mode, teams must search for stacks of Cash scattered around the map to accumulate $1 million. Once found, the game goes into overtime, multiplying all Cash sums by 1.5. The team who has gathered the most money when the clock runs out is declared the winner. Players respawn automatically in this game mode.'},
    {name: 'Fortnite', image: 'img/16br-agentjonesy-egs-s2-1200x1600-1200x1600-2531e05bb04f.jpg', price: 0, genre: 'fps', scary: false, pc: true, show: true, desc: 'Fortnite is an online video game that has three different game modes, Battle Royale, Creative, and Save the World. Battle royal is a player-versus-player game for up to 100 players, allowing one to play alone, in a duo, or in a squad (usually consisting of three or four players). Weaponless players airdrop from a "Battle Bus" that crosses the game\'s map. When they land, they must scavenge for weapons, items, resources, and even vehicles while trying to stay alive and to attack and eliminate other players. Over the course of a round, the safe area of the map shrinks down in size due to an incoming toxic storm; players outside that threshold take damage and can be eliminated if they fail to quickly evacuate. This forces remaining players into tighter spaces and encourages player encounters. The last player, duo, or squad remaining is the winner. Creative is a sandbox game mode that players are given complete freedom to spawn everything that is within the game on an island, and can create games such as battle arenas, race courses, platforming challenges, and more. Save the World is a player-versus-environment cooperative game, with four players collaborating towards a common objective on various missions. The game is set after a fluke storm appears across Earth, causing 98% of the population to disappear, and the survivors to be attacked by zombie-like "husks". The players take the role of commanders of home base shelters, collecting resources, saving survivors, and defending equipment that helps to either collect data on the storm or to push back the storm.'},
    {name: 'Red_Dead_Redemtion_2', image: 'img/Zg.png', price: 39.99, genre: 'mmo', scary: true, pc: false, show: true, desc: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him. Now featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more. With all new graphical and technical enhancements for deeper immersion, Red Dead Redemption 2 for PC takes full advantage of the power of the PC to bring every corner of this massive, rich and detailed world to life including increased draw distances; higher quality global illumination and ambient occlusion for improved day and night lighting; improved reflections and deeper, higher resolution shadows at all distances; tessellated tree textures and improved grass and fur textures for added realism in every plant and animal.'},
    {name: 'OUTRIDERS', image: 'img/qFuP40kxv5Hryu5sqcEKzTxb.png', price: 59.99, genre: 'fps', scary: true, pc: true, show: false, desc: 'As mankind bleeds out in the trenches of Enoch, you???ll create your own Outrider and embark on a journey across the hostile planet. With rich storytelling spanning a diverse world, you???ll leave behind the slums and shanty towns of the First City and traverse forests, mountains and desert in the pursuit of a mysterious signal. Combining intense gunplay with violent powers and an arsenal of increasingly twisted weaponry and gear-sets, OUTRIDERS offers countless hours of gameplay from one of the finest shooter developers in the industry ??? People Can Fly. INTENSITY OF A SHOOTER, DEPTH OF AN RPG OUTRIDERS brutal and bloody combat combines frenetic gunplay, violent powers and deep RPG systems to create a true genre hybrid. A DARK AND DESPERATE JOURNEY. Discover the hostile planet of Enoch as you embark on a journey to the source of a mysterious signal. DYNAMIC 1-3 PLAYER CO-OP Play single-player or join up to two friends in drop-in drop-out co-op as you tackle the horrors of a hyper-evolved planet. FOUR UNIQUE CLASSES Create and customise your own Outrider and choose from four unique classes each with its own skill tree to define your own playstyle. SCAVENGE & ADAPT Customise and upgrade your Outrider with countless items of mod-able guns and gear, as you leave humanity behind.'},
    {name: 'It_Takes_Two', image: 'img/4106f927-ec14-4df5-93f5-27f13b58b73d.png', price: 39.99, genre: 'action', scary: false, pc: true, show: false, desc: 'Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend???s Pass and work together across a huge variety of gleefully disruptive gameplay challenges. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship. Master unique and connected character abilities in every new level. Help each other across an abundance of unexpected obstacles and laugh-out-loud moments. Kick gangster squirrels??? furry tails, pilot a pair of underpants, DJ a buzzing night club, and bobsleigh through a magical snow globe. Embrace a heartfelt and hilarious story where narrative and gameplay weave into a uniquely metaphorical experience. It Takes Two is developed by the award-winning studio Hazelight, the industry leader of cooperative play. They???re about to take you on a wild and wondrous ride where only one thing is for certain: we???re better together.'},
    {name: 'Hades', image: 'img/Z.png', price: 24.99, genre: 'action', scary: false, pc: true, show: false, desc: 'Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiant\'s critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre. BATTLE OUT OF HELL As the immortal Prince of the Underworld, you\'ll wield the powers and mythic weapons of Olympus to break free from the clutches of the god of the dead himself, while growing stronger and unraveling more of the story with each unique escape attempt. UNLEASH THE FURY OF OLYMPUS The Olympians have your back! Meet Zeus, Athena, Poseidon, and many more, and choose from their dozens of powerful Boons that enhance your abilities. There are thousands of viable character builds to discover as you go. BEFRIEND GODS, GHOSTS, AND MONSTERS. A fully-voiced cast of colorful, larger-than-life characters is waiting to meet you! Grow your relationships with them, and experience thousands of unique story events as you learn about what\'s really at stake for this big, dysfunctional family. BUILT FOR REPLAYABILITY New surprises await each time you delve into the ever-shifting Underworld, whose guardian bosses will remember you. Use the powerful Mirror of Night to grow permanently stronger, and give yourself a leg up the next time you run away from home. NOTHING IS IMPOSSIBLE Permanent upgrades mean you don\'t have to be a god yourself to experience the exciting combat and gripping story. Though, if you happen to be one, crank up the challenge and get ready for some white-knuckle action that will put your well-practiced skills to the test.'},
    {name: 'STAR_WARS_Jedi_Fallen_Order', image: 'img/capsule_616x353.png', price: 39.99, genre: 'rpg', scary: false, pc: true, show: true, desc: 'A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a new third-person action-adventure title from Respawn Entertainment. This narratively driven, single-player game puts you in the role of a Jedi Padawan who narrowly escaped the purge of Order 66 following the events of Episode 3: Revenge of the Sith. On a quest to rebuild the Jedi Order, you must pick up the pieces of your shattered past to complete your training, develop new powerful Force abilities and master the art of the iconic lightsaber - all while staying one step ahead of the Empire and its deadly Inquisitors. While mastering your abilities, players will engage in cinematically charged lightsaber and Force combat designed to deliver the kind of intense Star Wars lightsaber battles as seen in the films. Players will need to approach enemies strategically, sizing up strengths and weaknesses while cleverly utilizing your Jedi training to overcome your opponents and solve the mysteries that lay in your path. Star Wars fans will recognize iconic locations, weapons, gear and enemies while also meeting a roster of fresh characters, locations, creatures, droids and adversaries new to Star Wars. As part of this authentic Star Wars story, fans will delve into a galaxy recently seized by the Empire. As a Jedi hero-turned-fugitive, players will need to fight for survival while exploring the mysteries of a long-extinct civilization all in an effort to rebuild the remnants of the Jedi Order as the Empire seeks to erase the Jedi completely.'}
];
var ids =[
    {name: 'name1', image: 'img1', price: 'price1', show: 'display1', link: 'link1'},
    {name: 'name2', image: 'img2', price: 'price2', show: 'display2', link: 'link2'},
    {name: 'name3', image: 'img3', price: 'price3', show: 'display3', link: 'link3'},
    {name: 'name4', image: 'img4', price: 'price4', show: 'display4', link: 'link4'},
    {name: 'name5', image: 'img5', price: 'price5', show: 'display5', link: 'link5'},
    {name: 'name6', image: 'img6', price: 'price6', show: 'display6', link: 'link6'},
    {name: 'name7', image: 'img7', price: 'price7', show: 'display7', link: 'link7'},
    {name: 'name8', image: 'img8', price: 'price8', show: 'display8', link: 'link8'},
    {name: 'name9', image: 'img9', price: 'price9', show: 'display9', link: 'link9'},
    {name: 'name10', image: 'img10', price: 'price10', show: 'display10', link: 'link10'},
    {name: 'name11', image: 'img11', price: 'price11', show: 'display11', link: 'link11'},
    {name: 'name12', image: 'img12', price: 'price12', show: 'display12', link: 'link12'},
    {name: 'name13', image: 'img13', price: 'price13', show: 'display13', link: 'link13'},
    {name: 'name14', image: 'img14', price: 'price14', show: 'display14', link: 'link14'},
    {name: 'name15', image: 'img15', price: 'price15', show: 'display15', link: 'link15'},
    {name: 'name16', image: 'img16', price: 'price16', show: 'display16', link: 'link16'},
    {name: 'name17', image: 'img17', price: 'price17', show: 'display17', link: 'link17'},
    {name: 'name18', image: 'img18', price: 'price18', show: 'display18', link: 'link18'}
];
var ratings = ['action', 'fighting', 'fps', 'mmo','rpg'];

function genre(string){
    for(var i=0;i<ratings.length;i++) {
        if (string == ratings[i]){
            return document.getElementById(ratings[i]).checked;
        }
    }
}
function price(price){
    var min = document.getElementById("minPrice").value;
    var max = document.getElementById("maxPrice").value;
    if(min == ''){
        min = '0';
    }
    if(max == ''){
        max = '999';
    }
    return (price >= parseInt(min) && price <= parseInt(max))
}
function dropCheck(value, bool){
    switch(value){
        case 'Both':
            return true;
        case 'Yes':
            return bool;
        case 'No':
            return !bool;
    }
}
function drop(list){
    return (dropCheck(document.getElementById("pc").value, list.pc) && dropCheck(document.getElementById("scary").value, list.scary));
}
function orderBy(sortValue) {

    var sortedResults = (sortValue === 'games') ?
        games.sort(function (a, b) {
            var nameA = a.games.toUpperCase();
            var nameB = b.games.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        }) :
        games.sort(function (a, b) {
            return a.price - b.price;
        });
    render(sortedResults);
}
function valuesChecker(list){
    for(var i=0;i<list.length;i++) {
        list[i].show = (price(list[i].price) && genre(list[i].genre) && drop(list[i]));
    }
    render(list);
}
function runValueChecker(){
    valuesChecker(games)
}
function render(list){
    for(var i=0;i<list.length;i++){
        document.getElementById(ids[i].name).innerHTML = list[i].name.split('_').join('  ');
        document.getElementById(ids[i].image).src = list[i].image;
        document.getElementById(ids[i].price).innerHTML ='$'+list[i].price;
        document.getElementById(ids[i].name).setAttribute('href','gameInfo.html?games='+list[i].name);
        document.getElementById(ids[i].link).setAttribute('href','gameInfo.html?games='+list[i].name);
        toggleShow(list[i].show, ids[i].show);
    }
}
function toggleShow(show, tag){
    let getTag = document.getElementById(tag);
    if (show){
        getTag.style.display = 'block';
    }
    else{
        getTag.style.display = 'none';
    }
}
function getQueryString(){
    var x = location.search;
    return x;
    //will return in this format: ?fish=example
    // we need to isolate example

}
document.querySelector('#action').addEventListener('change', function(event){
    //color('brown')
    valuesChecker(games);
});
document.querySelector('#fighting').addEventListener('change', function(event){
    //color('clear')
    valuesChecker(games);
});
document.querySelector('#fps').addEventListener('change', function(event){
    //color('gray')
    valuesChecker(games);
});
document.querySelector('#mmo').addEventListener('change', function(event){
    //color('purple')
    valuesChecker(games);
});
document.querySelector('#rpg').addEventListener('change', function(event){
    //color('yellow')
    valuesChecker(games);
});
document.querySelector('#orderBy').addEventListener('change', function(event){
    orderBy(event.target.value);
});
document.querySelector('#minPrice').addEventListener('keyup', function(event){
    //price(document.getElementById("minPrice").value, document.getElementById("maxPrice").value);
    valuesChecker(games);
});
document.querySelector('#maxPrice').addEventListener('keyup', function(event){
    //price(document.getElementById("minPrice").value, document.getElementById("maxPrice").value);
    valuesChecker(games);
});
document.querySelector('#scary').addEventListener('change', function(event){
    //scary(event.target.value);
    valuesChecker(games);
});
document.querySelector('#pc').addEventListener('change', function(event){
    //pc(event.target.value);
    valuesChecker(games);
});


