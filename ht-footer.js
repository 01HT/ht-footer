import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/directives/repeat.js";

class HTFooter extends LitElement {
  render() {
    const { data, showPayments } = this;
    return html`
    <style>
        :host {
            display: block;
            box-sizing: border-box;
            position: relative;
            font-size: 16px;
        }

        a {
            font-size: inherit;
            color: #cfd8dc;
            text-decoration:none;

        }

        a:hover {
            color:#fff;
            text-decoration: none;
        }

        #container {
            background:linear-gradient(90deg,#303c42 50%,#37424b 50%);
        }

        #wrapper {
            display:grid;
            grid-template-columns: 0.25fr 0.25fr 0.25fr 0.25fr;
            max-width: 1280px;
            margin:auto;
        }

        .section {
            background: #303c42;
            display: flex;
            flex-direction: column;
            padding: 32px 32px 48px 32px;
        }

        .section > * {
            padding: 4px 0;
        }

        .footer-title {
            color:#fff;
            font-weight:500;
            margin-bottom: 8px;
        }

        #company-section {
            background:#37424b;
        }

        #company-block {
            margin-bottom: 16px;
        }

        #company-block a {
            display:block;
            float:left;
        }

        #company-block a > div {
            display:flex;
            align-items: center;
        }

        #company-block img {
            width: 32px;
        }

        #company-block #name {
            font-weight: 400;
            font-size: 18px;
            margin-left: 8px;
        }

        #bottom {
            background: #455a64;
            color:#fff;
        }

        #bottom #footer-wrapper {
            max-width: 1280px;
            margin:auto;
            padding: 8px 0;
            display:flex;
            align-items:center;
            justify-content:space-between;
        }

        #bottom #footer-wrapper #copyright {
            display:flex;
        }

        #bottom #footer-wrapper #copyright > div {
            padding: 8px 32px;
        }

        #bottom #payments {
            display:flex;
            align-items:center;
            padding: 8px 32px;
        }

        #bottom #payments img {
            height: 16px;
            width: auto;
            padding: 0 8px;
        }

        #bottom #payments #mastercard, #bottom #payments #alfabank {
            height: 24px;
        }

        [hidden] {
            display:none !important;
        }

        @media (max-width: 1030px) {
            #bottom #footer-wrapper {
                flex-wrap:wrap;
                width:100%;
                justify-content: center;
            }

            #bottom #footer-wrapper > div {
                display: flex;
            }
        }
        
        @media (max-width: 930px) {
            #wrapper {
                grid-template-columns: 0.5fr 0.5fr;
            }

            #company-block {
                margin:auto;
                margin-bottom: 8px;
            }

            .section {
                text-align:center;
            }
        }

        @media (max-width: 800px) {
            #bottom #footer-wrapper > div {
                display: flex;
            }

            #copyright {
                flex-wrap:wrap;
            }

            #copyright > div {
                width: 100%;
                text-align:center;
            }
        }

        @media (max-width: 500px) {
            #wrapper {
                grid-template-columns: 1fr;
            }
        }
    </style>
    <div id="container">
        <div id="wrapper">
            ${repeat(
              data.sections,
              section => html`
            <div class="section">
                <div class="footer-title">${section.title}</div>
                ${repeat(
                  section.links,
                  link => html`
                <div>
                    <div>
                    ${
                      link.isMail
                        ? html`<a href=${link.href}>${link.title}</a>`
                        : html`<a href=${link.href} target=${
                            link.blank ? "_blank" : ""
                          } rel="noopener">${link.title}</a>`
                    }
                    </div>
                </div>`
                )}
            </div>`
            )}
            <div id="company-section" class="section">
                  <div id="company-block">
                    <a href=${
                      data.companySite ? "/" : "https://01.ht"
                    } target=${data.companySite ? "" : "_blank"}>
                        <div>
                            <img src="https://res.cloudinary.com/cdn-01ht/image/upload/v1530624792/logos/01ht/logo.svg" alt="01HT LLC logo">
                            <div id="name">01HT</div>
                        </div>
                    </a>
                  </div>
                  <div><a href=${
                    data.companySite ? "/about" : "https://01.ht/about"
                  } target=${
      data.companySite ? "" : "_blank"
    } rel="noopener">О компании</a></div>
                  <div><a href=${
                    data.companySite ? "/products" : "https://01.ht/products"
                  } target=${
      data.companySite ? "" : "_blank"
    } rel="noopener">Продукты</a></div>
                  <div><a href="https://blog.01.ht" target="_blank" rel="noopener">Блог</a></div>
                  <div><a href=${
                    data.companySite ? "/contact" : "https://01.ht/contact"
                  } target=${
      data.companySite ? "" : "_blank"
    } rel="noopener">Контакты</a></div>
                </div>
            </div>
        </div>
        <div id="bottom">
            <div id="footer-wrapper">
                <div id="copyright">
                    <div><a href=${
                      data.companySite ? "/" : "https://01.ht"
                    } target=${
      data.companySite ? "" : "_blank"
    } rel="noopener">© 2018 01HT LLC</a></div>
                    <div><a href=${
                      data.companySite ? "/privacy" : "https://01.ht/privacy"
                    } target=${
      data.companySite ? "" : "_blank"
    } rel="noopener">Политика конфиденциальности</a></div>
                    <div><a href=${
                      data.companySite ? "/terms" : "https://01.ht/terms"
                    } target=${
      data.companySite ? "" : "_blank"
    } rel="noopener">Условия использования</a></div>
                </div>
                <div id="payments" ?hidden=${!showPayments}>
                    <!-- <img id="alfabank" src="https://res.cloudinary.com/cdn-01ht/image/upload/v1539019058/logos/alfabank/logo.svg" alt="Alfa bank"> -->
                    <img id="visa" src="https://res.cloudinary.com/cdn-01ht/image/upload/v1539017157/logos/visa/visa.svg" alt="Visa icon">
                    <img id="mastercard" src="https://res.cloudinary.com/cdn-01ht/image/upload/v1539017383/logos/mastercard/mastercard.svg" alt="MasterCard icon">
                    <img id="mir" src="https://res.cloudinary.com/cdn-01ht/image/upload/v1539017203/logos/mir/mir.svg" alt="Mir icon">
                </div>
            </div>
        </div>
    </div>
    `;
  }

  static get properties() {
    return {
      data: { type: Object },
      showPayments: { type: Boolean }
    };
  }
}

window.customElements.define("ht-footer", HTFooter);
