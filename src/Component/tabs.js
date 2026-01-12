import { useEffect } from "react";
import login from "../Icons/login.png";
import {
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
export default function Tabs(props) {
  useEffect(() => {
    const current = document.querySelectorAll(".tab");
    const page = parseInt(props.page);
    current[page].setAttribute(
      "style",
      "color: #ce3c29; text-decoration: none; cursor: auto"
    );
    current[page].removeAttribute("href");
  }, []);
  return (
    <Flex
      position="absolute"
      top="9vh"
      right="4vw"
      fontFamily="GenSenRounded"
      alignItems="center"
      fontSize="x-large"
      color="#928c71"
      fontWeight="bold"
    >
      <Breadcrumb separator="" spacing="13px">
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/">
            Home Page
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/#/introduction">
            About Us
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/#/booking/finding">
            Booking
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Image src={login} w="50px" ml="3vw" />
    </Flex>
  );
}
