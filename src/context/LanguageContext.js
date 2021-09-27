import {createContext, useState} from "react";

const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
    es:{
        link1:"sobre mi",
        link2:"blog",
        link3:"portafolio",
        initialText1:"Hola! Mi nombre es",
        initialName:"Jeanette",
        initialSurname:"Garcia Barrera",
        initialText2:"Desarrolladora web full stack y estudiante apasionada por la tecnologia",
        aboutTitle:"Sobre mi ...",
        aboutText1:"Mi nombre es ",
        aboutText2:"Jeane",
        aboutText4:"Desarrolladora Web Full Stack",
        aboutText3:", tengo 23 años y soy una estudiante de la vida y de la tecnologia. Soy ",
        aboutText5:" con mayor foco en diseño y desarrollos front-end.",
        aboutText6:"Apasionada por la tecnología, razón por la cual estudio diferentes áreas de la misma. Me puedes encontrar en diferentes seminarios, grupos, charlas sobre ciberseguridad, inteligencia artificial y bigdata. ",
        aboutText7:"Pequeños momentos de la vida que disfruto: ",
        aboutText8:"Disfrutó un muy buen cafe por la mañana, ver dormir a mi perrita, aprender cada dia algo nuevo, y pasar tiempo con mi familia",
        skillTitle:"Puedo ayudarte con ....",
        skillTextStrong1:"Desarrollos Front-end:",
        skillText1:" trabajando con Javascript, React, Angular, TailwindCss, Sass, Animaciones y Diseños Resposivos.",
        skillTextStrong2:"Desarollos Back-end:",
        skillText2:" trabajando con NodeJS, JAVA, MySQL, MongoDB entre otros.",
        skillText3:"De la misma forma tengo conocimiento en Python y estoy en ciclos formativos de ",
        skillTextStrong3:"Analisis de Datos, Big Data y Inteligencia Artificial",

    },
    en:{
        link1:"about me",
        link2:"blog",
        link3:"portfolio",
        initialText1:"Hi! my name is",
        initialName:"Jeanette",
        initialSurname:"Garcia Barrera",
        initialText2:"I'm full stack web developer and a student passionate about technology",
        aboutTitle:"About me ...",
        aboutText1:"My name is ",
        aboutText2:"Jeane",
        aboutText4:"Full Stack Web Developer",
        aboutText3:", I'm 23 years old and I'm a student of life and technology. I'm a ",
        aboutText5:" with more focus on design and front-end development.",
        aboutText6:"I'm passionate about technology, reason why I study different areas of it. You will find me participating in different webiners, meetups, talks and training about cibersegurity, artificial intelligence and big data. ",
        aboutText7:"Small moments that I enjoy:",
        aboutText8:"Enjoying a good coffe in the morning, Watching my dog sleep, Learning something new every day, spending time with my family",
        skillTitle:"I can help you with....",
        skillTextStrong1:"Front-end developments:",
        skillText1:" working with Javascript, React, Angular, TailwindCss, Sass, Animations and Responsive design.",
        skillTextStrong2:"Back-end developments:",
        skillText2:" working with NodeJS, JAVA, MySQL, MongoDB among others.",
        skillText3:"In the same way I have knowledge in Python and I'm in training cycles of ",
        skillTextStrong3:"Data Analysis, Big Data and Artificial Intelligence",
    
    }
}

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        if(e.target.value === "es"){
            setLanguage("es");
            setTexts(translations.es);
        }else {
            setLanguage("en");
            setTexts(translations.en);
        }
    }
    const data={texts, handleLanguage};
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}
export {LanguageProvider};

export default LanguageContext;