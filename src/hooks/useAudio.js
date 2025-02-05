import { useRef } from "react";

const note = {
    fa3 : "01-fa3",
    fas3 : "02-fas3",
    solb3 : "02-fas3",
    sol3 : "03-sol3",
    sols3 : "04-sols3",
    lab3 : "04-sols3",
    la3 : "05-la3",
    las3 : "06-las3",
    sib3 : "06-las3",
    si3 : "07-si3",
    do4 : "08-do4",
    dos4 : "09-dos4",
    reb4 : "09-dos4",
    re4 : "10-re4",
    res4 : "11-res4",
    mib4 : "11-res4",
    mi4 : "12-mi4",
    fa4 : "13-fa4",
    fas4 : "14-fas4",
    solb4 : "14-fas4",
    sol4 : "15-sol4",
    sols4 : "16-sols4",
    lab4 : "16-sols4",
    la4 : "17-la4",
    las4 : "18-las4",
    sib4 : "18-las4",
    si4 : "19-si4",
    do5 : "20-do5",
    dos5 : "21-dos5",
    reb5 : "21-dos5",
    re5 : "22-re5",
    res5 : "23-res5",
    mib5 : "23-res5",
    mi5 : "24-mi5",
    fa5 : "25-fa5",
    fas5 : "26-fas5",
    solb5 : "26-fas5",
    sol5 : "27-sol5",
    sols5 : "28-sols5",
    lab5 : "28-sols5",
    la5 : "29-la5",
    las5 : "30-las5",
    sib5 : "30-las5",
    si5 : "31-si5",
    do6 : "32-do6",
    dos6 : "33-dos6",
    reb6 : "33-dos6",
    re6 : "34-re6",
  };

export const useAudio = () => {
    const audioRef = useRef(null);
      
    const playNote = (activeNote)=>{
       audioRef.current.volume= 0.5;
       if (note[activeNote]) {
          audioRef.current.src = `/assets/${note[activeNote]}.mp3`;
          audioRef.current.play();
       }
     }

    return {
       audioRef,
       playNote,
    };
};