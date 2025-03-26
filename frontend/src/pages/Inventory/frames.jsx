import {React, useState} from "react"
import { Card, CardContent, CardActionArea, CardMedia, Grid2, CardHeader, Typography, Grow} from '@mui/material';
import { styled } from "@mui/material/styles";
import Color from "color";
import Modal from "../../components/Modal"
import UserNavbar from "../../components/navBar";

//import ca from "../../Images/CapeMay.webp"
//import { makeStyles } from '@mui/styles';







// const useStyles = makeStyles(theme => ({
//     root: {
//         flexGrow: 1,
//         padding: theme.spacing(2)
//     }
// }))




const Frames = () => {


    // const classes = useStyles()
    const data = [
        { id: 1, name: "Brescia"    ,  price: "$99.99" ,  img: "/Images/Brescia.webp", brand: "Aura", model: "AUM-16-64", material: "Plastic", shape: "Rectangular", gender: "Men", frameType: "Full Frame", lensWidth: 54, lensHeight: 33, bridgeWidth: 14, templeLength: 140}, //units is mm
        { id: 2, name: "Cape May"   ,  price: "$199.99",  img: "/Images/CapeMay.webp",   brand: "Elements", model: "VC-M04", material: "Metal", shape: "Double Bar", gender: "Men", frameType: "Full Frame", lensWidth: 57, lensHeight: 49, bridgeWidth: 18, templeLength: 140},
        { id: 3, name: "Brevik"     ,  price: "$79.99" ,  img: "/Images/Brevik.webp",    brand: "Coast", model: "COAW-22-02", material: "Plastic", shape: "Round", gender: "Women", frameType: "Full Frame", lensWidth: 49, lensHeight: 42, bridgeWidth: 20, templeLength: 145},
        { id: 4, name: "Minden"     ,  price: "$139.99",  img: "/Images/Minden.webp",    brand: "Carter", model: "CART-18-14", material: "Metal", shape: "Square", gender: "Men", frameType: "Full Frame", lensWidth: 59, lensHeight: 44, bridgeWidth: 20, templeLength: 145  },

        { id: 5, name: "Galata"     ,  price: "$119.99",  img: "/Images/Galata.webp",    brand: "Y13", model: "Y13-22-01", material: "Plastic", shape: "Cat Eye", gender: "Women", frameType: "Full Frame", lensWidth: 48, lensHeight: 34, bridgeWidth: 17, templeLength: 130  },
        { id: 6, name: "Ismailia"   ,  price: "$169.99",  img: "/Images/Ismailia.webp",brand: "Empire", model: "EMP-16-12", material: "Plastic", shape: "Cat Rectangular", gender: "Men", frameType: "Full Frame", lensWidth: 51, lensHeight: 32, bridgeWidth: 17, templeLength: 140  },
        { id: 7, name: "Goba"       ,  price: "$119.99",  img: "/Images/Goba.webp",      brand: "Y13", model: "Y13-21-01", material: "Plastic", shape: "Oval", gender: "Men", frameType: "Full Frame", lensWidth: 43, lensHeight: 31, bridgeWidth: 16, templeLength: 123  },
        { id: 8, name: "Sunny Isles",  price: "$139.99",  img: "/Images/SunnyIsles.webp",      brand: "Elite", model: "ELI-22-02", material: "Plastic", shape: "Rectangular", gender: "Unisex", frameType: "Full Frame", lensWidth: 50, lensHeight: 41, bridgeWidth: 17, templeLength: 145  },

        { id: 9, name: "Sin Name",     price: "$119.99",  img: "/Images/SinName.webp",    brand: "Claire", model: "CLA-18-28", material: "Metal", shape: "Round", gender: "Women", frameType: "Full Frame", lensWidth: 49, lensHeight: 43, bridgeWidth: 19, templeLength: 142  },
        { id: 10,name: "Madrid",       price: "$79.99",  img: "/Images/Madrid.webp",      brand: "Aura", model: "AUM-16-29", material: "Metal", shape: "Rectangular", gender: "Men", frameType: "Full Frame", lensWidth: 53, lensHeight: 34, bridgeWidth: 17, templeLength: 145  },
        { id: 11,name: "Virton",       price: "$164.99",  img: "/Images/Virton.webp",      brand: "Carter", model: "CART-22-06", material: "Plastic", shape: "Square", gender: "Men", frameType: "Full Frame", lensWidth: 55, lensHeight: 36, bridgeWidth: 15, templeLength: 145  },
        { id: 12,name: "Wilmington",   price: "$199.99",  img: "/Images/Wilmington.webp",  brand: "Impression", model: "IMPW-16-23", material: "Plastic", shape: "Rectangular", gender: "Women", frameType: "Full Frame", lensWidth: 52, lensHeight: 37, bridgeWidth: 15, templeLength: 135  },

        { id: 13,name: "Kidwelly",     price: "$169.99",  img: "/Images/Kidwelly.webp",   brand: "Swiss", model: "SW-20-12", material: "Metal", shape: "Round", gender: "Unisex", frameType: "Full Frame", lensWidth: 50, lensHeight: 44, bridgeWidth: 20, templeLength: 145  },
        { id: 14,name: "Ambo",         price: "$199.99",  img: "/Images/Ambo.webp",           brand: "Impression", model: "IMPM-16-21", material: "Plastic", shape: "Rectangular", gender: "Men", frameType: "Full Frame", lensWidth: 55, lensHeight: 36, bridgeWidth: 15, templeLength: 140  },
        { id: 15,name: "Paterson",     price: "$179.99",  img: "/Images/Paterson.webp",           brand: "Empire", model: "EMP-16-72", material: "Plastic", shape: "Rectangular", gender: "Men", frameType: "Full Frame", lensWidth: 57, lensHeight: 37, bridgeWidth: 15, templeLength: 145  },
        { id: 16,name: "Haslingden",   price: "$169.99",  img: "/Images/Haslingden.webp",           brand: "Christian of Paris", model: "COP-15-25", material: "Plastic", shape: "Butterfly", gender: "Women", frameType: "Full Frame", lensWidth: 54, lensHeight: 41, bridgeWidth: 15, templeLength: 135  },


        // {id: 17, name:"Acuvue Oasys 24 Pack", price:"$189.99", img:"/Images/acuvue_oasys_24_pack", brand:"Acuvue", visionType:"Spherical", daysSupply:336, manufacturer:"Johnson&Johnson", lensType:"Bi-Weekly", waterContent:"38%"},
        // {id: 18, name:"SofLens 38 6 Pack", price:"$48.99", img:"/Images/sofLens_38", brand:"SofLens", visionType:"Spherical", daysSupply:84, manufacturer:"Bausch & Lomb", lensType:"Bi-Weekly", waterContent:"38.6%"},
        // {id: 19, name:"Proclear Compatibles 6 Pack", price:"$102.99", img:"/Images/proclear", brand:"Proclear", visionType:"Spherical", daysSupply:180, manufacturer:"CooperVision", lensType:"Monthly", waterContent:"62%"},
        // {id: 20, name:"INFUSE 90 Pack", price:"$149.99", img:"/Images/infuse", brand:"INFUSE", visionType:"Spherical", daysSupply:90, manufacturer:"Bausch & Lomb", lensType:"Daily", waterContent:"55%"},

        // {id: 21, name:"Biofinity 6 Pack", price:"$62.99", img:"/Images/biofinity_pack", brand:"Biofinity", visionType:"Spherical", daysSupply:180, manufacturer:"CooperVision", lensType:"Monthly", waterContent:"48%"},
        // {id: 22, name:"Ultra for Astigmatism", price:"$92.99", img:"/Images/ultra_for_astigmatism", brand:"Ultra", visionType:"Toric", daysSupply:180, manufacturer:"Bausch & Lomb", lensType:"Monthly", waterContent:"46%"},
        // {id: 23, name:"Precision1", price:"$81.99", img:"/Images/precision1_90_pack", brand:"Precision1", visionType:"Spherical", daysSupply:90, manufacturer:"Alcon", lensType:"Daily", waterContent:"51%"},
        // {id: 24, name:"MiSight 1 Day 180 Pack", price:"$308.99", img:"/Images/Misight_1_Day_180_Pack", brand:"MiSight", visionType:"Spherical", daysSupply:180, manufacturer:"CooperVision", lensType:"Daily", waterContent:"60%"},

        // {id: 25, name:"TOTAL30 12 Pack", price:"$171.99", img:"/Images/Total30_12_Pack", brand:"TOTAL30", visionType:"Spherical", daysSupply:360, manufacturer:"Alcon", lensType:"Monthly", waterContent:"99%"},
        // {id: 26, name:"Air Optix Plus Hydraglyde Multifocal 6 Pack", price:"$106.99", img:"/Images/hydraglyde_multifocal", brand:"Air Optix", visionType:"Multifocal", daysSupply:180, manufacturer:"Alcon", lensType:"Monthly", waterContent:"33%"},
        // {id: 27, name:"Miru 1 Day 90 Pack", price:"$85.99", img:"/Images/Miru", brand:"Miru", visionType:"Spherical", daysSupply:90, manufacturer:"Menicon America Inc", lensType:"Daily", waterContent:"57%"},
        // {id: 28, name:"Acuvue Vita 12 Pack", price:"$155.99", img:"/Images/acuvue_vita_12_pack", brand:"Acuvue", visionType:"Spherical", daysSupply:360, manufacturer:"Johnson&Johnson", lensType:"Monthly", waterContent:"41%"},

        // {id: 29, name:"Acuvue Oasys 1-Day w/Hydraluxe Astigmatism 90 Pack", price:"$193.99", img:"/Images/acuvue_oasys_astigmatism", brand:"Acuvue", visionType:"Spherical", daysSupply:90, manufacturer:"Johnson&Johnson", lensType:"Daily", waterContent:"38%"},
        // {id: 30, name:"Precision7 27 Pack", price:"$117.99", img:"/Images/Precision7", brand:"Precision7", visionType:"Spherical", daysSupply:180, manufacturer:"Alcon", lensType:"Weekly", waterContent:"55%"},
        // {id: 31, name:"Infuse Multifocal 90 Pack", price:"$200.99", img:"/Images/Infuse_Multifocal", brand:"INFUSE", visionType:"Multifocal", daysSupply:90, manufacturer:"Bausch & Lomb", lensType:"Daily", waterContent:"55%"},
        // {id: 32, name:"PureVision 2 6 Pack", price:"$114.99", img:"/Images/PV", brand:"PureVision", visionType:"Spherical", daysSupply:180, manufacturer:"Bausch & Lomb", lensType:"Monthly", waterContent:"36%"}














    ]
    const [modal, setModal] = useState(false);
    let [buffer, setBuffer] = useState("null")
    const handleClick = (elem) => {
        setBuffer(elem)
        //const {key} = event.target.dataset;
        //document.querySelectorAll(`input[data-key="${key}"]`)[0].focus();
        //console.log(key);
        //console.log(props);
          setModal(!modal)
    //    const dataId = event.currentTarget.dataset.id;
    //    const clickedItem = data.find(data => data.id === parseInt(dataId) );
        console.log('Clicked item:', buffer.name);
        console.log(modal);

        
    }
    
        
    const toggleModal = () => {
        setModal(!modal)
    }
    return (


        
        // <div className={classes.root}>
        <div>
            <UserNavbar/>
        <Grid2
        
        sx={{ flexGrow: 1, flexShrink:1, paddingLeft: 20}}
        
        >
            <h1 fontFamily="Roboto">Eyeglasses</h1>
            <h5 fontFamily="Roboto" sx={{padding:500}}>Showing 16 Products</h5>
        </Grid2>

        <Grid2
            container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
            
           sx={{ flexGrow: 1, flexShrink:1, paddingLeft: 2, paddingRight: 2, paddingBottom:2}}
          
        >
            {data.map(elem => (
               // <div>
                <Grid2 item minWidth={100}  key={data.indexOf(elem)}  >   

                     <Card >
                        <CardActionArea onClick={ () => handleClick(elem)}> 
                        <CardMedia
                            component = "img"
                            alt =  "A pair of glasses"
                            height = "140"
                            src = {`${elem.img}`}
                        />
                        <CardContent>
                            <Grid2 container justifyContent='space-between'>
                                <Grid2 item>
                                    <Typography variant="h5" gutterBottom fontFamily={"Roboto"} >
                                         {elem.name} 
                                    </Typography>
                                </Grid2>
                                <Grid2 item>
                                <Typography variant="h5" gutterBottom fontWeight={'bold'}>
                                         {elem.price} 
                                    </Typography>
                                </Grid2>
                            </Grid2>

                        </CardContent>
                        </CardActionArea>
                    </Card> 
                </Grid2>
                
               // {/* {modal && (<Modal data={elem.name}/>)} */}
               // </div>

                


            ))}

        </Grid2> 
        

         {modal && ( 
                <Modal 
                data = {buffer}
                bool = {handleClick}
                

    
    
                 />
                )}  
        </div>
        

    );
};

export default Frames;