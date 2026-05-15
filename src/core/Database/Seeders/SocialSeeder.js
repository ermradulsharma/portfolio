import Social from '../../Models/Social.js';

export const seedSocials = async () => {
    try {
        const socialsPayload = [
            { "name": "Facebook", "link": "https://www.facebook.com", "username": "mradulsharma0", "icon": "BsFacebook", "status": false },
            { "name": "Instagram", "link": "https://www.instagram.com", "username": "rudra_sharma_", "icon": "BsInstagram", "status": false },
            { "name": "X (Twitter)", "link": "https://x.com/", "username": "er_mradulsharma", "icon": "BsTwitterX", "status": false },
            { "name": "LinkedIn", "link": "https://www.linkedin.com/in/", "username": "mradulsharma", "icon": "BsLinkedin", "status": true },
            { "name": "TikTok", "link": "https://tiktok.com/", "username": "", "icon": "FaTiktok", "status": false },
            { "name": "Snapchat", "link": "https://snapchat.com/", "username": "", "icon": "FaSnapchat", "status": false },
            { "name": "Threads", "link": "https://threads.net/", "username": "", "icon": "SiThreads", "status": false },
            { "name": "Pinterest", "link": "https://pinterest.com", "username": "ermradulsharma", "icon": "FaPinterest", "status": false },
            { "name": "GitHub", "link": "https://github.com", "username": "ermradulsharma", "icon": "BsGithub", "status": true },
            { "name": "GitLab", "link": "https://gitlab.com", "username": "mradulsharma", "icon": "BsGitlab", "status": true },
            { "name": "Bitbucket", "link": "https://bitbucket.org/", "username": "", "icon": "FaBitbucket", "status": false },
            { "name": "StackOverflow", "link": "https://stackoverflow.com/users", "username": "8425184/mradul-sharma", "icon": "BsStackOverflow", "status": true },
            { "name": "Stack Exchange", "link": "https://stackexchange.com/", "username": "", "icon": "FaStackExchange", "status": false },
            { "name": "Dev.to", "link": "https://dev.to/", "username": "mradul_sharma", "icon": "FaDev", "status": true },
            { "name": "CodePen", "link": "https://codepen.io/", "username": "", "icon": "FaCodepen", "status": false },
            { "name": "HackerRank", "link": "https://hackerrank.com/profile/", "username": "mradulsharma", "icon": "FaHackerrank", "status": false },
            { "name": "LeetCode", "link": "https://leetcode.com/u", "username": "ermradulsharma", "icon": "SiLeetcode", "status": false },
            { "name": "CodeSignal", "link": "https://codesignal.com/", "username": "", "icon": "SiCodesignal", "status": false },
            { "name": "GeeksforGeeks", "link": "https://geeksforgeeks.org/", "username": "", "icon": "SiGeeksforgeeks", "status": false },
            { "name": "Medium", "link": "https://medium.com/", "username": "ermradulsharma", "icon": "BsMedium", "status": true },
            { "name": "Substack", "link": "https://substack.com/", "username": "ermradulsharma", "icon": "SiSubstack", "status": true },
            { "name": "WordPress", "link": "https://wordpress.com/", "username": "", "icon": "FaWordpress", "status": false },
            { "name": "Blogger", "link": "https://blogger.com/", "username": "", "icon": "FaBlogger", "status": false },
            { "name": "YouTube", "link": "https://www.youtube.com/", "username": "ermradulsharma", "icon": "BsYoutube", "status": true },
            { "name": "Twitch", "link": "https://twitch.tv/", "username": "", "icon": "FaTwitch", "status": false },
            { "name": "Vimeo", "link": "https://vimeo.com/", "username": "", "icon": "FaVimeo", "status": false },
            { "name": "Dailymotion", "link": "https://dailymotion.com/", "username": "", "icon": "SiDailymotion", "status": false },
            { "name": "Telegram", "link": "https://t.me", "username": "ermradulsharma", "icon": "BsTelegram", "status": false },
            { "name": "WhatsApp", "link": "https://whatsapp.com/", "username": "", "icon": "FaWhatsapp", "status": false },
            { "name": "Discord", "link": "https://discord.com/", "username": "", "icon": "FaDiscord", "status": false },
            { "name": "Slack", "link": "https://skywalkerdev.slack.com/", "username": "skywalkerdev", "icon": "FaSlack", "status": true },
            { "name": "Reddit", "link": "https://reddit.com/", "username": "", "icon": "FaReddit", "status": false },
            { "name": "Quora", "link": "https://quora.com/", "username": "", "icon": "FaQuora", "status": false },
            { "name": "Behance", "link": "https://behance.net/", "username": "", "icon": "FaBehance", "status": false },
            { "name": "Dribbble", "link": "https://dribbble.com/", "username": "", "icon": "FaDribbble", "status": false },
            { "name": "DeviantArt", "link": "https://deviantart.com/", "username": "", "icon": "FaDeviantart", "status": false },
            { "name": "Canva", "link": "https://canva.com/", "username": "", "icon": "SiCanva", "status": false }
        ];

        await Social.deleteMany({});
        const createdRecords = await Social.insertMany(socialsPayload);
        return createdRecords;
    } catch (error) {
        throw error;
    }
};
