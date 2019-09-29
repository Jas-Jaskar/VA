import React from 'react';
import { Item, Input, Icon, Label } from 'native-base';

class Textbox extends React.Component {
    state = {
        icon: "eye-off",
        password: true
    };

    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render() {
        const { label, icon, onChange, type, textentry} = this.props;
        return (
            <Item floatingLabel>
                <Icon active name={icon} />
                <Label>{label}</Label>
                <Input keyboardType={type}
                       secureTextEntry={textentry}
                       onChangeText={(e) => onChange(e)} />
                <Icon name={this.state.icon}
                      onPress={() => this._changeIcon()} />
            </Item>
        );
    }
}

export default Textbox;