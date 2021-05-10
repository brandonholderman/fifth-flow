import React from "react";
import VideoEmbed from "./VideoEmbed";
import HorizontalScroll from 'react-scroll-horizontal'

const Home = () => {
    return (
        <div className="App">
            <HorizontalScroll>
                <VideoEmbed embedId="6O35Ql4AMCg" />
                <VideoEmbed embedId="sqydR4Hx-mw" />
                <VideoEmbed embedId="BTqLIWQwEh4" />
                <VideoEmbed embedId="6O35Ql4AMCg" />
                <VideoEmbed embedId="sqydR4Hx-mw" />
                <VideoEmbed embedId="BTqLIWQwEh4" />
            </HorizontalScroll>
        </div>
    );
}
 
export default Home;