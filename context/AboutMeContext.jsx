import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';
import { skillsData as skillsDataJson, SkillsHeading as skillsHeading } from '../data/skillsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  const clientsHeading = clientsPageHeading;
  const [clientsData, setClientsData] = useState(clientsDataJson);
  const [skillsData, setSkillsData] = useState(skillsDataJson);

  return (
    <AboutMeContext.Provider
      value={{
        aboutMe,
        setAboutMe,
        clientsHeading,
        clientsData,
        setClientsData,
        skillsData,
        setSkillsData,
        skillsHeading,
      }}
    >
      {children}
    </AboutMeContext.Provider>
  );
};

export default AboutMeContext;
