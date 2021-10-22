import React, { useContext } from 'react';
import { UserContext } from '../app';
import { useHistory, Redirect } from 'react-router-dom';
import { View, Grid, Header, Flex, Divider, Button} from '@adobe/react-spectrum';
import CompleteTable from './receipt-detail';

export const PurchaseHistory = () => {
    const { user } = useContext(UserContext);
    const history = useHistory();

    return (
        <>
            {!user ? (
                <Redirect to='/' />
            ) :
                <Grid
                    areas={{
                        base: ['title', 'divider', 'userinfo', 'content', 'buttons']
                    }}
                    columns={{
                        base: ['1fr']
                    }}
                    rows={{
                        base: ['1fr', '0.1fr', '0.65fr', '6fr', '2fr']

                    }}
                    height='100vh'
                >

                    {/*Title*/}
                    <View gridArea='title' height='100%'>
                        <Flex direction="column" height='100%' justifyContent='center'>
                            <Header level={1} UNSAFE_style={{ color: 'white', fontWeight: 'bolder' }} alignSelf='start' marginStart='size-200'>ÚLTIMAS COMPRAS</Header>
                        </Flex>
                    </View>

                    {/*Divider*/}
                    <View gridArea='divider' height='100%'>
                        <Flex direction="column" height='60%' justifyContent='center'>
                            <Divider width='100%' size="M" alignSelf='center' />
                        </Flex>
                    </View>

                    {/*UserInfo*/}
                    <View gridArea='userinfo' width='100%'>
                        <Flex direction="column" height='100%' width='100%' justifyContent='center'>
                            <Header level={3} marginStart='size-200' position='absolute' alignSelf='flex-start'>{user.firstName} {user.lastName}</Header>
                            <Header level={3} marginEnd='size-200' position='absolute' alignSelf='flex-end'>{user.code}</Header>
                        </Flex>
                    </View>

                    {/*Content*/}
                    <View gridArea='content' height='100%' width='100%'>
                        <Flex direction="column" height='100%' width='100%' justifyContent='center'>
                            <CompleteTable rows={user.items}/>
                        </Flex>
                    </View>

                    {/*Buttons*/}
                    <View backgroundColor='' gridArea='buttons' height='100%'>
                        <Flex direction="column" height='100%' justifyContent='center'>
                            <Button variant="cta" alignSelf='center' onPress={() => history.goBack()}>Atrás</Button>
                        </Flex>
                    </View>
                </Grid>
            }
        </>
    );
};