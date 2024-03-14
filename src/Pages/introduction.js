import { Box } from "@chakra-ui/layout";
import { Image, Link, Stack, Text, Flex } from "@chakra-ui/react";
import introduction_bg from "../Background/introduction_bg.jpg";
import Tabs from "../Component/tabs";
import booking from "../Icons/booking_home.png";
import { script } from "../Component/intro_script";
export default function Introduction() {
  const Display_script = (props) => (
    <Stack mb="5vh">
      <Text fontSize="55px" fontFamily="Chenyuluoyan">
        {props.title}
      </Text>
      <Text fontSize="22px" lineHeight="1.7" fontFamily="GenSenRounded">
        {props.detail}
      </Text>
    </Stack>
  );
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
        <Link href="/">
          <Image
            src={booking}
            w="23vw"
            position="sticky"
            top="50vh"
            left="73vw"
          />
        </Link>
      </Box>
      <Box position="absolute" top="42vh" left="7vw" width="55vw">
        {script.map((e, index) => (
          <Display_script key={index} title={e.title} detail={e.detail} />
        ))}
        <Stack mt="7vh" fontFamily="Chenyuluoyan">
          <Text fontSize="45px">ComeBake！</Text>
          <Text fontSize="50px">製作美味回憶的地方</Text>
        </Stack>
        <Flex
          fontFamily="Chenyuluoyan"
          align-items="center"
          position="absolute"
          left="25vw"
        >
          <Text fontSize="30px" mr="10px">
            創辦人
          </Text>
          <Text fontSize="55px">Lily</Text>
        </Flex>
      </Box>
      {/* <Image src={footer_pic} zIndex="-1" position="sticky" bottom="0vh" /> */}
    </Box>
  );
}
