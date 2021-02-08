const CallToActionOne = () => {
  return (
    <>
      <div className='w-100 text-center'>
        <a href=" https://wa.me/5521981853414?text=Oi, gostaria de me informar melhor sobre os passeios" target='_blank'>
          <button type="button" className="btn btn-info"><span className='display-4'>Agende aqui seu próximo passeio</span></button>
        </a>
      </div>
      <style jsx>{`                
                span{
                    font-size: 2rem;
                }
            `}
      </style>
    </>
  );
}

export default CallToActionOne;