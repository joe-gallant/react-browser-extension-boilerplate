import React, { useEffect } from 'react';
import { words } from './list';

export const SwearHover = () => {

  useEffect(() => {
    document.getElementsByTagName("BODY")[0].onmouseover = (e) => {
      const text = e.target.innerHTML;

      if (text.charAt(0) !== '<' && text.length < 200) {   
        const wordsRequired = text.length / 7;
        let newString = '';        

        for (let i = 0; i < wordsRequired; i++) {
          const random = Math.floor(Math.random() * words.length);
          newString += words[random] + ' ';
        }

        e.target.innerHTML = newString;
      }
    };
  }, []);

  return (
    <>
    </>
  );
};