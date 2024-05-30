import React from 'react';
import PropTypes from 'prop-types';

export const IconPaths = {
    x: 'M 14.010963,10.390375 22.753392,0.22801207 H 20.68172 L 13.090674,9.0518519 7.0277259,0.22801207 H 0.03482862 L 9.2031971,13.571215 0.03482862,24.228012 H 2.1066287 l 8.0163343,-9.318274 6.402917,9.318274 h 6.992897 L 14.010457,10.390375 Z M 11.173366,13.688772 10.24442,12.360089 2.853123,1.7876264 h 3.1821515 l 5.9648575,8.5323166 0.928954,1.328683 7.753611,11.0907 h -3.182151 l -6.32718,-9.050048 z',
    twitter: 'M22 4.864c-0.808 0.361-1.68 0.602-2.591 0.709 0.932-0.559 1.646-1.444 1.985-2.496-0.872 0.516-1.839 0.894-2.866 1.096-0.825-0.877-1.998-1.422-3.296-1.422-2.492 0-4.512 2.020-4.512 4.512 0 0.352 0.039 0.696 0.116 1.027-3.751-0.189-7.077-1.985-9.303-4.718-0.387 0.666-0.61 1.444-0.61 2.269 0 1.564 0.795 2.948 2.007 3.755-0.739-0.021-1.435-0.228-2.045-0.563 0 0.017 0 0.039 0 0.056 0 2.187 1.555 4.013 3.622 4.426-0.378 0.103-0.778 0.159-1.19 0.159-0.292 0-0.571-0.030-0.851-0.082 0.576 1.792 2.243 3.098 4.215 3.137-1.547 1.212-3.489 1.934-5.607 1.934-0.365 0-0.722-0.021-1.079-0.064 2.002 1.285 4.374 2.028 6.922 2.028 8.302 0 12.843-6.879 12.843-12.843 0-0.198-0.004-0.391-0.013-0.584 0.881-0.632 1.646-1.427 2.252-2.333z',
    github: 'M11 0.272c-6.074 0-11 4.925-11 11 0 4.86 3.152 8.983 7.522 10.438 0.55 0.102 0.752-0.239 0.752-0.529 0-0.262-0.010-1.129-0.015-2.048-3.060 0.666-3.706-1.298-3.706-1.298-0.5-1.271-1.221-1.61-1.221-1.61-0.998-0.683 0.075-0.669 0.075-0.669 1.104 0.078 1.686 1.134 1.686 1.134 0.981 1.682 2.573 1.195 3.201 0.914 0.099-0.711 0.384-1.196 0.698-1.471-2.443-0.278-5.012-1.221-5.012-5.436 0-1.201 0.43-2.182 1.134-2.953-0.114-0.277-0.491-1.396 0.106-2.911 0 0 0.924-0.295 3.026 1.128 0.877-0.244 1.818-0.366 2.753-0.37 0.935 0.004 1.876 0.126 2.755 0.37 2.1-1.423 3.022-1.128 3.022-1.128 0.599 1.515 0.222 2.634 0.108 2.911 0.705 0.77 1.132 1.752 1.132 2.953 0 4.225-2.573 5.155-5.023 5.427 0.395 0.341 0.746 1.011 0.746 2.037 0 1.472-0.013 2.656-0.013 3.019 0 0.293 0.198 0.636 0.756 0.528 4.368-1.456 7.516-5.578 7.516-10.436 0-6.075-4.925-11-11-11z',
    facebook: 'M16.5,0l-2.9,0c-3.2,0-5.3,2.1-5.3,5.4v2.5H5.5c-0.2,0-0.4,0.2-0.4,0.4V12c0,0.2,0.2,0.4,0.4,0.4h2.9v9.1   c0,0.2,0.2,0.4,0.4,0.4h3.7c0.2,0,0.4-0.2,0.4-0.4v-9.1h3.4c0.2,0,0.4-0.2,0.4-0.4l0-3.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H13   V5.8c0-1,0.2-1.5,1.6-1.5l1.9,0c0.2,0,0.4-0.2,0.4-0.4V0.5C16.9,0.2,16.7,0,16.5,0z',
    linkedin: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'
};

export const Icon = props => {
    const styles = {
        svg: {
            display: 'block',
            margin: '0 auto',
        },
        path: {
            fill: props.color,
        },
    };

    return (
        <svg
    style={styles.svg}
    width={`${props.size}px`}
    height={`${props.size}px`}
    viewBox= {props.boxStyle}
        >
        <path
    style={styles.path}
    d={props.icon}
/>
</svg>
);
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};

Icon.defaultProps = {
    size: 22,
};
