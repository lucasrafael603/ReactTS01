import React, { ReactNode, ReactElement, PropsWithChildren, WeakValidationMap, ValidationMap } from 'react'
import {DivModal} from '../Modal/styles'

interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

interface Teste {

children: React.ReactNode
onClose: VoidFunction | void

}



const Modal = ({ onClose = () => {}, children}: Teste ) => {


    return (

      
      <DivModal>
        <div className='container'>
          <button className='close' onClick={onClose} />

          <div className='dados' >
          <div className='content'> {children} </div>
          </div>
            
          
          
        </div>  

        
          
       </DivModal>

      
       

    )

  }


  export default Modal