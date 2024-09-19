import React, { useState } from "react";

const AnagramChecker = () => {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [isAnagram, setIsAnagram] = useState(null);

  const handleCheckAnagram = () => {
    const normalize = (str) => {
      str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
      const normalWord1 = normalize(word1);
      const normalWord2 = normalize(word2);
      setIsAnagram(normalWord1 === normalWord2);
    }
  }

  return (
    <div>
      <h1>Anagram Checker</h1>
      <input
        type="text"
        placeholder="First Word"
        value={word1}
        onChange={(e) => setWord1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Second Word"
        value={word2}
        onChange={(e) => setWord2(e.target.value)}
      />
      <button onClick={handleCheckAnagram}>Check</button>
      
      {isAnagram !== null && (
        <h2>
          {isAnagram ? "The words are anagrams!"
            : "The words are not anagrams."}
        </h2>
      )}
    </div>
  );
};

export default AnagramChecker;


// import React, { useReducer } from "react";

// const initialState = {
//   word1: "",
//   word2: "",
//   isAnagram: null,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SET_WORD1":
//       return { ...state, word1: action.payload };
//     case "SET_WORD2":
//       return { ...state, word2: action.payload };
//     case "CHECK_ANAGRAM":
//       const normalize = (str) => str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
//       const normalWord1 = normalize(state.word1);
//       const normalWord2 = normalize(state.word2);
//       return { ...state, isAnagram: normalWord1 === normalWord2 };
//     default:
//       return state;
//   }
// };

// const AnagramChecker = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const handleCheckAnagram = () => {
//     dispatch({ type: "CHECK_ANAGRAM" });
//   };

//   return (
//     <div>
//       <h1>Anagram Checker</h1>
//       <input
//         type="text"
//         placeholder="First Word"
//         value={state.word1}
//         onChange={(e) => dispatch({ type: "SET_WORD1", payload: e.target.value })}
//       />
//       <input
//         type="text"
//         placeholder="Second Word"
//         value={state.word2}
//         onChange={(e) => dispatch({ type: "SET_WORD2", payload: e.target.value })}
//       />
//       <button onClick={handleCheckAnagram}>Check</button>
      
//       {state.isAnagram !== null && (
//         <h2>
//           {state.isAnagram ? "The words are anagrams!" : "The words are not anagrams."}
//         </h2>
//       )}
//     </div>
//   );
// };

// export default AnagramChecker;
