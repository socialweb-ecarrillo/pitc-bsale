import React, { useState, useEffect } from 'react';
import { ActionButton, Image, View } from '@adobe/react-spectrum';
import { Cell, Column, Row, TableView, TableBody, TableHeader } from '@react-spectrum/table';
import Document from '@spectrum-icons/workflow/Document';
import spinner from '../img/spinner.svg';
import logo from '../img/logo192.png'

let formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
});

const axios = require('axios');

const WP_BASIC_AUTH = {
    username: 'ck_6dd0955b8f406981562b1e4da48341e4580cd5b8',
    password: 'cs_575c56b239501ecd3ebe7d67b140fd765d9eab64',
};

function BuildRow(row) {
    const [images, setImages] = useState([]);

    async function getImages() {
        const allimages = await Promise.all(
            row.details.items.map(async (elem) => {
                try {
                    const { code } = elem.variant;
                    const { data } = await axios.get(`https://petsinthecity.cl/wp-json/wc/v3/products?sku=${code}`, {
                        auth: { ...WP_BASIC_AUTH },
                    });
                    console.log(data[0]);
                    return data[0];
                } catch (err) {
                    console.log({ err });
                }
            })
        );
        setImages(allimages);
    }

    useEffect(() => {
        console.log('cargando imagenes');
        getImages();
    }, []);

    //console.log(images);

    return (
        [...row.details.items].map((item, index) => 
        <Row UNSAFE_className={{color: 'blue'}} height='auto'>
            <Cell><Image src={images.length > 0 
                ? images[index] !== undefined 
                    ? images[index].images[0].src 
                    : logo 
                : spinner} objectFit='stretch' width='12vh'height='12vh' alt='' />
            </Cell>
            <Cell>{item.variant.description}</Cell>
            <Cell>{ index=== 0 ?  
                    <View>
                    {/*new Date(row.emissionDate * 1000).toLocaleDateString()*/} 
                    <ActionButton width='25%'>
                        <Document />
                    </ActionButton>
                    </View>
                : '' }
            </Cell>
        </Row> )
    )
}

export default function CompleteTable({ rows }) {
    return (
        <>
            <TableView aria-label='purchase-table' height="60vh" width='95%' alignSelf='center' overflowMode="wrap">
                <TableHeader>
                    <Column key='emissionDate' align="start">Producto</Column>
                    <Column key="description">Descripción</Column>
                    <Column key="receipt" align="end">Boleta</Column>
                </TableHeader>
                <TableBody>
                    {[...rows]
                        .sort((a, b) => a.emissionDate - b.emissionDate)
                        .reverse()
                        .map((row) => (BuildRow(row))
                        )
                    }
                </TableBody>
            </TableView>
        </>
    );
}