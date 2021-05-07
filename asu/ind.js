exports.wait = () => {
	return`*「 WAIT 」IN PROCESS🍁*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*YOUR LEVEL IS STILL EMPTY*`
}

exports.baned = () => {
	return`*You go to the hell*`
}

exports.lvlnoon = () => {
	return`*LEVELING IS NOT ACTIVATED YET*`
}

exports.noregis = () => {
	return`*「 NOT REGISTERED 」*\n\n*register first here how to register ${prefix}daftar name|age *\n*Type = ${prefix}daftar ${pushname}|15*`
}

exports.rediregis = () => {
	return`*「 ALREADY REGISTERED 」*\n\n*you are already registered in the bot database*`
}

exports.stikga = () => {
	return`*yeah failed try to repeat in a few moments*`
}

exports.linkga = () => {
	return`*sorry invalid link*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT MUST BE ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW NOT ACTIVE*`
}

exports.bug = () => {
	return`*Problems have been reported to the BOT owner, false reports will not be responded to*`
}

exports.wrongf = () => {
	return`*format * Incorrect format / empty text*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRATION 」*\n\n to find out if you have registered please check the message I sent \n\nNOTE:\n * if you don't get a message. means you haven't saved your bot number*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER」*\n\nyou have registered with the data \n\n┏━➤name\n┗➤${namaUser}\n┏━➤number\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤age\n┗➤${umurUser}\n┏━➤registration time\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTE : don't forget to save the HINATA UwU admin number ~ And don't forget to type ${prefix}rules before starting the bot huh😁`
}

exports.owneresce = (pushname) => {
	return`*sorry but ${pushname}not the owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type command : ${command}*\n*┗⊱terms level : ${aha}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname}your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type command : ${command}*\n*┗⊱terms level : ${ahb}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type command : ${command}*\n*┗⊱terms level : ${ahc}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname}your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type command : ${command}*\n*┗⊱terms level : ${ahd}*\n\n_NOTE :CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type command : ${command}*\n*┗⊱terms level : ${ahe}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} your level is not sufficient*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱type command : ${command}*\n*┗⊱terms level : ${ahf}*\n\n_NOTE : CHAT / ALWAYS ON TO GET XP_`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 OMEDETOU 」*
┏𖥻ꦼꦽ➳ *Name* : ${pushname}
┣𖥻ꦼꦽ➳ *Number* : wa.me/${sender.split("@")[0]}
┣𖥻ꦼꦽ➳ *Xp* : ${getLevelingXp(sender)}
┗𖥻ꦼꦽ➳ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*sorry sis ${pushname} Your limit for today is up*\n*The limit is reset every hour 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT USER 」*
your remaining limit: ${limitCounts}

🍁NOTE : to get to the limit. can pass level up or buylimit🍁`
}

exports.satukos = () => {
	return`Add parameter 1 / enable or 0 / disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ *「 ATM 」* ━┓\n┣𖥻ꦼꦽ➳ *Name* : ${pushname}\n┣𖥻ꦼꦽ➳ *Number* : ${sender.split("@")[0]}\n┣𖥻ꦼꦽ➳ *Money* : ${uangkau}\n┗━━━━━━━━━━`
}
