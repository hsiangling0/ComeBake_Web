import { Box } from "@chakra-ui/layout";
import { useParams } from "react-router-dom";
import { Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { dessert } from "../Component/product_detail";
import lemom_bg from "../Background/lemon_bg.jpg";
import strawberry_bg from "../Background/strawberry_bg.jpg";
import puff_bg from "../Background/puff_bg.jpg";
import muffin_bg from "../Background/maffin_bg.jpg";
import booking from "../Icons/booking_b.png";

export default function Product() {
  const { kind } = useParams();
  const url = {
    lemon: lemom_bg,
    strawberry: strawberry_bg,
    maffin: muffin_bg,
    puff: puff_bg,
  };
  const MotionImage = motion(Image);
  const variants = {
    visible: {
      opacity: 1,
      scale: [2.5, 2.1, 2.5],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        duration: 1.3,
      },
    },
  };
  return (
    <Box w="100vw" h="100vh" bgColor="#ffe067">
      {dessert[kind]["up"] ? (
        <Image src={url[kind]} />
      ) : (
        <Image position="absolute" bottom="0" src={url[kind]} />
      )}
      <Link href={"/ComeBake_Web/#/booking/" + kind}>
        <MotionImage
          animate="visible"
          variants={variants}
          src={booking}
          h="12vh"
          top={dessert[kind]["top"]}
          left={dessert[kind]["left"]}
          position="absolute"
        />
      </Link>
    </Box>
  );
}
