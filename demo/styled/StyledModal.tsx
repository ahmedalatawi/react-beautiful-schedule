import styled from 'styled-components'
import { Modal } from '../UI/Modal'

const StyledModal = styled(Modal)`
  .modal-header {
    font-family: 'Oxygen';
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 900;
    background-color: #15a4fa;
    padding: 20px;
    color: #fff;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  .modal-close {
    color: #fff;
    &:hover {
      color: #e1d9d1;
    }
  }

  .modal-content {
    padding: 0;
  }
`

export default StyledModal
