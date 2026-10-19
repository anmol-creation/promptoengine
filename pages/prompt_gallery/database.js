import { naturalData } from './database/image/natural.js';
import { creativeData } from './database/image/creative.js';
import { luxuryData } from './database/image/luxury.js';
import { vibeAndFeelData } from './database/image/vibe-and-feel.js';
import { modelingAndPoseData } from './database/image/modeling-and-pose.js';
import { hyperRealistic } from './database/image/hyper-realistic.js'; // <-- Yeh line add karein
import { festival } from './database/image/festival.js';
import { cinematic } from './database/image/cinematic.js';
import { artist } from './database/image/artist.js';
import { funData } from './database/image/fun.js';
import { animal } from './database/image/animal.js';
import { mythical } from './database/image/mythical.js';
import { buttonsData } from './database/web-dev/buttons.js';
import { cardsData } from './database/web-dev/cards.js';
import { navbarsData } from './database/web-dev/navbars.js';

export const promptDatabase = {
    "Natural": naturalData,
    "Creative": creativeData,
    "luxury": luxuryData,
    "Vibe & Feel": vibeAndFeelData,
    "Modeling & Pose": modelingAndPoseData,
    "Hyper Realistic": hyperRealistic, 
    "Festival": festival, 
    "Cinematic": cinematic,
    "Artist": artist,
    "Fun": funData,
    "Animals": animal,
    "Mythical": mythical
};

export const webDevDatabase = {
    "Buttons": buttonsData,
    "Cards": cardsData,
    "Navbars": navbarsData
};
