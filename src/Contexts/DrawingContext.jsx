import { createContext, useRef, useCallback, useContext } from "react";

export const DrawingContext = createContext();

export const useCanvasRef = () => {
    const drawCanvasRef = useRef(null);
    const displayCanvasRef = useRef(null);

    const getContext = useCallback(() => {
        const drawCanvas = drawCanvasRef.current;
        const context = drawCanvas.getContext('2d');
        context.lineCap = "round";
        return { drawCanvas, context };
      }, [drawCanvasRef]);
    
      const getContextDisplay = useCallback(() => {
        const displayCanvas = displayCanvasRef.current;
        const displayContext = displayCanvas.getContext('2d');
        return { displayCanvas, displayContext };
      }, [displayCanvasRef]);

    return { drawCanvasRef , displayCanvasRef, getContext, getContextDisplay }
}

export const useDrawingContext = () => {
  return useContext(DrawingContext);
};



