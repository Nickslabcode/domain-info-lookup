import ViewContainer from '../hoc/ViewContainer';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import Logo from '../components/Logo';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const [_searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({});
  }, [setSearchParams]);

  return (
    <>
      <ViewContainer>
        <Logo />
        <SearchForm />
      </ViewContainer>
      <Footer />
    </>
  );
};

export default Home;
