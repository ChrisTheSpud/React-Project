import { createContext, useRef, useCallback } from "react";

export const DrawingContext = createContext();

export const canvasRef = () => {
    const drawCanvasRef = useRef(null);
    const displayCanvasRef = useRef(null);

    const getContext = useCallback(() => {
        const drawCanvas = drawCanvasRef.current;
        const context = drawCanvas.getContext('2d');
        return { drawCanvas, context };
      }, [drawCanvasRef]);
    
      const getContextDisplay = useCallback(() => {
        const displayCanvas = displayCanvasRef.current;
        const displayContext = displayCanvas.getContext('2d');
        return { displayCanvas, displayContext };
      }, [displayCanvasRef]);

    return { drawCanvasRef , displayCanvasRef, getContext, getContextDisplay }
}




