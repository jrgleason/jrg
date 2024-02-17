import {ShadowElement} from "../ShadowElement.mjs";
import template from "./component.html"
import style from "./style.css"

export class TopBarFixed extends ShadowElement{
    constructor(isFixed = true){
        super(template, style);
        this.isFixed = isFixed;
        this.render();
    }
    toggleMenu(){
        this.menu = !!this.menu;
    }
    postRender(){
        const sty = document.createElement("style");
        sty.innerHTML = this.isFixed ? `${style} :host { position: fixed; z-index: 100; }` : style;
        this.shadowRoot.append(sty);
        return Promise.resolve();
    }
}