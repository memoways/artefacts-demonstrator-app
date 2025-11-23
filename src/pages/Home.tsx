import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection';
import ForkScreen from '../components/home/ForkScreen';
import ExplorationScreen from '../components/home/ExplorationScreen';
import ComparisonScreen from '../components/home/ComparisonScreen';

type Screen = 'start' | 'fork' | 'exploration' | 'comparison';
type Route = 'classic' | 'artefact';

const Home = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('start');
    const [selectedObjective, setSelectedObjective] = useState<string>('');
    const [selectedRoute, setSelectedRoute] = useState<Route>('classic');
    const location = useLocation();

    useEffect(() => {
        if (location.state?.reset) {
            handleReset();
            // Clear state to prevent loop if needed, though location state persists until nav
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    const handleSelectObjective = (objective: string) => {
        setSelectedObjective(objective);
        setCurrentScreen('fork');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSelectRoute = (route: Route) => {
        setSelectedRoute(route);
        setCurrentScreen('exploration');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCompare = () => {
        setCurrentScreen('comparison');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleReset = () => {
        setCurrentScreen('start');
        setSelectedObjective('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (currentScreen === 'fork') setCurrentScreen('start');
        if (currentScreen === 'exploration') setCurrentScreen('fork');
        if (currentScreen === 'comparison') setCurrentScreen('fork');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Render current screen
    const renderScreen = () => {
        switch (currentScreen) {
            case 'start':
                return (
                    <HeroSection
                        onSelectObjective={handleSelectObjective}
                        onSkip={() => {
                            // Scroll to features or show comparison directly? 
                            // For now let's show comparison as "free explore"
                            handleCompare();
                        }}
                    />
                );
            case 'fork':
                return (
                    <ForkScreen
                        objective={selectedObjective}
                        onSelectRoute={handleSelectRoute}
                        onBack={handleBack}
                        onCompare={handleCompare}
                    />
                );
            case 'exploration':
                return (
                    <ExplorationScreen
                        route={selectedRoute}
                        onBack={handleBack}
                        onCompare={handleCompare}
                    />
                );
            case 'comparison':
                return (
                    <ComparisonScreen
                        onBack={handleBack}
                        onReset={handleReset}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {renderScreen()}
        </div>
    );
};

export default Home;
