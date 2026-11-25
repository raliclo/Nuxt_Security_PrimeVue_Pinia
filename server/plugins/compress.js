// https://github.com/nitrojs/nitro/issues/1007
import zlib from 'node:zlib';
import { promisify } from 'node:util';
const gzip = promisify(zlib.gzip);

export default defineNitroPlugin((nitro) => {

    nitro.hooks.hook('render:response', async (response, { event }) => {
        const contentType = response.headers?.['content-type'];
        if (typeof contentType !== 'string' || !contentType.startsWith('text/html'))
            return;

        const acceptEncoding = getRequestHeader(event, 'accept-encoding') || '';
        if (!acceptEncoding.includes('gzip'))
            return;

        // Inspect or Modify the renderer response here
        const compressedBody = await gzip(Buffer.from(response.body, 'utf-8'));
        setHeader(event, 'Content-Encoding', 'gzip');
        setHeader(event, 'Vary', 'Accept-Encoding');
        send(event, compressedBody);
    })
})