/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import ThemedImage from "@theme/ThemedImage";

function FooterLink({ to, href, label, prependBaseUrlToHref, ...props }) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}
    >
      {label}
    </Link>
  );
}

const FooterLogo = ({ sources, alt }) => (
  <ThemedImage className="footer__logo" alt={alt} sources={sources} />
);

function Footer() {
  const { footer } = useThemeConfig();
  console.log("footer", footer);
  // const { copyright, links = [], logo = {} } = footer || {};
  // const sources = {
  //   light: useBaseUrl(logo.src),
  //   dark: useBaseUrl(logo.srcDark || logo.src),
  // };

  if (!footer.links.length === 0) {
    return null;
  }

  return (
    <>
      <div className={styles.footer_top}>
        <div className={styles.main_div}>
          <img
            style={{ height: 34, width: 240 }}
            src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/logo_dream_sport_footer.webp"
          />
          <div className={styles.footer_social}>
            <img
              src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/facebook1.webp"
              style={{ height: 32, width: 32, marginRight: 10, marginLeft: 3 }}
            />
            <img
              src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/twitter1.webp"
              style={{ height: 32, width: 32, marginRight: 10 }}
            />
            <img
              src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/linkedin1.webp"
              style={{ height: 32, width: 32, marginRight: 10 }}
            />
            <img
              src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/linkedin1.webp"
              style={{ height: 32, width: 32, marginRight: 10 }}
            />
            <img
              src="https://d13ir53smqqeyp.cloudfront.net/d11-static-pages/images/instagram.webp"
              style={{ height: 32, width: 32, marginRight: 10 }}
            />
          </div>
          <div
            style={{
              height: 1,
              width: 1000,
              backgroundColor: "#828282",
              marginTop: 20,
              marginBottom: 20,
            }}
          />
          <div>CORPORATE OFFICE</div>
          <div>
            Unit No. 1802, 18th Floor, Tower B, Peninsula Business Park, Off
            Senapati Bapat Marg, Lower Parel, Mumbai 400013
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
