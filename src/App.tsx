import mdcAutoInit from '@material/auto-init';
import { MDCDrawer } from '@material/drawer';
import { MDCTabBar } from '@material/tab-bar';
import './styles.scss';

export default function App() {
   mdcAutoInit();
   const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer')!);
   const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar')!);
   return (
      <div className="App">
         <aside
            className="mdc-drawer mdc-drawer--modal"
            data-mdc-auto-init="MDCDrawer"
         >
            <div className="mdc-drawer__header">
               <h3 className="mdc-drawer__title">Heading 3</h3>
               <h6 className="mdc-drawer__subtitle">Heading 6</h6>
            </div>
            <div className="mdc-drawer__content">
               <nav className="mdc-deprecated-list">
                  <a
                     className="mdc-deprecated-list-item mdc-deprecated-list-item--activated"
                     href="#"
                     aria-current="page"
                  >
                     <span className="mdc-deprecated-list-item__ripple"></span>
                     <i
                        className="material-icons mdc-deprecated-list-item__graphic"
                        aria-hidden="true"
                     >
                        inbox
                     </i>
                     <span className="mdc-deprecated-list-item__text">
                        Inbox
                     </span>
                  </a>
                  <a className="mdc-deprecated-list-item" href="#">
                     <span className="mdc-deprecated-list-item__ripple"></span>
                     <i
                        className="material-icons mdc-deprecated-list-item__graphic"
                        aria-hidden="true"
                     >
                        send
                     </i>
                     <span className="mdc-deprecated-list-item__text">
                        Outgoing
                     </span>
                  </a>
                  <a className="mdc-deprecated-list-item" href="#">
                     <span className="mdc-deprecated-list-item__ripple"></span>
                     <i
                        className="material-icons mdc-deprecated-list-item__graphic"
                        aria-hidden="true"
                     >
                        drafts
                     </i>
                     <span className="mdc-deprecated-list-item__text">
                        Drafts
                     </span>
                  </a>
               </nav>
            </div>
         </aside>
         <div className="mdc-drawer-scrim"></div>
         <div className="mdc-drawer-app-content">
            <header
               className="mdc-top-app-bar mdc-top-app-bar--dense"
               data-mdc-auto-init="MDCTopAppBar"
            >
               <div className="mdc-top-app-bar__row custom1-top-app-bar__row">
                  <div className="container">
                     <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button
                           className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button"
                           aria-label="Open navigation menu"
                           tabIndex={0}
                        >
                           menu
                        </button>
                     </section>
                     <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
                        <button
                           className="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
                           aria-label="Download"
                        >
                           <i className="fab fa-facebook fa-sm"></i>
                        </button>
                        <button
                           className="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
                           aria-label="Print this page"
                        >
                           <i className="fab fa-twitter-square fa-sm"></i>
                        </button>
                        <button
                           className="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
                           aria-label="Bookmark this page"
                        >
                           <i className="fab fa-youtube-square fa-sm"></i>
                        </button>
                        <button
                           className="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
                           aria-label="Bookmark this page"
                        >
                           <i className="fab fa-linkedin fa-sm"></i>
                        </button>
                        <button
                           className="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
                           aria-label="Bookmark this page"
                        >
                           <i className="fab fa-instagram fa-sm"></i>
                        </button>
                     </section>
                  </div>
               </div>
               <div className="mdc-top-app-bar__row custom2-top-app-bar__row">
                  <div className="container">
                     <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <span className="mdc-top-app-bar__title">
                           <svg
                              width="127"
                              height="60"
                              fill="none"
                              version="1.1"
                              viewBox="0 0 127 60"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <g fill="#333333" stroke-width="1.3333">
                                 <path
                                    className="cneutral"
                                    d="m0 36.022h3.7772v18.521h-3.7772z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m5.968 48.197c-0.00251-1.3303 0.38971-2.6315 1.127-3.7388 0.73727-1.1073 1.7865-1.9711 3.0148-2.4819 1.2283-0.5108 2.5805-0.64573 3.8856-0.38773 1.3051 0.258 2.5043 0.89733 3.4457 1.8372 0.9416 0.93973 1.5832 2.1377 1.8436 3.4423 0.26053 1.3045 0.12813 2.6571-0.3804 3.8864-0.50853 1.2292-1.3703 2.28-2.4763 3.0193-1.1059 0.73947-2.4063 1.134-3.7365 1.134-0.8848 0.01014-1.7625-0.1564-2.582-0.49-0.81944-0.33347-1.5641-0.8272-2.1903-1.4523-0.62619-0.62493-1.1213-1.3687-1.4564-2.1876-0.33505-0.8188-0.50329-1.6963-0.49485-2.5809zm9.6444 0c-0.0148-0.57426-0.19867-1.1315-0.52853-1.6017-0.32987-0.4704-0.79107-0.83293-1.326-1.0425s-1.1197-0.25667-1.6812-0.1356c-0.5616 0.12107-1.0749 0.40507-1.476 0.8164-0.40093 0.41134-0.67173 0.93187-0.77848 1.4964-0.10673 0.5644-0.044627 1.1479 0.17848 1.6772 0.2232 0.52933 0.59747 0.9812 1.076 1.2989 0.47867 0.31773 1.0403 0.48733 1.6148 0.48747 0.39293 0.01105 0.784-0.05947 1.1484-0.2072 0.3644-0.14773 0.69427-0.36933 0.9688-0.65093 0.2744-0.2816 0.4876-0.61693 0.62587-0.98493 0.1384-0.36813 0.19893-0.7608 0.17787-1.1535z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m34.599 41.851v12.062c0 4.2683-3.3365 6.0688-6.7108 6.0688-1.1865 0.08827-2.3745-0.15174-3.4339-0.6936-1.0593-0.54187-1.9491-1.3648-2.5719-2.3785l3.2484-1.876c0.25773 0.51947 0.6656 0.94973 1.1707 1.2348 0.50507 0.28506 1.0841 0.412 1.6623 0.36413 0.38027 0.06347 0.77013 0.03867 1.1395-0.07253 0.36933-0.11107 0.70813-0.30547 0.9904-0.56827 0.28213-0.2628 0.50027-0.58693 0.63747-0.94733 0.1372-0.3604 0.18973-0.74747 0.1536-1.1315v-1.1709c-0.444 0.5464-1.0107 0.9804-1.6537 1.2669s-1.3447 0.4176-2.0479 0.38253c-1.7097 0-3.3493-0.6792-4.5584-1.8881-1.2089-1.2089-1.8881-2.8487-1.8881-4.5584 0-1.7097 0.6792-3.3493 1.8881-4.5583 1.2091-1.2089 2.8487-1.8881 4.5584-1.8881 0.7028-0.03214 1.4033 0.10027 2.046 0.38654 0.64267 0.2864 1.2096 0.7188 1.6556 1.2628v-1.2591zm-3.7143 6.0939c0.0252-0.61226-0.13347-1.2181-0.45533-1.7397-0.322-0.52147-0.79253-0.9348-1.3512-1.1867-0.55867-0.252-1.18-0.33107-1.784-0.22707-0.604 0.10386-1.1631 0.38613-1.6053 0.81027-0.4424 0.42427-0.74773 0.97106-0.8768 1.5701-0.1292 0.59907-0.07613 1.2232 0.15227 1.7919 0.2284 0.5688 0.6216 1.0561 1.1292 1.3996 0.5076 0.3436 1.1063 0.52733 1.7191 0.52787 0.40013 0.02828 0.8016-0.02748 1.1787-0.16387 0.3772-0.1364 0.7216-0.35013 1.0111-0.62773 0.28933-0.2776 0.51747-0.6128 0.66947-0.98387 0.152-0.37107 0.22453-0.76987 0.21293-1.1708z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m36.777 48.197c-0.0025-1.3303 0.38973-2.6315 1.1269-3.7388 0.73734-1.1073 1.7865-1.9711 3.0148-2.4819s2.5805-0.64573 3.8856-0.38773c1.3051 0.258 2.5043 0.89733 3.4459 1.8372 0.94147 0.93973 1.5831 2.1377 1.8436 3.4423 0.2604 1.3045 0.128 2.6571-0.38053 3.8864-0.50853 1.2292-1.3703 2.28-2.4761 3.0193-1.106 0.73947-2.4064 1.134-3.7367 1.134-0.88467 0.01014-1.7625-0.1564-2.582-0.49-0.81947-0.33347-1.5641-0.8272-2.1903-1.4523-0.62613-0.62493-1.1213-1.3687-1.4564-2.1876-0.33507-0.8188-0.50334-1.6963-0.4948-2.5809zm9.6445 0c-0.01494-0.57426-0.1988-1.1315-0.52867-1.6017-0.32987-0.4704-0.79106-0.83293-1.326-1.0425-0.5348-0.2096-1.1196-0.25667-1.6812-0.1356-0.5616 0.12107-1.0749 0.40507-1.476 0.8164-0.40093 0.41134-0.67173 0.93187-0.77853 1.4964-0.10667 0.5644-0.04453 1.1479 0.17853 1.6772 0.2232 0.52933 0.59747 0.9812 1.076 1.2989 0.47866 0.31773 1.0403 0.48733 1.6148 0.48747 0.39093 0.0075 0.7792-0.0656 1.1407-0.21493 0.36134-0.14933 0.68813-0.37147 0.95986-0.65267 0.27173-0.28107 0.48253-0.61533 0.61947-0.9816 0.1368-0.36626 0.19667-0.75693 0.17587-1.1473z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m51.975 38.452c0-0.4532 0.1344-0.89627 0.38614-1.2731 0.25186-0.3768 0.60973-0.67053 1.0284-0.844 0.4188-0.17347 0.87947-0.2188 1.324-0.1304s0.8528 0.30667 1.1733 0.62707c0.32054 0.32053 0.53867 0.7288 0.62707 1.1733 0.08853 0.44453 0.04307 0.90533-0.13026 1.324-0.17347 0.41867-0.4672 0.77667-0.844 1.0284-0.37693 0.25173-0.81986 0.38614-1.2732 0.38614-0.60667-0.0033-1.1876-0.24573-1.6167-0.6748-0.42906-0.42893-0.67146-1.0099-0.6748-1.6167zm0.39027 3.3995h3.7772v12.691h-3.7772z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m72.611 48.197c0.04573 0.83894-0.0748 1.6787-0.3548 2.4708-0.28013 0.79213-0.714 1.5211-1.2769 2.1448-0.56293 0.62373-1.2436 1.13-2.0029 1.4896-0.75933 0.3596-1.5823 0.56547-2.4215 0.60573-0.70453 0.03374-1.408-0.08733-2.0605-0.35493-0.65266-0.2676-1.2387-0.67506-1.7167-1.1937v6.2953h-3.7772v-17.803h3.7772v1.1961c0.478-0.51866 1.064-0.92613 1.7167-1.1937 0.65253-0.2676 1.356-0.38866 2.0605-0.35493 0.83813 0.04027 1.66 0.24574 2.4184 0.60454 0.75853 0.35893 1.4387 0.864 2.0013 1.4864 0.5628 0.6224 0.99693 1.3497 1.2777 2.1404 0.28093 0.79067 0.4028 1.6291 0.35867 2.4669zm-3.7772 0c-0.01494-0.59093-0.20293-1.1645-0.54067-1.6497-0.33773-0.48506-0.81026-0.86066-1.3592-1.0799-0.54893-0.21934-1.1503-0.2728-1.7292-0.15374-0.57907 0.11893-1.1105 0.4052-1.5285 0.8232-0.418 0.418-0.70413 0.94933-0.8232 1.5284-0.11893 0.57907-0.06546 1.1803 0.15374 1.7292 0.21933 0.54893 0.5948 1.0216 1.08 1.3592 0.4852 0.33773 1.0588 0.52573 1.6497 0.54067 0.4124 0.02625 0.8256-0.03614 1.212-0.1828 0.38627-0.1468 0.73667-0.37453 1.0277-0.66787 0.29093-0.29347 0.51587-0.64574 0.65947-1.0332 0.14347-0.38746 0.20254-0.8012 0.17293-1.2135z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m84.37 50.741c0 2.9211-2.5181 4.1675-5.2881 4.1675-1.1065 0.098-2.2171-0.13747-3.1887-0.676-0.97146-0.53854-1.7597-1.3555-2.2631-2.3457l3.2988-1.876c0.13386 0.458 0.42053 0.8564 0.81213 1.1289 0.39173 0.27254 0.8648 0.40294 1.3408 0.36933 0.9192 0 1.3724-0.2896 1.3724-0.7932 0-1.3976-6.2953-0.65467-6.2953-5.0363 0-2.77 2.3419-4.1676 5.0363-4.1676 0.99427-0.03014 1.9785 0.206 2.8508 0.68427 0.87226 0.47814 1.6007 1.1809 2.11 2.0353l-3.3113 1.7376c-0.14626-0.33254-0.386-0.61547-0.69-0.8144-0.304-0.19893-0.65907-0.30533-1.0224-0.30627-0.65466 0-1.0576 0.25187-1.0576 0.71773 0.0504 1.4479 6.2953 0.4784 6.2953 5.1748z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m98.271 41.851v12.691h-3.7773v-1.1835c-0.43934 0.52587-0.99694 0.94027-1.6272 1.2095-0.63013 0.2692-1.3152 0.38534-1.9989 0.3392-2.5181 0-4.7467-1.8257-4.7467-5.2629v-7.7937h3.7772v7.2397c-0.03319 0.30854 0.0029 0.62053 0.1052 0.91347 0.1024 0.29293 0.26867 0.55933 0.48694 0.78 0.21813 0.22067 0.4828 0.38986 0.77453 0.49547 0.29173 0.10573 0.60347 0.14493 0.91227 0.1152 1.3851 0 2.3545-0.80587 2.3545-2.6063v-6.9376z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m120.1 46.762v7.7811h-3.7773v-7.4536c0-1.2591-0.61693-2.0901-1.8256-2.0901-1.2087 0-1.9893 0.894-1.9893 2.3923v7.1515h-3.7772v-7.4536c0-1.2591-0.6044-2.0901-1.8257-2.0901-1.2212 0-1.9767 0.894-1.9767 2.3923v7.1515h-3.7772v-12.691h3.7772v1.1709c0.39481-0.5172 0.91254-0.92747 1.5063-1.1935 0.59373-0.26613 1.2445-0.3796 1.8932-0.33 0.65147-0.03174 1.3001 0.106 1.8825 0.39934 0.58253 0.29347 1.0791 0.7328 1.4415 1.2752 0.42133-0.56707 0.9796-1.0181 1.6225-1.3109 0.64293-0.2928 1.3496-0.418 2.0539-0.3636 2.8708 0 4.772 2.09 4.772 5.2628z"
                                 />
                                 <path
                                    className="cneutral"
                                    d="m123.33 41.776c1.5576 0 2.8203-1.2628 2.8203-2.8204 0-1.5576-1.2627-2.8203-2.8203-2.8203s-2.8204 1.2627-2.8204 2.8203c0 1.5576 1.2628 2.8204 2.8204 2.8204z"
                                 />
                                 <path
                                    className="ccompli1"
                                    d="m42.745 26.415c7.2944 0 13.208-5.9133 13.208-13.208 0-7.2944-5.9132-13.208-13.208-13.208-7.2944 0-13.208 5.9133-13.208 13.208 0 7.2944 5.9133 13.208 13.208 13.208z"
                                 />
                                 <path
                                    className="ccompli2"
                                    d="m72.271 26.415c7.2944 0 13.208-5.9133 13.208-13.208 0-7.2944-5.9132-13.208-13.208-13.208-7.2944 0-13.208 5.9133-13.208 13.208 0 7.2944 5.9133 13.208 13.208 13.208z"
                                 />
                                 <path
                                    className="ccustom"
                                    d="m26.428 0h-26.403v26.403h26.403z"
                                 />
                              </g>
                           </svg>
                        </span>
                     </section>
                  </div>
               </div>
               <div
                  className="mdc-top-app-bar__row mdc-tab-bar"
                  role="tablist"
                  data-mdc-auto-init="MDCTabBar"
               >
                  <div className="mdc-tab-scroller">
                     <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content">
                           <button
                              className="mdc-tab mdc-tab--active"
                              role="tab"
                              aria-selected="true"
                              tabIndex={0}
                           >
                              <span className="mdc-tab__content">
                                 <span className="mdc-tab__text-label">
                                    Item 1
                                 </span>
                              </span>
                              <span className="mdc-tab-indicator mdc-tab-indicator--active">
                                 <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                              </span>
                              <span className="mdc-tab__ripple"></span>
                           </button>
                           <button
                              className="mdc-tab"
                              role="tab"
                              aria-selected="false"
                              tabIndex={1}
                           >
                              <span className="mdc-tab__content">
                                 <span className="mdc-tab__text-label">
                                    Item 2
                                 </span>
                              </span>
                              <span className="mdc-tab-indicator">
                                 <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                              </span>
                              <span className="mdc-tab__ripple"></span>
                           </button>
                           <button
                              className="mdc-tab"
                              role="tab"
                              aria-selected="false"
                              tabIndex={2}
                           >
                              <span className="mdc-tab__content">
                                 <span className="mdc-tab__text-label">
                                    Item 3
                                 </span>
                              </span>
                              <span className="mdc-tab-indicator">
                                 <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                              </span>
                              <span className="mdc-tab__ripple"></span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
            <main className="mdc-top-app-bar--fixed-adjust main-content">
               <button>Close</button>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus molestie turpis ut varius sollicitudin. Nulla at
                  gravida arcu. Etiam eleifend scelerisque pharetra. Fusce non
                  mauris dui. Donec tincidunt nibh odio, non vehicula lacus
                  scelerisque eu. Sed blandit mattis malesuada. Curabitur
                  faucibus faucibus enim, in porttitor quam finibus at. Nunc sit
                  amet est eu justo condimentum dictum. Pellentesque laoreet
                  pretium velit, et volutpat magna cursus quis. Duis purus
                  dolor, sagittis ac condimentum id, ornare rutrum tortor. Nunc
                  lacinia eleifend diam, sed aliquet dolor gravida rutrum.
                  Vestibulum fringilla leo metus, quis sagittis dui posuere a.
                  Nam ultrices id felis mattis consequat. Suspendisse vitae
                  ipsum id est semper pulvinar. Nulla vel est sit amet ligula
                  imperdiet pellentesque. Aenean tincidunt tincidunt lacus ac
                  fringilla.
               </p>

               <p>
                  Integer ex odio, efficitur sed ullamcorper ac, hendrerit ut
                  lacus. Praesent tincidunt id nunc vitae elementum. Duis
                  sagittis, ligula id scelerisque auctor, urna nulla auctor dui,
                  ut ullamcorper neque orci at nisl. Integer sit amet nibh
                  suscipit erat egestas lacinia sit amet eget nulla. Nulla nibh
                  sapien, mattis a efficitur nec, maximus sed neque. Sed eu
                  neque metus. Ut placerat commodo mattis. Quisque gravida
                  dictum diam eu varius. Cras in libero ut justo imperdiet
                  fringilla. Nulla quis metus ac dui efficitur commodo. Aenean
                  mattis, metus cursus laoreet fermentum, augue urna eleifend
                  ante, et rhoncus risus sapien vehicula lectus.
               </p>

               <p>
                  Donec eu massa id ante lobortis semper vitae a nisi. Mauris
                  aliquet a sapien et porttitor. Vivamus sed sem eleifend,
                  lobortis nunc a, tempus orci. Maecenas porttitor ligula odio,
                  eu tempor quam efficitur eget. Nam viverra consectetur lectus
                  eget rhoncus. Nam volutpat augue et nisl blandit tincidunt et
                  ac leo. Sed turpis augue, rhoncus non velit ac, aliquet
                  gravida erat.
               </p>

               <p>
                  Aenean fermentum faucibus tellus, vel semper risus lacinia id.
                  Sed posuere massa quis justo feugiat, quis mollis tortor
                  tincidunt. Integer facilisis, purus id finibus pharetra, diam
                  quam convallis sapien, at malesuada neque magna non odio.
                  Donec laoreet vel orci sit amet molestie. Mauris scelerisque,
                  mi at elementum luctus, libero orci faucibus velit, a feugiat
                  arcu velit id justo. Nulla varius cursus magna laoreet
                  suscipit. Sed at pharetra turpis. Cras non tempus arcu. Nulla
                  eget suscipit diam.
               </p>

               <p>
                  Phasellus dignissim ipsum libero, non venenatis dui sagittis
                  sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum aliquet dolor in purus fermentum ullamcorper.
                  Praesent non malesuada libero. Integer blandit massa turpis,
                  nec tristique odio convallis eget. Nam vel pretium diam. In
                  vitae elementum lectus. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nam aliquet arcu vel magna
                  egestas egestas. Morbi vel nisi eu dolor porttitor porttitor
                  at quis mi. Vivamus ac quam mattis, pharetra massa vel,
                  tristique nisl.{' '}
               </p>
            </main>
         </div>
      </div>
   );
}
