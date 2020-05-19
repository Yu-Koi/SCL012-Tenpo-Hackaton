import React, {Fragment} from 'react'
import './Home.css'
import Topbar from './Topbar'


const Home = () => {
    return (
        <Fragment >
            <Topbar />
            <div className='home'>
                <header className='headerHome' >
                    <span className='previewAmount'>TU PLATA DISPONIBLE</span>
                    <h1 className='amountHome'>$100.000</h1>
                    <span className='toDiscount'>Monto a descontar: $50.000   &gt;</span>
                </header>
                <nav className='menuHome'>
                    <div className='optionsMenuHome borderRight'>
                        <img className='iconCharge' alt='Cargar plata' src={require('../img/charge.svg')} />
                        <span className='textOptionMenu'>Cargar plata</span>
                    </div>
                    <div className='optionsMenuHome borderRight'>
                        <img className='iconWithdraw' alt='Retirar plata' src={require('../img/withdraw.svg')} />
                        <span className='textOptionMenu' >Retirar plata</span>
                    </div>
                    <div className='optionsMenuHome'>
                        <img className='iconHistory' alt='Historial' src={require('../img/history.svg')} />
                        <span className='textOptionMenu'>Historial</span>
                    </div>
                </nav>
                <section className='moreOptionsSection' >
                    <div className='optionsMore'>
                        <img className='iconOptionsMore' src={require('../img/01payment.svg')} alt='Pago de cuentas' />
                        <span className='textOptionsMore'>Pago de cuentas</span>
                    </div>
                    <div className='optionsMore'>
                        <img className='iconOptionsMore' src={require('../img/02recharge.png')} alt='Recargas' />
                        <span className='textOptionsMore'>Recargas</span>
                    </div>
                    <div className='optionsMore'>
                        <img className='iconOptionsMore' src={require('../img/03community.svg')} alt='Cobrar y pagar' />
                        <span className='textOptionsMore'>Cobrar y pagar</span>
                    </div>
                    <div className='optionsMore'>
                        <img className='iconOptionsMore' src={require('../img/04paypal.svg')} alt='Paypal' />
                        <span className='textOptionsMore'>Paypal</span>
                    </div>
                    <div className='optionsMore'>
                        <img className='iconOptionsMore' src={require('../img/05pocket.svg')} alt='Bolsillo' />
                        <span className='textOptionsMore'>Bolsillo</span>
                    </div>
                    <div className='optionsMore'>
                        <img className='iconOptionsMore' src={require('../img/06requirement.svg')} alt='Mis solicitudes' />
                        <span className='textOptionsMore'>Mis solicitudes</span>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Home
