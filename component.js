import React from 'react'
import { View, Image} from 'react-native'
import { Content, Header, Spinner } from "native-base";

// Classes
import FadeInView from '../../animations/FadeInView'

export default ({ custom, color, loading }) => (
    <Content
        style={{
            backgroundColor: custom.toolbar,
        }}>

        <Header transparent
                androidStatusBarColor={custom.toolbar}>
        </Header>

        <View style={{
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
        }}>
            <FadeInView>
                <Image style={{width: 250, height: 250}} source={{uri: custom.logo}}/>
            </FadeInView>
        </View>

        { loading === true &&
            <Content>
                <Spinner color={color}/>
            </Content>
        }

    </Content>
)
