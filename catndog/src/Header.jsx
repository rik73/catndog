import React from 'react'
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from 'react-router-dom'
//img
import headerImg from './img/Group.png'
import im from './img/Group_2.png';
import SimpleCarouselSlider from 'react-simple-carousel-image-slider';

const Header = () => {

    var images = [
       headerImg,im
    ];    
    const CustomBox = styled(Box) (({ theme }) => ({
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        // tamanhos
        gap: theme.spacing(2),
        paddingTop: theme.spacing(5),
        // cor de fundo
        backgroundColor: '#FDE3D9',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box) (({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));


  return  (
        <CustomBox component='header'>
            {/*  Box text  */}
            <BoxText 
            component='section'
            >
                <Typography
                variant='h2'
                component= 'h1'
                sx={{
                    fontWeight: 700,
                    color: '#000',
                }}
                >
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>

                <Typography
                variant='p'
                component='p'
                sx={{
                    py: 3,
                    lineHeight: 1.6,
                    color: '#000',
                }}
                >
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>

                
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '0',
                    alignSelf: 'right',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '1',
                    alignSelf: 'flex-end',
                },
            })}
            >
                   <SimpleCarouselSlider
          images={images}
          autoplay={false} 
        />
            </Box>

        </CustomBox>
    )
}

export default Header