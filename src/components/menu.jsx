import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../app';
import {
    Image, View, Grid, Flex, Button, Header,
    Dialog, Text, Heading, Divider, Content, Form,
    TextField, ButtonGroup, useDialogContainer, DialogContainer
} from '@adobe/react-spectrum';

import catdog from '../img/catdog2.jpg';

const UserInfo = (props) => {

    let dialog = useDialogContainer();

    return (
        <Dialog>
        <Heading>
            <Flex alignItems="center" gap="size-100">
                <Text>Editar datos personales</Text>
            </Flex>
        </Heading>
        <Divider />
        <Content>
            <Form>
                <TextField label="RUT" placeholder="15723456-8" isDisabled />
                <TextField label="Nombre(s)" placeholder="Alan" autoFocus />
                <TextField label="Apellido(s)" placeholder="Brito" />
                <TextField label="Email" placeholder="hola@pitc.cl" />
                <TextField label="Teléfono" placeholder="+56 9 98765432" />
            </Form>
        </Content>
        <ButtonGroup>
            <Button variant="secondary" onPress={dialog.dismiss}>
                Cancelar
            </Button>
            <Button variant="cta" onPress={dialog.dismiss}>
                Guardar
            </Button>
        </ButtonGroup>
    </Dialog>);
}

export const Menu = () => {

    const history = useHistory();
    
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    let [isOpen, setOpen] = useState();
    let [dialogData, setData] = useState();

    let setupDialog = () => {
        setData(user.info);
        setOpen(true);
    };


    let loadPurchaseHistory = () => {
        history.push('purchasehistory');
    }

    let handleExit = () => {
        setUser(null);
        history.push('/');
    };

    return (
        <>
            {!user ? (
                <Redirect to='/' />
            ) :
                <Grid
                    areas={{
                        base: ['image',
                            'options'],
                        S: ['options image'],
                        M: ['options image'],
                        L: ['options image']
                    }}
                    columns={{
                        base: ['1fr'],
                        S: ['1fr 1fr'],
                        M: ['1fr 1fr'],
                        L: ['1fr 1fr']
                    }}
                    rows={{
                        base: ['1fr', '1fr'],
                        S: ['1fr'],
                        M: ['1fr'],
                        L: ['1fr']

                    }}
                    height='100vh'>

                    {/*Main image 66vh*/}
                    <View gridArea='image' height='60vh' isHidden={{ base: false, S: true, M: true, L: false }}>
                        <Image src={catdog} width='100%' height='100%' objectFit='cover' alt='' />
                    </View>

                    {/*Main image 100vh*/}
                    <View gridArea='image' height='100vh' isHidden={{ base: true, S: false, M: false, L: false }}>
                        <Image src={catdog} width='100%' height='100%' objectFit='cover' alt='' />
                    </View>

                    {/*Form*/}
                    <View gridArea='options'>
                        <Flex direction="column" height='100%' alignItems="center" justifyContent='center' gap="size-150">
                            <Header level={1} UNSAFE_style={{ color: 'white', fontWeight: 'bolder' }}>BIENVENIDO A PITC-APP</Header>
                            <Button variant="cta" width='66%' onPress={loadPurchaseHistory}>Ver compras</Button>
                            <Button variant="primary" width='66%' onPress={setupDialog}>Editar datos</Button>
                            <Button variant="secondary" width='66%' onPress={handleExit}>Salir</Button>
                        </Flex>
                    </View>
                </Grid>
            }
            <DialogContainer
                onDismiss={() => setOpen(false)}>
                {isOpen && <UserInfo props={{ data: dialogData }} />}
            </DialogContainer>
        </>
    );
};
