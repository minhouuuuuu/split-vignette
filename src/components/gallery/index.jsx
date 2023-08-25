import styles from './style.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function MyComponent({mousePosition, handle}) {
  
  const { x, y } = mousePosition;
  
  return (
    <div className={styles.gallery}>
        <div className={styles.imageContainer}>
            <Image 
                src={`/images/${handle}/background.jpg`}
                alt="image"
                fill
            />
        </div>
        <motion.div
         className={styles.vignette}
         style={{x, y}}
         >
          <h1 class="heading">blabla</h1>
          <Image 
            src={`/images/${handle}/1.jpg`}
            alt="image"
            fill
          />
        </motion.div>  
        
    </div>
  )
}
