import { Box } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import Home_bg from "../Background/home_bg.jpg";
import { motion } from "framer-motion";
import lemon from "../Icons/lemon_cake.png";
import strawberry from "../Icons/strawberry_cake.png";
import puff from "../Icons/puff.png";
import maffin from "../Icons/maffin.png";
import trademark from "../Icons/trademark.png";

export default function Home() {
  const MotionImage = motion(Image);
  const variants = {
    visible: (i) => ({
      opacity: 1,
      scale: 2.5,
      transition: {
        delay: i * 0.2, // delay 的時間為 i* 0.2
        duration: i * 1.2,
      },
    }),
  };
  const variants_2 = {
    visible: (i) => ({
      opacity: 1,
      x: "0%",
      transition: {
        delay: i * 0.5, // delay 的時間為 i* 0.2
        duration: i * 1,
      },
    }),
  };
  return (
    <Box
      h="100vh"
      bgColor="#ffe067"
      bgImg={Home_bg}
      bgRepeat={"no-repeat"}
      bgSize={"100% auto"}
    >
      <Link href="/ComeBake_Web/#/product/lemon">
        <MotionImage
          custom={3}
          animate="visible"
          variants={variants}
          initial={{ opacity: 0 }}
          src={lemon}
          h="20vh"
          top="3vh"
          left="2vw"
          position="absolute"
        />
      </Link>
      <Link href="/ComeBake_Web/#/product/strawberry">
        <MotionImage
          custom={3}
          animate="visible"
          variants={variants_2}
          initial={{ opacity: 0, x: "10%" }}
          src={strawberry}
          h="30vh"
          top="-2vh"
          right="0"
          position="absolute"
        />
      </Link>
      <Link href="/ComeBake_Web/#/product/puff">
        <MotionImage
          custom={2}
          animate="visible"
          variants={variants_2}
          initial={{ opacity: 0, x: "-10%" }}
          src={puff}
          h="30vh"
          bottom="5vh"
          left="0"
          position="absolute"
        />
      </Link>
      <Link href="/ComeBake_Web/#/product/maffin">
        <MotionImage
          custom={2}
          animate="visible"
          variants={variants}
          initial={{ opacity: 0 }}
          src={maffin}
          h="15vh"
          bottom="25vh"
          right="13vw"
          position="absolute"
        />
      </Link>
      <Link href="/ComeBake_Web/#/introduction">
        <MotionImage
          custom={5}
          animate="visible"
          variants={variants}
          src={trademark}
          h="17vh"
          top="40vh"
          right="45vw"
          position="absolute"
        />
      </Link>
    </Box>
  );
}
