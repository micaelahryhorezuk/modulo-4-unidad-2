import React from 'react'
import MiComponente from '../MiComponente';
import OtroComponente from '../OtroComponente';

function LayoutBasico() {
	
	const usuario = {
		name: "Micaela",
		lastName: "Hryhorezuk"
	}

  return (
		<section className="holder">
			<h2>LayoutBasico</h2>
			<MiComponente usuario={usuario}/>
			<OtroComponente/>
		</section>
  )
}

export default LayoutBasico
