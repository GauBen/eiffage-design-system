import preview from "#storybook/preview";
import { Footer, FooterLinkColumn, FooterSocialColumn } from "./Footer.tsx";

const meta = preview.meta({
  component: Footer,
});

/* Mock component to hold the social links */
const MockSocials = () => (
  <ul>
    <li>
      <a href="#">
        <svg
          role="img"
          aria-label="Twitter"
          width={21}
          height={22}
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={21} height={22} fill="#333333" />
          <g clipPath="url(#clip0_1_601)">
            <path
              d="M12.2359 9.76909L19.8898 0.87207H18.0761L11.4302 8.59723L6.12219 0.87207H0L8.02679 12.5539L0 21.8838H1.81383L8.83204 13.7257L14.4377 21.8838H20.5599L12.2355 9.76909H12.2359ZM9.75165 12.6568L8.93837 11.4936L2.46738 2.23749H5.25331L10.4755 9.70743L11.2888 10.8707L18.077 20.5805H15.291L9.75165 12.6572V12.6568Z"
              fill="white"
            />
            <title>Twitter</title>
          </g>
          <defs>
            <clipPath id="clip0_1_601">
              <rect
                width="20.5599"
                height="21.0225"
                fill="white"
                transform="translate(0 0.87207)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          role="img"
          aria-label="Youtube"
          width={30}
          height={21}
          viewBox="0 0 30 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={30} height={21} fill="#333333" />
          <path
            d="M28.2089 2.8218C27.4127 1.41817 26.5487 1.15999 24.7893 1.0618C23.0318 0.943622 18.6123 0.894531 14.7836 0.894531C10.9475 0.894531 6.52626 0.943622 4.77058 1.05999C3.0149 1.15999 2.14899 1.41635 1.34545 2.8218C0.525404 4.22362 0.103455 6.63817 0.103455 10.8891C0.103455 10.8927 0.103455 10.8945 0.103455 10.8945C0.103455 10.8982 0.103455 10.9 0.103455 10.9V10.9036C0.103455 15.1364 0.525404 17.5691 1.34545 18.9564C2.14899 20.36 3.01307 20.6145 4.76874 20.7327C6.52626 20.8345 10.9475 20.8945 14.7836 20.8945C18.6123 20.8945 23.0318 20.8345 24.7912 20.7345C26.5505 20.6164 27.4146 20.3618 28.2108 18.9582C29.0382 17.5709 29.4564 15.1382 29.4564 10.9054C29.4564 10.9054 29.4564 10.9 29.4564 10.8964C29.4564 10.8964 29.4564 10.8927 29.4564 10.8909C29.4564 6.63817 29.0382 4.22362 28.2089 2.8218ZM11.1108 16.3491V5.43999L20.2836 10.8945L11.1108 16.3491Z"
            fill="white"
          />
          <title>Youtube</title>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          role="img"
          aria-label="Facebook"
          width={21}
          height={22}
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={21} height={22} fill="#333333" />
          <g clipPath="url(#clip0_1_606)">
            <path
              d="M21 11.3945C21 5.59559 16.2989 0.894531 10.5 0.894531C4.70106 0.894531 0 5.59559 0 11.3945C0 16.3186 3.39024 20.4506 7.96362 21.5854V14.6033H5.79852V11.3945H7.96362V10.0119C7.96362 6.43811 9.58104 4.78163 13.0897 4.78163C13.755 4.78163 14.9029 4.91225 15.3724 5.04245V7.95095C15.1246 7.92491 14.6941 7.91189 14.1595 7.91189C12.4379 7.91189 11.7726 8.56415 11.7726 10.2597V11.3945H15.2023L14.6131 14.6033H11.7726V21.8177C16.9718 21.1898 21.0004 16.763 21.0004 11.3945H21Z"
              fill="white"
            />
            <title>Facebook</title>
          </g>
          <defs>
            <clipPath id="clip0_1_606">
              <rect
                width={21}
                height={21}
                fill="white"
                transform="translate(0 0.894531)"
              />
            </clipPath>
          </defs>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          role="img"
          aria-label="Instagram"
          width={23}
          height={23}
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={23} height={23} fill="#333333" />
          <path
            d="M16.5668 0.903564H6.62374C3.24711 0.903564 0.5 3.62607 0.5 6.97228V16.8258C0.5 20.1722 3.24711 22.8946 6.62374 22.8946H16.5668C19.9437 22.8946 22.6908 20.1721 22.6908 16.8258V6.97228C22.691 3.62607 19.9437 0.903564 16.5668 0.903564ZM20.7221 16.8258C20.7221 19.0963 18.8581 20.9434 16.567 20.9434H6.62374C4.33275 20.9435 2.46888 19.0963 2.46888 16.8258V6.97228C2.46888 4.70193 4.33275 2.85471 6.62374 2.85471H16.5668C18.858 2.85471 20.722 4.70193 20.722 6.97228V16.8258H20.7221Z"
            fill="white"
          />
          <path
            d="M11.5941 6.23315C8.44111 6.23315 5.87605 8.77503 5.87605 11.8995C5.87605 15.0239 8.44111 17.5656 11.5941 17.5656C14.747 17.5656 17.3121 15.0239 17.3121 11.8995C17.3121 8.77503 14.747 6.23315 11.5941 6.23315ZM11.5941 15.6144C9.52688 15.6144 7.84493 13.9479 7.84493 11.8994C7.84493 9.85073 9.52675 8.18411 11.5941 8.18411C13.6614 8.18411 15.3432 9.85073 15.3432 11.8994C15.3432 13.9479 13.6613 15.6144 11.5941 15.6144Z"
            fill="white"
          />
          <path
            d="M17.5549 4.57837C17.1755 4.57837 16.8029 4.73053 16.5349 4.99715C16.2657 5.26246 16.111 5.63181 16.111 6.00897C16.111 6.38496 16.2659 6.75419 16.5349 7.0208C16.8027 7.28611 17.1755 7.43958 17.5549 7.43958C17.9355 7.43958 18.307 7.28611 18.5761 7.0208C18.8452 6.75419 18.9988 6.38483 18.9988 6.00897C18.9988 5.63181 18.8452 5.26246 18.5761 4.99715C18.3083 4.73053 17.9355 4.57837 17.5549 4.57837Z"
            fill="white"
          />
          <title>Instagram</title>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          role="img"
          aria-label="Linkedin"
          width={22}
          height={23}
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={22} height={23} fill="#333333" />
          <path
            d="M21.184 14.348V22.8946H16.6941V14.9204C16.6941 12.9172 16.0447 11.5501 14.4195 11.5501C13.1788 11.5501 12.4405 12.4714 12.1157 13.3627C11.9973 13.6813 11.9668 14.1247 11.9668 14.5707V22.8946H7.47537C7.47537 22.8946 7.53586 9.38892 7.47537 7.98963H11.9663V10.1024C11.9572 10.1182 11.9454 10.1352 11.9368 10.1505H11.9663V10.1024C12.563 9.08821 13.6286 7.63947 16.0137 7.63947C18.9687 7.63942 21.184 9.76977 21.184 14.348ZM2.77717 0.804688C1.24066 0.804688 0.235657 1.91686 0.235657 3.37942C0.235657 4.81009 1.21158 5.95602 2.71755 5.95602H2.74755C4.31382 5.95602 5.28789 4.81031 5.28789 3.37942C5.25838 1.91686 4.31382 0.804688 2.77717 0.804688ZM0.502407 22.8946H4.99212V7.98963H0.502407V22.8946Z"
            fill="white"
          />
          <title>Linkedin</title>
        </svg>
      </a>
    </li>
    <li>
      <a href="#">
        <svg
          role="img"
          aria-label="TikTok"
          width={20}
          height={23}
          viewBox="0 0 20 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width={20} height={23} fill="#333333" />
          <path
            d="M8.96443 12.5619C5.68864 11.5201 3.1051 15.8099 5.77249 18.0854C7.81052 19.8245 10.8202 18.7143 11.2057 16.0834L11.1993 0.486914C11.1961 0.378906 11.2043 0.260416 11.2955 0.188411C11.4869 0.0375638 13.7232 0.136913 14.1242 0.188411C14.6738 2.69083 16.8568 4.73933 19.5 4.66733V9.40374C17.9514 9.33492 16.5018 8.64722 15.2202 7.82508L15.2189 15.9485C14.8907 21.8921 8.14275 25.0348 3.40224 21.2418C-2.23515 16.731 1.74794 7.68335 8.79946 8.54878L8.96397 8.64768V12.5615L8.96443 12.5619Z"
            fill="white"
          />
        </svg>
      </a>
    </li>
  </ul>
);

