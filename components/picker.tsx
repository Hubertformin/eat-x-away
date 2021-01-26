import React, {useState} from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
import {EvilIcons, Feather} from "@expo/vector-icons";
import {ThemeOrange} from "../constants/Colors";

export default function AppPicker({title}) {
    const [selected, setSelected] = useState('key1');

    function onValueChange(value: string) {
        setSelected(value);
    }

    return (
        <Picker
            renderHeader={backAction =>
                <Header style={{ backgroundColor: ThemeOrange }}>
                    <Left>
                        <Button transparent onPress={backAction}>
                            <EvilIcons name="chevron-left" size={24} color="white" />
                        </Button>
                    </Left>
                    <Body style={{ flex: 3 }}>
                        <Title style={{ color: "#fff" }}>Select {title}</Title>
                    </Body>
                    <Right />
                </Header>}
            mode="dialog"
            inlineLabel={true}
            iosIcon={<EvilIcons name="chevron-down" size={24} color="black" />}
            selectedValue={selected}
            style={{paddingHorizontal: 0}}
            onValueChange={onValueChange}
        >
            <Picker.Item label="Home" value="key0" />
            <Picker.Item label="School" value="key1" />
            <Picker.Item label="Work" value="key2" />
            <Picker.Item label="John's home" value="key3" />
        </Picker>
    );
}