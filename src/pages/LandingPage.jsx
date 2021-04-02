import React, { useRef, forwardRef } from 'react';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ReviewsSection from '../components/ReviewSection/ReviewsSection';
import BottomBannerSection from '../components/BottomBannerSection/BottomBannerSection';
import TeamSection from '../components/TeamSection/TeamSection'
import Layout from '../components/Layout/Layout';

const LandingPage = () => {
    const serviceSectionRef = useRef(null);
    const teamSectionRef = useRef(null);
    const reviewSectionRef = useRef(null);
    const bottomBannerSectionRef = useRef(null)

    const handleServicesScrollIntoView = () => {
        serviceSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const handleReviewsScrollIntoView = () => {
        reviewSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleTeamScrollIntoView = () => {
        teamSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }



    return (
        <Layout handleServicesScrollIntoView={handleServicesScrollIntoView} handleReviewsScrollIntoView={handleReviewsScrollIntoView} handleTeamScrollIntoView={handleTeamScrollIntoView} >
            <ServiceSection serviceSectionRef={serviceSectionRef} />
            <ReviewsSection reviewSectionRef={reviewSectionRef} />
            <TeamSection teamSectionRef={teamSectionRef} />
            <BottomBannerSection bottomBannerSectionRef={bottomBannerSectionRef} />
        </Layout>
    )
}


export default LandingPage;