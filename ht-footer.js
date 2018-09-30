import { LitElement, html } from "@polymer/lit-element";
import { repeat } from "lit-html/directives/repeat.js";

class HTFooter extends LitElement {
  render() {
    const { data } = this;
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

        #bottom div {
            max-width: 800px;
            margin:auto;
            display:flex;
            flex-wrap: wrap;
            justify-content:space-around;
            align-items:center;
            padding: 8px 0;
        }

        #bottom div > div {
            padding: 8px 16px;
        }

        @media (max-width: 800px) {
            #wrapper {
                grid-template-columns: 0.5fr 0.5fr;
            }

            #company-block {
                margin:auto;
            }

            .section {
                text-align:center;
            }
        }

        @media (max-width: 500px) {
            #wrapper {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 690px) {
            #bottom div > div {
                width:100%;
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
                            <img src="https://res.cloudinary.com/cdn-01ht/image/upload/v1530624792/logos/01ht/logo.svg" alt="01HT">
                            <div id="name">01HT</div>
                        </div>
                    </a>
                  </div>
                  <div><a href=${
                    data.companySite ? "/about" : "https://01.ht/about"
                  } target=${
      data.companySite ? "" : "_blank"
    }>О компании</a></div>
                  <div><a href=${
                    data.companySite ? "/products" : "https://01.ht/products"
                  } target=${
      data.companySite ? "" : "_blank"
    }>Продукты</a></div>
                  <div><a href="https://blog.01.ht" target="_blank" rel="noopener">Блог</a></div>
                  <div><a href=${
                    data.companySite ? "/contact" : "https://01.ht/contact"
                  } target=${
      data.companySite ? "" : "_blank"
    }>Контакты</a></div>
                </div>
            </div>
        </div>
        <div id="bottom">
            <div>
                <div><a href=${
                  data.companySite ? "/" : "https://01.ht"
                } target=${
      data.companySite ? "" : "_blank"
    }>© 2018 01HT LLC</a></div>
                <div><a href=${
                  data.companySite ? "/privacy" : "https://01.ht/privacy"
                } target=${
      data.companySite ? "" : "_blank"
    }>Политика конфиденциальности</a></div>
                <div><a href=${
                  data.companySite ? "/terms" : "https://01.ht/terms"
                } target=${
      data.companySite ? "" : "_blank"
    }>Условия использования</a></div>
            </div>
        </div>
    </div>
    `;
  }

  static get properties() {
    return {
      items: { data: Object }
    };
  }
}

window.customElements.define("ht-footer", HTFooter);
