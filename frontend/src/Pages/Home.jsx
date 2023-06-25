import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react'
import githubicon from '../icons/GitHub-Mark.png';
import linkdinLogo from '../icons/download.png'
import { motion } from 'framer-motion';



const Home = () => {
    console.log('ratna');
    return (
        <div className='main' style={{
            margin: '20px',
            padding: '30px',
           height : '120vh'
        }}>
            <Box>
                <FlexContainer>
                    <Box className='firstChild'>
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <Heading as="h2" size="lg" color="blackAlpha.1000">
                                    Hey, my name is
                                </Heading>
                            </motion.div>
                            <br />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Heading as="h2" size="2xl">
                                    Sourav Sarkar
                                </Heading>
                            </motion.div>
                        </div>
                        <br />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <Heading class="web-developer-heading">{`A Full Stack Developer who loves building projects.`}</Heading>
                            <Heading class="web-developer-heading">{`I am equipped with a variety of technologies and tools to help me build the best possible product.`}</Heading>
                        </motion.div>
                        <br />
                        <br />
                        <br />
                        <a target='_blank' rel='noopener noreferrer' href="https://drive.google.com/uc?id=1QtbSud7l83e8PMk9nbT9Apd4_AZRAGOv"><Button colorScheme='teal' size='lg'>Resume</Button></a>
                        <br />
                        <br />
                        <br />
                        <Flex gap={0} justifyContent={'space-around'}>
                            <a href='https://github.com/souravsarkar1' target='_blank' rel='noopener noreferrer'><img src={githubicon} alt="Github-Link" id='logoLink'/></a>
                            <a href='https://www.linkedin.com/in/sourav-sarkar-2b5a2a212/' target='_blank' rel='noopener noreferrer'><img src={linkdinLogo} alt="LinkedIn-Link" id='logoLink'/></a>
                        </Flex>
                    </Box>
                    <br />
                    <br />
                    <br />
                    <Box className='secondChild'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 5, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <img src={'https://media.licdn.com/dms/image/D5603AQGiXvkDWC88kg/profile-displayphoto-shrink_400_400/0/1680617287870?e=1687392000&v=beta&t=w7kNSa9bpPzoIthXN8fBXAGADzI9kswHfQ11PzynfEE'} alt="myphoto" />
                        </motion.div>

                    </Box>
                </FlexContainer>
                <br />

            </Box>
        </div>
    )
}

export default Home

const FlexContainer = styled.div`
    //padding: 200px;
    width: 100%;
    //height: 300px;
    display: flex;
    .main{
        height : 100vh;
    }
    justify-content: space-around;
    .firstChild{
        align-items: center;
    }
    .firstChild img{
        width: 100px;
    }
    .firstChild BUtton:hover{
        background-color: green;
    }
    .firstChild img:hover {
    width: 120px;
   // border: 1px solid red;
}
#headingNmae:hover{
color: #a01db8;
}
.web-developer-heading::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url('your-icon-url-here');
  background-size: cover;
  margin-right: 8px;
  font-size: large;
}
.web-developer-heading:hover{
    color: blue;
}
    .secondChild img{
        border-radius: 50%;
    }
    @media only screen and (max-width: 900px){
       // margin: 100px;
        //padding: 100px;
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        .firstChild .secondChild{
            align-items: center;
            margin: auto;
            justify-content: center;
        }
        .secondChild img{
            margin: auto;
        }
    }
    @media only screen and (max-width: 300px){
        display: flex;
        flex-direction: column;
        padding: 30px;
        .main{
            height: auto;
        }
        #logoLink{
            border-radius: 50%;
        }
        .secondChild img{
            margin: auto;
        }
    }
`;

