import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className='px-4 pt-8 pb-20'>
      <Header />
      {children}

      <div className='bottom-box'></div>
    </div>
  );
}
