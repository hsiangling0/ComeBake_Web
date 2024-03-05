import { Box } from "@chakra-ui/layout";
import { Image, Link } from "@chakra-ui/react";
import introduction_bg from "../Background/introduction_bg.jpg";
import Tabs from "../Component/tabs";
import booking from "../Icons/booking_home.png";
export default function Introduction() {
  return (
    <Box
      w="100vw"
      bgColor="#fff9e1"
      bgImg={introduction_bg}
      backgroundRepeat="no-repeat"
      minH="calc(100vw*9/8)"
      backgroundSize="100%"
      position="relative"
    >
      <Tabs page="0" />
      <Box h="calc(100vw*4/5)">
        <Link href="/ComeBake_Web/">
          <Image
            src={booking}
            w="23vw"
            position="sticky"
            top="50vh"
            left="73vw"
          />
        </Link>
      </Box>

      {/* <Image src={footer_pic} zIndex="-1" position="sticky" bottom="0vh" /> */}
    </Box>
  );
}
