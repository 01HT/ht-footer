import { LitElement, html, css } from "lit-element";
import { repeat } from "lit-html/directives/repeat.js";

class HTFooter extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        box-sizing: border-box;
        position: relative;
        font-size: 16px;
      }

      a {
        font-size: inherit;
        color: #cfd8dc;
        text-decoration: none;
        outline: none;
      }

      a:hover {
        color: #fff;
        text-decoration: none;
      }

      #container {
        background: linear-gradient(90deg, #303c42 50%, #37424b 50%);
      }

      #wrapper {
        display: flex;
        max-width: 1280px;
        margin: auto;
      }

      .section {
        width: 25%;
        background: #303c42;
        display: flex;
        flex-direction: column;
        padding: 32px 32px 48px 32px;
      }

      .section > * {
        padding: 4px 0;
      }

      .footer-title {
        color: #fff;
        font-weight: 500;
        margin-bottom: 8px;
      }

      #company-section {
        background: #37424b;
      }

      #company-block {
        margin-bottom: 16px;
      }

      #company-block a {
        display: block;
        float: left;
      }

      #company-block a > div {
        display: flex;
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
        color: #fff;
      }

      #bottom #footer-wrapper {
        max-width: 1280px;
        margin: auto;
        padding: 8px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      #bottom #footer-wrapper #copyright {
        display: flex;
      }

      #bottom #footer-wrapper #copyright > div {
        padding: 8px 32px;
      }

      #bottom #payments {
        display: inline-flex;
        flex-direction: row-reverse;
        align-items: center;
        margin: 5px 32px;
      }

      #bottom #payments img {
        height: 24px;
        width: auto;
        border-radius: 50%;
        border: 1px solid #fff;
        padding: 0;
        margin-left: -8px;
        transition: all 0.2s !important;
      }

      #bottom #payments:hover img {
        margin-left: 2px;
      }

      #bottom #payments img:last-child {
        margin-left: 0;
      }

      #bottom #payments:hover img:last-child {
        margin-left: 0;
      }

      [hidden] {
        display: none !important;
      }

      @media (max-width: 1200px) {
        #bottom #footer-wrapper {
          flex-direction: column;
          justify-content: center;
        }

        #bottom #footer-wrapper > div {
          display: flex;
        }

        #bottom #payments {
          margin: 8px 0;
          justify-content: center;
        }
      }

      @media (max-width: 930px) {
        #wrapper {
          flex-wrap: wrap;
        }

        .section {
          width: calc(50% - 64px);
        }

        #company-block {
          display: flex;
          margin-bottom: 8px;
        }

        #company-block a {
          margin: auto;
        }

        .section {
          text-align: center;
        }
      }

      @media (max-width: 800px) {
        #bottom #footer-wrapper > div {
          display: flex;
        }

        #copyright {
          flex-wrap: wrap;
        }

        #copyright > div {
          width: 100%;
          text-align: center;
        }
      }

      @media (max-width: 500px) {
        .section {
          width: 100%;
        }
      }

      @media (max-width: 400px) {
        #bottom #payments:hover img {
          margin-left: -8px;
        }

        #bottom #payments:hover img:last-child {
          margin-left: 0;
        }
      }
    `;
  }

  render() {
    const { data, showPayments } = this;
    return html`
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
                        ? html`<a href="${link.href}" rel="noopener nofollow">${
                            link.title
                          }</a>`
                        : html`<a href="${link.href}" target="${
                            link.blank ? "_blank" : ""
                          }" rel="noopener ${
                            link.nofollow ? "nofollow" : ""
                          }">${link.title}</a>`
                    }
                    </div>
                </div>`
                )}
            </div>`
            )}
            <div id="company-section" class="section">
                  <div id="company-block">
                    <a href="${
                      data.companySite ? "/" : "https://01.ht"
                    }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">
                        <div>
                            <img src="${
                              window.appConfig.cloudinary.url
                            }/image/upload/v1549575496/logos/01ht/logo.svg" alt="01HT LLC logo">
                            <div id="name">01HT</div>
                        </div>
                    </a>
                  </div>
                  <div><a href="${
                    data.companySite ? "/about" : "https://01.ht/about"
                  }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">О компании</a></div>
                  <div><a href="${
                    data.companySite ? "/products" : "https://01.ht/products"
                  }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">Продукты</a></div>
                  <div><a href="https://blog.01.ht" target="_blank" rel="noopener">Блог</a></div>
                  <div><a href="${
                    data.companySite ? "/contact" : "https://01.ht/contact"
                  }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">Контакты</a></div>
                </div>
            </div>
        </div>
        <div id="bottom">
            <div id="footer-wrapper">
                <div id="copyright">
                    <div><a href="${
                      data.companySite ? "/" : "https://01.ht"
                    }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">© 2019 01HT LLC</a></div>
                    <div><a href="${
                      data.companySite ? "/privacy" : "https://01.ht/privacy"
                    }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">Политика конфиденциальности</a></div>
                    <div><a href="${
                      data.companySite ? "/terms" : "https://01.ht/terms"
                    }" target="${
      data.companySite ? "" : "_blank"
    }" rel="noopener">Условия использования</a></div>
                </div>
                ${
                  showPayments
                    ? html`<a id="payments" href="/payment-methods">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108360/apps/elements/pages/payment-methods/webmoney-logo.svg"
                  alt="WebMoney">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547109434/apps/elements/pages/payment-methods/qiwi-logo.svg"
                  alt="QIWI Кошелёк">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547109344/apps/elements/pages/payment-methods/yandex-money-logo.svg"
                  alt="Яндекс.Деньги">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1550392392/apps/elements/pages/payment-methods/tinkoff-logo.svg"
                  alt="Интернет-банк Тинькофф">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108279/apps/elements/pages/payment-methods/sberbank-logo.svg"
                  alt="Сбербанк Онлайн">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108281/apps/elements/pages/payment-methods/american-express-logo.svg"
                  alt="American Express">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108281/apps/elements/pages/payment-methods/diners-club-logo.svg"
                  alt="Diners Club">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108281/apps/elements/pages/payment-methods/jcb-logo.svg"
                  alt="JCB">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108281/apps/elements/pages/payment-methods/mir-logo.svg"
                  alt="Мир">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108279/apps/elements/pages/payment-methods/maestro-logo.svg"
                  alt="Maestro">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108281/apps/elements/pages/payment-methods/master-card-logo.svg"
                  alt="Mastercard">
                <img src="${
                  window.appConfig.cloudinary.url
                }/image/upload/v1547108279/apps/elements/pages/payment-methods/visa-logo.svg"
                  alt="Visa"> </a>`
                    : null
                }
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
