import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexHeader from 'components/Headers/IndexHeader';
import WeddingCard from 'WeddingCard';
import DefaultFooter from 'components/Footers/DefaultFooter';
import Photos from 'Photos';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import RegistryPage from 'pages/RegistryPage';

function App() {

    console.log(`process.env.PUBLIC_URL = '${process.env.PUBLIC_URL}'`);

    return (
        <div className="wrapper">
            <IndexHeader />
            <Container>
                <Routes>
                    <Route path="/"
                        element={<HomePage />}
                    />
                    <Route path="registry"
                        element={<RegistryPage />}
                    />
                    <Route path="*"
                        element={<Navigate to="/registry" replace />}
                    />
                </Routes>
            </Container>
            <DefaultFooter />
        </div>
    );
}

export default App;
