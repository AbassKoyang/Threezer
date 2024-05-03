import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import {slideAnimation, headContainerAnimation, headContentAnimation, headTextAnimation} from '../config/motion';

import state from '../store/index';

const Home = () => {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <img 
                      src="./threejs.png" 
                      alt="Threejs Logo"
                      className='size-8 object-contain'
                    />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>LET'S <br className='hidden xl:block'/>  CREATE SOMETHING TOGETHER
                        </h1>
                    </motion.div>
                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home