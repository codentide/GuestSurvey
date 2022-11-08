class horizontalRange extends HTMLElement {

    constructor() {
        super()

        this.icon=this.getAttribute('icon')
    }

    _render() {
        const inner = html`
        <style>
            *{
                box-sizing: border-box;
                padding: none;
                margin: none;
            }
            html, body{
                height: 80%;
            }
            main{
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .range-item{
                width: 200px;
                transform: rotate(0deg);
            }
            .slider{
                -webkit-appearance: none;
                background-color: #cbcbcb;
                border: 3px solid #4a4a4a;
                width: 100%;
                height: 10px;
                outline: none;
                border-radius: 2px;
                
            }
            .slider::-webkit-slider-thumb{
                -webkit-appearance: none;

                width: 24px;
                height: 58px;
                padding-bottom: 60px;

                position: relative;
                z-index: 3;
                
                border-radius: 20%;
                background-color: transparent ;
                cursor: pointer;

                transform: rotate(-90deg);
            }

            .selector{
                height: auto;
                width: 24px;
                position: absolute;
                bottom: -28%;
                left: 50%;
                transform: translateX(-30%);
                z-index: 2;
            }

            .select-button{
                display: flex;
                align-items: center;
                justify-content: center;
                
                font-size: 18px;
                width: 30px;
                height: 30px;
                position: absolute;
                border-radius: 50%;
                bottom: 0;

                outline: 3px solid #4a4a4a;
                background-color: #ffffff;
                transition: all 0.1s ease-in-out;
            }

            span{
                transform: rotate(0deg);
                padding-bottom: 2px;
            }
            .range-item:active .select-button {
                    outline:4px solid #fe5757;

            }

        </style>

        <div class="range-item">
            <input class="slider"  type="range" step="1" min="0" max="100"  value="50">
            <div class="selector" >
                    <div class="select-button"><span>${this.icon}</span></div>
            </div>
            </div>
                  
        `
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(inner)

        var slider = shadow.querySelector('.slider') ;
        var selector = shadow.querySelector('.selector') ;
        
        slider.oninput = function(){
            selector.style.left = this.value + "%" ;
        }
    }

    connectedCallback() { this._render() }

    disconnectedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    adoptedCallback() { }

}

window.customElements.define('wc-h-range', horizontalRange)
