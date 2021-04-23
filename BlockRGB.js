import React from "react";
import {Vire,Text, View} from "react-native";


export default function BlockRGB(props) {
    return (
        <View
        style={{
            backgroundColor:`rgb(${props.red}, ${props.green}, ${props.blue})`,
            padding : 30,
            width: "100%",
        }}
        ></View>
    );
    }
