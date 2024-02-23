"use client";

import Image from "next/image";
import bsmtTeamImg from "../../../../public/footer/image17061355050.jpg";
import * as Scrollytelling from "~/lib/scrollytelling-client";
import QRImg from "../../../../public/footer/QR.svg";
import confetti from "canvas-confetti";
import s from "./footer.module.scss";
import Link from "next/link";
// import { DottedDiv } from "../../components/dotted-container";
// import basementTeamSVG from "../../../../public/footer/basement-team.svg";
import { useMedia } from "../../../hooks/use-media";
import { toVw } from "../../../lib/utils";
// import { useCallback, useEffect, useRef, useState } from "react";
import { useCallback, useRef } from "react";
// import clsx from "clsx";
// import { CanvasWithMacModel2 } from "./mac-model2";

// const ghHref = "https://github.com/basementstudio/scrollytelling";

export const Footer = () => {
  const isDesktopSm = useMedia("(min-width: 1024px)");

  return (
    <Scrollytelling.Root start="top 80%" debug={{ label: "Footer" }}>
      <footer className={s.footer}>
        <PreFooter />
        <div className={s["imgs-container"]}>
          <Image
            className={s["team-img"]}
            src={bsmtTeamImg}
            alt="Team"
          />
          <div className={s["QR-container"]}>
            <Scrollytelling.Animation
              tween={{
                start: 60,
                end: 100,
                from: {
                  y: "-120%",
                  position: "absolute",
                  x: isDesktopSm ? "-8vw" : toVw(-20),
                  scale: 0.6,
                },
              }}
            >
              <a href="mailto:kontakt@webcrafty.pl"
                target="_blank"
                rel="noreferrer">
                <Image className={s.QR} src={QRImg} alt="QR" />
              </a>
            </Scrollytelling.Animation>
          </div>
        </div>
        <svg
          className={s["svg-performs"]}
          fill="none"
          viewBox="0 0 1200 60"
        >
          <text style={{ fill: 'white', fontSize: 60, whiteSpace: 'pre' }}>
            <tspan x="0" y="50">WEBCRAFTY</tspan>
          </text>
        </svg>
        {/* <Image
          className={s["footer-heading-text"]}
          src={basementTeamSVG}
          alt="team"
        /> */}
        <div className={s.links}>
          {/* <div>
            <span>social media</span>
            <ul>
              {socials.map((social, idx) => (
                <li key={idx}>
                  {idx !== 0 && <span>&nbsp;—&nbsp;</span>}
                  <Link
                    className="link"
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <span>SKONTAKTUJ SIĘ Z NAMI!</span>
            <Link
              className="link"
              href="mailto:kontakt@webcrafty.pl"
              target="_blank"
              rel="noreferrer"
            >
              kontakt@webcrafty.pl
            </Link>
          </div>
          <div>
            <span>© {new Date().getFullYear()} WEBCRAFTY.PL</span>
            {/* <span>WSZELKIE PRAWA ZASTRZEŻONE</span> */}
          </div>
        </div>
      </footer>
    </Scrollytelling.Root>
  );
};

const PreFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const triggerConfetti = useCallback(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })({
      startVelocity: 20,
      particleCount: 140,
      spread: 2000,
      gravity: 0.6,
      origin: { y: 0.425 },
      colors: [
        "#ff4d00",
        "#ff5e00",
        "#ff8000",
        "#ffa200",
        "#b23500",
        "#d84000",
      ],
    });
  }, []);

  return (
    <div className={s["pre-footer"]}>
      <canvas ref={canvasRef} className={s.confetti} />
      <Scrollytelling.Waypoint at={50} onCall={triggerConfetti} />
      <Scrollytelling.Waypoint
        at={75}
        tween={{
          target: ["body"],
          to: { background: "black", color: "white" },
          duration: 0.35,
        }}
      />
      <div className={s["left-content"]}>
        <p>
          Przywitaj się z naszą marką.
        </p>
        {/* <Terminal /> */}
        {/* <a
          className={clsx(s["gh-link"], "link")}
          href={ghHref}
          target="_blank"
          rel="noreferrer"
        >
          Check it out on GitHub
        </a> */}
        {/* <a
          className={s["mobile-qr-link"]}
          href={ghHref}
          target="_blank"
          rel="noreferrer"
        >
          <Image className={s["QR-mobile"]} src={QRImg} alt="QR" />
        </a> */}
      </div>
      {/* <div className={s["model-container"]} style={{ marginTop: 200, marginRight: 60 }}>
        <CanvasWithMacModel2 />
      </div> */}
    </div>
  );
};

