import mClose from '../src/img/cancel.png'


const Modal = props => {
    return(
        <div className={`modal_wrapper ${props.isOpened ? 'open' : 'close'}`} style= {{...props.style}}>
           <div className="modal_body">
            <div className="modal_close" onClick={props.onModalClose}>
                <img  src={mClose} width="20px" alt='modal'/>
            </div>
                <h3>{props.title}</h3>
            <hr/>
                <p className='modal_par'>{props.children}</p>
           </div>
        </div>
    )
}

export default Modal;