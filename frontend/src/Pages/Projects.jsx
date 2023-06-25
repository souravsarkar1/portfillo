import { Heading } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../Component/ProjectCard'
const projectsDeteals = [
    {
        img: "https://drive.google.com/uc?id=1Z6NEIfT0wcyOpfjTelu_ISR52-HRBsfE",
        title: "Develop a fully responsive website dedicated to showcasing the unique features, attractions, and cultural heritage of my village, ensuring optimal display and usability across different devices.",
        teackStack: "React, Ract-Radux, MongoDB, Chakra UI",
        link: "https://6488b2e7506cad09e60020d9--bright-caramel-cda989.netlify.app/login",
        gitLink: "https://github.com/souravsarkar1/Barajiakur/tree/main/miniproject",
        video: ''
    },
    {
        img: "https://drive.google.com/uc?id=13kbiv-NRuNG3enEvmOOx31RSjdxsEMdp",
        title: "Discover exquisite furniture that combines style and comfort. Our curated collection offers timeless classics, contemporary marvels, and eclectic masterpieces. Transform your living spaces with elegant designs and exceptional craftsmanship. Welcome to Modren Furniture.",
        teackStack: "React, Ract-Radux, MongoDB, Chakra UI",
        link: "https://6488c9d13b80f41a14a599e8--strong-sunshine-3e6158.netlify.app/",
        gitLink: "https://github.com/souravsarkar1/onerous-ants-4416",
        video: "https://drive.google.com/file/d/1tdqawXtFZ2ixSjZ__B400ji-vJr4hBhz/view"
    },
    {
        img: "https://drive.google.com/uc?id=1wITOuA_5bd6_y0dqAX47BckgNyMeK_R3",
        title: "Diesel Web clone , with login signup features and full payment process",
        teackStack: "React, Chakra UI, MUI,Context",
        link: "https://6488cb75304b69142b07ed3d--dashing-zuccutto-6c833f.netlify.app/",
        gitLink: "https://github.com/souravsarkar1/-economic-nest-8248",
        video: 'https://drive.google.com/file/d/13USr1CQoFKi-kneb3ToLVzJu97IT694Y/view'
    },
    {
        img: "https://drive.google.com/uc?id=1Rfv_2vYgqV6jzHgeP7K30-c1nXsYY31V",
        title: "CarGuy is about your nessecery part about your car like battery,horn,gear all the equipments, with loginin signup and full paymet method",
        teackStack: "HTML, css, JS,boostrap",
        link: "https://6488cb75304b69142b07ed3d--dashing-zuccutto-6c833f.netlify.app/",
        gitLink: "https://github.com/souravsarkar1/-economic-nest-8248",
        video: "https://drive.google.com/uc?id=1lH6dQFqzOpzt7J4zAynMtJJsRYotzBtU"
    },
    {
        img: "https://drive.google.com/uc?id=13w6XEA_ocA8delLUCZAi7pcYFO3ciCsM",
        title: "Spotify clone useing html,css and js and font awesome",
        teackStack: "HTML, css, JS",
        link: "https://6488ce9812e09b1edbd5b566--leafy-faun-26a5d1.netlify.app/",
        gitLink: ""
    },
    {
        img: "https://drive.google.com/uc?id=1WcPsbzYvJnm3GxIp4WLl3QOZ0rEcOlhR",
        title: "Bewakuf clone with login signup and full payment options",
        teackStack: "React, Chakra UI, MUI",
        link: "https://bewakuf-souravsarkar1.vercel.app/",
        gitLink: ""
    },
    {
        img: "https://drive.google.com/uc?id=1sr3XsHI0YhzzeRfigEw0HcTbo7tsSuQJ",
        title: "Best buy clone with login signup useing localstorage and full paymetn method",
        teackStack: "HTML, css, js",
        link: "https://stellar-medovik-658140.netlify.app/",
        gitLink: "https://drive.google.com/uc?id=12qyHJ7PX6KrRNcTXmgPVxNKq1c0nk4o3",
        video: "https://drive.google.com/file/d/12qyHJ7PX6KrRNcTXmgPVxNKq1c0nk4o3/view?usp=sharing"
    },

]
const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
                margin: "20px",
                padding: "20px"
            }}
        >
            <Heading color={'green'}>Projects</Heading>
            {projectsDeteals.map((el, i) => (
                <ProjectCard key={i} {...el} />
            ))}
        </motion.div>
    )
}

export default Projects
