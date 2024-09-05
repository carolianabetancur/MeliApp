import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Stack, Typography, Button } from '@mui/material'
import API from '../../services/API'
import useStyle from './SpecificItemStyles'


const SpecificItems = () => {
    const { specificItem } = API
    const params = useParams()
    const id = params.id
    const classes = useStyle()
    const [item, setItem] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        return async () => {
            await getItem()
            await getDescription()
        }
    }, [])

    const getItem = async () => {
        try {
            await specificItem.getItem(id).then((result) => {
                let data = result.data
                console.log(data)
                setItem(data)
            })
                .catch((error) => {
                    alert('Ups ocurrió un error')
                    console.log(error)
                })
        }
        catch (error) {
            alert('Ups ocurrió un error')
            console.log(error)
        }
    }

    const getDescription = async () => {
        try {
            await specificItem.getItemDescription(id).then((result) => {
                let data = result.data
                console.log(data)
                setDescription(data)
            })
                .catch((error) => {
                    alert('Ups ocurrió un error')
                    console.log(error)
                })
        }
        catch (error) {
            alert('Ups ocurrió un error')
            console.log(error)
        }
    }

    return (
        <Stack className={classes.root}>
            <Stack flexDirection="row" className={classes.container}>
                {!!item && (
                    <>
                        <Stack width='80%'>
                            {!!item.pictures && (
                                <img src={item.pictures[0].url} className={classes.img} />
                            )}
                            {!!description && (
                                <Stack >
                                    <Typography variant='h5' align='left'>Descripción del producto</Typography>
                                    <Typography variant='body2' align='left'>{description.plain_text}</Typography>
                                </Stack>
                            )}
                        </Stack>
                        <Stack width='20%' spacing={2} sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                            <Typography variant='body2' align='left'>{item.condition.charAt(0).toUpperCase() + item.condition.slice(1)} - {item.initial_quantity} vendidos</Typography>
                            <Typography variant='body1q' align='left' fontWeight='bold'>{item.title}</Typography>
                            <Typography variant='h4' align='left'>{item.currency_id === 'ARS' ? '$' : item.currency_id}{item.price}</Typography>
                            <Button onClick={() => { }} variant="contained" className={classes.button}>Comprar</Button>
                        </Stack>
                    </>
                )}
            </Stack>
        </Stack >
    )
}

export default SpecificItems;