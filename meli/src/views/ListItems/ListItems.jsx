import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import { Stack, Typography } from '@mui/material'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import API from '../../services/API'
import useStyle from './ListItemsStyles'

const ListItems = () => {
    const { listItems } = API
    const location = useLocation()
    const navigate = useNavigate()
    const classes = useStyle()

    const queryParams = Object.fromEntries(new URLSearchParams(location.search).entries())
    const searchValue = queryParams['search']
    const [items, setItems] = useState([])

    useEffect(() => {
        return () => {
            getListItems()
        }
    }, [])

    const getListItems = async () => {
        try {
            await listItems.getItems(searchValue).then((result) => {
                let data = result.data?.results
                console.log(data.slice(0, 4))
                setItems(data.slice(0, 4))
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

    const getSpecificItem = (id) => {
        navigate(`/items/${id}`)
    }

    return (
        <Stack className={classes.root}>
            <Stack className={classes.container}>
                {
                    items.map((item, index) => (
                        <>
                            {console.log(item)}
                            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center" }}>
                                <Stack direction="row" spacing={2} key={index} onClick={() => getSpecificItem(item.id)}>
                                    <img src={item.thumbnail} sx={{ objectFit: 'contain' }} width="200px" />
                                    <Stack sx={{ justifyContent: "center", alignItems: "flex-start" }} width={'70%'}>
                                        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                                            <Typography variant='h6'>
                                                {item.currency_id === 'ARS' ? '$' : item.currency_id}{item.price}
                                            </Typography>
                                            {item.shipping.free_shipping && <AirportShuttleIcon sx={{ fontSize: '10px' }} className={classes.freeShippingIcon} />}
                                        </Stack>
                                        <Typography variant='h6' align='left'>{item.sanitized_title}</Typography>
                                    </Stack>
                                </Stack>
                                <Stack direction="row" spacing={1}
                                    sx={{ alignSelf: 'flex-start', alignItems: "flex-start", marginTop: '4%', paddingRight: '5%' }}>
                                    <Typography variant='body2'>{item.seller.nickname}</Typography>
                                </Stack>
                            </Stack>
                            {index < items.length - 1 && <Stack className={classes.divider} />}
                        </>
                    ))
                }
            </Stack>
        </Stack >
    )
}
export default ListItems;