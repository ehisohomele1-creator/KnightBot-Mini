/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3qVGAEvXCI6YpVGwBYVUVE3JjYKKKCUm1UFQk/47xvY3dPzsDvb+1bXzJPnnMwfIC8wRS+oBeoPUBJcQ4a6JWtLBFQwraIIEcCBEDIIVBBM8nGQPAttyRrfMzw8r8R9PbQbvrUERdy7K9Kvs+KyNJwncOdAWfkpDn4TcHtMoT9jAjPtxUjfC5uXDbVLZ6IPypHHxDDolf36LLqLOHgC9y4ixATnsV4mKEMEpi+oXUNMvgZ/bDi54RlDxdPm1SJAlVvnvujUUqVpfuotN0w3R+7I5ff61+APrYFSUCL78fZ8ncy9Va4YRt/EwiURtZWwa0cVC4vnVTCz3+BTHOcotEKUM8zaL/PuWZjsfTwtT0qbSIPF1J9Erj2QR367D4ZeukaneXZYklD8IvCNrQ1ShOTr6tp4tyDwfW35QvbhrrdCvqHNAxb5hDiM12+/Al+TD69c/g/vw7mWGu6gFJRGvjTCJpmKtrMOrDpe7M9ovpnZbt90+vLBLL5oG9o+H4uTh5NnvkfTE21f45FOsEEb4zjjZe3Z6/fMZJbx1id8yCryO5SjGM/X5jKCvkac23i0NibDg6WJ3vm6ieuBwyJ9Plm103KxKM7LaZv0xkOrTuR4eVjZL6KwRXv9FGRe2fDHbesp19HtFN+eHhVdUGuFQBXuHCAoxpQRyHCRd2eiwHMAhrWLAoLYg17QH1Ph9KxszSIoh3ksjja6lAfp2nU1LdQd5TzU2sxZ0kN0fAIcKEkRIEpRaGLKCtLaiFIYIwrUP79zIEcNexOuSzcQOBBhQtkur8q0gOGHqh+XMAiKKmdumwdat0AEqPznMWIM5zHteKxySIIE10hLIKNAjWBK0c8KEUEhUBmp0M+u1YqwI96ebdzB9mACDmQPQXAIVCAOhrIgigNhPBwIqiD8Qb/duriwLL/liAEO5LB7Ds4VZX9lCHAgfXwUeFGWJFmWR0Nelvjua3dx/4m5SxEiBnFKgQo0a5v3rVjTV69hZsuGMbHjiRZPwGeNH2Z5F+PmatkqIXMpdXCTmjwjkv0KPW/XaN62dyCisZ0gI66F4OkfggAVtCLqlZHTQlMaj03BnMXHaTMZ7i1evJmlcE57NzOQ5MVmfAzsJHFmRfRsx0oP6f1VvYs3WLwkuSWW29PBLcsGXX3NmnbO4kCIahygX5NlA/GKt5mWL7ypr1wEZYeQxMYo6cPlett3DxtxaZ/i63yuzJpXr/ATeEqZ4s8W0ULayfDgs9shMxoyFV/30J2eq8bF7zZ+tFH6Pr7ww2Cdet02wugxDd5F+m8135B3ruPv3C9B3gfMvzTpNJL1uDwXsEWjnUVPG2UBe6+2mKap7aSXfjpWksvNTIqFcgD3+3cOlClkUUEyoAKa+RBwgBRV52Erj4rfZNImF2vqxFpXdwopm3z2xRZniDKYlUAVJGk8VkRFku9/A+Vgg9VNBwAA
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
