let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [6281515589573]
┣➥ *Dana:* [6281515589573]
┣➥ *Gopay:* [6281515589573]
┣➥ *Ovo:* [6281515589573]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281515589573*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
