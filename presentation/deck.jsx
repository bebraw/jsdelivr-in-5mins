import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";
import images from "./images";

preloader([images.network]);

const slideTransition = ['zoom', 'fade'];

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit lineHeight={1} textColor="primary">
            jsDelivr
          </Heading>
          <Heading size={2} textColor="secondary">
            in 5 Minutes
          </Heading>
        </Slide>
        <Slide transition={slideTransition} bgColor="primary">
          <Heading size={1} fit lineHeight={1} textColor="tertiary">
            Multi-CDN
          </Heading>
        </Slide>
        <Slide transition={slideTransition} bgColor="primary">
          <Image src={images.network} margin="0px auto 40px" height="475px"/>
        </Slide>
        <Slide transition={slideTransition} bgColor="primary">
          <Heading size={2} lineHeight={1} textColor="tertiary">
            Sites Using jsDelivr
          </Heading>
          <Image src={images.sites} margin="60px auto 100px" height="399px"/>
        </Slide>
        <Slide transition={slideTransition} bgColor="primary">
          <iframe
            width="100%"
            height="600px"
            src="https://www.jsdelivr.com/statistics"/>
        </Slide>
      </Deck>
    );
  }
}
