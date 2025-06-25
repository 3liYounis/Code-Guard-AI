import { Heading, Stack, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <Stack p={20} height="100%" justifyContent="center" alignItems="center">
      <Heading mb={5} fontSize={30}>
        About
      </Heading>
      <Text fontSize='20px'>
        this app is designed by HANDS DOWN the best programmer in the world
        (Yazan Abomokh, king of the andels and protector of the realm)
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam ea
        quasi recusandae reprehenderit repellendus laudantium distinctio eveniet
        cumque laboriosam! Inventore voluptatibus qui atque nesciunt sed nisi
        facere corporis quasi illum. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Id, laborum odit. Voluptate iusto nulla soluta animi?
        At debitis earum molestiae omnis accusamus numquam atque cum
        perspiciatis vel asperiores, laudantium enim? Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Ipsam at cumque iste doloremque
        laudantium nesciunt atque fugiat, quos sequi? Sint rem illo aut voluptas
        blanditiis facere obcaecati inventore, nisi libero?
      </Text>
    </Stack>
  );
};

export default About;
