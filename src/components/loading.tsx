"use client"
import Lottie from "lottie-react";
import groovyWalkAnimation from '../../public/images/animation2.json';

export default function LottieAnimate(){
    return <Lottie style={{width:'100px'}} animationData={groovyWalkAnimation} />;
}