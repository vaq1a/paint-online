import styles from './Canvas.module.scss';
import {observer} from "mobx-react-lite";
import {useEffect, useRef} from "react";
import canvasState from "store/canvasState";

const Canvas = observer(() => {
    const canvasRef = useRef()

    useEffect(() => {
        canvasState.setCanvas(canvasRef.current)
    }, [])

    return (
        <div className={styles.canvas}>
            <canvas
                className={styles.canvasArea}
                width={600}
                height={400}
                ref={canvasRef}
            />
        </div>
    );
});

export default Canvas;