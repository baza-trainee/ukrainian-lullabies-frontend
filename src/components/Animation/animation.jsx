import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibility } from '../../redux/animation/animationSlice';
import { useSpring, animated } from 'react-spring';

const AnimatedElement = ({ children }) => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.animation.isVisible);
  const animationProps = useSpring({
    opacity: isVisible ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 2000 },
  })

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animation');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight)
        {
          dispatch(setVisibility(true));
        } else
        {
          dispatch(setVisibility(false));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <animated.div style={ animationProps }>
      { children }
    </animated.div>
  );
};

export default AnimatedElement;
