import React, { useRef, useContext, useEffect } from 'react';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ReviewsSection from '../../components/ReviewSection/ReviewsSection';
import BottomBannerSection from '../../components/BottomBannerSection/BottomBannerSection';
import TeamSection from '../../components/TeamSection/TeamSection'
import Layout from '../../components/Layout/Layout';
import Fade from '@material-ui/core/Fade';
import QuoteSection from '../../components/QuoteSection/QuoteSection';

import AAMContext from '../../context/AAMContext';


const LandingPage = () => {
    const serviceSectionRef = useRef(null);
    const teamSectionRef = useRef(null);
    const reviewSectionRef = useRef(null);
    const bottomBannerSectionRef = useRef(null);
    const quoteSectionRef = useRef(null);
    const context = useContext(AAMContext);
    const { quoteGenerated } = context;




    const handleServicesScrollIntoView = () => {
        serviceSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const handleReviewsScrollIntoView = () => {
        reviewSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleTeamScrollIntoView = () => {
        teamSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const handleQuoteScrollIntoView = () => {
        quoteSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    useEffect(() => {
        if (quoteGenerated) {
            handleQuoteScrollIntoView()
        }
    }, [quoteGenerated])

    return (
        <Layout
            title
            handleServicesScrollIntoView={handleServicesScrollIntoView}
            handleReviewsScrollIntoView={handleReviewsScrollIntoView}
            handleTeamScrollIntoView={handleTeamScrollIntoView}
            handleQuoteScrollIntoView={handleQuoteScrollIntoView} >
            {quoteGenerated && <Fade in={quoteGenerated} timeout={3000} ><QuoteSection quoteSectionRef={quoteSectionRef} /></Fade>}
            <ServiceSection serviceSectionRef={serviceSectionRef} />
            <ReviewsSection reviewSectionRef={reviewSectionRef} />
            <TeamSection teamSectionRef={teamSectionRef} />
            <BottomBannerSection bottomBannerSectionRef={bottomBannerSectionRef} />
        </Layout>
    )
}


export default LandingPage;