import React from 'react'
import { Heading } from '@chakra-ui/react'
import htmlLogo from '../icons/html.png'
import cssLogo from '../icons/css.png'
import jsLogo from '../icons/js.png'
import reactLogo from '../icons/react.png'
import reduxLogo from '../icons/redux.png'
import chakraLogo from '../icons/chakra.png'
import jestLogo from '../icons/jest.png'
import typescriptLogo from '../icons/typescripte.png'
import SkillsCard from '../Component/SkillsCard'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import nodeLogo from '../icons/node js.png'
import expressLogo from '../icons/express.png'
import mongodb from '../icons/mongodb.png'
import mongooseLogo from '../icons/mongoose.png'
import postManLogo from '../icons/npm.png'
import githubLogo from '../icons/GitHub-Mark.png'
import npmLogo from '../icons/npm.png'
import ThunderClientLogo from '../icons/thunderclient.png'
const frontEndLink = [
    { id: 1, imgLink: htmlLogo, title: 'HTML' },
    { id: 2, imgLink: cssLogo, title: 'CSS' },
    { id: 3, imgLink: jsLogo, title: 'JAVASCRIPT' },
    { id: 4, imgLink: reactLogo, title: 'REACT' },
    { id: 5, imgLink: reduxLogo, title: 'REDUX' },
    { id: 6, imgLink: chakraLogo, title: 'CHAKRA UI' },
    { id: 7, imgLink: jestLogo, title: "JEST" },
    { id: 7, imgLink: typescriptLogo, title: "TYPESCRIPT" },
]

const backendLink = [
    { id: 1, imgLink: nodeLogo, title: 'NODE JS' },
    { id: 2, imgLink: expressLogo, title: 'EXPRESS' },
    { id: 3, imgLink: mongodb, title: 'MONGO DB' },
    { id: 4, imgLink: mongooseLogo, title: 'MONGOOSE' },
]

const otherSkill = [
    { id: 1, imgLink: npmLogo, title: 'NPM' },
    { id: 2, imgLink: githubLogo, title: 'GITHUB' },
    { id: 3, imgLink: postManLogo, title: 'POSTMAN' },
    { id: 4, imgLink: ThunderClientLogo, title: 'THUNDER CLIENT' }
]

const Skills = () => {
    return (
        <div>
            <Heading color='green'>Skills</Heading>
            <br />
            <br />
            <Heading>FrondEnd Skills</Heading>
            <br />
            <br />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <FrondtEndSkills>

                    {frontEndLink.map((el) => (
                        <SkillsCard key={el.id} {...el} />
                    ))}
                </FrondtEndSkills>
            </motion.div>
            <br />
            <br />
            <hr />
            <Heading>Backend Skills</Heading>
            <br />
            <br />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <BackEndSkills>
                    {backendLink.map((el) => (
                        <SkillsCard key={el.id} {...el} />
                    ))}
                </BackEndSkills>
            </motion.div>
            <br />
            <br />
            <Heading>Other Skills</Heading>
            <br />
            <br />
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                        <OtherSkills>
                        {otherSkill.map((el) => (
                            <SkillsCard key={el.id} {...el} />
                        ))}
                        </OtherSkills>
            </motion.div>
        </div>
    )
}

export default Skills

const FrondtEndSkills = styled.div`
width: 80%;
margin: auto;
display: grid;
grid-template-columns: repeat(4 , 1fr);
row-gap: 10px;
@media (max-width: 480px) {
    margin: auto;
    grid-template-columns: 1fr;
  }
`
const BackEndSkills = styled.div`
width: 80%;
margin: auto;
display: grid;
grid-template-columns: repeat(4 , 1fr);
row-gap: 10px;
@media (max-width: 480px) {
    margin: auto;
    grid-template-columns: 1fr;
  }
`
const OtherSkills = styled.div`
width: 80%;
margin: auto;
display: grid;
grid-template-columns: repeat(4 , 1fr);
row-gap: 10px;
@media (max-width: 480px) {
    margin: auto;
    grid-template-columns: 1fr;
  }
`