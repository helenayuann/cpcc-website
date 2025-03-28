import HeroSection from '../components/HeroSection';
import ResearchAreas from '../components/ResearchAreas';
import Team from '../components/Team';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ResearchAreas />
      <Team />
    </div>
  );
};

export default Home;