// const Terminal = () => {
//   const [isCopied, setIsCopied] = useState(false);

//   const contentRef = useRef<HTMLParagraphElement>(null);

//   const copyTextContent = () => {
//     if (contentRef.current) {
//       const text = contentRef.current.textContent;
//       if (text) {
//         navigator.clipboard.writeText(text);
//         setIsCopied(true);
//       }
//     }
//   };

//   const confettiRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!isCopied || !confettiRef.current) return;

//     const confeto = confettiRef.current;

//     const canvas = document.createElement("canvas");
//     confeto.appendChild(canvas);
//     canvas.setAttribute(
//       "style",
//       "width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
//     );

//     import("canvas-confetti").then(({ create }) => {
//       create(canvas, {
//         resize: true,
//       })({
//         startVelocity: 20,
//         particleCount: 60,
//         spread: 100,
//         gravity: 0.6,
//         origin: { y: 0.42 },
//         colors: [
//           "#ff4d00",
//           "#ff5e00",
//           "#ff8000",
//           "#ffa200",
//           "#b23500",
//           "#d84000",
//         ],
//       });
//     });

//     const timeId = setTimeout(() => {
//       setIsCopied(false);
//     }, 3000);

//     return () => {
//       clearTimeout(timeId);
//       confeto?.removeChild(canvas);
//     };
//   }, [isCopied]);

//   return (
//     <>
//       <div className={s.terminal}>
//         <div className={s["upper-bar"]}>
//           <span className={s.dots}>
//             {[1, 2, 3].map((_, idx) => (
//               <span key={idx} className={s.circle} />
//             ))}
//           </span>
//           <span className={s["terminal-title"]}>terminal</span>
//         </div>
//         <DottedDiv className={s.content}>
//           <p ref={contentRef}>yarn add @bsmnt/scrollytelling</p>
//           <button
//             title="copy text"
//             className={s["copy-button"]}
//             onClick={copyTextContent}
//           >
//             <CopyIconSVG />
//           </button>
//         </DottedDiv>
//         <CopiedNotification
//           className={clsx(isCopied && s["text-copied-notif--visible"])}
//         />
//       </div>
//       <div ref={confettiRef} className={s.confetti} />
//     </>
//   );
// };

// const socials = [
//   {
//     name: "twitter",
//     url: "https://twitter.com/basementstudio",
//   },
//   {
//     name: "instagram",
//     url: "https://www.instagram.com/basementdotstudio/",
//   },
//   {
//     name: "github",
//     url: "https://github.com/basementstudio",
//   },
//   {
//     name: "dribbble",
//     url: "https://dribbble.com/basementstudio",
//   },
// ];

// const CopiedNotification = ({ className }: { className?: string }) => {
//   return (
//     <div className={clsx(s["text-copied-notif"], className)}>
//       <p>Copied!</p>
//     </div>
//   );
// };

// const CopyIconSVG = ({ className }: { className?: string }) => {
//   return (
//     <svg
//       className={className ?? ""}
//       width="33"
//       height="33"
//       viewBox="0 0 33 33"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M2.25592 20.7437C2.25592 22.529 3.70318 23.9764 5.48849 23.9764H8.72106V21.8213H5.48849C4.89339 21.8213 4.41097 21.3388 4.41097 20.7437V5.65838C4.41097 5.06329 4.89339 4.58086 5.48849 4.58086H20.5738C21.1689 4.58086 21.6513 5.06329 21.6513 5.65838V8.89086H11.9536C10.1683 8.89086 8.72106 10.3381 8.72106 12.1234V27.2087C8.72106 28.9939 10.1683 30.4413 11.9536 30.4413H27.0389C28.8242 30.4413 30.2715 28.9939 30.2715 27.2087V12.1234C30.2715 10.3381 28.8242 8.89086 27.0389 8.89086H23.8064V5.65838C23.8064 3.87308 22.3591 2.42581 20.5738 2.42581H5.48849C3.70318 2.42581 2.25592 3.87308 2.25592 5.65838V20.7437ZM10.8761 12.1234C10.8761 11.5283 11.3585 11.0459 11.9536 11.0459H27.0389C27.634 11.0459 28.1165 11.5283 28.1165 12.1234V27.2087C28.1165 27.8039 27.634 28.2862 27.0389 28.2862H11.9536C11.3585 28.2862 10.8761 27.8039 10.8761 27.2087V12.1234Z"
//         fill="currentColor"
//       />
//     </svg>
//   );
// };
