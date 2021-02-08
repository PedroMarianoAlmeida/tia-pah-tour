import HeaderNext from './../Components/HeaderNext';
import NavBarSimpleWithCenterLogo from './../Components/NavBarSimpleWithCenterLogo';
import CompleteCarousel from './../Components/CompleteCarousel';
import CallToActionOne from './../Components/CallToActionOne';

const caurouselItems = [
  {src: '', altText: 'Slide 1', caption: 'Slide 1'},
  {src: '', altText: 'Slide 2', caption: 'Slide 2'}
];

export default function Home() {
  return (
    <>
      <HeaderNext title="Tia Pah Tour" description="Passeios turísticos pelo Rio de Janeiro"/>
      <NavBarSimpleWithCenterLogo />
      <div className='jumbotron'>
        <h1 className='display-4'>Tia Pah Tour Logo</h1>
        <h2 className='lead'>Passeios turísticos pelo Rio de Janeiro</h2>

        <CompleteCarousel items={caurouselItems}/>

        <CallToActionOne />       

      </div>      
    </>
  )
}
