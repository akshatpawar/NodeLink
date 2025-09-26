import React from "react";
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'
import DemoSection from './DemoSection'
import CTASection from './CTASection'
import Footer from './Footer'
import '../../App.css'
import './LandingPage.css'

export default function LandingPage() {
    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <HeroSection />
                <FeaturesSection />
                <DemoSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}