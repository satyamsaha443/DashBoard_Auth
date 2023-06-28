import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ECommerce from '../dashboard/ECommerce';

type Props = {}

export default function Home({ }: Props) {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [])
    return (
        <div>
            <ECommerce></ECommerce>
        </div>
    )
}