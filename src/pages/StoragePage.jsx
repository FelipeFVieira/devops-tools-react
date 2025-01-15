import React from 'react';
import NavBar from '../components/macro-components/navbar';
import Body from '../components/macro-components/Body';
import ServiceCard from '../components/micro-components/ServiceCard';
import s3BucketImage from '../images/services-image/s3-bucket-service-image.png'
import BucketS3Form from '../components/micro-components/forms/BucketS3Form';
const StoragePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Body>
                <ServiceCard serviceImage={s3BucketImage} form={<BucketS3Form/>}></ServiceCard>
            </Body>
        </div>
    )
}

export default StoragePage