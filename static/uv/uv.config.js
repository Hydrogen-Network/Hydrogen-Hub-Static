/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/static/tiw/',
    bare: ['https://stingrayproxy.onrender.com/bare/', 'https://coolbare.lightspeedsucks.workers.dev', 'https://phantomnetwork.cloud/bare/', 'https://baresw.starttiw.org/', 'https://polarislearning.org/bare', 'https://geoquiz.gq/bare/', 'https://tomp.app', 'https://uv.holyubofficial.net/bare1/', 'https://uv.holyubofficial.net/bare2/', 'https://uv.holyubofficial.net/bare3/', 'https://uv.holyubofficial.net/bare4/'],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
    inject: async (url) => {
        if (url.host === 'discord.com') {
            return `
                <script src="https://raw.githubusercontent.com/Vencord/builds/main/browser.js"></script>
                <link rel="stylesheet" href="https://raw.githubusercontent.com/Vencord/builds/main/browser.css">
              `;
        }

        return ``;
    },
};
