exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return '```[β³] Mohon tunggu sebentarβ¦β¦β¦```'
}
exports.ok = () => {
    return '```π Selesai. Kak Nihβ¦β¦β¦```'
}

exports.err = () => {
    return `π« Fitur Sedang Error`
}
exports.erorLink = () => {
    return `π Link nya error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah β Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `β Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `β Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `β Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `β  οΈSudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `π₯  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `π  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*ββ γ HALL OF SHAME γ ββ*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `β User bukan seorang admin! β`
}

exports.adminAlready = () => {
    return `β Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! π`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hai kak ${pushname} π selamat ${salam} , 
saya ${botname}, bot ini adalah Beta Multi-Device Whatsapp. 
Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya, 
lapor owner agar segera di perbaiki π      
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*βTime Server : ${time}*
*π List-Menu Alphabot-Md :*

β­ββ γ Bot Info γ 
β ${prefix}owner
β ${prefix}rules
β ${prefix}sc
β ${prefix}ping
β ${prefix}runtime
β ${prefix}botstatus
β°β ${prefix}donate


β­ββ γ Owner γ 
β < evaluate
β > evaluate
β $ exec
β => exec
β ${prefix}setmenu [query]
β ${prefix}setmenu templateLocation
β ${prefix}setmenu templateTenor
β ${prefix}setmenu katalog
β ${prefix}setmenu katalog2
β ${prefix}setmenu list
β ${prefix}setwm packname|author
β ${prefix}sendsesi
β ${prefix}listpc
β ${prefix}listgc
β ${prefix}broadcast [text]
β ${prefix}bc [text]
β ${prefix}bcgc [text]
β ${prefix}nsfw [on/off]
β ${prefix}autorespond [on/off]
β ${prefix}antiviewonce [on/off]
β ${prefix}join [link]
β ${prefix}self
β ${prefix}public [only bot]
β ${prefix}del [reply pesan bot]
β°β ${prefix}setppbot [reply image]


β­ββ γ Database γ 
β ${prefix}setcmd [reply stiker]
β ${prefix}delcmd [reply stiker]
β ${prefix}listcmd
β ${prefix}absen
β ${prefix}cekabsen
β ${prefix}deleteabsen
β ${prefix}absenstart
β ${prefix}addmsg [nama file]
β ${prefix}getmsg [nama file]
β ${prefix}listmsg
β°β ${prefix}delmsg [nama file]


β­ββ γ Group γ 
β ${prefix}listonline
β ${prefix}sider
β ${prefix}wm packname|author
β ${prefix}infochat
β ${prefix}setdesk [text]
β ${prefix}setppgrup [reply image]
β ${prefix}antilink [on/off]
β ${prefix}revoke
β ${prefix}leave
β ${prefix}add [62***]
β ${prefix}kick @tag
β ${prefix}leave
β ${prefix}linkgc
β ${prefix}take packname|author
β ${prefix}group [open/close]
β ${prefix}tagall [text]
β°β ${prefix}hidetag [text]

β­ββ γ Anime γ 
β ${prefix}quotesanime
β ${prefix}anime [query]
β ${prefix}manga [query]
β°β ${prefix}character [query]

β­ββ γ Tag γ 
β ${prefix}stickertag
β ${prefix}videotag [query]
β ${prefix}vntag [query]
β°β ${prefix}imagetag [query]

β­ββ γ Stalking γ 
β ${prefix}igstalk [username]
β ${prefix}ghstalk [username]
β°β ${prefix}ytstalk [channel]


β­ββ γ Search γ 
β ${prefix}ytsearch [query]
β ${prefix}wallpaper [query]
β ${prefix}wikimedia [query]
β ${prefix}hentai
β ${prefix}wattpad [query]
β ${prefix}webtoons [query]
β ${prefix}drakor [query]
β°β ${prefix}pinterest [query]


β­ββ γ Converter γ
β ${prefix}toaudio [video]
β ${prefix}tomp3 [video]
β ${prefix}tovn [video]
β ${prefix}stiker [reply image]
β ${prefix}tourl [image/video/stiker]
β ${prefix}togif [sticker]
β ${prefix}tomp4 [sticker]
β°β${prefix}toimg [reply sticker]


β­ββ γ Image Effect γ 
β ${prefix}wanted [reply image/stiker]
β ${prefix}utatoo [reply image/stiker]
β ${prefix}unsharpen [reply image/stiker]
β ${prefix}thanos [reply image/stiker]
β ${prefix}sniper [reply image/stiker]
β ${prefix}sharpen [reply image/stiker]
β ${prefix}sepia [reply image/stiker]
β ${prefix}scary [reply image/stiker]
β ${prefix}rip [reply image/stiker]
β ${prefix}redple [reply image/stiker]
β ${prefix}rejected [reply image/stiker]
β ${prefix}posterize [reply image/stiker]
β ${prefix}ps4 [reply image/stiker]
β ${prefix}pixelize [reply image/stiker]
β ${prefix}missionpassed [reply image/stiker]
β ${prefix}moustache [reply image/stiker]
β ${prefix}lookwhatkarenhave [reply image/stiker]
β ${prefix}jail [reply image/stiker]
β ${prefix}invert [reply image/stiker]
β ${prefix}instagram [reply image/stiker]
β ${prefix}greyscale [reply image/stiker]
β ${prefix}glitch [reply image/stiker]
β ${prefix}gay [reply image/stiker]
β ${prefix}frame [reply image/stiker]
β ${prefix}fire [reply image/stiker]
β ${prefix}distort [reply image/stiker]
β ${prefix}dictator [reply image/stiker]
β ${prefix}deepfry [reply image/stiker]
β ${prefix}ddungeon [reply image/stiker]
β ${prefix}circle [reply image/stiker]
β ${prefix}challenger [reply image/stiker]
β ${prefix}burn [reply image/stiker]
β ${prefix}brazzers [reply image/stiker]
β°β ${prefix}beautiful [reply image/stiker]


β­ββ γ Sticker Effect γ 
β ${prefix}jail [reply image/stiker]
β ${prefix}red [reply image/stiker]
β ${prefix}gay [reply image/stiker]
β ${prefix}bloo [reply image/stiker]
β ${prefix}blue [reply image/stiker]
β ${prefix}sepia [reply image/stiker]
β ${prefix}green [reply image/stiker]
β ${prefix}glass [reply image/stiker]
β ${prefix}invert [reply image/stiker]
β ${prefix}blurple [reply image/stiker]
β ${prefix}blurple2 [reply image/stiker]
β ${prefix}wasted [reply image/stiker]
β ${prefix}passed [reply image/stiker]
β ${prefix}triggered [reply image/stiker]
β ${prefix}comrade [reply image/stiker]
β ${prefix}greyscale [reply image/stiker]
β ${prefix}threshold [reply image/stiker]
β ${prefix}brightness [reply image/stiker]
β°β ${prefix}invertgreyscale [reply image/stiker]


β­ββ γ Download γ 
β ${prefix}tiktok [link]
β ${prefix}tiktoknowm [link]
β ${prefix}tiktokwm [link]
β ${prefix}tiktokaudio [link]
β ${prefix}ytdl [link]
β ${prefix}play [query]
β ${prefix}ytmp3 [link]
β ${prefix}ytshortmp3 [link]
β ${prefix}ytmp4 [link]
β ${prefix}ytshorts [link]
β ${prefix}facebook [link]
β ${prefix}facebooksd [link]
β ${prefix}facebookhd [link]
β ${prefix}fbaudio [link]
β ${prefix}igstory [username]
β ${prefix}igdl [link]
β ${prefix}igphoto [link]
β ${prefix}igvideo [link]
β ${prefix}igreels [link]
β ${prefix}igtv [link]
β ${prefix}soundcloud [link]
β ${prefix}gitclone [link repo]
β ${prefix}gitrepo [username repo branch]
β ${prefix}mediafire [link]
β°β ${prefix}twitter link

β­ββ γ Primbon γ
β ${prefix}nomorhoki 887435047326
β ${prefix}artimimpi [query]
β ${prefix}artinama [query]
β ${prefix}ramaljodoh
β ${prefix}ramaljodohbali
β ${prefix}suamiistri
β ${prefix}ramalcinta
β ${prefix}cocoknama
β ${prefix}pasangan
β ${prefix}jadiannikah
β ${prefix}sifatusaha
β ${prefix}rezeki
β ${prefix}pekerjaan
β ${prefix}nasib
β ${prefix}penyakit
β ${prefix}tarot
β ${prefix}fengshui
β ${prefix}haribaik
β ${prefix}harisangar
β ${prefix}harisial
β ${prefix}nagahari
β ${prefix}arahrezeki
β ${prefix}peruntungan
β ${prefix}weton
β ${prefix}karakter
β ${prefix}keberuntungan
β ${prefix}memancing
β ${prefix}masasubur
β ${prefix}zodiak 
β°β ${prefix}shio [query]

β­ββ γ Random Anime γ
β ${prefix}loli
β ${prefix}neko
β ${prefix}waifu
β ${prefix}shinobu
β ${prefix}megumin
β ${prefix}bully
β ${prefix}cuddle
β ${prefix}cry
β ${prefix}hug
β ${prefix}awoo
β ${prefix}kiss
β ${prefix}lick
β ${prefix}pat
β ${prefix}smug
β ${prefix}bonk
β ${prefix}yeet
β ${prefix}blush
β ${prefix}smile
β ${prefix}wave
β ${prefix}highfive
β ${prefix}handhold
β ${prefix}nom
β ${prefix}bite
β ${prefix}glomp
β ${prefix}slap
β ${prefix}kill
β ${prefix}happy
β ${prefix}wink
β ${prefix}poke
β ${prefix}dance
β°β ${prefix}cringe

β­ββ γ Nsfw & Sfw γ
β ${prefix}ahegao
β ${prefix}ass
β ${prefix}bdsm
β ${prefix}blowjob
β ${prefix}cuckold
β ${prefix}cum
β ${prefix}ero
β ${prefix}femdom
β ${prefix}foot
β ${prefix}gangbang
β ${prefix}glasses
β ${prefix}jahy
β ${prefix}manga
β ${prefix}masturbation
β ${prefix}neko
β ${prefix}orgy
β ${prefix}panties
β ${prefix}pussy
β ${prefix}tentacles
β ${prefix}thighs
β ${prefix}yuri
β ${prefix}feet
β ${prefix}lewdkemo
β ${prefix}woof
β ${prefix}gasm
β ${prefix}solo
β ${prefix}8ball
β ${prefix}goose
β ${prefix}avatar
β ${prefix}hololewd
β ${prefix}gecg
β ${prefix}holo
β ${prefix}fox_girl
β ${prefix}tits
β ${prefix}eroyuri
β ${prefix}holoyero
β ${prefix}lizard
β ${prefix}keta
β ${prefix}eron
β ${prefix}erok
β ${prefix}kemonomimi
β ${prefix}cum_jpg
β ${prefix}nsfw_avatar
β ${prefix}erofeet
β ${prefix}meow
β ${prefix}wallpaper
β ${prefix}waifu
β ${prefix}trap
β ${prefix}lewd
β ${prefix}pussy_jpg
β ${prefix}futanari
β ${prefix}lewdk
β ${prefix}solog
β ${prefix}smug
β ${prefix}cum
β ${prefix}slap
β ${prefix}les
β ${prefix}erokemo
β ${prefix}bj
β ${prefix}pwankg
β ${prefix}pat
β ${prefix}poke
β ${prefix}feed
β ${prefix}nsfw_neko_gif
β ${prefix}pussy
β ${prefix}feetg
β ${prefix}baka
β ${prefix}hug
β ${prefix}kiss
β ${prefix}tickle
β ${prefix}spank
β ${prefix}kuni
β ${prefix}classic
β ${prefix}boobs
β ${prefix}anal
β ${prefix}ngif
β ${prefix}cuddle
β°β ${prefix}zettai

β­ββ γ Ephoto360 Menu γ
β ${prefix}youtubegold
β ${prefix}youtubesilver
β ${prefix}facebookgold
β ${prefix}facebooksilver
β ${prefix}instagramgold
β ${prefix}instagramsilver
β ${prefix}twittergold
β ${prefix}twittersilver
β ${prefix}retrotext
β ${prefix}halloweenbats
β ${prefix}texthalloween
β ${prefix}cardhalloween
β ${prefix}birthdaycake
β ${prefix}thundertext
β ${prefix}icetext
β ${prefix}milkcake
β ${prefix}snowontext
β ${prefix}metalstar
β ${prefix}dragonfire
β ${prefix}zombie3d
β ${prefix}merrycard
β ${prefix}generalexam 
β ${prefix}viettel
β ${prefix}embroider
β ${prefix}graffititext
β ${prefix}graffititext2
β ${prefix}graffititext3
β ${prefix}covergraffiti
β ${prefix}moderngold
β ${prefix}capercut
β ${prefix}lovecard
β ${prefix}heartflashlight
β ${prefix}heartcup
β ${prefix}sunglightshadow
β ${prefix}graffiti3d
β ${prefix}moderngoldsilver
β ${prefix}moderngold2
β ${prefix}moderngold3
β ${prefix}fabrictext
β ${prefix}masteryavatar
β ${prefix}messagecoffee
β ${prefix}announofwin
β ${prefix}writeblood
β ${prefix}horrorletter
β ${prefix}writehorror
β ${prefix}shirtclub
β ${prefix}angelwing
β ${prefix}christmasseason
β ${prefix}projectyasuo
β ${prefix}lovelycute
β ${prefix}womansday
β ${prefix}covergamepubg
β ${prefix}nameonheart
β ${prefix}funnyhalloween
β ${prefix}lightningpubg
β ${prefix}greetingcardvideo 
β ${prefix}christmascard 
β ${prefix}galaxybat
β ${prefix}writegalaxy
β ${prefix}starsnight
β ${prefix}noeltext
β ${prefix}textcakes
β ${prefix}pubgbirthday
β ${prefix}galaxywallpaper
β ${prefix}pubgglicthvideo 
β ${prefix}pubgmascotlogo
β ${prefix}realembroidery
β ${prefix}vintagetelevision
β ${prefix}funnyanimations
β ${prefix}glowingtext
β ${prefix}textonglass
β ${prefix}cartoonstyle
β ${prefix}multicolor
β ${prefix}watercolor2
β ${prefix}textsky
β ${prefix}summerbeach
β ${prefix}1917text
β ${prefix}puppycute
β°β ${prefix}rosebirthday


β­ββ γ Textpro Menu γ
β ${prefix}halloween2 text|text2
β ${prefix}horror text|text2
β ${prefix}game8bit text|text2
β ${prefix}layered text|text2
β ${prefix}glitch2 text|text2
β ${prefix}coolg text|text2
β ${prefix}coolwg text|text2
β ${prefix}realistic text|text2
β ${prefix}space3d text|text2
β ${prefix}gtiktok text|text2
β ${prefix}stone text|text2
β ${prefix}marvel text|text2
β ${prefix}marvel2 text|text2
β ${prefix}pornhub text|text2
β ${prefix}avengers text|text2
β ${prefix}metalr text|text2
β ${prefix}metalg text|text2
β ${prefix}metalg2 text|text2
β ${prefix}halloween2 text|text2
β ${prefix}lion text|text2
β ${prefix}wolf_bw text|text2
β ${prefix}wolf_g text|text2
β ${prefix}ninja text|text2
β ${prefix}3dsteel text|text2
β ${prefix}horror2 text|text2
β ${prefix}lava text|text2
β ${prefix}bagel text|text2
β ${prefix}blackpink text
β ${prefix}rainbow2 text
β ${prefix}water_pipe text
β ${prefix}halloween text
β ${prefix}sketch text
β ${prefix}sircuit text
β ${prefix}discovery text
β ${prefix}metallic2 text
β ${prefix}fiction text
β ${prefix}demon text
β ${prefix}transformer text
β ${prefix}berry text
β ${prefix}thunder text
β ${prefix}magma text
β ${prefix}3dstone text
β ${prefix}neon text
β ${prefix}glitch text
β ${prefix}harry_potter text
β ${prefix}embossed text
β ${prefix}broken text
β ${prefix}papercut text
β ${prefix}gradient text
β ${prefix}glossy text
β ${prefix}watercolor text
β ${prefix}multicolor text
β ${prefix}neon_devil text
β ${prefix}underwater text
β ${prefix}bear text
β ${prefix}wonderfulg text
β ${prefix}christmas text
β ${prefix}neon_light text
β ${prefix}snow text
β ${prefix}cloudsky text
β ${prefix}luxury2 text
β ${prefix}gradient2 text
β ${prefix}summer text
β ${prefix}writing text
β ${prefix}engraved text
β ${prefix}summery text
β ${prefix}3dglue text
β ${prefix}metaldark text
β ${prefix}neonlight text
β ${prefix}oscar text
β ${prefix}minion text
β ${prefix}holographic text
β ${prefix}purple text
β ${prefix}glossyb text
β ${prefix}deluxe2 text
β ${prefix}glossyc text
β ${prefix}fabric text
β ${prefix}neonc text
β ${prefix}newyear text
β ${prefix}newyear2 text
β ${prefix}metals text
β ${prefix}xmas text
β ${prefix}blood text
β ${prefix}darkg text
β ${prefix}joker text
β ${prefix}wicker text
β ${prefix}natural text
β ${prefix}firework text
β ${prefix}skeleton text
β ${prefix}balloon text
β ${prefix}balloon2 text
β ${prefix}balloon3 text
β ${prefix}balloon4 text
β ${prefix}balloon5 text
β ${prefix}balloon6 text
β ${prefix}balloon7 text
β ${prefix}steel text
β ${prefix}gloss text
β ${prefix}denim text
β ${prefix}decorate text
β ${prefix}decorate2 text
β ${prefix}peridot text
β ${prefix}rock text
β ${prefix}glass text
β ${prefix}glass2 text
β ${prefix}glass3 text
β ${prefix}glass4 text
β ${prefix}glass5 text
β ${prefix}glass6 text
β ${prefix}glass7 text
β ${prefix}glass8 text
β ${prefix}captain_as2 text
β ${prefix}robot text
β ${prefix}equalizer text
β ${prefix}toxic text
β ${prefix}sparkling text
β ${prefix}sparkling2 text
β ${prefix}sparkling3 text
β ${prefix}sparkling4 text
β ${prefix}sparkling5 text
β ${prefix}sparkling6 text
β ${prefix}sparkling7 text
β ${prefix}decorative text
β ${prefix}chocolate text
β ${prefix}strawberry text
β ${prefix}koifish text
β ${prefix}bread text
β ${prefix}matrix text
β ${prefix}blood2 text
β ${prefix}neonligth2 text
β ${prefix}thunder2 text
β ${prefix}3dbox text
β ${prefix}neon2 text
β ${prefix}roadw text
β ${prefix}bokeh text
β ${prefix}gneon text
β ${prefix}advanced text
β ${prefix}dropwater text
β ${prefix}wall text
β ${prefix}chrismast text
β ${prefix}honey text
β ${prefix}drug text
β ${prefix}marble text
β ${prefix}marble2 text
β ${prefix}ice text
β ${prefix}juice text
β ${prefix}rusty text
β ${prefix}abstra text
β ${prefix}biscuit text
β ${prefix}wood text
β ${prefix}scifi text
β ${prefix}metalr text
β ${prefix}purpleg text
β ${prefix}shiny text 
β ${prefix}jewelry text
β ${prefix}jewelry2 text
β ${prefix}jewelry3 text
β ${prefix}jewelry4 text
β ${prefix}jewelry5 text
β ${prefix}jewelry6 text
β ${prefix}jewelry7 text
β ${prefix}jewelry8 text
β ${prefix}metalh text
β ${prefix}golden text
β ${prefix}glitter text
β ${prefix}glitter2 text
β ${prefix}glitter3 text
β ${prefix}glitter4 text
β ${prefix}glitter5 text
β ${prefix}glitter6 text
β ${prefix}glitter7 text
β ${prefix}metale text
β ${prefix}carbon text
β ${prefix}candy text
β ${prefix}metalb text
β ${prefix}gemb text
β ${prefix}3dchrome text
β ${prefix}metalb2 text
β ${prefix}metalg text
β°β ${prefix}metalg text


β­ββ γ Others γ
β ${prefix}afk [reason]
β ${prefix}translate kode_bahasa text
β ${prefix}kalkulator [query]
β ${prefix}smeme [text]
β ${prefix}smeme2 [text|text]
β ${prefix}memegen [text|text]
β°β

β­ββ γ Game Menu γ
β ${prefix}kuismath
β ${prefix}tebak [option]
β ${prefix}tekateki
β ${prefix}susunkata
β°β ${prefix}caklontong


β­ββ γ Asupan Menu γ
β ${prefix}chika
β ${prefix}delvira
β ${prefix}ayu
β ${prefix}bunga
β ${prefix}aura
β ${prefix}nisa
β ${prefix}ziva
β ${prefix}yana
β ${prefix}viona
β ${prefix}syania
β ${prefix}riri
β ${prefix}syifa
β ${prefix}mama_gina
β ${prefix}alcakenya
β ${prefix}mangayutri
β ${prefix}rikagusriani
β ${prefix}asupan
β ${prefix}bocil
β ${prefix}geayubi
β ${prefix}santuy
β ${prefix}ukhty
β°β ${prefix}syifa

β­ββ γ Telegram Sticker γ
β ${prefix}awoawo
β ${prefix}benedict
β ${prefix}chat
β ${prefix}dbfly
β ${prefix}dino_kuning
β ${prefix}doge
β ${prefix}gojosatoru
β ${prefix}hope_boy
β ${prefix}jisoo
β ${prefix}kr_robot
β ${prefix}kucing
β ${prefix}lonte
β ${prefix}manusia_lidi
β ${prefix}menjamet
β ${prefix}meow
β ${prefix}nicholas
β ${prefix}patrick
β ${prefix}popoci
β ${prefix}sponsbob
β ${prefix}kawan_sponsbob
β°β ${prefix}tyni
,
β­ββ γ Random Cewe γ
β ${prefix}china 
β ${prefix}indonesia 
β ${prefix}malaysia 
β ${prefix}thailand 
β ${prefix}korea 
β ${prefix}japan 
β ${prefix}vietnam 
β ${prefix}jenni 
β ${prefix}jiso 
β ${prefix}lisa  
β°β ${prefix}rose

β­ββ γ TqTo γ 
β My God
β My Parents
β Fatih A.
β Ferdi
β DikaArdnt
β Mhankbarbar
β Nurutomo
β Rashid
β ZeeoneOfc
β Penyedia Module
β°β And All Support
    `
}

