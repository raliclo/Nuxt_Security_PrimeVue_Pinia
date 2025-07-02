// https://github.com/nitrojs/nitro/issues/1007
import zlib from 'node:zlib';
import { promisify } from 'node:util';
const gzip = promisify(zlib.gzip);

export default defineNitroPlugin((nitro) => {

    nitro.hooks.hook('render:response', async (response, { event }) => {

        if (!response.headers['content-type'].startsWith('text/html'))
            return;

        // Inspect or Modify the renderer response here
        const compressedBody = await gzip(Buffer.from(response.body, 'utf-8'));
        setHeader(event, 'Content-Encoding', 'gzip');
        send(event, compressedBody);
    })
})