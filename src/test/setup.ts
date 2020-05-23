import { JSDOM } from 'jsdom';

declare global {
    namespace NodeJS {
        interface Global {
            document: Document;
            window: Window;
            navigator: Navigator;
        }
    }
}

if (typeof document === 'undefined') {
    global.document = new JSDOM(
        '<!doctype html><html><body></body></html>',
    ).window.document;
    global.window = global.document.defaultView;
    global.navigator = global.window.navigator;
}