exports.rules = (prefix) => {
    return `
*ββ γ RULES AND FAQ γ ββ*

1. Jangan spam bot. π
Sanksi: *β WARN/SOFT BLOCK*

2. Jangan telepon bot. βοΈ
Sanksi: *β SOFT BLOCK*

3. Jangan mengeksploitasi bot.π
Sanksi: *PERMANENT BLOCK*

π―οΈ Bot tidak atau lambat merespon ?
β‘οΈ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesβΌοΈ

π―οΈ Dimana saya bisa mendapatkan Script dari bot ini ?
β‘οΈ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

π―οΈ Boleh saya menambah ke grup?
β‘οΈ Untuk sementara bot dalam status free to add.

π―οΈ Prefixnya apa ya?
β‘οΈ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

π―οΈ Kak, kok syaa chat owner tidak direspon?
β‘οΈ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

β οΈ Segala kebijakan dan ketentuan Alphabot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*οΉ*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
ππ
`
}
exports.welcome = () =>{
	return`π©πΊπππΊπ ππππΊ πππππ ππΊπ π€
	
β­ π­πΊππΊ :
β π΄πππ :
β π¦πΎππ½πΎπ :
β π ππππ :
β°β π―πΊππππ ππππΎπ ππππ ππΊ ππΊk ~`
}
exports.leave = () =>{
	return`Yah kok out π£ Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------γ SOURCE CODE γ ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*-------γ DONATE γ -------*

Hai kak βΊοΈ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti π

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`β­ββ γ Bot Info γ 
β ${prefix}owner
β ${prefix}rules
β ${prefix}sc
β ${prefix}ping
β ${prefix}runtime
β ${prefix}botstatus
β°β ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`β­ββ γ Owner γ 
β < evaluate
β > evaluate
β $ exec
β => exec
β ${prefix}setmenu [query]
β ${prefix}setmenu templateLocation
β ${prefix}setmenu templateTenor
β ${prefix}setmenu katalog
β ${prefix}setmenu katalog2
β ${prefix}setmenu list
β ${prefix}setwm packname|author
β ${prefix}sendsesi
β ${prefix}listpc
β ${prefix}listgc
β ${prefix}broadcast [text]
β ${prefix}bc [text]
β ${prefix}bcgc [text]
β ${prefix}nsfw [on/off]
β ${prefix}autorespond [on/off]
β ${prefix}antiviewonce [on/off]
β ${prefix}join [link]
β ${prefix}self
β ${prefix}public [only bot]
β ${prefix}del [pesan bot]
β°β ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`β­ββ γ Database γ 
β ${prefix}setcmd [reply stiker]
β ${prefix}delcmd [reply stiker]
β ${prefix}listcmd
β ${prefix}absen
β ${prefix}cekabsen
β ${prefix}deleteabsen
β ${prefix}absenstart
β ${prefix}addmsg [nama file]
β ${prefix}getmsg [nama file]
β ${prefix}listmsg
β°β ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`β­ββ γ Group γ 
β ${prefix}listonline
β ${prefix}sider
β ${prefix}wm packname|author
β ${prefix}infochat
β ${prefix}setdesk [text]
β ${prefix}setppgrup [reply image]
β ${prefix}antilink [on/off]
β ${prefix}revoke
β ${prefix}leave
β ${prefix}add [62***]
β ${prefix}kick @tag
β ${prefix}leave
β ${prefix}linkgc
β ${prefix}take packname|author
β ${prefix}group [open/close]
β ${prefix}tagall [text]
β°β ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`β­ββ γ Anime γ 
β ${prefix}quotesanime
β ${prefix}anime [query]
β ${prefix}manga [query]
β°β ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`β­ββ γ Tag γ 
β ${prefix}stickertag
β ${prefix}videotag [query]
β ${prefix}vntag [query]
β°β ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`β­ββ γ Stalking γ 
β ${prefix}igstalk [username]
β ${prefix}ghstalk [username]
β°β ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`β­ββ γ Search γ 
β ${prefix}ytsearch [query]
β ${prefix}wallpaper [query]
β ${prefix}wikimedia [query]
β ${prefix}hentai
β ${prefix}wattpad [query]
β ${prefix}webtoons [query]
β ${prefix}drakor [query]
β°β ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`β­ββ γ Converter γ 
β ${prefix}toaudio [video]
β ${prefix}tomp3 [video]
β ${prefix}tovn [video]
β ${prefix}stiker [reply image]
β ${prefix}tourl [image/video]
β ${prefix}togif [sticker]
β ${prefix}tomp4 [sticker]
β°β${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`β­ββ γ Image Effect γ 
β ${prefix}wanted [reply image/stiker]
β ${prefix}utatoo [reply image/stiker]
β ${prefix}unsharpen [reply image/stiker]
β ${prefix}thanos [reply image/stiker]
β ${prefix}sniper [reply image/stiker]
β ${prefix}sharpen [reply image/stiker]
β ${prefix}sepia [reply image/stiker]
β ${prefix}scary [reply image/stiker]
β ${prefix}rip [reply image/stiker]
β ${prefix}redple [reply image/stiker]
β ${prefix}rejected [reply image/stiker]
β ${prefix}posterize [reply image/stiker]
β ${prefix}ps4 [reply image/stiker]
β ${prefix}pixelize [reply image/stiker]
β ${prefix}missionpassed [reply image/stiker]
β ${prefix}moustache [reply image/stiker]
β ${prefix}lookwhatkarenhave [reply image/stiker]
β ${prefix}jail [reply image/stiker]
β ${prefix}invert [reply image/stiker]
β ${prefix}instagram [reply image/stiker]
β ${prefix}greyscale [reply image/stiker]
β ${prefix}glitch [reply image/stiker]
β ${prefix}gay [reply image/stiker]
β ${prefix}frame [reply image/stiker]
β ${prefix}fire [reply image/stiker]
β ${prefix}distort [reply image/stiker]
β ${prefix}dictator [reply image/stiker]
β ${prefix}deepfry [reply image/stiker]
β ${prefix}ddungeon [reply image/stiker]
β ${prefix}circle [reply image/stiker]
β ${prefix}challenger [reply image/stiker]
β ${prefix}burn [reply image/stiker]
β ${prefix}brazzers [reply image/stiker]
β°β ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`β­ββ γ Sticker Effect γ 
β ${prefix}jail [reply image/stiker]
β ${prefix}red [reply image/stiker]
β ${prefix}gay [reply image/stiker]
β ${prefix}bloo [reply image/stiker]
β ${prefix}blue [reply image/stiker]
β ${prefix}sepia [reply image/stiker]
β ${prefix}green [reply image/stiker]
β ${prefix}glass [reply image/stiker]
β ${prefix}invert [reply image/stiker]
β ${prefix}blurple [reply image/stiker]
β ${prefix}blurple2 [reply image/stiker]
β ${prefix}wasted [reply image/stiker]
β ${prefix}passed [reply image/stiker]
β ${prefix}triggered [reply image/stiker]
β ${prefix}comrade [reply image/stiker]
β ${prefix}greyscale [reply image/stiker]
β ${prefix}threshold [reply image/stiker]
β ${prefix}brightness [reply image/stiker]
β°β ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`β­ββ γ Download γ 
β ${prefix}tiktok [link]
β ${prefix}tiktoknowm [link]
β ${prefix}tiktokwm [link]
β ${prefix}tiktokaudio [link]
β ${prefix}ytdl [link]
β ${prefix}play [query]
β ${prefix}ytmp3 [link]
β ${prefix}ytshortmp3 [link]
β ${prefix}ytmp4 [link]
β ${prefix}ytshorts [link]
β ${prefix}facebook [link]
β ${prefix}facebooksd [link]
β ${prefix}facebookhd [link]
β ${prefix}fbaudio [link]
β ${prefix}igstory [username]
β ${prefix}igdl [link]
β ${prefix}igphoto [link]
β ${prefix}igvideo [link]
β ${prefix}igreels [link]
β ${prefix}igtv [link]
β ${prefix}soundcloud [link]
β ${prefix}gitclone [link repo]
β ${prefix}gitrepo [username repo branch]
β ${prefix}mediafire [link]
β°β ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`β­ββ γ Random Anime γ
β ${prefix}loli
β ${prefix}neko
β ${prefix}waifu
β ${prefix}shinobu
β ${prefix}megumin
β ${prefix}bully
β ${prefix}cuddle
β ${prefix}cry
β ${prefix}hug
β ${prefix}awoo
β ${prefix}kiss
β ${prefix}lick
β ${prefix}pat
β ${prefix}smug
β ${prefix}bonk
β ${prefix}yeet
β ${prefix}blush
β ${prefix}smile
β ${prefix}wave
β ${prefix}highfive
β ${prefix}handhold
β ${prefix}nom
β ${prefix}bite
β ${prefix}glomp
β ${prefix}slap
β ${prefix}kill
β ${prefix}happy
β ${prefix}wink
β ${prefix}poke
β ${prefix}dance
β°β ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`β­ββ γ Nsfw & Sfw γ
β ${prefix}ahegao
β ${prefix}ass
β ${prefix}bdsm
β ${prefix}blowjob
β ${prefix}cuckold
β ${prefix}cum
β ${prefix}ero
β ${prefix}femdom
β ${prefix}foot
β ${prefix}gangbang
β ${prefix}glasses
β ${prefix}jahy
β ${prefix}manga
β ${prefix}masturbation
β ${prefix}neko
β ${prefix}orgy
β ${prefix}panties
β ${prefix}pussy
β ${prefix}tentacles
β ${prefix}thighs
β ${prefix}yuri
β ${prefix}feet
β ${prefix}lewdkemo
β ${prefix}woof
β ${prefix}gasm
β ${prefix}solo
β ${prefix}8ball
β ${prefix}goose
β ${prefix}avatar
β ${prefix}hololewd
β ${prefix}gecg
β ${prefix}holo
β ${prefix}fox_girl
β ${prefix}tits
β ${prefix}eroyuri
β ${prefix}holoyero
β ${prefix}lizard
β ${prefix}keta
β ${prefix}eron
β ${prefix}erok
β ${prefix}kemonomimi
β ${prefix}cum_jpg
β ${prefix}nsfw_avatar
β ${prefix}erofeet
β ${prefix}meow
β ${prefix}wallpaper
β ${prefix}waifu
β ${prefix}trap
β ${prefix}lewd
β ${prefix}pussy_jpg
β ${prefix}futanari
β ${prefix}lewdk
β ${prefix}solog
β ${prefix}smug
β ${prefix}cum
β ${prefix}slap
β ${prefix}les
β ${prefix}erokemo
β ${prefix}bj
β ${prefix}pwankg
β ${prefix}pat
β ${prefix}poke
β ${prefix}feed
β ${prefix}nsfw_neko_gif
β ${prefix}pussy
β ${prefix}feetg
β ${prefix}baka
β ${prefix}hug
β ${prefix}kiss
β ${prefix}tickle
β ${prefix}spank
β ${prefix}kuni
β ${prefix}classic
β ${prefix}boobs
β ${prefix}anal
β ${prefix}ngif
β ${prefix}cuddle
β°β ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`β­ββ γ Textpro Menu γ
β ${prefix}halloween2 text|text2
β ${prefix}horror text|text2
β ${prefix}game8bit text|text2
β ${prefix}layered text|text2
β ${prefix}glitch2 text|text2
β ${prefix}coolg text|text2
β ${prefix}coolwg text|text2
β ${prefix}realistic text|text2
β ${prefix}space3d text|text2
β ${prefix}gtiktok text|text2
β ${prefix}stone text|text2
β ${prefix}marvel text|text2
β ${prefix}marvel2 text|text2
β ${prefix}pornhub text|text2
β ${prefix}avengers text|text2
β ${prefix}metalr text|text2
β ${prefix}metalg text|text2
β ${prefix}metalg2 text|text2
β ${prefix}halloween2 text|text2
β ${prefix}lion text|text2
β ${prefix}wolf_bw text|text2
β ${prefix}wolf_g text|text2
β ${prefix}ninja text|text2
β ${prefix}3dsteel text|text2
β ${prefix}horror2 text|text2
β ${prefix}lava text|text2
β ${prefix}bagel text|text2
β ${prefix}blackpink text
β ${prefix}rainbow2 text
β ${prefix}water_pipe text
β ${prefix}halloween text
β ${prefix}sketch text
β ${prefix}sircuit text
β ${prefix}discovery text
β ${prefix}metallic2 text
β ${prefix}fiction text
β ${prefix}demon text
β ${prefix}transformer text
β ${prefix}berry text
β ${prefix}thunder text
β ${prefix}magma text
β ${prefix}3dstone text
β ${prefix}neon text
β ${prefix}glitch text
β ${prefix}harry_potter text
β ${prefix}embossed text
β ${prefix}broken text
β ${prefix}papercut text
β ${prefix}gradient text
β ${prefix}glossy text
β ${prefix}watercolor text
β ${prefix}multicolor text
β ${prefix}neon_devil text
β ${prefix}underwater text
β ${prefix}bear text
β ${prefix}wonderfulg text
β ${prefix}christmas text
β ${prefix}neon_light text
β ${prefix}snow text
β ${prefix}cloudsky text
β ${prefix}luxury2 text
β ${prefix}gradient2 text
β ${prefix}summer text
β ${prefix}writing text
β ${prefix}engraved text
β ${prefix}summery text
β ${prefix}3dglue text
β ${prefix}metaldark text
β ${prefix}neonlight text
β ${prefix}oscar text
β ${prefix}minion text
β ${prefix}holographic text
β ${prefix}purple text
β ${prefix}glossyb text
β ${prefix}deluxe2 text
β ${prefix}glossyc text
β ${prefix}fabric text
β ${prefix}neonc text
β ${prefix}newyear text
β ${prefix}newyear2 text
β ${prefix}metals text
β ${prefix}xmas text
β ${prefix}blood text
β ${prefix}darkg text
β ${prefix}joker text
β ${prefix}wicker text
β ${prefix}natural text
β ${prefix}firework text
β ${prefix}skeleton text
β ${prefix}balloon text
β ${prefix}balloon2 text
β ${prefix}balloon3 text
β ${prefix}balloon4 text
β ${prefix}balloon5 text
β ${prefix}balloon6 text
β ${prefix}balloon7 text
β ${prefix}steel text
β ${prefix}gloss text
β ${prefix}denim text
β ${prefix}decorate text
β ${prefix}decorate2 text
β ${prefix}peridot text
β ${prefix}rock text
β ${prefix}glass text
β ${prefix}glass2 text
β ${prefix}glass3 text
β ${prefix}glass4 text
β ${prefix}glass5 text
β ${prefix}glass6 text
β ${prefix}glass7 text
β ${prefix}glass8 text
β ${prefix}captain_as2 text
β ${prefix}robot text
β ${prefix}equalizer text
β ${prefix}toxic text
β ${prefix}sparkling text
β ${prefix}sparkling2 text
β ${prefix}sparkling3 text
β ${prefix}sparkling4 text
β ${prefix}sparkling5 text
β ${prefix}sparkling6 text
β ${prefix}sparkling7 text
β ${prefix}decorative text
β ${prefix}chocolate text
β ${prefix}strawberry text
β ${prefix}koifish text
β ${prefix}bread text
β ${prefix}matrix text
β ${prefix}blood2 text
β ${prefix}neonligth2 text
β ${prefix}thunder2 text
β ${prefix}3dbox text
β ${prefix}neon2 text
β ${prefix}roadw text
β ${prefix}bokeh text
β ${prefix}gneon text
β ${prefix}advanced text
β ${prefix}dropwater text
β ${prefix}wall text
β ${prefix}chrismast text
β ${prefix}honey text
β ${prefix}drug text
β ${prefix}marble text
β ${prefix}marble2 text
β ${prefix}ice text
β ${prefix}juice text
β ${prefix}rusty text
β ${prefix}abstra text
β ${prefix}biscuit text
β ${prefix}wood text
β ${prefix}scifi text
β ${prefix}metalr text
β ${prefix}purpleg text
β ${prefix}shiny text 
β ${prefix}jewelry text
β ${prefix}jewelry2 text
β ${prefix}jewelry3 text
β ${prefix}jewelry4 text
β ${prefix}jewelry5 text
β ${prefix}jewelry6 text
β ${prefix}jewelry7 text
β ${prefix}jewelry8 text
β ${prefix}metalh text
β ${prefix}golden text
β ${prefix}glitter text
β ${prefix}glitter2 text
β ${prefix}glitter3 text
β ${prefix}glitter4 text
β ${prefix}glitter5 text
β ${prefix}glitter6 text
β ${prefix}glitter7 text
β ${prefix}metale text
β ${prefix}carbon text
β ${prefix}candy text
β ${prefix}metalb text
β ${prefix}gemb text
β ${prefix}3dchrome text
β ${prefix}metalb2 text
β ${prefix}metalg text
β°β ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`β­ββ γ Others γ
β ${prefix}ttp [text]
β ${prefix}attp [text]
β ${prefix}afk [reason]
β ${prefix}translate kode_bahasa text
β ${prefix}kalkulator [query]
β ${prefix}smeme [text]
β ${prefix}smeme2 [text|text]
β°β ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`β­ββ γ Game Menu γ
β ${prefix}kuismath
β ${prefix}tebak [option]
β ${prefix}tekateki
β ${prefix}susunkata
β°β ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`β­ββ γ Asupan Menu γ
β ${prefix}chika
β ${prefix}delvira
β ${prefix}ayu
β ${prefix}bunga
β ${prefix}aura
β ${prefix}nisa
β ${prefix}ziva
β ${prefix}yana
β ${prefix}viona
β ${prefix}syania
β ${prefix}riri
β ${prefix}syifa
β ${prefix}mama_gina
β ${prefix}alcakenya
β ${prefix}mangayutri
β ${prefix}rikagusriani
β ${prefix}asupan
β ${prefix}bocil
β ${prefix}geayubi
β ${prefix}santuy
β ${prefix}ukhty
β°β ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`β­ββ γ Random Cewe γ
β ${prefix}china 
β ${prefix}indonesia 
β ${prefix}malaysia 
β ${prefix}thailand 
β ${prefix}korea 
β ${prefix}japan 
β ${prefix}vietnam 
β ${prefix}jenni 
β ${prefix}jiso 
β ${prefix}lisa  
β°β ${prefix}rose
`
}

exports.tqto = () =>{
	return`β­ββ γ TqTo γ 
β My God
β My Parents
β Fatih A.
β Ferdi
β DikaArdnt
β Mhankbarbar
β Nurutomo
β Rashid
β ZeeoneOfc
β Penyedia Module
β°β And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`β­ββ γ Primbon γ
β ${prefix}nomorhoki 887435047326
β ${prefix}artimimpi [query]
β ${prefix}artinama [query]
β ${prefix}ramaljodoh
β ${prefix}ramaljodohbali
β ${prefix}suamiistri
β ${prefix}ramalcinta
β ${prefix}cocoknama
β ${prefix}pasangan
β ${prefix}jadiannikah
β ${prefix}sifatusaha
β ${prefix}rezeki
β ${prefix}pekerjaan
β ${prefix}nasib
β ${prefix}penyakit
β ${prefix}tarot
β ${prefix}fengshui
β ${prefix}haribaik
β ${prefix}harisangar
β ${prefix}harisial
β ${prefix}nagahari
β ${prefix}arahrezeki
β ${prefix}peruntungan
β ${prefix}weton
β ${prefix}karakter
β ${prefix}keberuntungan
β ${prefix}memancing
β ${prefix}masasubur
β ${prefix}zodiak 
β°β ${prefix}shio [query]
`
}

exports.ephotomenu = (prefix) =>{
	return`β­ββ γ Ephoto360 Menu γ
β ${prefix}youtubegold
β ${prefix}youtubesilver
β ${prefix}facebookgold
β ${prefix}facebooksilver
β ${prefix}instagramgold
β ${prefix}instagramsilver
β ${prefix}twittergold
β ${prefix}twittersilver
β ${prefix}retrotext
β ${prefix}halloweenbats
β ${prefix}texthalloween
β ${prefix}cardhalloween
β ${prefix}birthdaycake
β ${prefix}thundertext
β ${prefix}icetext
β ${prefix}milkcake
β ${prefix}snowontext
β ${prefix}metalstar
β ${prefix}dragonfire
β ${prefix}zombie3d
β ${prefix}merrycard
β ${prefix}generalexam 
β ${prefix}viettel
β ${prefix}embroider
β ${prefix}graffititext
β ${prefix}graffititext2
β ${prefix}graffititext3
β ${prefix}covergraffiti
β ${prefix}moderngold
β ${prefix}capercut
β ${prefix}lovecard
β ${prefix}heartflashlight
β ${prefix}heartcup
β ${prefix}sunglightshadow
β ${prefix}graffiti3d
β ${prefix}moderngoldsilver
β ${prefix}moderngold2
β ${prefix}moderngold3
β ${prefix}fabrictext
β ${prefix}masteryavatar
β ${prefix}messagecoffee
β ${prefix}announofwin
β ${prefix}writeblood
β ${prefix}horrorletter
β ${prefix}writehorror
β ${prefix}shirtclub
β ${prefix}angelwing
β ${prefix}christmasseason
β ${prefix}projectyasuo
β ${prefix}lovelycute
β ${prefix}womansday
β ${prefix}covergamepubg
β ${prefix}nameonheart
β ${prefix}funnyhalloween
β ${prefix}lightningpubg
β ${prefix}greetingcardvideo 
β ${prefix}christmascard 
β ${prefix}galaxybat
β ${prefix}writegalaxy
β ${prefix}starsnight
β ${prefix}noeltext
β ${prefix}textcakes
β ${prefix}pubgbirthday
β ${prefix}galaxywallpaper
β ${prefix}pubgglicthvideo 
β ${prefix}pubgmascotlogo
β ${prefix}realembroidery
β ${prefix}vintagetelevision
β ${prefix}funnyanimations
β ${prefix}glowingtext
β ${prefix}textonglass
β ${prefix}cartoonstyle
β ${prefix}multicolor
β ${prefix}watercolor2
β ${prefix}textsky
β ${prefix}summerbeach
β ${prefix}1917text
β ${prefix}puppycute
β°β ${prefix}rosebirthday`
}

exports.stcmenu = (prefix) =>{
	return`β­ββ γ Telegram Sticker γ
β ${prefix}awoawo
β ${prefix}benedict
β ${prefix}chat
β ${prefix}dbfly
β ${prefix}dino_kuning
β ${prefix}doge
β ${prefix}gojosatoru
β ${prefix}hope_boy
β ${prefix}jisoo
β ${prefix}kr_robot
β ${prefix}kucing
β ${prefix}lonte
β ${prefix}manusia_lidi
β ${prefix}menjamet
β ${prefix}meow
β ${prefix}nicholas
β ${prefix}patrick
β ${prefix}popoci
β ${prefix}sponsbob
β ${prefix}kawan_sponsbob
β°β ${prefix}tyni
`}