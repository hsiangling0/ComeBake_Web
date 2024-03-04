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
    console.log(current[page]);
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
          <BreadcrumbLink className="tab" href="/introduciton">
            關於我們
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/">
            最新消息
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/">
            甜點課程
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/">
            烘焙環境
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink className="tab" href="/">
            聯絡我們
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Image src={login} w="50px" ml="3vw" />
    </Flex>
  );
}
