import styles from './Canvas.module.scss';

const Canvas = () => {
    return (
        <div className={styles.canvas}>
            <canvas
                className={styles.canvasArea}
                width={600}
                height={400}
            />
        </div>
    );
};

export default Canvas;