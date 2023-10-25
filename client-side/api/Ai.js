import React, { useState, useEffect, useCallback } from "react";

const Ai = () => {
  const [loading, isLoading] = useState(false);
  const [askai, setAskai] = useState([]);

  const [aianswerArray, setAianswerArray] = useState([
   /*  {entity:'user',
     comment:'Hi what does this site does'},
    {entity:'ai',
     comment:'i am an ai looking to work'},
    {entity:'ai',
     comment:'what do you think i do?'}, */
  ]);
  const [aianswer, setAianswer] = useState();

  //const [askdisese, setAskdisease] = useState("");
  const disease = [
    {
      group: "Respiratory Syndrome",
      effects: ["Cough", "Shortness of Breath", "Wheezing", "Chest Pain"],
    },
    {
      group: "Cardiovascular Syndrome",
      effects: ["Chest pain", "Irrelugar heart beat", "Swelling"],
    },
    {
      group: "Digestive Syndrome",
      effects: ["Nausea", "Vomiting", "Changes in Bowel habits"],
    },
    {
      group: "Nervous Syndrome",
      effects: ["Haedache", "Memory Loss", "Weakness", "Tremors"],
    },
    {
      group: "Skin Syndrome",
      effects: ["Rashes", "Itching", "Redness", "Skin discolration"],
    },
    {
      group: "Urinary Syndrome",
      effects: ["Frequent Urination", "Painful Urination", "Blood in Urine"],
    },
    {
      group: "Mental Syndrome",
      effects: ["Depression", "Anxiety", "Mood Swing"],
    },
  ];

  const [dietchart, setDietchart] = useState();
  //const [askdiet, setAskdiet] = useState("");

  const [prescibe, setPrescibe] = useState("");
  //const [doctoreport, setDoctoreport] = useState("");

  const solveDoubt = useCallback(
    async (e) => {
      e.preventDefault()
      try {
          isLoading(true);
          console.log(askai);
          console.log("AI question...",aianswerArray);
          setAianswerArray((prevArray) => [
            ...prevArray,
            { entity: 'user', comment: askai },
          ]);
          
          setAianswerArray((prevArray) => [
            ...prevArray,
            { entity: 'ai', comment: 'I will do' },
          ]);  
          setAskai('')
          isLoading(false);
      } catch (err) {
        console.log(err);
      }
    },
    [askai]
  );
  const predictDisease = useCallback(
    async (e) => {
      try {
        console.log(askai)
        setAskai('')
      } catch (err) {
        console.log(err);
      }
    },
    [askai]
  );
  const prepareDietChart = useCallback(
    async (e) => {
      try {
      } catch (err) {
        console.log(err);
      }
    },
    [aianswer]
  );
  const prescibeReport = useCallback(
    async (e) => {
      try {
      } catch (err) {
        console.log(err);
      }
    },
    [aianswer]
  );

  return {
    loading,
    askai,
    setAskai,
    aianswerArray,
    setAianswerArray,
    aianswer,
    setAianswer,
    disease,
    dietchart,
    setDietchart,
    prescibe,
    setPrescibe,
    solveDoubt,
    predictDisease,
    prepareDietChart,
    prescibeReport,
  };
};

export default Ai;