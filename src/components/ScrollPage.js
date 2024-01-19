import React, { useEffect, useRef, useState } from "react";
import {
  Animator,
  Fade,
  FadeIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  StickyIn,
  ZoomIn,
  batch,
} from "react-scroll-motion";
import { Aipin } from "./Aipin";
import { Typography } from "@mui/material";
import "../../src/styles/ScrollPage.css";
import { Newinteraction } from "./Newinteraction";
import { Newinteraction2 } from "./newInteraction2";
import { Newinteraction3 } from "./Newinteraction3";
import { Newinteraction4 } from "./Newinteraction4";
import { Newinteraction5 } from "./Newinteraction5";
import { Newinteraction6 } from "./Newinteraction6";
import { Aimic } from "./Aimic";

const ScrollDot = () => {
  return (
    <div className="scroll-dot">
      <span className="tooltip">Scroll To Top</span>
    </div>
  );
};

// Scrollpage component
export const Scrollpage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const ZoomInAnimation = batch(StickyIn(), FadeIn(), ZoomIn(10));
  const ZoomOutAnimation = batch(StickyIn(), Fade(), MoveOut(0, -200));
  const aipinRef = useRef(null);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const scale = Math.max(1 - scrollY / 500, 0.8);
    if (aipinRef.current) {
      aipinRef.current.style.transition = "transform 0.3s ease";
      aipinRef.current.style.transform = `scale(${scale})`;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <ScrollContainer
        className={isHovered ? "hovered" : ""}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: "black",
        }}
      >
        <ScrollPage page={0}>
          <Animator animation={ZoomInAnimation}>
            <div className="aipin-container" ref={aipinRef}>
              <Aipin />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator
            style={{
              transition: "opacity 0.3s ease",
            }}
            animation={batch(Fade(), StickyIn(), MoveOut(0, -200))}
          >
            <Newinteraction />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator
            style={{
              transition: "opacity 0.3s ease",
            }}
            animation={batch(Fade(), StickyIn(), MoveOut(0, -200))}
          >
            <Newinteraction2 />
          </Animator>
        </ScrollPage>

        <ScrollPage page={3}>
          <Animator
            style={{
              transition: "opacity 0.3s ease",
            }}
            animation={batch(Fade(), StickyIn(), MoveOut(0, -200))}
          >
            <Newinteraction3 />
          </Animator>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator
            style={{
              transition: "opacity 0.3s ease",
            }}
            animation={batch(Fade(), StickyIn(), MoveOut(0, -200))}
          >
            <Newinteraction4 />
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator
            style={{
              transition: "opacity 0.3s ease",
            }}
            animation={batch(Fade(), StickyIn(), MoveOut(0, -200))}
          >
            <Newinteraction5 />
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator
            style={{
              transition: "opacity 0.3s ease",
            }}
            animation={batch(Fade(), StickyIn(), MoveOut(0, -200))}
          >
            <Newinteraction6 />
          </Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={ZoomInAnimation}>
            <div className="aipin-container" ref={aipinRef}>
              <Aimic />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
      <ScrollDot />
    </div>
  );
};
