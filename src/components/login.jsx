import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { validate } from '@fiquu/cl-rut';
import { UserContext } from '../app';
import { Image, View, Grid, Flex, Form, TextField, Button, Header, Heading } from '@adobe/react-spectrum';
import catdog from '../img/catdog.jpg';
import catphone from '../img/catphone.jpg';
import qrcode from '../img/qrcode.png';


const API = process.env.REACT_APP_API_URL;
const axios = require('axios');

export const Login = () => {
    
    const { setUser } = useContext(UserContext);
    const history = useHistory();
    const regex = /^([1-9]\d{6,8}-[0-9kK]{1})*$|^((0|[1-9][0-9]{0,2})\.[0-9]{1,3}\.[0-9]{1,3}-[0-9kK]{1})*$/;
    let testData = {
        "id": 426,
        "firstName": "Alan",
        "lastName": "Brito",
        "email": "alanbrito@delgado.com",
        "code": "16.444.545-8",
        "phone": "99867857",
        "items": [
            {
                "details": {
                    "count": 6,
                    "items": [
                        {
                            "href": "https://placeholder.com/54275.json",
                            "id": 54275,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 1885,
                            "totalUnitValue": 2243,
                            "netAmount": 1885,
                            "taxAmount": 358,
                            "totalAmount": 2243,
                            "netDiscount": 628,
                            "totalDiscount": 747,
                            "variant": {
                                "href": "https://placeholder.com/variant/5226.json",
                                "id": 5226,
                                "description": "CORDERO Y PATATAS CON ARANDANO 125 Gr",
                                "code": "4002633511621"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/54276.json",
                            "id": 54276,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 1885,
                            "totalUnitValue": 2243,
                            "netAmount": 1885,
                            "taxAmount": 358,
                            "totalAmount": 2243,
                            "netDiscount": 628,
                            "totalDiscount": 747,
                            "variant": {
                                "href": "https://placeholder.com/variant/5228.json",
                                "id": 5228,
                                "description": "VENADO CON MIJO Y ARANDANO 125 Gr",
                                "code": "4002633511645"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/54277.json",
                            "id": 54277,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 10708,
                            "totalUnitValue": 12742,
                            "netAmount": 10708,
                            "taxAmount": 2034,
                            "totalAmount": 12742,
                            "netDiscount": 3569,
                            "totalDiscount": 4248,
                            "variant": {
                                "href": "https://placeholder.com/variant/1715.json",
                                "id": 1715,
                                "description": "Canino MASCAN S NARANJA",
                                "code": "SD06000110607"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/54278.json",
                            "id": 54278,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3844.json",
                                "id": 3844,
                                "description": "SOFT LAMB JERKY SLICES",
                                "code": "6927749840046"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/54279.json",
                            "id": 54279,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3847.json",
                                "id": 3847,
                                "description": "SOFT BEEF JERKY SLICES",
                                "code": "6927749830153"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/54280.json",
                            "id": 54280,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3843.json",
                                "id": 3843,
                                "description": "SOFT DUCK JERKY STRIP",
                                "code": "6927749820123"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 26207,
                "urlPdfOriginal": "https://placeholder.com/view/11398/cfdd7dc624bd.pdf",
                "emissionDate": 1612483200
            },
            {
                "details": {
                    "count": 7,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55159.json",
                            "id": 55159,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5712.json",
                                "id": 5712,
                                "description": "CLORHEXIDINA",
                                "code": "8051490250538"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55160.json",
                            "id": 55160,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5711.json",
                                "id": 5711,
                                "description": "ALOE VERA",
                                "code": "8057741119982"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55161.json",
                            "id": 55161,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 15752,
                            "totalUnitValue": 18743,
                            "netAmount": 15752,
                            "taxAmount": 2991,
                            "totalAmount": 18743,
                            "netDiscount": 5250,
                            "totalDiscount": 6247,
                            "variant": {
                                "href": "https://placeholder.com/variant/6082.json",
                                "id": 6082,
                                "description": "GOTHAM",
                                "code": "7898582494897"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55162.json",
                            "id": 55162,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5222.json",
                                "id": 5222,
                                "description": "TERNERA CON PATATA Y GUISANTES 400 Gr",
                                "code": "4002633512147"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55163.json",
                            "id": 55163,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5227.json",
                                "id": 5227,
                                "description": "SINGLE PROTEIN CANGURO 400 Gr",
                                "code": "4002633513236"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55164.json",
                            "id": 55164,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5229.json",
                                "id": 5229,
                                "description": "SINGLE PROTEIN CORDERO 400 Gr",
                                "code": "4002633513250"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31478/details/55165.json",
                            "id": 55165,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/985.json",
                                "id": 985,
                                "description": "ANTIPARASITARIO",
                                "code": "4007221050780"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 45698,
                "urlPdfOriginal": "https://placeholder.com/view/11398/368913e9873f.pdf",
                "emissionDate": 1613520000
            },
            {
                "details": {
                    "count": 2,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/31780/details/55755.json",
                            "id": 55755,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3843.json",
                                "id": 3843,
                                "description": "SOFT DUCK JERKY STRIP",
                                "code": "6927749820123"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/31780/details/55756.json",
                            "id": 55756,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 6927,
                            "totalUnitValue": 8243,
                            "netAmount": 6927,
                            "taxAmount": 1316,
                            "totalAmount": 8243,
                            "netDiscount": 2308,
                            "totalDiscount": 2747,
                            "variant": {
                                "href": "https://placeholder.com/variant/3296.json",
                                "id": 3296,
                                "description": "ELEFANTE CHANCHO",
                                "code": "029695320231"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 11236,
                "urlPdfOriginal": "https://placeholder.com/view/11398/3fd74249c03b.pdf",
                "emissionDate": 1614297600
            },
            {
                "details": {
                    "count": 1,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/31816/details/55838.json",
                            "id": 55838,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 7556,
                            "totalUnitValue": 8992,
                            "netAmount": 7556,
                            "taxAmount": 1436,
                            "totalAmount": 8992,
                            "netDiscount": 2520,
                            "totalDiscount": 2998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5980.json",
                                "id": 5980,
                                "description": "SMALL",
                                "code": "5600969100107"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 8992,
                "urlPdfOriginal": "https://placeholder.com/view/11398/89fd54609fbd.pdf",
                "emissionDate": 1614384000
            },
            {
                "details": {
                    "count": 5,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/32028/details/56268.json",
                            "id": 56268,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5227.json",
                                "id": 5227,
                                "description": "SINGLE PROTEIN CANGURO 400 Gr",
                                "code": "4002633513236"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32028/details/56269.json",
                            "id": 56269,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5229.json",
                                "id": 5229,
                                "description": "SINGLE PROTEIN CORDERO 400 Gr",
                                "code": "4002633513250"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32028/details/56270.json",
                            "id": 56270,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5222.json",
                                "id": 5222,
                                "description": "TERNERA CON PATATA Y GUISANTES 400 Gr",
                                "code": "4002633512147"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32028/details/56271.json",
                            "id": 56271,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 2516,
                            "totalUnitValue": 2993,
                            "netAmount": 5031,
                            "taxAmount": 955,
                            "totalAmount": 5986,
                            "netDiscount": 1676,
                            "totalDiscount": 1994,
                            "variant": {
                                "href": "https://placeholder.com/variant/3843.json",
                                "id": 3843,
                                "description": "SOFT DUCK JERKY STRIP",
                                "code": "6927749820123"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32028/details/56272.json",
                            "id": 56272,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 5030,
                            "taxAmount": 956,
                            "totalAmount": 5986,
                            "netDiscount": 1676,
                            "totalDiscount": 1994,
                            "variant": {
                                "href": "https://placeholder.com/variant/6255.json",
                                "id": 6255,
                                "description": "MEATMIX CHICKEN BERRY & DUCK CRANBERRY",
                                "code": "7804457002258"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 20951,
                "urlPdfOriginal": "https://placeholder.com/view/11398/d6b12614968f.pdf",
                "emissionDate": 1614902400
            },
            {
                "details": {
                    "count": 2,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/32108/details/56447.json",
                            "id": 56447,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/6091.json",
                                "id": 6091,
                                "description": "PINK SMALL",
                                "code": "7898582458592"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32108/details/56448.json",
                            "id": 56448,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 8817,
                            "totalUnitValue": 10492,
                            "netAmount": 8817,
                            "taxAmount": 1675,
                            "totalAmount": 10492,
                            "netDiscount": 2939,
                            "totalDiscount": 3498,
                            "variant": {
                                "href": "https://placeholder.com/variant/4537.json",
                                "id": 4537,
                                "description": "30 GR",
                                "code": "7804666690024"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 16484,
                "urlPdfOriginal": "https://placeholder.com/view/11398/844f137dde5a.pdf",
                "emissionDate": 1615075200
            },
            {
                "details": {
                    "count": 4,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/32688/details/57556.json",
                            "id": 57556,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 13860,
                            "totalUnitValue": 16493,
                            "netAmount": 13860,
                            "taxAmount": 2633,
                            "totalAmount": 16493,
                            "netDiscount": 4619,
                            "totalDiscount": 5497,
                            "variant": {
                                "href": "https://placeholder.com/variant/5689.json",
                                "id": 5689,
                                "description": "950 GR",
                                "code": "767870919411"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32688/details/57557.json",
                            "id": 57557,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3843.json",
                                "id": 3843,
                                "description": "SOFT DUCK JERKY STRIP",
                                "code": "6927749820123"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32688/details/57558.json",
                            "id": 57558,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3847.json",
                                "id": 3847,
                                "description": "SOFT BEEF JERKY SLICES",
                                "code": "6927749830153"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/32688/details/57559.json",
                            "id": 57559,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/6400.json",
                                "id": 6400,
                                "description": "ACEITE DE JOJOBA",
                                "code": "8055519396177"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 28471,
                "urlPdfOriginal": "https://placeholder.com/view/11398/8a090b0c4390.pdf",
                "emissionDate": 1616457600
            },
            {
                "details": {
                    "count": 1,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/32833/details/57844.json",
                            "id": 57844,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 28563,
                            "totalUnitValue": 33990,
                            "netAmount": 57126,
                            "taxAmount": 10854,
                            "totalAmount": 67980,
                            "netDiscount": 0,
                            "totalDiscount": 0,
                            "variant": {
                                "href": "https://placeholder.com/variant/455.json",
                                "id": 455,
                                "description": "3101 GR",
                                "code": "8882"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 67980,
                "urlPdfOriginal": "https://placeholder.com/view/11398/0d388e57373c.pdf",
                "emissionDate": 1616716800
            },
            {
                "details": {
                    "count": 4,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/33120/details/58442.json",
                            "id": 58442,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5227.json",
                                "id": 5227,
                                "description": "SINGLE PROTEIN CANGURO 400 Gr",
                                "code": "4002633513236"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33120/details/58443.json",
                            "id": 58443,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5222.json",
                                "id": 5222,
                                "description": "TERNERA CON PATATA Y GUISANTES 400 Gr",
                                "code": "4002633512147"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33120/details/58444.json",
                            "id": 58444,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5229.json",
                                "id": 5229,
                                "description": "SINGLE PROTEIN CORDERO 400 Gr",
                                "code": "4002633513250"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33120/details/58445.json",
                            "id": 58445,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5036,
                            "totalUnitValue": 5992,
                            "netAmount": 5036,
                            "taxAmount": 956,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5256.json",
                                "id": 5256,
                                "description": "FINEST GF SALMON 1 Kg",
                                "code": "4002633556509"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 14971,
                "urlPdfOriginal": "https://placeholder.com/view/11398/86eb939780e0.pdf",
                "emissionDate": 1617580800
            },
            {
                "details": {
                    "count": 4,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/33137/details/58484.json",
                            "id": 58484,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5371,
                            "totalUnitValue": 6392,
                            "netAmount": 5371,
                            "taxAmount": 1021,
                            "totalAmount": 6392,
                            "netDiscount": 1343,
                            "totalDiscount": 1598,
                            "variant": {
                                "href": "https://placeholder.com/variant/6355.json",
                                "id": 6355,
                                "description": "PD5201A2",
                                "code": "6970772232685"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33137/details/58485.json",
                            "id": 58485,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 10077,
                            "totalUnitValue": 11992,
                            "netAmount": 10077,
                            "taxAmount": 1915,
                            "totalAmount": 11992,
                            "netDiscount": 2520,
                            "totalDiscount": 2998,
                            "variant": {
                                "href": "https://placeholder.com/variant/6343.json",
                                "id": 6343,
                                "description": "PELO LARGO PD3405D1",
                                "code": "6970772234474"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33137/details/58486.json",
                            "id": 58486,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 15457,
                            "totalUnitValue": 18392,
                            "netAmount": 15457,
                            "taxAmount": 2935,
                            "totalAmount": 18392,
                            "netDiscount": 3864,
                            "totalDiscount": 4598,
                            "variant": {
                                "href": "https://placeholder.com/variant/6379.json",
                                "id": 6379,
                                "description": "PD2401W1",
                                "code": "6970772231749"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33137/details/58487.json",
                            "id": 58487,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 10077,
                            "totalUnitValue": 11992,
                            "netAmount": 10077,
                            "taxAmount": 1915,
                            "totalAmount": 11992,
                            "netDiscount": 2520,
                            "totalDiscount": 2998,
                            "variant": {
                                "href": "https://placeholder.com/variant/6378.json",
                                "id": 6378,
                                "description": "PD2052C1",
                                "code": "6970772234856"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 48768,
                "urlPdfOriginal": "https://placeholder.com/view/11398/493b742fdec5.pdf",
                "emissionDate": 1617580800
            },
            {
                "details": {
                    "count": 1,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/33361/details/58951.json",
                            "id": 58951,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5712.json",
                                "id": 5712,
                                "description": "CLORHEXIDINA",
                                "code": "8051490250538"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 5992,
                "urlPdfOriginal": "https://placeholder.com/view/11398/4a7d2d9645d9.pdf",
                "emissionDate": 1618185600
            },
            {
                "details": {
                    "count": 3,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/33455/details/59126.json",
                            "id": 59126,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3845.json",
                                "id": 3845,
                                "description": "VENISON JERKY",
                                "code": "6927749812777"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33455/details/59127.json",
                            "id": 59127,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2516,
                            "totalUnitValue": 2993,
                            "netAmount": 2516,
                            "taxAmount": 477,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/3844.json",
                                "id": 3844,
                                "description": "SOFT LAMB JERKY SLICES",
                                "code": "6927749840046"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33455/details/59128.json",
                            "id": 59128,
                            "lineNumber": 0,
                            "quantity": 4,
                            "netUnitValue": 624,
                            "totalUnitValue": 743,
                            "netAmount": 2497,
                            "taxAmount": 475,
                            "totalAmount": 2972,
                            "netDiscount": 831,
                            "totalDiscount": 988,
                            "variant": {
                                "href": "https://placeholder.com/variant/4378.json",
                                "id": 4378,
                                "description": "15 BOLSAS 33X23 CM",
                                "code": "poopabag?1"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 8958,
                "urlPdfOriginal": "https://placeholder.com/view/11398/259395528e89.pdf",
                "emissionDate": 1618444800
            },
            {
                "details": {
                    "count": 2,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/33522/details/59232.json",
                            "id": 59232,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5730.json",
                                "id": 5730,
                                "description": "ADULT IBERICO AND RICE 1 Kg",
                                "code": "4002633558206"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/33522/details/59233.json",
                            "id": 59233,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 2515,
                            "taxAmount": 478,
                            "totalAmount": 2993,
                            "netDiscount": 838,
                            "totalDiscount": 997,
                            "variant": {
                                "href": "https://placeholder.com/variant/5227.json",
                                "id": 5227,
                                "description": "SINGLE PROTEIN CANGURO 400 Gr",
                                "code": "4002633513236"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 8985,
                "urlPdfOriginal": "https://placeholder.com/view/11398/6c1d09686784.pdf",
                "emissionDate": 1618531200
            },
            {
                "details": {
                    "count": 3,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/34110/details/60378.json",
                            "id": 60378,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5035,
                            "totalUnitValue": 5992,
                            "netAmount": 5035,
                            "taxAmount": 957,
                            "totalAmount": 5992,
                            "netDiscount": 1679,
                            "totalDiscount": 1998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5247.json",
                                "id": 5247,
                                "description": "FINEST LIGHT 1 Kg",
                                "code": "4002633558107"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34110/details/60379.json",
                            "id": 60379,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 2515,
                            "totalUnitValue": 2993,
                            "netAmount": 5030,
                            "taxAmount": 956,
                            "totalAmount": 5986,
                            "netDiscount": 1676,
                            "totalDiscount": 1994,
                            "variant": {
                                "href": "https://placeholder.com/variant/5229.json",
                                "id": 5229,
                                "description": "SINGLE PROTEIN CORDERO 400 Gr",
                                "code": "4002633513250"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34110/details/60380.json",
                            "id": 60380,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 7557,
                            "totalUnitValue": 8992,
                            "netAmount": 7557,
                            "taxAmount": 1435,
                            "totalAmount": 8992,
                            "netDiscount": 2520,
                            "totalDiscount": 2998,
                            "variant": {
                                "href": "https://placeholder.com/variant/5952.json",
                                "id": 5952,
                                "description": "MINI 60X40CM 30UN",
                                "code": "5600969101838"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 20970,
                "urlPdfOriginal": "https://placeholder.com/view/11398/ddf8148e13f9.pdf",
                "emissionDate": 1620086400
            },
            {
                "details": {
                    "count": 3,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/34701/details/61644.json",
                            "id": 61644,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 27136,
                            "totalUnitValue": 32292,
                            "netAmount": 27136,
                            "taxAmount": 5156,
                            "totalAmount": 32292,
                            "netDiscount": 4788,
                            "totalDiscount": 5698,
                            "variant": {
                                "href": "https://placeholder.com/variant/6504.json",
                                "id": 6504,
                                "description": "ROSA M",
                                "code": "824348731040"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34701/details/61645.json",
                            "id": 61645,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5707,
                            "totalUnitValue": 6791,
                            "netAmount": 5707,
                            "taxAmount": 1084,
                            "totalAmount": 6791,
                            "netDiscount": 1007,
                            "totalDiscount": 1199,
                            "variant": {
                                "href": "https://placeholder.com/variant/5244.json",
                                "id": 5244,
                                "description": "FINEST CROC 1 Kg",
                                "code": "4002633558008"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34701/details/61646.json",
                            "id": 61646,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 5707,
                            "totalUnitValue": 6791,
                            "netAmount": 5707,
                            "taxAmount": 1084,
                            "totalAmount": 6791,
                            "netDiscount": 1007,
                            "totalDiscount": 1199,
                            "variant": {
                                "href": "https://placeholder.com/variant/5256.json",
                                "id": 5256,
                                "description": "FINEST GF SALMON 1 Kg",
                                "code": "4002633556509"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 45874,
                "urlPdfOriginal": "https://placeholder.com/view/11398/24a1e242fe8f.pdf",
                "emissionDate": 1621468800
            },
            {
                "details": {
                    "count": 5,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/34962/details/62157.json",
                            "id": 62157,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 2851,
                            "totalUnitValue": 3392,
                            "netAmount": 5701,
                            "taxAmount": 1083,
                            "totalAmount": 6784,
                            "netDiscount": 1005,
                            "totalDiscount": 1196,
                            "variant": {
                                "href": "https://placeholder.com/variant/3844.json",
                                "id": 3844,
                                "description": "SOFT LAMB JERKY SLICES",
                                "code": "6927749840046"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34962/details/62158.json",
                            "id": 62158,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2850,
                            "totalUnitValue": 3392,
                            "netAmount": 2850,
                            "taxAmount": 542,
                            "totalAmount": 3392,
                            "netDiscount": 503,
                            "totalDiscount": 598,
                            "variant": {
                                "href": "https://placeholder.com/variant/3847.json",
                                "id": 3847,
                                "description": "SOFT BEEF JERKY SLICES",
                                "code": "6927749830153"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34962/details/62159.json",
                            "id": 62159,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2850,
                            "totalUnitValue": 3392,
                            "netAmount": 2850,
                            "taxAmount": 542,
                            "totalAmount": 3392,
                            "netDiscount": 503,
                            "totalDiscount": 598,
                            "variant": {
                                "href": "https://placeholder.com/variant/5227.json",
                                "id": 5227,
                                "description": "SINGLE PROTEIN CANGURO 400 Gr",
                                "code": "4002633513236"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34962/details/62160.json",
                            "id": 62160,
                            "lineNumber": 0,
                            "quantity": 4,
                            "netUnitValue": 708,
                            "totalUnitValue": 842,
                            "netAmount": 2830,
                            "taxAmount": 538,
                            "totalAmount": 3368,
                            "netDiscount": 498,
                            "totalDiscount": 592,
                            "variant": {
                                "href": "https://placeholder.com/variant/4378.json",
                                "id": 4378,
                                "description": "15 BOLSAS 33X23 CM",
                                "code": "poopabag?1"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/34962/details/62161.json",
                            "id": 62161,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 8565,
                            "totalUnitValue": 10191,
                            "netAmount": 8565,
                            "taxAmount": 1626,
                            "totalAmount": 10191,
                            "netDiscount": 1512,
                            "totalDiscount": 1799,
                            "variant": {
                                "href": "https://placeholder.com/variant/5992.json",
                                "id": 5992,
                                "description": "SMALL",
                                "code": "5600969102323"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 27127,
                "urlPdfOriginal": "https://placeholder.com/view/11398/fa56c70b912c.pdf",
                "emissionDate": 1622160000
            },
            {
                "details": {
                    "count": 3,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/35136/details/62525.json",
                            "id": 62525,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 8395,
                            "totalUnitValue": 9990,
                            "netAmount": 8395,
                            "taxAmount": 1595,
                            "totalAmount": 9990,
                            "netDiscount": 0,
                            "totalDiscount": 0,
                            "variant": {
                                "href": "https://placeholder.com/variant/2862.json",
                                "id": 2862,
                                "description": "Canino TALLA S",
                                "code": "824348441345"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/35136/details/62526.json",
                            "id": 62526,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2513,
                            "totalUnitValue": 2990,
                            "netAmount": 2513,
                            "taxAmount": 477,
                            "totalAmount": 2990,
                            "netDiscount": 0,
                            "totalDiscount": 0,
                            "variant": {
                                "href": "https://placeholder.com/variant/5326.json",
                                "id": 5326,
                                "description": "PERRO GATO COMPRIMIDO",
                                "code": "7800006010316"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/35136/details/62527.json",
                            "id": 62527,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 27136,
                            "totalUnitValue": 32292,
                            "netAmount": 27136,
                            "taxAmount": 5156,
                            "totalAmount": 32292,
                            "netDiscount": 4788,
                            "totalDiscount": 5698,
                            "variant": {
                                "href": "https://placeholder.com/variant/6619.json",
                                "id": 6619,
                                "description": "BLUE",
                                "code": "7898582509430"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 45272,
                "urlPdfOriginal": "https://placeholder.com/view/11398/3fd1948dfe13.pdf",
                "emissionDate": 1622505600
            },
            {
                "details": {
                    "count": 2,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/35868/details/64056.json",
                            "id": 64056,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 18564,
                            "totalUnitValue": 22092,
                            "netAmount": 18564,
                            "taxAmount": 3528,
                            "totalAmount": 22092,
                            "netDiscount": 3275,
                            "totalDiscount": 3898,
                            "variant": {
                                "href": "https://placeholder.com/variant/5245.json",
                                "id": 5245,
                                "description": "FINEST CROC 4 Kg",
                                "code": "4002633558015"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/35868/details/64057.json",
                            "id": 64057,
                            "lineNumber": 0,
                            "quantity": 3,
                            "netUnitValue": 708,
                            "totalUnitValue": 842,
                            "netAmount": 2123,
                            "taxAmount": 403,
                            "totalAmount": 2526,
                            "netDiscount": 373,
                            "totalDiscount": 444,
                            "variant": {
                                "href": "https://placeholder.com/variant/4378.json",
                                "id": 4378,
                                "description": "15 BOLSAS 33X23 CM",
                                "code": "poopabag?1"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 24618,
                "urlPdfOriginal": "https://placeholder.com/view/11398/6c48c362e098.pdf",
                "emissionDate": 1623974400
            },
            {
                "details": {
                    "count": 2,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/36058/details/64424.json",
                            "id": 64424,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 7137,
                            "totalUnitValue": 8492,
                            "netAmount": 7137,
                            "taxAmount": 1355,
                            "totalAmount": 8492,
                            "netDiscount": 1259,
                            "totalDiscount": 1498,
                            "variant": {
                                "href": "https://placeholder.com/variant/2529.json",
                                "id": 2529,
                                "description": "SMALL",
                                "code": "029695323126"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36058/details/64425.json",
                            "id": 64425,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2850,
                            "totalUnitValue": 3392,
                            "netAmount": 2850,
                            "taxAmount": 542,
                            "totalAmount": 3392,
                            "netDiscount": 503,
                            "totalDiscount": 598,
                            "variant": {
                                "href": "https://placeholder.com/variant/2663.json",
                                "id": 2663,
                                "description": "100 GR",
                                "code": "7804457002043"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 11884,
                "urlPdfOriginal": "https://placeholder.com/view/11398/8c08afab2ecc.pdf",
                "emissionDate": 1624492800
            },
            {
                "details": {
                    "count": 3,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/36103/details/64523.json",
                            "id": 64523,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 2851,
                            "totalUnitValue": 3392,
                            "netAmount": 5701,
                            "taxAmount": 1083,
                            "totalAmount": 6784,
                            "netDiscount": 1005,
                            "totalDiscount": 1196,
                            "variant": {
                                "href": "https://placeholder.com/variant/5955.json",
                                "id": 5955,
                                "description": "60X80CM 3UN",
                                "code": "5600969101852"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36103/details/64524.json",
                            "id": 64524,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 4278,
                            "totalUnitValue": 5091,
                            "netAmount": 4278,
                            "taxAmount": 813,
                            "totalAmount": 5091,
                            "netDiscount": 756,
                            "totalDiscount": 899,
                            "variant": {
                                "href": "https://placeholder.com/variant/6390.json",
                                "id": 6390,
                                "description": "BEEF FLAVOUR LARGE",
                                "code": "6942133301019"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36103/details/64525.json",
                            "id": 64525,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 11422,
                            "totalUnitValue": 13592,
                            "netAmount": 11422,
                            "taxAmount": 2170,
                            "totalAmount": 13592,
                            "netDiscount": 2015,
                            "totalDiscount": 2398,
                            "variant": {
                                "href": "https://placeholder.com/variant/4053.json",
                                "id": 4053,
                                "description": "L",
                                "code": "1556978419564"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 25467,
                "urlPdfOriginal": "https://placeholder.com/view/11398/cb8d9bc299a0.pdf",
                "emissionDate": 1624665600
            },
            {
                "details": {
                    "count": 2,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/36470/details/65231.json",
                            "id": 65231,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 9278,
                            "totalUnitValue": 11041,
                            "netAmount": 9278,
                            "taxAmount": 1763,
                            "totalAmount": 11041,
                            "netDiscount": 1638,
                            "totalDiscount": 1949,
                            "variant": {
                                "href": "https://placeholder.com/variant/5952.json",
                                "id": 5952,
                                "description": "MINI 60X40CM 30UN",
                                "code": "5600969101838"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36470/details/65232.json",
                            "id": 65232,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 13564,
                            "totalUnitValue": 16141,
                            "netAmount": 13564,
                            "taxAmount": 2577,
                            "totalAmount": 16141,
                            "netDiscount": 2394,
                            "totalDiscount": 2849,
                            "variant": {
                                "href": "https://placeholder.com/variant/6727.json",
                                "id": 6727,
                                "description": "120 GR",
                                "code": "7804675560011"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 27182,
                "urlPdfOriginal": "https://placeholder.com/view/11398/2fc54f78f534.pdf",
                "emissionDate": 1625529600
            },
            {
                "details": {
                    "count": 5,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/36982/details/66311.json",
                            "id": 66311,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 11422,
                            "totalUnitValue": 13592,
                            "netAmount": 11422,
                            "taxAmount": 2170,
                            "totalAmount": 13592,
                            "netDiscount": 2015,
                            "totalDiscount": 2398,
                            "variant": {
                                "href": "https://placeholder.com/variant/4053.json",
                                "id": 4053,
                                "description": "L",
                                "code": "1556978419564"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36982/details/66312.json",
                            "id": 66312,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 10708,
                            "totalUnitValue": 12742,
                            "netAmount": 10708,
                            "taxAmount": 2034,
                            "totalAmount": 12742,
                            "netDiscount": 1889,
                            "totalDiscount": 2248,
                            "variant": {
                                "href": "https://placeholder.com/variant/4052.json",
                                "id": 4052,
                                "description": "M",
                                "code": "1556978328072"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36982/details/66313.json",
                            "id": 66313,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 708,
                            "totalUnitValue": 842,
                            "netAmount": 1415,
                            "taxAmount": 269,
                            "totalAmount": 1684,
                            "netDiscount": 249,
                            "totalDiscount": 296,
                            "variant": {
                                "href": "https://placeholder.com/variant/4378.json",
                                "id": 4378,
                                "description": "15 BOLSAS 33X23 CM",
                                "code": "poopabag?1"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36982/details/66314.json",
                            "id": 66314,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 2850,
                            "totalUnitValue": 3392,
                            "netAmount": 2850,
                            "taxAmount": 542,
                            "totalAmount": 3392,
                            "netDiscount": 503,
                            "totalDiscount": 598,
                            "variant": {
                                "href": "https://placeholder.com/variant/3847.json",
                                "id": 3847,
                                "description": "SOFT BEEF JERKY SLICES",
                                "code": "6927749830153"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/36982/details/66315.json",
                            "id": 66315,
                            "lineNumber": 0,
                            "quantity": 2,
                            "netUnitValue": 2851,
                            "totalUnitValue": 3392,
                            "netAmount": 5701,
                            "taxAmount": 1083,
                            "totalAmount": 6784,
                            "netDiscount": 1005,
                            "totalDiscount": 1196,
                            "variant": {
                                "href": "https://placeholder.com/variant/3843.json",
                                "id": 3843,
                                "description": "SOFT DUCK JERKY STRIP",
                                "code": "6927749820123"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 38194,
                "urlPdfOriginal": "https://placeholder.com/view/11398/c8685aeab011.pdf",
                "emissionDate": 1626998400
            },
            {
                "details": {
                    "count": 3,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/37323/details/66934.json",
                            "id": 66934,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 26423,
                            "totalUnitValue": 31442,
                            "netAmount": 26423,
                            "taxAmount": 5019,
                            "totalAmount": 31442,
                            "netDiscount": 4662,
                            "totalDiscount": 5548,
                            "variant": {
                                "href": "https://placeholder.com/variant/6787.json",
                                "id": 6787,
                                "description": "VERDE",
                                "code": "TG­CWD02­OD"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/37323/details/66935.json",
                            "id": 66935,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 24992,
                            "totalUnitValue": 29741,
                            "netAmount": 24992,
                            "taxAmount": 4749,
                            "totalAmount": 29741,
                            "netDiscount": 4411,
                            "totalDiscount": 5249,
                            "variant": {
                                "href": "https://placeholder.com/variant/6777.json",
                                "id": 6777,
                                "description": "CAFE XS",
                                "code": "1626449013911"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        },
                        {
                            "href": "https://placeholder.com/v1/documents/37323/details/66936.json",
                            "id": 66936,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 24992,
                            "totalUnitValue": 29741,
                            "netAmount": 24992,
                            "taxAmount": 4749,
                            "totalAmount": 29741,
                            "netDiscount": 4411,
                            "totalDiscount": 5249,
                            "variant": {
                                "href": "https://placeholder.com/variant/6770.json",
                                "id": 6770,
                                "description": "NEGRA",
                                "code": "1626449053218"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 90924,
                "urlPdfOriginal": "https://placeholder.com/view/11398/7d8750e223e6.pdf",
                "emissionDate": 1627862400
            },
            {
                "details": {
                    "count": 1,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/37363/details/67016.json",
                            "id": 67016,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 12135,
                            "totalUnitValue": 14441,
                            "netAmount": 12135,
                            "taxAmount": 2306,
                            "totalAmount": 14441,
                            "netDiscount": 2142,
                            "totalDiscount": 2549,
                            "variant": {
                                "href": "https://placeholder.com/variant/6728.json",
                                "id": 6728,
                                "description": "LIME & COCONUT SHED CONTROL",
                                "code": "645095202443"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 14441,
                "urlPdfOriginal": "https://placeholder.com/view/11398/375c51bd647d.pdf",
                "emissionDate": 1627948800
            },
            {
                "details": {
                    "count": 1,
                    "items": [
                        {
                            "href": "https://placeholder.com/v1/documents/37373/details/67031.json",
                            "id": 67031,
                            "lineNumber": 0,
                            "quantity": 1,
                            "netUnitValue": 6422,
                            "totalUnitValue": 7642,
                            "netAmount": 6422,
                            "taxAmount": 1220,
                            "totalAmount": 7642,
                            "netDiscount": 1133,
                            "totalDiscount": 1348,
                            "variant": {
                                "href": "https://placeholder.com/variant/5982.json",
                                "id": 5982,
                                "description": "4 ROLLS",
                                "code": "5600969101883"
                            },
                            "note": "",
                            "relatedDetailId": 0
                        }
                    ]
                },
                "totalAmount": 7642,
                "urlPdfOriginal": "https://placeholder.com/view/11398/c4c322fc21cd.pdf",
                "emissionDate": 1627948800
            }
        ],
        "address": "XXX XXX 9805"
    };

    let [isValid, setIsValid] = useState();
    let [val, setVal] = useState("");

    let onBlur = () => {
        setIsValid(regex.test(val) & validate(val) & val.length > 0 & val.length < 14
            ? "valid"
            : "invalid");
    };

    let onChange = (newVal) => {
        setVal(newVal);
        setIsValid(regex.test(newVal) & validate(newVal) & newVal.length > 0 & newVal.length < 14
            ? "valid"
            : "invalid");
    };

    let onSubmit = async (event) => {
        event.preventDefault();
        if (isValid === 'valid') {
            let rut = event.target[0].value;
            let response;
            try {
                response = await axios.get(`${API}/users/${rut}`);
                //setUser(response.data);
                setUser(testData);
            } catch (error) {
                return console.log(error);
            }
            if (response.data.isNew) {
                /* handle new user */
                console.log('new user');
                history.push('/newuser')
            } else {
                /* handle old user */
                (console.log('old user'));
                history.push('/menu');
            }
        }
    };

    return (
        <Grid
            areas={{
                base: ['image',
                    'form'],
                S: ['form image'],
                M: ['form image'],
                L: ['image sidebar',
                    'form  sidebar']
            }}
            columns={{
                base: ['1fr'],
                S: ['1fr 1fr'],
                M: ['1fr 1fr'],
                L: ['3fr', '1fr']
            }}
            rows={{
                base: ['1fr', '1fr'],
                S: ['1fr'],
                M: ['1fr'],
                L: ['1fr 1fr']

            }}
            height='100vh'>

            {/*Main image 60vh*/}
            <View gridArea='image' height='60vh' isHidden={{ base: false, S: true, M: true, L: false }}>
                <Image src={catdog} width='100%' height='100%' objectFit='cover' alt='' />
            </View>

            {/*Main image 100vh*/}
            <View gridArea='image' height='100vh' isHidden={{ base: true, S: false, M: false, L: true }}>
                <Image src={catdog} width='100%' height='100%' objectFit='cover' alt='' />
            </View>

            {/*Form*/}
            <View gridArea='form'>
                <Flex direction="column" height='100%' alignItems="center" justifyContent='center'>
                    <Header level={1} UNSAFE_style={{ color: 'white', fontWeight: 'bolder' }}>CONSULTA TUS DATOS Y COMPRAS</Header>
                    <Form onSubmit={onSubmit} width='66%'>
                        <TextField
                            label="RUT"
                            validationState={isValid}
                            onChange={onChange}
                            value={val}
                            onBlur={onBlur}
                        >
                        </TextField>
                        <Button variant="cta" type="submit">Consultar</Button>
                    </Form>
                </Flex>
            </View>

            {/*QR*/}
            <View gridArea='sidebar' isHidden={{ base: true, S: true, M: true, L: false }}>
                <Flex>
                    <Image src={catphone} height='100vh' objectFit='cover' alt='' />
                    <Flex direction='column' position='fixed'>
                        <Heading level={2} position='relative' margin='20px 20px' UNSAFE_style={{ color: 'white' }}>INGRESA DESDE TU CELULAR.</Heading>
                        <View backgroundColor='static-white' height='size-4000' margin='20px'>
                            <Image src={qrcode} objectFit='cover' position='relative' alt='' />
                        </View>
                    </Flex>
                </Flex>
            </View>
        </Grid>
    );
};