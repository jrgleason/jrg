import '@material/mwc-button/mwc-button';
import '@material/mwc-top-app-bar-fixed/mwc-top-app-bar-fixed.js';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-icon-button/mwc-icon-button.js'
import {StatefulComponent} from "./src/StatefulComponent/index.mjs";
import {PersonComponent} from "./src/PersonComponent/index.mjs";
import {BusParticipant} from "./src/Bus.mjs";
import {MarkdownComponent} from "./src/MarkdownComponent/index.mjs";
import {SidebarComponent} from "./src/SidebarComponent/index.mjs";
import {TopBarFixed} from "./src/TopBarFixedComponent/index.mjs";
import {SplashComponent} from "./src/SplashComponent/index.mjs";
import {MyDrawer} from "./src/MyDrawerComponent/index.mjs";
import {ShadowElement} from "./src/ShadowElement.mjs";

function CREATE_ELEMENT(name, object, params) {
    customElements.get(name) ||
    customElements.define(name, object, params);
}

const bus = new BusParticipant();

window.jrg_bus = bus;
document.onreadystatechange = function () {
    let state = document.readyState;
    if (state === 'complete') {
        console.log("loaded");
    }
};

// Make global instead of individual
CREATE_ELEMENT("jrg-drawer", MyDrawer, {});
CREATE_ELEMENT("jrg-stateful", StatefulComponent, {});
CREATE_ELEMENT("jrg-person", PersonComponent, {});
CREATE_ELEMENT('jrg-markdown', MarkdownComponent, {});
CREATE_ELEMENT('jrg-sidebar', SidebarComponent, {});
CREATE_ELEMENT('jrg-top-bar-fixed', TopBarFixed, {});
CREATE_ELEMENT('jrg-splash', SplashComponent, {});

export {CREATE_ELEMENT, bus, ShadowElement}