import { ReactComponent as CheckIcon } from '../icons/check.svg';
import { ReactComponent as CancelIcon } from '../icons/cancel.svg';

import './Icon.css';

export const Icon = ({ isConnect, ...props }) => {
  return (
    <div className="icon-button" {...props}>
      {isConnect ? <CheckIcon /> : <CancelIcon />}
    </div>
  );
};
