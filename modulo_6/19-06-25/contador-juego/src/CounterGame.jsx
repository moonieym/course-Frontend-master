import { useReducer, useRef, useEffect, useCallback, useState } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { 
        count: state.count + action.payload, 
        history: [
          ...state.history.slice(-9),  // Keep only the last 10 actions
          `+${action.payload} (Nuevo valor: ${state.count + action.payload})`
        ], 
      };
    case "decrement":
      return { 
        count: state.count - 1, 
        history: [
          ...state.history.slice(-9),  // Keep only the last 10 actions
          `-1 (Nuevo valor: ${state.count - 1})`
        ],
    };
    case "reset":
      return { count: 0, history: [] };
    case "undo":
      if (state.history.length === 0) return state;

       {
        const newHistory = [...state.history];
        const lastEntry = newHistory.pop();

        // Check if the last entry is a numeric operation
        const valueMatch = lastEntry.match(/([+-]?\d+)/);
    
        let lastChange = 0;
        if (valueMatch) {
            lastChange = parseInt(valueMatch[1]);
        } else if (lastEntry.includes("Reset")) {
            // If the last action was a reset
            lastChange = 0; 
        }

      return {
        count: state.count - lastChange,
        history: newHistory,
      };
    };
    case "loadHistory":
      return {
        ...state,
        history: action.payload,
      };  
    default:
      return state;
    }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(1);
  const incrementBtnRef = useRef(null);

  // Fijar el foco en el botón de incremento al renderizar
  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  // Guardar historial en localStorage
  useEffect(() => {
    localStorage.setItem("counterHistory", JSON.stringify(state.history));
  }, [state.history]);

  // Cargar historial al inicio
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("counterHistory"));
    if (savedHistory) {
      dispatch({ type: "loadHistory", payload: savedHistory });
    }
  }, []);

  const handleIncrement = useCallback(() => {
    const value = parseInt(inputValue);
    if (isNaN(value)) {
      alert("Por favor, ingresa un valor numérico válido.");
      return;
    }
    dispatch({ type: "increment", payload: value });
  }, [inputValue]);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  const handleUndo = useCallback(() => {
    dispatch({ type: "undo" });
  }, []);

  return (
    <div>
      <h2>Contador: {state.count}</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{ width: "60px", marginRight: "8px" }}
      />
      <button ref={incrementBtnRef} onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleUndo}>Deshacer</button>
      <button onClick={handleReset}>Reset</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterGame;
