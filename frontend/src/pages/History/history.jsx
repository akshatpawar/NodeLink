import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Header from '../Home/navbar.jsx';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([]);

    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch (e) {
                //snackbar
                console.log(e);
            }
        }

        fetchHistory();

    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }



    return (
        <div className='home-container'>
            <Header />
            {
                (meetings.length !== 0) ? meetings.map((e, i) => {
                    return (

                        <div>
                            <Card key={i} variant="outlined" sx={{
                                backgroundColor: "#ffffff30",
                                borderRadius: "16px",
                                margin: "20px auto",
                                width: "80%",
                                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                            }}>
                                <CardContent>

                                    <Typography sx={{ fontSize: 16 }} color="text.primary" gutterBottom>
                                        Code: {e.meetingCode}
                                    </Typography>

                                    <Typography color="text.secondary">
                                        Date: {formatDate(e.date)}
                                    </Typography>

                                </CardContent>
                            </Card>
                        </div>
                    )
                }) : <></>

            }
        </div>
    )
}
