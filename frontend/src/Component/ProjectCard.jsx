import styled from 'styled-components';
import React from 'react';
import { Heading, IconButton, Text } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
const ProjectCard = ({ title, img, teackStack, link ,gitLink }) => {
    return (
        <StyledDiv>
            <div className="imgdiv">
                <img src={img} alt="img" />
            </div>
            <div>
                <Text fontSize={20} color={'blue.500'}>
                    {title}
                </Text>
                <hr color="black" />
                <Heading color={'green.600'}>Tech Stack: {teackStack}</Heading>
                <br />
                <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <IconButton
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsGithub size="28px" />}
                />
                </a>
                <br />
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Click Here to Visit the website
                </a>
            </div>
        </StyledDiv>
    );
};

export default ProjectCard;

const StyledDiv = styled.div`
  /* Add your CSS styles here */
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;

  .imgdiv {
    /* Styles for the image container */
    width: 100%;
    max-width: 700px;
    img {
      /* Styles for the image */
      width: 100%;
      height: auto;
    }
  }

  a {
    /* Styles for the link */
    display: block;
    margin-top: 10px;
    color: blue;
    text-decoration: none;
  }

  @media (min-width: 600px) {
    /* Styles for tablet view */
    flex-direction: row;
    gap: 20px;
    justify-content: space-between;

    .imgdiv {
      width: 40%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (min-width: 768px) {
    /* Styles for phone view */
    .imgdiv {
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