export const ThreeColumns = meta.story({
  name: "Three Columns",
  args: {
    children: (
      <>
        <FooterSocialColumn title="Suivez-nous">
          <MockSocials />
        </FooterSocialColumn>
        <FooterLinkColumn title="Liens utiles">
          <ul>
            <li>
              <a href="#">Communiqués</a>
            </li>
            <li>
              <a href="#">Rapport climat</a>
            </li>
            <li>
              <a href="#">Offres d'emploi du Groupe</a>
            </li>
          </ul>
        </FooterLinkColumn>
        <FooterLinkColumn title="Nous contacter">
          <ul>
            <li>
              <a href="#">Une question ? N’hésitez pas à nous contacter</a>
            </li>
          </ul>
        </FooterLinkColumn>
      </>
    ),
  },
});

export const FourColumns = meta.story({
  name: "Four Columns",
  args: {
    children: (
      <>
        <FooterSocialColumn title="Suivez-nous">
          <MockSocials />
        </FooterSocialColumn>
        <FooterLinkColumn title="Liens utiles">
          <ul>
            <li>
              <a href="#">Communiqués</a>
            </li>
            <li>
              <a href="#">Rapport climat</a>
            </li>
            <li>
              <a href="#">Offres d'emploi du Groupe</a>
            </li>
          </ul>
        </FooterLinkColumn>
        <FooterLinkColumn title="Nous contacter">
          <ul>
            <li>
              <a href="#">Une question ? N’hésitez pas à nous contacter</a>
            </li>
          </ul>
        </FooterLinkColumn>
        <FooterLinkColumn title="Mentions légales">
          <ul>
            <li>
              <a href="#">Politique de confidentialité</a>
            </li>
            <li>
              <a href="#">Gestion des cookies</a>
            </li>
          </ul>
        </FooterLinkColumn>
      </>
    ),
  },
});
