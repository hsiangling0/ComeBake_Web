import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Select,
  Image,
  useDisclosure,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import booking_bg from "../Background/booking_bg.jpg";
import register_button from "../Icons/register_button.png";
import Tabs from "../Component/tabs";
import styled from "@emotion/styled";
export default function Booking() {
  const { kind } = useParams();
  const [course, setCourse] = useState("還沒決定，想現場再看看！");
  const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });
  const [courseOption, setCoureOption] = useState([
    "檸檬塔課程",
    "草莓蛋糕課程",
    "草莓杯子蛋糕課程",
    "小泡芙課程",
    "還沒決定，想現場再看看！",
  ]);
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "請輸入電子郵件地址";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "信箱格式錯誤";
    }
    if (!values.phone) {
      errors.phone = "請輸入聯絡電話";
    } else if (!/^09[0-9]{2}-[0-9]{3}-[0-9]{3}$/i.test(values.phone)) {
      errors.phone = "電話格式錯誤";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      people: 1,
      date: "",
      time: "11:00-13:00",
      course: kind,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
      onOpen();
    },
  });
  useEffect(() => {
    var temp = courseOption;
    var test = temp[0];
    switch (kind) {
      case "lemon":
        test = temp.splice(0, 1);
        break;
      case "strawberry":
        test = temp.splice(1, 1);
        break;
      case "maffin":
        test = temp.splice(2, 1);
        break;
      case "puff":
        test = temp.splice(3, 1);
        break;
      default:
        test = temp.splice(4, 1);
        break;
    }
    setCourse(test);
    temp.unshift(test);
    setCoureOption(temp);
  }, []);
  return (
    <Box bgImg={booking_bg} bgColor="#fff9e1" h="100vh" bgSize={"100% auto"}>
      <Tabs page="2" />
      <Box
        w="100vw"
        position="absolute"
        top="30vh"
        left="8vw"
        fontFamily="GenSenRounded"
      >
        <form onSubmit={formik.handleSubmit}>
          <Box w="50vw">
            <Flex mb="3vh">
              <FormControl isRequired>
                <Flex>
                  <CustomLabel>姓名:</CustomLabel>
                  <Input
                    w="210px"
                    name="name"
                    placeholder="報名人姓名"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired isInvalid={formik.errors.phone}>
                <Flex>
                  <CustomLabel>聯絡電話:</CustomLabel>
                  <Input
                    w="210px"
                    name="phone"
                    placeholder="09xx-xxx-xxx"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                </Flex>
                <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl isRequired isInvalid={formik.errors.email} mb="3vh">
              <Flex>
                <CustomLabel>Email:</CustomLabel>
                <Input
                  w="41vw"
                  name="email"
                  type="email"
                  placeholder="報名人電子郵件"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Flex>
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <Flex mb="3vh">
                <CustomLabel>入場／陪同人數:</CustomLabel>
                <Select name="people" w="230px" onChange={formik.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Select>
              </Flex>
            </FormControl>
            <Flex mb="3vh">
              <FormControl isRequired>
                <Flex>
                  <CustomLabel>日期:</CustomLabel>
                  <Input
                    w="230px"
                    name="date"
                    type="date"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                  />
                </Flex>
              </FormControl>
              <FormControl isRequired>
                <Flex>
                  <CustomLabel>時段:</CustomLabel>
                  <Select name="time" w="230px" onChange={formik.handleChange}>
                    <option value="11:00-13:00">11:00-13:00</option>
                    <option value="15:00-17:00">15:00-17:00</option>
                    <option value="19:00-21:00">19:00-21:00</option>
                  </Select>
                </Flex>
              </FormControl>
            </Flex>

            <FormControl isRequired>
              <Flex mb="4vh">
                <CustomLabel>選擇體驗課程:</CustomLabel>
                <Select name="course" w="35vw" onChange={formik.handleChange}>
                  {courseOption &&
                    courseOption.map((e, index) => (
                      <option key={index} value={e}>
                        {e}
                      </option>
                    ))}
                </Select>
              </Flex>
            </FormControl>
          </Box>
          <button type="submit">
            <Image
              position="absolute"
              bottom="0.5vh"
              right="30vw"
              h="80px"
              src={register_button}
            />
          </button>
        </form>
        <Box w="50vw">
          <Text color="#eaab99">
            在預約我們的烘焙課程前，請注意以下事項，以確保您的預約和參加過程順利愉快：
            <br />
            提前預訂：請務必提前預訂您感興趣的烘焙課程，因為名額有限,額滿即止。您可以通過我們的網站預訂或致電聯絡我們的客服團隊。
            <br />
            付款方式：課程費用需在預訂時完成付款。接受現金和信用卡支付。
            <br />
            取消政策：如果您需要取消預約，請提前 24
            小時告知我們。若未在規定時間內取消，可能無法退款。
            <br />
            準時到達：請您準時到達課程地點。我們建議提前 15
            分鐘到達，以便順利完成報到程序。
          </Text>
        </Box>
      </Box>
      {isOpen && (
        <Alert
          status="success"
          position="absolute"
          top="15px"
          left="calc(50% - 92px)"
          w="180px"
          h="56px"
          borderRadius="4px"
        >
          <AlertIcon />
          預約成功！
          <CloseButton w="8px" h="8px" ml="16px" onClick={onClose} />
        </Alert>
      )}
    </Box>
  );
}
const CustomLabel = styled(FormLabel)`
  font-size: 22px;
  color: #5c554b;
  font-weight: bold;
`;
