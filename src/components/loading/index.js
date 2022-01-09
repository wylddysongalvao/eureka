import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingLottie from '../../assets/loading.json';
function Loading(){
    return(
        <Player 
            autoplay
            loop
            speed={1}
            src={LoadingLottie}
        />
    )
}

export default Loading;