export let easyIntervalsConfiguration = {
  do: true,    do_s: true,    do_b: true,    do_n: true,   do_up: true,   do_down: true,
  //do: true,    do_s: false,    do_b: false,    do_n: true,   do_up: true,   do_down: false,
  dos: false,  dos_s: false,  dos_b: false,  dos_n: true,  dos_up: true,  dos_down: false,
  reb: false,  reb_s: false,  reb_b: false,  reb_n: true,  reb_up: true,  reb_down: false,
  re: true,    re_s: true,    re_b: true,    re_n: true,   re_up: true,   re_down: true,
  res: false,  res_s: false,  res_b: false,  res_n: true,  res_up: true,  res_down: false,
  mib: false,  mib_s: false,  mib_b: false,  mib_n: true,  mib_up: true,  mib_down: false,
  //mi: true,    mi_s: false,   mi_b: false,   mi_n: true,   mi_up: true,   mi_down: true,
  mi: true,    mi_s: false,   mi_b: false,   mi_n: true,   mi_up: true,   mi_down: true,
  fa: false,   fa_s: false,   fa_b: false,   fa_n: true,   fa_up: true,   fa_down: false,
  fas: false,  fas_s: false,  fas_b: false,  fas_n: true,  fas_up: true,  fas_down: false,
  solb: false, solb_s: false, solb_b: false, solb_n: true, solb_up: true, solb_down: false,
  sol: false,  sol_s: false,  sol_b: false,  sol_n: true,  sol_up: true,  sol_down: false,
  sols: false, sols_s: false, sols_b: false, sols_n: true, sols_up: true, sols_down: false,
  lab: false,  lab_s: false,  lab_b: false,  lab_n: true,  lab_up: true,  lab_down: false,
  la: false,   la_s: false,   la_b: false,   la_n: true,   la_up: true,   la_down: false,
  las: false,  las_s: false,  las_b: false,  las_n: true,  las_up: true,  las_down: false,
  sib: false,  sib_s: false,  sib_b: false,  sib_n: true,  sib_up: true,  sib_down: false,
  si: false,   si_s: false,   si_b: false,   si_n: true,   si_up: true,   si_down: false,
  difficult: false,
};

const getSelectedNotes1FromConfiguration = (configuration)=>{
  const c = configuration;
  const notes = [];

  if (c.do === true) notes.push("do");
  if (c.dos === true) notes.push("dos");
  if (c.reb === true) notes.push("reb");
  if (c.re === true) notes.push("re");
  if (c.res === true) notes.push("res");
  if (c.mib === true) notes.push("mib");
  if (c.mi === true) notes.push("mi");
  if (c.fa === true) notes.push("fa");
  if (c.fas === true) notes.push("fas");
  if (c.solb === true) notes.push("solb");
  if (c.sol === true) notes.push("sol");
  if (c.sols === true) notes.push("sols");
  if (c.lab === true) notes.push("lab");
  if (c.la === true) notes.push("la");
  if (c.las === true) notes.push("las");
  if (c.sib === true) notes.push("sib");
  if (c.si === true) notes.push("si");

  return notes;
};


export const isConfigurationRight = (configuration) => {
  const c = configuration;
  const result = true;

  if ((c.do  === false) && (c.dos  === false) && (c.reb === false) && (c.re  === false) && (c.res  === false) &&
      (c.mib === false) && (c.mi   === false) && (c.fa  === false) && (c.fas === false) && (c.solb === false) &&
      (c.sol === false) && (c.sols === false) && (c.lab === false) && (c.la  === false) && (c.las  === false) &&
      (c.sib === false) && (c.si   === false))
      return false;

  if ((c.do_s   === false && c.do_b   === false && c.do_n   === false) || (c.do_up   === false && c.do_down   === false)) return false;
  if ((c.dos_s  === false && c.dos_b  === false && c.dos_n  === false) || (c.dos_up  === false && c.dos_down  === false)) return false;
  if ((c.reb_s  === false && c.reb_b  === false && c.reb_n  === false) || (c.reb_up  === false && c.reb_down  === false)) return false;
  if ((c.re_s   === false && c.re_b   === false && c.re_n   === false) || (c.re_up   === false && c.re_down   === false)) return false;
  if ((c.res_s  === false && c.res_b  === false && c.res_n  === false) || (c.res_up  === false && c.res_down  === false)) return false;
  if ((c.mib_s  === false && c.mib_b  === false && c.mib_n  === false) || (c.mib_up  === false && c.mib_down  === false)) return false;
  if ((c.mi_s   === false && c.mi_b   === false && c.mi_n   === false) || (c.mi_up   === false && c.mi_down   === false)) return false;
  if ((c.fa_s   === false && c.fa_b   === false && c.fa_n   === false) || (c.fa_up   === false && c.fa_down   === false)) return false;
  if ((c.fas_s  === false && c.fas_b  === false && c.fas_n  === false) || (c.fas_up  === false && c.fas_down  === false)) return false;
  if ((c.solb_s === false && c.solb_b === false && c.solb_n === false) || (c.solb_up === false && c.solb_down === false)) return false;
  if ((c.sol_s  === false && c.sol_b  === false && c.sol_n  === false) || (c.sol_up  === false && c.sol_down  === false)) return false;
  if ((c.sols_s === false && c.sols_b === false && c.sols_n === false) || (c.sols_up === false && c.sols_down === false)) return false;
  if ((c.lab_s  === false && c.lab_b  === false && c.lab_n  === false) || (c.lab_up  === false && c.lab_down  === false)) return false;
  if ((c.la_s   === false && c.la_b   === false && c.la_n   === false) || (c.la_up   === false && c.la_down   === false)) return false;
  if ((c.las_s  === false && c.las_b  === false && c.las_n  === false) || (c.las_up  === false && c.las_down  === false)) return false;
  if ((c.sib_s  === false && c.sib_b  === false && c.sib_n  === false) || (c.sib_up  === false && c.sib_down  === false)) return false;
  if ((c.si_s   === false && c.si_b   === false && c.si_n   === false) || (c.si_up   === false && c.si_down   === false)) return false;

  return result;
};

export const filteredEasyIntervals = (intervals, configuration) =>{
  // aquí se comprueba la integridad de configuration y devuelve un array con un intervalo solo: do - re

  const notes1 = getSelectedNotes1FromConfiguration(configuration);
  const filteredResult = [];

  intervals.forEach(interval => {
    if (notes1.includes(interval.note1WithLetters)) {
      if ( ((configuration[`${interval.note1WithLetters}_s`]   && interval.sharp)    ||
            (configuration[`${interval.note1WithLetters}_b`]    && interval.flat)    ||
            (configuration[`${interval.note1WithLetters}_n`]    && interval.natural)) 
           
              &&
           
           ((configuration[`${interval.note1WithLetters}_up`]  && (interval.direction === "+"))   ||
            (configuration[`${interval.note1WithLetters}_down`] && (interval.direction === "-")))
         ) 
             {
               filteredResult.push(interval);
               // esto es para difficult
               //  if (configuration.difficult = true) {
               //    if (interval.difficult) filteredResult.push(interval); 
               //  } else {
               //    filteredResult.push(interval);
               //  }
             }
    }

  });

  return filteredResult;
};

export const unsortedIntervals = (intervals)=> {
    for (let i = intervals.length - 1; i > 0; i--) {
        // Generar un índice aleatorio entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Intercambiar los elementos arr[i] y arr[j]
        [intervals[i], intervals[j]] = [intervals[j], intervals[i]];
      }
      return intervals;
};