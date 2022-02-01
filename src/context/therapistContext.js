import React, { useState, createContext, useContext } from 'react';

import { therapistBios } from '../components/bios/index.js';

// create the therapist state with the default value
export const TherapistContext = createContext({
  therapistBio: 'tomilyn',
  dictionary: therapistBios,
});

// it provides the therapist context to app
export function TherapistProvider({ children }) {
  const [therapistBio, setTherapistBio] = useState('tomilyn');

  const provider = {
    therapistBio,
    dictionary: therapistBios[therapistBio],
    userTherapistChange: selected => {
      const newTherapist = therapistBios[selected] ? selected : 'tomilyn';
      setTherapistBio(newTherapist);
    }
  };

  return (
    <TherapistContext.Provider value={provider}>
      {children}
    </TherapistContext.Provider>
  );
};

// get text according to ID & current therapist
export function Text({ tid }) {
  const therapistContext = useContext(TherapistContext);

  return therapistContext.dictionary[tid] || tid;
};