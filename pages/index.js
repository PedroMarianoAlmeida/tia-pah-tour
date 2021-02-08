import HeaderNext from './../Components/HeaderNext';
import NavBarSimpleWithCenterLogo from './../Components/NavBarSimpleWithCenterLogo';
import CompleteCarousel from './../Components/CompleteCarousel';
import CallToActionOne from './../Components/CallToActionOne';
import FooterOne from './../Components/FooterOne';

const caurouselItems = [
  { src: '/teste1.jpg', altText: 'Slide 1', caption: 'Slide 1' },
  { src: '/teste2.jpg', altText: 'Slide 2', caption: 'Slide 2' }
];

export default function Home() {
  return (
    <>
      <HeaderNext title="Tia Pah Tour" description="Passeios turísticos pelo Rio de Janeiro" />
      <NavBarSimpleWithCenterLogo />
      <main className='text-center'>
        <CompleteCarousel items={caurouselItems} />

      </main>

      <div className='mb-5 pb-5'>
        <CallToActionOne />
      </div>

      <FooterOne />
    </>
  )
}
