import { Container, Grid } from "@mui/material"
import React, { useState } from "react";
import BuilderSideBar from "./BuilderSideBar";
import BuilderLoginForm from "./BuilderLoginForm";


const Builder = () => {

    const [selected, setSelected] = useState([
        {
            tittle: 'Quick sign-in', isChecked: false, keys: [
                { value: 'pass keys', isActive: false }
            ]
        },
        {
            tittle: 'Social logins', isChecked: false, keys: [
                { value: 'Google', isActive: false },
                { value: 'Github', isActive: false }
            ]
        },
        {
            tittle: 'Single sign-on', isChecked: false, keys: [
                { value: 'OpenID', isActive: false }, { value: 'SAML', isActive: false }
            ]
        },
        {
            tittle: 'Email sign on', isChecked: false, keys: [
                { value: 'Magic Code', isActive: false },
                { value: 'Magic Link', isActive: false }]
        },
    ])


    const handleOuterOptionToogle = (index) => {

        setSelected(prev => {

            prev[index].isChecked = !prev[index].isChecked;

            return [...prev]
        })
    }

    const handleInnerOptionToogle = (index, i) => {

        setSelected(prev => {

            prev[index].keys[i].isActive = !prev[index].keys[i].isActive;

            return [...prev]
        })
    }



    return (
        <Container sx={{ margin: "8%" }} component="main" maxWidth="md">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                <Grid item xs={6} md={5} sx={{ overflow: 'scroll' }}>
                    <BuilderSideBar
                        menuList={selected}
                        onChangeInnerToggle={handleInnerOptionToogle}
                        onChangeOuterToggle={handleOuterOptionToogle} />
                </Grid>
                <Grid item xs={6} md={7}>
                    <BuilderLoginForm dynamicList={selected} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Builder