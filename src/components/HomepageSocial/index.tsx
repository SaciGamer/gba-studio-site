import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function HomepageSocial(): ReactNode {
  return (
    <section className={clsx("home--social", styles.social)}>
      <div className="container">
        <div className={styles.socialContent}>
          <div className={styles.socialIcons}>
            <a href="https://discord.gg/fa8TZvc9sC">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"></path>
              </svg>
            </a>
            <a href="https://www.patreon.com/cw/gbastudiodev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.9132 7.21C22.909 4.14558 20.5224 1.63404 17.7222 0.727831C14.2449 -0.397493 9.65869 -0.234383 6.33828 1.33227C2.31387 3.23136 1.04966 7.39133 1.00254 11.5402C0.963878 14.9513 1.30432 23.9354 6.37183 23.9994C10.1371 24.0472 10.6978 19.1954 12.44 16.8588C13.6795 15.1964 15.2755 14.7268 17.2402 14.2406C20.6168 13.4048 22.9181 10.74 22.9132 7.21Z" />
              </svg>
            </a>
          </div>
          <div>
            <Translate id="homepage.social.chat">
              Chat with the community on our
            </Translate>
            {" "}
            <a href="https://discord.gg/fa8TZvc9sC">Discord</a>. 
            &nbsp;
            <Translate id="homepage.social.support">
              You can support development at
            </Translate>
            {" "}
            <a href="https://www.patreon.com/cw/gbastudiodev">Patreon</a>.
          </div>
        </div>
      </div>
    </section>
  );
};