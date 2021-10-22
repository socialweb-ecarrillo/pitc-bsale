import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../app';
import {
    Flex, Button, Text, Heading, Divider, Content, Form,
    ButtonGroup, Grid, TextField, View
} from '@adobe/react-spectrum';

export const NewUser = () => {

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    let handleExit = () => {
        setUser(null);
        history.push('/');
    };

    let handleSave = () => {
        //setUser(user);
        history.push('/menu');
    }

    return (
        <>
            {!user ? (
                <Redirect to='/' />
            ) :
                <Grid
                    areas={{
                        base: ['content']
                    }}
                    columns={{
                        base: ['1fr']
                    }}
                    rows={{
                        base: ['1fr']

                    }}
                    height='100vh'
                    justifyContent="center"
                >
                    <View margin='size-300'>
                        <Heading>
                            <Flex alignItems="center">
                                <Text>Completar datos personales</Text>
                            </Flex>
                        </Heading>
                        <Divider />
                        <Content>
                            <Form>
                                <TextField label="RUT" value={user.code} isDisabled />
                                <TextField label="Nombre(s)" autoFocus/>
                                <TextField label="Apellido(s)"/>
                                <TextField label="Email"/>
                                <TextField label="Teléfono"/>
                            </Form>
                        </Content>
                        <ButtonGroup margin='size-100' alignSelf='flex-end'>
                            <Button variant="secondary" onPress={handleExit}>
                                Cancelar
                            </Button>
                            <Button variant="cta" onPress={handleSave}>
                                Guardar
                            </Button>
                        </ButtonGroup>
                    </View>
                </Grid>
            }
        </>
    );
};
