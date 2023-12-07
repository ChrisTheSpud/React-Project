import './DrawingCanvas.scss';
import { useCanvasRef, DrawingContext } from '../Contexts/DrawingContext';
import { useEffect } from 'react';
import { signal } from '@preact/signals';
import Toolbar from './Toolbar';

function DrawingCanvas() { 
    const { drawCanvasRef, displayCanvasRef, getContext, getContextDisplay } = useCanvasRef();

      let drawing = signal();
      drawing = false;
    
      let drawingHistory = [];
      let redoStates = [];
    
      let drawingNumber = 0;
      let checkNumber = 0;
    
      let rectStart;
    
      const colorPicker = () => {
        const { context } = getContext();
        context.strokeStyle = document.getElementById('color-picker').value;
        context.fillStyle = document.getElementById('color-picker').value;
      }

      const getMousePos = (drawCanvasRef, e) => {
        const rect = drawCanvasRef.getBoundingClientRect();
        const scaleX = drawCanvasRef.width / rect.width;
        const scaleY = drawCanvasRef.height / rect.height;
    
        return {
          x: (e.clientX - rect.left) * scaleX,
          y: (e.clientY - rect.top) * scaleY,
        };
      }
    
      const getTouchPos = (drawCanvasRef, e) => {
        const rect = drawCanvasRef.getBoundingClientRect();
        const scaleX = drawCanvasRef.width / rect.width;
        const scaleY = drawCanvasRef.height / rect.height;
    
        return {
          x: (e.touches[0].clientX - rect.left) * scaleX ,
          y: (e.touches[0].clientY - rect.top) * scaleY,
        };
      }
    
      const startDrawing = (isTouch) => (e) => {
        if(!isTouch && e.buttons !== 1) {
          return;
        }
    
        const { drawCanvas, context } = getContext();
    
        let position;
      
        drawing = true;
        context.beginPath();
        drawingNumber ++;
    
        if (isTouch) {
          position = getTouchPos(drawCanvas, e);
        } else {
          position = getMousePos(drawCanvas, e);
        }
    
        rectStart = position;
      };
    
      const endDrawing = () => {
        if (drawing) {
          drawing = false;
          drawingNumber ++;
          const { drawCanvas } = getContext();
          const { displayContext } = getContextDisplay();
    
          displayContext.drawImage(drawCanvas, 0, 0);
          drawingHistory.push(drawCanvas.toDataURL());
        }
      };
    
      const drawRectangle = (x, y) => {
        const { context, drawCanvas } = getContext();
    
        const width = x - rectStart.x;
        const height = y - rectStart.y;
      
        context.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        context.strokeRect(rectStart.x, rectStart.y, width, height);

        if(document.getElementById('solid-fill').checked) {
          context.fillRect(rectStart.x, rectStart.y, width, height);
        }
      }
    
      const drawEllipse = (x, y) => {
        const { context, drawCanvas } = getContext();
    
        const width = x - rectStart.x;
        const height = y - rectStart.y;
    
        const centerX = rectStart.x + width / 2;
        const centerY = rectStart.y + height / 2;
        const radiusX = Math.abs(width / 2);
        const radiusY = Math.abs(height / 2);
    
        context.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        context.beginPath();
        context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
        context.stroke();

        if(document.getElementById('solid-fill').checked) {
          context.fill();
        };
      }
    
      const drawTriangle = (x, y) => {
        const { context , drawCanvas } = getContext();
    
        const sideLength = Math.sqrt(Math.pow(x - rectStart.x, 2) + Math.pow(y - rectStart.y, 2));
    
        const angle = Math.atan2(y - rectStart.y, x - rectStart.x);
    
        const angleOffset = Math.PI / 9;
    
        const x2 = rectStart.x + sideLength * Math.cos(angle + angleOffset);
        const y2 = rectStart.y + sideLength * Math.sin(angle + angleOffset);
    
        const x3 = rectStart.x + sideLength * Math.cos(angle - angleOffset);
        const y3 = rectStart.y + sideLength * Math.sin(angle - angleOffset);
    
        context.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
        context.beginPath();
        context.moveTo(rectStart.x, rectStart.y);
        context.lineTo(x2, y2);
        context.lineTo(x3, y3);
        context.closePath();
        context.stroke();

        if(document.getElementById('solid-fill').checked) {
          context.fill();
        };
      }
    
      const draw = (isTouch) => (e) => {
        if (!drawing) return;
    
        if(pen.checked) {
          colorPicker();
        }
    
        const { drawCanvas, context } = getContext();
    
        let position;
    
        if (isTouch) {
          position = getTouchPos(drawCanvas, e);
        } else {
          position = getMousePos(drawCanvas, e);
        }
          
        let { x , y } = position;
    
        if (document.getElementById('square').checked) {
          drawRectangle(x, y);
        
        } else if (document.getElementById('ellipse').checked) {
          drawEllipse(x,y);
    
        } else if (document.getElementById('triangle').checked) {
          drawTriangle(x,y);
    
        } else {
          
          context.lineTo(x, y);
          context.stroke();
        };
      }
    
      const eraser = () => {
        const { context } = getContext();
        context.strokeStyle = 'white';
        context.fillStyle = 'white';
      }
    
      const strokeSize = () => {
        const { context } = getContext();
        context.lineWidth = lineWidth.value;
      }
    
      const fillCanvas = () => {
        const { context, drawCanvas } = getContext();
        const { displayContext } = getContextDisplay();
        colorPicker();
        context.fillRect(0, 0, drawCanvas.width, drawCanvas.height);
        displayContext.drawImage(drawCanvas, 0, 0);
        drawingHistory.push(drawCanvas.toDataURL());
        drawingNumber ++;
      }
    
      const resetCanvas = () => {
        const { context } = getContext();
        const { displayCanvas, displayContext } = getContextDisplay();
        drawingHistory.push(displayCanvas.toDataURL());
        context.reset();
        displayContext.reset();
        drawingHistory.push(displayCanvas.toDataURL());
        drawingNumber ++;
        colorPicker();
      }
    
      const undo = () => {
        const { context , drawCanvas } = getContext();
        const { displayCanvas, displayContext } = getContextDisplay();
    
        checkNumber = drawingNumber;
        console.log(checkNumber, drawingNumber);
        redoStates.push(displayCanvas.toDataURL());
    
        if(drawingHistory.length > 0) {
          context.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
          displayContext.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
          drawingHistory.pop();
          const img = new Image();
          img.src = drawingHistory[drawingHistory.length - 1];
          img.addEventListener('load', () => {
            displayContext.drawImage(img, 0, 0);
            context.drawImage(img, 0, 0);
          });
        }
      }
    
      const redo = () => {
        if(drawingNumber > checkNumber) {
          redoStates = [];
        }
    
        const { context, drawCanvas } = getContext();
        const { displayContext } = getContextDisplay();
    
        drawingHistory.push(drawCanvas.toDataURL());
    
        if (redoStates.length > 0) {
          const img = new Image();
          img.src = redoStates.pop();
          img.addEventListener('load', () => {
            context.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
            displayContext.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
            displayContext.drawImage(img, 0, 0);
            context.drawImage(img, 0, 0);
          });
        };
      };

      window.addEventListener('keydown', (ev) => {
        if (ev.key === 'z' && (ev.ctrlKey || ev.metaKey)) {
            undo();
        }
      });
    
      window.addEventListener('keydown', (ev) => {
          if (ev.key === 'y' && (ev.ctrlKey || ev.metaKey)) {
              redo();
          }
      });
    
      useEffect(() => {
        window.addEventListener('mouseup', endDrawing);
        window.addEventListener('touchend', endDrawing);
      }, []);

    return (
        <>
          <DrawingContext.Provider value={{undo , redo , resetCanvas, strokeSize , eraser, colorPicker, fillCanvas}}>
            <Toolbar/>
            <div className='wrapper'>
                <canvas
                ref={drawCanvasRef}
                id='draw-canvas'
                height='1080'
                width='1920'
                onMouseDown={startDrawing(false)}
                onMouseUp={endDrawing}
                onMouseMove={draw(false)}
                onTouchStart={startDrawing(true)}
                onTouchMove={draw(true)}
                onTouchCancel={endDrawing}
                />
                <canvas
                ref={displayCanvasRef}
                id='display-canvas'
                height='1080'
                width='1920'
                />
          </div>
          </DrawingContext.Provider>
        </>
    );
}

export default DrawingCanvas;